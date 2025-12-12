import { taskService } from '@/services/task.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ['delete-task'],
    mutationFn: (taskId: string) => taskService.deleteTask(taskId),
    onSuccess: () => {
      toast.success('Task deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
  return { mutate, isPending };
};
