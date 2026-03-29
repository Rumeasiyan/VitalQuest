import { cn } from '@/lib/utils';

type StatusPillProps = {
    children: React.ReactNode;
    tone?: 'neutral' | 'success' | 'accent' | 'warning';
    className?: string;
};

const toneStyles: Record<NonNullable<StatusPillProps['tone']>, string> = {
    neutral: 'bg-muted text-muted-foreground border-border',
    success: 'bg-secondary text-primary border-secondary',
    accent: 'bg-primary/10 text-primary border-primary/15',
    warning: 'bg-accent/25 text-accent-foreground border-accent/40',
};

export function StatusPill({
    children,
    tone = 'neutral',
    className,
}: StatusPillProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide',
                toneStyles[tone],
                className,
            )}
        >
            {children}
        </span>
    );
}
