'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Activity,
    BookOpen,
    ChartColumn,
    Compass,
    Settings2,
    ShieldCheck,
    Sparkles,
    UserRound,
    UsersRound,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Compass },
    { href: '/quests', label: 'Quests', icon: Sparkles },
    { href: '/bio-sync', label: 'Bio-Sync', icon: ShieldCheck },
    { href: '/story', label: 'Story', icon: BookOpen },
    { href: '/community', label: 'Community', icon: UsersRound },
    { href: '/analytics', label: 'Analytics', icon: ChartColumn },
    { href: '/profile', label: 'Profile', icon: UserRound },
    { href: '/onboarding', label: 'Onboarding', icon: Sparkles },
    { href: '/pricing', label: 'Pricing', icon: Activity },
    { href: '/settings', label: 'Settings', icon: Settings2 },
];

export function AppNavigation() {
    const pathname = usePathname();

    return (
        <>
            <nav className="hidden lg:block">
                <div className="space-y-1">
                    {navItems.map(({ href, label, icon: Icon }) => {
                        const active =
                            pathname === href || pathname.startsWith(`${href}/`);

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    'flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium',
                                    active
                                        ? 'bg-sidebar-accent text-sidebar-foreground'
                                        : 'text-sidebar-foreground/72 hover:bg-sidebar-accent/70 hover:text-sidebar-foreground',
                                )}
                            >
                                <span className="flex items-center gap-3">
                                    <Icon className="size-4" />
                                    {label}
                                </span>
                                {active ? (
                                    <span className="size-2 rounded-full bg-sidebar-primary" />
                                ) : null}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <nav className="-mx-1 flex gap-2 overflow-x-auto px-1 py-1 lg:hidden">
                {navItems.map(({ href, label, icon: Icon }) => {
                    const active =
                        pathname === href || pathname.startsWith(`${href}/`);

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                'inline-flex min-w-max items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium',
                                active
                                    ? 'border-primary bg-primary text-primary-foreground'
                                    : 'border-border bg-card text-muted-foreground',
                            )}
                        >
                            <Icon className="size-4" />
                            {label}
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
