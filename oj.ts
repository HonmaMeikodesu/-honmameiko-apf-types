import { CommitLanguage } from "./question";
import { UserIdentity } from "./user";

export interface toJudge extends judgeDataFromServer {
  language: CommitLanguage,
  code: string,
}

export interface judgeDataFromClient {
  identity: UserIdentity,
  account: string,
  qId: number,
  language: CommitLanguage,
  code: string,
}

export interface judgeDataFromServer {
  testSet: Array<[string, string]>,
  maxTime?: number,
  maxStorage?: number,
}

export interface AnswersSavedInRedis extends judgeDataFromClient, judgeDataFromServer {

}