import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Fraunces, Manrope } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin'],
});

const fraunces = Fraunces({
    variable: '--font-fraunces',
    subsets: ['latin'],
});

const themeMode = process.env.NEXT_PUBLIC_THEME_MODE ?? 'light';
const enableThemeToggle = process.env.NEXT_PUBLIC_ENABLE_THEME_TOGGLE !== 'false';

export const metadata: Metadata = {
    title: 'VitalQuest',
    description:
        'A deployable wellness platform that blends verified habits, quest progression, analytics, and community accountability.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${manrope.variable} ${fraunces.variable}`}
        >
            <body suppressHydrationWarning>
                <Script
                    id="theme-init"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(() => {
  const mode = ${JSON.stringify(themeMode)};
  const allowToggle = ${JSON.stringify(enableThemeToggle)};
  const storedTheme = allowToggle ? localStorage.getItem('theme') : null;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme =
    mode === 'dark'
      ? 'dark'
      : mode === 'system'
        ? (storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : systemTheme)
        : (storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'light');
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
})();`,
                    }}
                />
                <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up">
                    {children}
                </ClerkProvider>
            </body>
        </html>
    );
}
