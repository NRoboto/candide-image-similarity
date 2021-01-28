## Scalability

The approach taken is easily scalable.
The code for getting relevant images (`src/utils/relevantImages.ts`) should be moved to a backend and retreived via an API, which will prevent the user from needing to download the data files. The JSON files are essentially static databases, these should be moved to actual databases to allow for adding images in a performant way.

### Finding Relevant Images

Finding relevant images requires iterating through the tags of the current image (approx. 10), finding the image's current score (`O(n)`), and iterating over all images with the same tags (`O(n)`). As the number of images increases, performance could be increased by only considering the top scores for each tag.

### Adding Images

Adding an image involves taking the API data and using the `genDataFiles.js` script to restructure it, the resulting `fileDescriptions.json` data can simply be appended to the existing data, whereas inserting the `tagScores.json` data involves inserting the score object into the correct place in the array for each tag (`O(n)`).

## Alternate Structure

An alternate approach to structuring this data would be to only use `fileDescriptions.json` and storing the scores for each tag with the tag e.g.

```json
{
  "1.jpg": {
    "title": "Flower",
    "tags": {
      "Flower": 0.998,
      "Flowering Plant": 0.985,
      ...
    }
  },
  ...
}
```

The relevancy score of an image would then be calculated by accessing the `tags` array for every other image, and then sum the score for each tag of the current image e.g.

```ts
const currImage = "1.jpg";
const currTags = Object.entries(fileDescriptions[currImage].tags);

const relevancyScores = Object.entries(fileDescriptions)
  .filter(([name]) => name !== currImage)
  .reduce(
    (scores, [name, { tags }]) => ({
      ...scores,
      [name]: currTags.reduce(
        (total, [tag, currScore]) => total + currScore * (tags[tag] ?? 0),
        0
      ),
    }),
    {} as { [K in FileName]?: number }
  );
```

This advantages of this approach are:

- Reduced amount of data stored in the database
- Allow the code to be a little cleaner due to all of the relevant data being stored together
- Slightly more performant for finding relevant images, as the current image's score doesn't need to be searched for
- Much more performant for adding more images, as all of the generated data can simply be appended to the current data

The disadvantage is that the `relevancyScores` object will contain an entry for every image file, which may not scale well on a server calling this function many times simultaneously. This approach also makes it more difficult to obtain a complete list of tags (as used by the `/tags` page).
