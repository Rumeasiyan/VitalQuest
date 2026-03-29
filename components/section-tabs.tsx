'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type TabItem = {
    href: string;
    label: string;
};

type SectionTabsProps = {
    items: TabItem[];
    className?: string;
};

export function SectionTabs({ items, className }: SectionTabsProps) {
    const pathname = usePathname();

    return (
        <nav
            className={cn(
                'flex flex-wrap gap-2 rounded-3xl border bg-card p-2',
                className,
            )}
        >
            {items.map((item) => {
                const active =
                    pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            'rounded-2xl px-4 py-2 text-sm font-medium',
                            active
                                ? 'bg-primary text-primary-foreground'
                                : 'text-muted-foreground hover:bg-muted',
                        )}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}
