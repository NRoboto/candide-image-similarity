import fileDescriptions from "../data/fileDescriptions.json";
import tagScores from "../data/tagScores.json";
import { FileName, TagName } from "./types";

export const isFileName = (name: string): name is FileName =>
  !!fileDescriptions[name as FileName];

export const isTagName = (tag: string): tag is TagName =>
  !!tagScores[tag as TagName];
