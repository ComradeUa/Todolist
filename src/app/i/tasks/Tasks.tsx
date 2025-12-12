'use client';
import { OpenTaskForm } from './components/OpenTaskForm';
import { Spinner } from '@/components/ui/spinner/Spinner';
import { TaskItem } from './components/TaskItem';
import { useUpdateTask } from '@/hooks/useUpdateTask';
import { useGetTasks } from '@/hooks/useGetTasks';
import { CountTasks } from './components/CountTasks';

export default function Tasks() {
  const { data, isLoading } = useGetTasks();
  const { mutate, tempoTasks, setTempoTasks } = useUpdateTask();
  const toggleTask = (id: string, isComplited: boolean) => {
    setTempoTasks((prev) => ({
      ...prev,
      [id]: !isComplited,
    }));
    mutate({ id, data: { isCompleted: !isComplited } });
  };

  const totalCount = data?.length || 0;

  return (
    <div>
      {!isLoading && <CountTasks count={totalCount} />}
      {isLoading ? (
        <Spinner />
      ) : (
        data?.map((task) => (
          <TaskItem
            key={task.id}
            isCompleted={tempoTasks[task.id] !== undefined ? tempoTasks[task.id] : task.isCompleted}
            task={task}
            toggleTask={() => toggleTask(task.id, task.isCompleted)}
          />
        ))
      )}
      <OpenTaskForm />
    </div>
  );
}
