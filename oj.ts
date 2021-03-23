import { CommitLanguage } from "./question";

export interface toJudge {
  language: CommitLanguage,
  code: string,
  testSet: Array<[string, string]>,
  maxTime?: number,
  maxStorage?: number,
}