import { axiosClassic } from '@/api/interceptors';
import type { IAuthForm, IAuthResponse } from '@/types/auth.types';
import { authTokenService } from './auth-token';

class Auth {
  private URL = '/auth';
  async main(type: 'login' | 'register', data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>(`${this.URL}/${type}`, data);
    if (response.data.access_token) {
      authTokenService.saveAccessToken(response.data.access_token);
    }
    return response;
  }
  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(`${this.URL}/login/access-token`);
    if (response.data.access_token) {
      authTokenService.saveAccessToken(response.data.access_token);
    }
    return response;
  }
  async logout() {
    const response = await axiosClassic.post<boolean>(`${this.URL}/logout`);
    if (response.data) {
      authTokenService.removeAccessToken();
    }
    return response;
  }
}
export const authService = new Auth();
