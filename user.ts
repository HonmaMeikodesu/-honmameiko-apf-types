export type UserIdentity = "student" | "teacher";

export interface UnchangableInfo {
  account: string,
  identity: UserIdentity,
}

export interface UserBasicInfo extends UnchangableInfo {
  password: string,
}

export interface UserInfo extends UnchangableInfo {
  avatarUrl: string,
  ukey: string
}

export interface StudentInfo extends UserInfo {
  ability: number,
}

export interface TeacherInfo extends UserInfo {
}
