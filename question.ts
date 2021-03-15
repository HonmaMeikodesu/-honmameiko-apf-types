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
  commitLanguage: CommitLanguage,
}

export type CommitResult = "Wating In Line" | "Judging" | "AC" | "Compile Error" | "Runtime Error" | "Wrong Answer" | "Time Limit Exceeded" | "Memory Limit Exceeded" | "Judging Time Out" | "Unknown Error";

export type CommitLanguage = "Javascript" | "C++";

export interface PendingCommitResult {
  commitResult: "Wating In Line" | "Judging",
}

interface Result {
  commitResult: CommitResult;
}

export interface SuccessCommitResult extends Result {
  commitTimeConsume: number,
  commitStorageConsume: number,
}

interface Error extends Result {
  lastInputTest: string,
}

export interface CompileError extends Error {
  debuggerOutput: string,
}

export interface RuntimeError extends Error {
  exceptionOutput: string,
}

export interface WrongAnswerError extends Error {
  expectedOutput: string,
  actualOutput: string,
}

export interface TimeLimitError extends Error {
  maximalTimeConsume: number,
  actualTimeConsume: number,
}

export interface StorageLimitError extends Error {
  maximalStorageConsume: number,
  actualStorageConsume: number,
}

export interface JudgingError extends Error {
  judgingOutput: "超过了判题的最长时间,强制停止判题,请检查是否有死循环或无限递归",
}

export interface UnknownError extends Error {
  output: "OJ系统发生未知错误",
}

export type AllErrorResult = CompileError | RuntimeError | WrongAnswerError |  TimeLimitError | StorageLimitError | JudgingError | UnknownError;

export type AllResult = PendingCommitResult | SuccessCommitResult | AllErrorResult;