export interface UserInterface {
  username: string;
  password: string;
  admin?: boolean;
  crypto?: boolean;
  token?: string;
}

export interface UserActionInterface {
  user: UserInterface;
  type: string;
}
export interface UserRegisterInterface extends UserInterface {
  name: string;
}
