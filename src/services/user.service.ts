import { axiosWithAuth } from '@/api/interceptors';
import type { TypeUserForm } from '@/types/auth.types';
import type { IUser } from '@/types/user.types';

export interface IProfileResponse {
  user: IUser;
  statistics: {
    label: string;
    value: string;
  }[];
}

class UserService {
  private URL = '/user';
  async getProfile() {
    const response = await axiosWithAuth.get<IProfileResponse>(`${this.URL}/profile`);
    return response.data;
  }
  async update(data: TypeUserForm) {
    const response = await axiosWithAuth.put<IUser>(`${this.URL}/profile/update`, data);
    return response.data;
  }
}
export const userService = new UserService();
