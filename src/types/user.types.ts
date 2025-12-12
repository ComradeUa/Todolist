export interface IUser {
  id: string;
  email: string;
  password: string;
  name?: string;
  workInterval?: number;
  breakInterval?: number;
  intervalsCount?: number;
}
