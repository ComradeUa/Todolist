import { taskService } from '@/services/task.service';
import { type TypeTaskFormState } from '@/types/task.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateTask = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, reset } = useMutation({
    mutationKey: ['create-task'],
    mutationFn: (data: TypeTaskFormState) => taskService.createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      reset();
      onSuccessCallback?.();
    },
  });
  return { mutate, isPending };
};
