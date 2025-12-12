import { type LucideIcon } from 'lucide-react';
import { type FC, type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  icon: LucideIcon;
  label?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantStyles = {
  primary: 'bg-primary/20 text-primary border-primary/30',
  secondary: 'bg-secondary/20 text-secondary border-secondary/30',
  success: 'bg-green-500/20 text-green-500 border-green-500/30',
  danger: 'bg-red-500/20 text-red-500 border-red-500/30',
  warning: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
};

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  icon: Icon,
  label,
  children,
  variant = 'primary',
  className,
}) => {
  return (
    <span
      className={twMerge(
        'inline-flex items-center rounded-full border font-medium transition-colors px-3 py-1.5 gap-1.5 text-sm',
        variantStyles[variant],
        className,
      )}>
      <Icon size={16} />
      <span>{children || label}</span>
    </span>
  );
};
