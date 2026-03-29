import { cn } from '@/lib/utils';

type SparklineProps = {
    values: number[];
    className?: string;
    strokeClassName?: string;
};

export function Sparkline({
    values,
    className,
    strokeClassName,
}: SparklineProps) {
    if (values.length === 0) {
        return null;
    }

    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max - min || 1;
    const width = 180;
    const height = 64;

    const points = values
        .map((value, index) => {
            const x = (index / Math.max(values.length - 1, 1)) * width;
            const y = height - ((value - min) / span) * (height - 8) - 4;
            return `${x},${y}`;
        })
        .join(' ');

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            className={cn('h-16 w-full', className)}
            aria-hidden="true"
        >
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
                className={cn('text-primary', strokeClassName)}
            />
        </svg>
    );
}
