'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { MoonStar, SunMedium } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Theme = 'dark' | 'light';

const defaultThemeMode = process.env.NEXT_PUBLIC_THEME_MODE ?? 'light';
const enableThemeToggle = process.env.NEXT_PUBLIC_ENABLE_THEME_TOGGLE !== 'false';

function applyTheme(theme: Theme) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new CustomEvent('themechange'));
}

function resolveTheme(): Theme {
    const storedTheme = enableThemeToggle ? localStorage.getItem('theme') : null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

    if (defaultThemeMode === 'dark') {
        return 'dark';
    }

    if (defaultThemeMode === 'system') {
        return storedTheme === 'light' || storedTheme === 'dark'
            ? storedTheme
            : systemTheme;
    }

    return storedTheme === 'light' || storedTheme === 'dark'
        ? storedTheme
        : 'light';
}

function subscribe(onStoreChange: () => void) {
    if (typeof window === 'undefined') {
        return () => {};
    }

    const handleChange = () => onStoreChange();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    window.addEventListener('themechange', handleChange);
    window.addEventListener('storage', handleChange);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
        window.removeEventListener('themechange', handleChange);
        window.removeEventListener('storage', handleChange);
        mediaQuery.removeEventListener('change', handleChange);
    };
}

function getThemeSnapshot(): Theme {
    if (typeof document === 'undefined') {
        return 'light';
    }

    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function ThemeToggle() {
    const mounted = useSyncExternalStore(subscribe, () => true, () => false);
    const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => 'light');

    useEffect(() => {
        if (getThemeSnapshot() !== resolveTheme()) {
            applyTheme(resolveTheme());
        }
    }, []);

    function toggleTheme() {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    }

    if (!enableThemeToggle) {
        return null;
    }

    if (!mounted) {
        return null;
    }

    return (
        <Button
            type="button"
            onClick={toggleTheme}
            variant="outline"
            size="icon-lg"
            className="size-10"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
            {theme === 'light' ? (
                <MoonStar className="size-4" />
            ) : (
                <SunMedium className="size-4" />
            )}
        </Button>
    );
}
