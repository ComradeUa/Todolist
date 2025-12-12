import { type FC } from 'react';
import Link from 'next/link';
import { GanttChartSquare } from 'lucide-react';
import { COLORS } from '@/constants/color.constants';
import { LogoutButton } from './LogoutButton';
import { MENU } from './menu.data';
export const Sidebar: FC = () => {
  return (
    <aside className="border-r border-r-border h-full bg-sidebar flex flex-col justify-baseline">
      <div>
        <Link href="/" className="flex items-center gap-2.5 p-[1.4rem] border-b border-b-border">
          <GanttChartSquare size={38} color={COLORS.primary} />
          <span className="text-2xl font-bold relative">Todolist</span>
        </Link>
        <div className="p-3 relative">
          <LogoutButton />
          {MENU.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
              <item.icon />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
