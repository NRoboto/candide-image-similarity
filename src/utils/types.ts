import fileDescriptions from "../data/fileDescriptions.json";
import tagScores from "../data/tagScores.json";

export type FileName = keyof typeof fileDescriptions;
export type TagName = keyof typeof tagScores;
