import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin'],
});

const fraunces = Fraunces({
    variable: '--font-fraunces',
    subsets: ['latin'],
});

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
                <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up">
                    {children}
                </ClerkProvider>
            </body>
        </html>
    );
}
