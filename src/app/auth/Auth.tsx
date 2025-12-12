'use client';
import { Button } from '@/components/ui/buttons/Button';
import { Field } from '@/components/ui/fields/Field';
import { Heading } from '@/components/ui/Heading';
import { DASHBOARD } from '@/config/pages.config';
import { authService } from '@/services/auth.services';
import { type IAuthForm } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState, type FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const Auth: FC = () => {
  const { register, handleSubmit, reset } = useForm<IAuthForm>();
  const [isAuthForm, setIsAuthForm] = useState<boolean>(false);
  const { push } = useRouter();
  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthForm) => authService.main(isAuthForm ? 'login' : 'register', data),
    onSuccess() {
      toast.success(`Successfully ${isAuthForm ? 'logged in' : 'registered'}!`);
      reset();
      push(DASHBOARD.HOME);
    },
    onError(error: unknown) {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Authentication error';
      toast.error(errorMessage);
    },
  });
  const OnSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };
  return (
    <div className="flex min-h-screen">
      <form
        onSubmit={handleSubmit(OnSubmit)}
        className="w-1/4 m-auto shadow bg-border rounded-xl p-5">
        <Heading title="Authentication" />
        <Field
          id="email"
          label="Email"
          placeholder="Enter email"
          type="email"
          extra="mb-4"
          {...register('email', { required: true })}
        />
        <Field
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          extra="mb-6"
          {...register('password', { required: true })}
        />
        <div className="flex items-center justify-center gap-5">
          <Button onClick={() => setIsAuthForm(false)}>Register</Button>
          <Button onClick={() => setIsAuthForm(true)}>Login</Button>
        </div>
      </form>
    </div>
  );
};
