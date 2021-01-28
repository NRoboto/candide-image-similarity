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

  // For each tag on the current image, get the other images with the same tag
  // get the other images scores for the tag, multiply them by the current image's
  // score. Add up these values for each image to get a relevance score
  const relevanceScores = tags.reduce((scores, tag) => {
    const currScore = tagScores[tag].find((tagScore) => tagScore.name === name)
      ?.score;
    if (!currScore)
      throw new Error("Invalid data files, regenerate with genDataFiles.js");

    return tagScores[tag].reduce((scores, imgScore) => {
      return {
        ...scores,
        [imgScore.name]:
          (scores[imgScore.name as FileName] ?? 0) + imgScore.score * currScore,
      };
    }, scores);
  }, {} as { [K in FileName]?: number });

  return Object.entries(relevanceScores)
    .filter(([key]) => key !== name)
    .sort(([, scoreA], [, scoreB]) => (scoreB ?? -1) - (scoreA ?? -1))
    .map(([name]) => name)
    .slice(0, count) as FileName[];
};
