import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type BrandLogoProps = {
    href?: string;
    className?: string;
    labelClassName?: string;
    theme?: 'light' | 'dark';
    compact?: boolean;
};

export function BrandLogo({
    href = '/',
    className,
    labelClassName,
    theme = 'light',
    compact = false,
}: BrandLogoProps) {
    const content = (
        <span className={cn('flex items-center gap-3', className)}>
            <span
                className={cn(
                    'flex items-center justify-center rounded-2xl border',
                    theme === 'dark'
                        ? 'border-white/10 bg-white'
                        : 'border-border bg-card',
                    compact ? 'size-11 p-1.5' : 'size-12 p-1.5',
                )}
            >
                <Image
                    src="/logo.png"
                    alt="VitalQuest logo"
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                    priority
                />
            </span>
            {!compact ? (
                <span className={labelClassName}>
                    <span
                        className={cn(
                            'block text-[0.68rem] font-semibold uppercase tracking-[0.3em]',
                            theme === 'dark'
                                ? 'text-white/58'
                                : 'text-muted-foreground',
                        )}
                    >
                        VitalQuest
                    </span>
                    <span
                        className={cn(
                            'block text-lg font-semibold',
                            theme === 'dark' ? 'text-white' : 'text-foreground',
                        )}
                    >
                        Wellness Platform
                    </span>
                </span>
            ) : null}
        </span>
    );

    return (
        <Link href={href} className="inline-flex items-center">
            {content}
        </Link>
    );
}
