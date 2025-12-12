export enum EnumTaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}
export interface ITaskResponse {
  id: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  priority?: EnumTaskPriority;
  isCompleted: boolean;
}
export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>;
