import { axiosWithAuth } from '@/api/interceptors';
import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types';

class TaskService {
  private url = 'user/task';

  async createTask(data: TypeTaskFormState) {
    const response = await axiosWithAuth.post<ITaskResponse>(`${this.url}/create`, data);
    return response.data;
  }
  async getTasks() {
    const response = await axiosWithAuth.get<ITaskResponse[]>(`${this.url}/get-tasks`);
    return response.data;
  }
  async updateTask(id: string, data: TypeTaskFormState) {
    const response = await axiosWithAuth.put<TypeTaskFormState>(`${this.url}/update/${id}`, data);
    return response.data;
  }
  async deleteTask(id: string) {
    const response = await axiosWithAuth.delete<boolean>(`${this.url}/delete/${id}`);
    return response.data;
  }
}

export const taskService = new TaskService();
