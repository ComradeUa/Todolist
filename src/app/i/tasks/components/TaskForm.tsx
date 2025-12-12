'use client';
import type { Dispatch, FC, SetStateAction } from 'react';
import { type TypeTaskFormState } from '@/types/task.types';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/buttons/Button';
import { useCreateTask } from '@/hooks/useCreateTask';

interface Props {
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
}

export const TaskForm: FC<Props> = ({ setIsFormOpen }) => {
  const { register, handleSubmit, reset } = useForm<TypeTaskFormState>({ mode: 'onChange' });
  const { mutate, isPending } = useCreateTask(() => {
    setIsFormOpen(false);
    reset();
  });
  const onSubmit: SubmitHandler<TypeTaskFormState> = (data) => {
    mutate(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-border p-[1.3rem] rounded w-full">
      <input
        type="text"
        placeholder="Task"
        {...register('title', { required: true })}
        className="bg-transparent w-full outline-none mb-3"
      />
      <div className="flex gap-2.5 justify-end">
        <Button type="submit" disabled={isPending}>
          Add Task
        </Button>
        <Button type="button" onClick={() => setIsFormOpen(false)}>
          Close
        </Button>
      </div>
    </form>
  );
};
