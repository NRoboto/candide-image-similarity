import fileDescriptions from "../data/fileDescriptions.json";
import { FileName } from "./types";

export const isFileName = (name: string): name is FileName =>
  !!fileDescriptions[name as FileName];
