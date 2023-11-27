import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://ceas.uc.edu",
  match: "https://ceas.uc.edu/**/*.html",
  maxPagesToCrawl: 1000,
  selector: "#content",
  outputFileName: "output.json",
};
