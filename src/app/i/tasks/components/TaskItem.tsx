'use client';
import { COLORS } from '@/constants/color.constants';
import { type ITaskResponse } from '@/types/task.types';
import { Trash2, X } from 'lucide-react';
import { m } from 'motion/react';
import { type FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { EditTaskForm } from './EditTaskForm';
import { useDeleteTask } from '@/hooks/useDeleteTask';

interface TaskItemProps {
  task: ITaskResponse;
  isCompleted?: boolean;
  toggleTask: () => void;
}

export const TaskItem: FC<TaskItemProps> = ({ task, isCompleted, toggleTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { mutate: deleteTask } = useDeleteTask();

  if (isEditing) {
    return <EditTaskForm task={task} setIsEditing={setIsEditing} />;
  }

  return (
    <div className="flex gap-2.5 mb-6 items-center group">
      <button
        className="border border-solid border-border shadow h-5 w-5 rounded shrink-0"
        onClick={toggleTask}>
        {isCompleted && (
          <m.div
            initial={{ opacity: 0, scale: 0, rotate: 90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 90 }}
            transition={{ duration: 0.5 }}>
            <X size={19} color={COLORS.secondary}></X>
          </m.div>
        )}
      </button>
      <div className="flex items-center gap-2">
        <div
          className={twMerge('cursor-pointer', isCompleted && 'line-through opacity-75')}
          onClick={() => setIsEditing(true)}>
          {task.title}
        </div>
        <button
          className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-red-500 shrink-0"
          onClick={() => deleteTask(task.id)}>
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};
