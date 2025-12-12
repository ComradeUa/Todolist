'use client';
import { Button } from '@/components/ui/buttons/Button';
import { Field } from '@/components/ui/fields/Field';
import { useInitialData } from '@/hooks/useInitialData';
import { useUpdateProfile } from '@/hooks/useUpdateProfile';
import { TypeUserForm } from '@/types/auth.types';
import { type SubmitHandler, useForm } from 'react-hook-form';

export default function Settings() {
  const { handleSubmit, register, reset } = useForm<TypeUserForm>({ mode: 'onChange' });
  const { isPending, mutate } = useUpdateProfile();
  useInitialData(reset);
  const onSumbit: SubmitHandler<TypeUserForm> = (data) => {
    const { password, ...rest } = data;
    mutate({
      ...rest,
      password: password || undefined,
    });
  };

  return (
    <div>
      <form className="w-2/4" onSubmit={handleSubmit(onSumbit)}>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <Field
              id="email"
              label="Email"
              placeholder="Enter email:"
              type="email"
              {...register('email', { required: 'Email is required' })}
              extra="mb-4"
            />
            <Field
              id="name"
              label="Name"
              placeholder="Enter name:"
              type="text"
              {...register('name')}
              extra="mb-4"
            />
            <Field
              id="password"
              label="Password"
              placeholder="Enter new password:"
              type="password"
              {...register('password')}
              extra="mb-10"
            />
          </div>
          <div>
            <Field
              id="breakInterval"
              label="Break Interval (min.)"
              placeholder="Enter break interval (min.):"
              type="number"
              {...register('breakInterval', { valueAsNumber: true })}
              extra="mb-4"
            />
            <Field
              id="workInterval"
              label="Work Interval (min.)"
              placeholder="Enter work interval (min.):"
              type="number"
              {...register('workInterval', { valueAsNumber: true })}
              extra="mb-4"
            />
            <Field
              id="intervalsCount"
              label="Intervals Count"
              placeholder="Enter intervals count:"
              type="number"
              {...register('intervalsCount', { valueAsNumber: true })}
              extra="mb-10"
            />
          </div>
        </div>
        <Button type="submit" disabled={isPending}>
          Save
        </Button>
      </form>
    </div>
  );
}
