export type QStatus = "WT" | "NAC" | "AC";
// Wait for trial, not accepet, accpet

export interface QuestionBrief {
  qId: number,
  qTitle: string,
  qTrial: number,
  qAc: number,
  qDifficulty: number,
  qUploadTime: string,
  qStatus?: QStatus,
  qHasSolve: boolean,
}

export interface QuestionDetail extends QuestionBrief {
  qDescription: string,
  qInput: string,
  qOutput: string,
  qSampleInput: string,
  qSampleOutput: string,
  qHint?: string,
  qMaxStorage?: number, // 单位为Byte
  qMaxTime?: number, // 单位为ms
}

export interface uploadQuestion {
  qId: number,
  qTitle: string,
  qDifficulty: number,
  qHasSolve: boolean,
  qDescription: string,
  qInput: string,
  qOutput: string,
  qSampleInput: string,
  qSampleOutput: string,
  qHint?: string,
  qSolve?: string,
  qTestSet: Array<[string, string]>,
  qMaxStorage?: number, // 单位为Byte
  qMaxTime?: number, // 单位为ms
}

export interface QuestionFilter<T> {
  filterKind: string,
  filterValue: T,
}

export interface CommitHistory {
  commitTime: string,
  commitResult: CommitResult,
  commitTimeConsume: number, // ms为单位
  commitStorageConsume: number, // Byte为单位
  commitLanguage: string,
}

export type CommitResult = "Wating In Line" | "Judging" | "AC" | "Compile Error" | "Runtime Error" | "Wrong Answer" | "Time Limit Exceeded" | "Memory Limit Exceeded" | "Judging Time Out" | "Unknown Error";