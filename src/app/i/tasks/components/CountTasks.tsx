import { CheckCircle } from 'lucide-react';
import { type FC } from 'react';

interface Props {
  count: number;
}

export const CountTasks: FC<Props> = ({ count }) => {
  return (
    <div className="mb-6 flex gap-1.5 items-center text-base opacity-50">
      <CheckCircle size={16} />
      <span className="ml-1">{count} tasks</span>
    </div>
  );
};
