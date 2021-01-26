const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

/**
 * Generates fileDescriptions.json and tagScores.json files from a Google Cloud Vision API Dataset
 * Should be called from the terminal using `node genDataFiles.js file.json` where file is the dataset in JSON format
 */
(function genDataFiles() {
  if (process.argv[2] === "--help" || process.argv[2] == "-h")
    return console.log(
      "Provide an argument of the path to a dataset from the Google Cloud Vision API"
    );

  const fileName = process.argv[2];

  try {
    const rawData = readFileSync(fileName).toString();
    const jsonData = JSON.parse(rawData);
    const imgNames = Object.keys(jsonData);

    /**
     * An object containing information about each image
     * Each image has a title, description, and list of tags as matched by the API
     * e.g. { "1.jpg": { title: Flower, description: null, tags: [ Flower, ... ] }, ... }
     */
    const fileDescriptions = imgNames.reduce((descriptions, name) => {
      const imgRelevancies = jsonData[name];
      const tags = imgRelevancies.map((item) => item.description);

      return {
        ...descriptions,
        [name]: {
          title: imgRelevancies[0].description, // Use top match as title, can be changed to give each image a title
          description: null, // Space to add image description
          tags,
        },
      };
    }, {});

    /**
     * An object consisting of tags with each image's score
     * Each tag has an array consisting of objects, each with an image name and it's relevancy for the tag
     * e.g. { Flower: [ { name: "1.jpg", score: 0.996 }, ... ], ... }
     */
    const tagScores = {};
    imgNames.forEach((name) => {
      jsonData[name].forEach(({ description: tag, score }) => {
        if (!tagScores[tag]) tagScores[tag] = [];
        tagScores[tag].push({ name, score });
      });
    });

    // Sort each tag array by score, from highest to lowest
    Object.keys(tagScores).forEach((tag) => {
      tagScores[tag] = tagScores[tag].sort((a, b) => b.score - a.score);
    });

    // Write to disk
    writeFileSync(
      path.join(__dirname, "fileDescriptions.json"),
      JSON.stringify(fileDescriptions)
    );
    writeFileSync(
      path.join(__dirname, "tagScores.json"),
      JSON.stringify(tagScores)
    );
  } catch (e) {
    console.error(e); // Should probably do better error handling
  }
})();
