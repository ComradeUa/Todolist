'use client';
import { PlusSquare } from 'lucide-react';
import { type FC, useState } from 'react';
import { TaskForm } from './TaskForm';

export const OpenTaskForm: FC = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <div>
      {!isFormOpen ? (
        <button className="flex gap-2 items-center group" onClick={() => setIsFormOpen(true)}>
          <PlusSquare className="text-primary" />
          <span className="text-border transition-colors group-hover:text-primary">Add task</span>
        </button>
      ) : (
        <TaskForm setIsFormOpen={setIsFormOpen} />
      )}
    </div>
  );
};
