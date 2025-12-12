import { KanbanSquare, Settings } from 'lucide-react';

import { DASHBOARD } from '@/config/pages.config';

import type { IMenuItem } from './menu.interface';

export const MENU: IMenuItem[] = [
  {
    icon: KanbanSquare,
    link: DASHBOARD.TASKS,
    name: 'Tasks',
  },
  {
    icon: Settings,
    link: DASHBOARD.SETTINGS,
    name: 'Settings',
  },
];
