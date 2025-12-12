import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { ENUM_AUTH_TOKEN_TYPE } from '@/services/auth-token';
import { DASHBOARD } from '@/config/pages.config';

export default async function Home() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get(ENUM_AUTH_TOKEN_TYPE.REFRESH_TOKEN)?.value;

  if (refreshToken) {
    redirect(DASHBOARD.TASKS);
  }

  redirect('/auth');
}
