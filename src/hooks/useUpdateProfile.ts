import { userService } from '@/services/user.service';
import { type TypeUserForm } from '@/types/auth.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ['update-profile'],
    mutationFn: (data: TypeUserForm) => userService.update(data),
    onSuccess: () => {
      toast.success('Profile updated successfully');
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
  return { mutate, isPending };
};
