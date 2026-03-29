export const authAppearance = {
    elements: {
        rootBox: 'w-full',
        card: 'w-full rounded-[28px] border border-border bg-card p-6 shadow-none',
        headerTitle: 'text-2xl font-semibold tracking-tight text-foreground',
        headerSubtitle: 'text-sm leading-6 text-muted-foreground',
        socialButtonsBlockButton:
            'rounded-2xl border border-border bg-background text-sm text-foreground shadow-none hover:bg-muted',
        formButtonPrimary:
            'rounded-2xl bg-primary text-primary-foreground shadow-none hover:bg-primary/90',
        formFieldInput:
            'rounded-2xl border border-input bg-background px-4 py-3 text-sm shadow-none',
        footerActionLink: 'font-semibold text-primary hover:text-primary/80',
        formFieldLabel: 'text-sm font-medium text-foreground',
    },
} as const;
