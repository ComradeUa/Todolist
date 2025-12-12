import { taskService } from '@/services/task.service';
import { TypeTaskFormState, type ITaskResponse } from '@/types/task.types';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useGetTasks } from './useGetTasks';

export const useUpdateTask = () => {
  const { refetch } = useGetTasks();
  const [tempoTasks, setTempoTasks] = useState<Record<string, boolean>>({});
  const { mutate } = useMutation({
    mutationKey: ['update-task'],
    mutationFn: ({ id, data }: { id: string; data: TypeTaskFormState }) =>
      taskService.updateTask(id, data),
    onError: (_, variables) => {
      setTempoTasks((prev) => ({
        ...prev,
        [variables.id]: !prev[variables.id],
      }));
    },
    onSuccess: () => refetch(),
  });
  return { mutate, tempoTasks, setTempoTasks };
};
