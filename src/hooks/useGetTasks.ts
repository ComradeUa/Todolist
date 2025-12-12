import { taskService } from '@/services/task.service';
import { useQuery } from '@tanstack/react-query';

export const useGetTasks = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => taskService.getTasks(),
  });
  return { data, isLoading, refetch };
};
