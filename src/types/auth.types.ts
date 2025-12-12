import { type IUser } from './user.types';

export interface IAuthForm {
  email: string;
  password: string;
}
export interface IAuthResponse {
  access_token: string;
  user: IUser;
}
export type TypeUserForm = Omit<IUser, 'id' | 'password'> & { password?: string };
