export interface User {
  id?: string;  // 账户ID
  email: string;  // 邮件
  username: string; // 用户真实姓名
  password?: string;
  account: string;  // 账户
  position: string; // 所在岗位名称
  positionCode: string; // 岗位编码吧
  telephone?: string; // 座机 联系方式
  mobile?: string; //  手机联系方式
  region: string;  // 所在地域
  rights?: Map<string, boolean>;  // 权限字典

}
