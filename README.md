# Candide Image Similarity Algorithm

This is an algorithm for finding similar images using data from the Google Cloud Vision API, along with a React frontend. A live version is available [here](#).

For each image, similar images are shown on either side (or in a column below on mobile devices). Clicking a similar image navigates to that image's page, clicking the center image makes it go fullscreen.

## How to Use

Install dependencies with

```
npm install
```

And run with

```
npm start
```

To generate the correctly formated files, place the Google Cloud Vision API data into `src/data` and run

```
node genDataFiles.js filename.json
```

Two files will be produces: `fileDescriptions.json` and `tagScores.json`

## Explanation

### Structure

The Google Cloud Vision API data is restructured into two files

#### fileDescriptions.json

This file contains an object that maps each image file to the tags applied to it, extra metadata can also be included here (by default the title of the image is taken as the most relevant tag, and a `null` description is added) e.g.

```json
{
  "1.jpg": {
    "title": "Flower",
    "description": null,
    "tags": [
      "Flower",
      "Flowering plant",
      ...
    ]
  },
  ...
}
```

Tags are taken from the `description` property of the raw data, and are listed in order of relevance.

#### tagScores.json

This file maps each tag to the images that the tag applies to, along with their relevancy score e.g.

```json
{
  "Flower": [
    {
      "name": "1.jpg",
      "score": 0.9955990314483643
    },
    ...
  ],
  ...
}
```

### Getting relevant images

To get relevant images for the current image, each tag applied to the current image is used to find other images with the same tag. Each of these other images then has their score for the tag multiplied by the current images score for that same tag. The sum of these values for each image are then taken as the measure of how relevant the image is to the current image.

The scores are multiplied so that both the tag's relevance to the current image, and the tag's relevance to the other image, are both taken into account. If the tag isn't very relevant to one (or both) of the images, then it doesn't tell much about how similar the images are.

The scores are summed so that, in general, images that share many tag will be more relevant than images which share fewer tags.

#### Example

`a.jpg` has the tags `Flower` with score `0.9`, `Plant` with score `0.8`, and `Purple` with score `0.8`.
`b.jpg` has the tags `Flower` with score `0.8`, `Plant` with score `0.1`, and `Green` with score `0.5`.

The relevance will be calculated by multiplying the scores for each tag they both have, then summing:

```text
Flower: 0.9 * 0.8 = 0.72
Plant: 0.8 * 0.1 = 0.08

Relevance: 0.72 + 0.08 = 0.8
```

The colour tags contribute nothing as they aren't shared between the images. `Plant` contributes little due to `b.jpg` not matching well to this tag. `Flower` is very significant as this tag applies well to both images.
