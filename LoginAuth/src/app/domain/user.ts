/**
 *  用户的基本信息
 */
export enum IndentityType {
  IdCard = 0 ,
  Insurance,
  Passport,
  Military,
  Other
}
//  地址
export interface Address {
  id?: number;
  province: string;
  city: string;
  district: string;
  street: string;
}
// 身份验证信息
export interface Identity {
  identityNo: string;
  identityType: IndentityType;
}
//  用户基本信息
export interface User {
  id?: string;
  email: string;
  name?: string;
  password: string;
  avatar: string;
  projectIds?: string[];
  address?: Address;
  dateOfBirth?: string;
  identity: Identity;

}
