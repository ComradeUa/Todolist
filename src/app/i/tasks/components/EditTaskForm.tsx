'use client';
import type { Dispatch, FC, SetStateAction } from 'react';
import { type ITaskResponse, type TypeTaskFormState } from '@/types/task.types';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/buttons/Button';
import { useUpdateTask } from '@/hooks/useUpdateTask';

interface Props {
  task: ITaskResponse;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

export const EditTaskForm: FC<Props> = ({ task, setIsEditing }) => {
  const { register, handleSubmit } = useForm<TypeTaskFormState>({
    mode: 'onChange',
    defaultValues: {
      title: task.title,
    },
  });
  const { mutate } = useUpdateTask();
  const onSubmit: SubmitHandler<TypeTaskFormState> = (data) => {
    mutate({ id: task.id, data });
    setIsEditing(false);
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
        <Button type="submit">Save</Button>
        <Button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
