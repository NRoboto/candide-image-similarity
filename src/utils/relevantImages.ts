import fileDescriptions from "../data/fileDescriptions.json";
import tagScores from "../data/tagScores.json";

import type { FileName, TagName } from "./types";

/**
 * Gets images relevant to a given image
 * @param name The name of the given image
 * @param count The number of relevant images to find
 * @returns An array of relevant image names, sorted by relevance
 */
export const getRelevantImages = (name: FileName, count: number = 10) => {
  const tags = fileDescriptions[name].tags as TagName[];

  const relevanceScores: { [K in FileName]?: number } = {};

  // For each tag on the current image, get the other images with the same tag
  // get the other images scores for the tag, multiply them by the current image's
  // score. Add up these values for each image to get a relevance score
  tags.forEach((tag) => {
    const currScore = tagScores[tag].find((tagScore) => tagScore.name === name)
      ?.score;
    if (!currScore)
      throw new Error("Invalid data files, regenerate with genDataFiles.js");

    tagScores[tag].forEach((imgScore) => {
      const imgName = imgScore.name as FileName;
      relevanceScores[imgName] =
        (relevanceScores[imgName] ?? 0) + imgScore.score * currScore;
    });
  });

  return Object.entries(relevanceScores)
    .sort((a, b) => (b[1] ?? -1) - (a[1] ?? -1))
    .map(([name]) => name)
    .slice(0, count) as FileName[];
};
