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
}

export interface QuestionFilter<T> {
  filterKind: string,
  filterValue: T,
}

export interface CommitHistory {
  commitTime: string,
  commitResult: string,
  commitTimeConsume: number, // ms为单位
  commitStorageConsume: number, // Byte为单位
  commitLanguage: string,
}
