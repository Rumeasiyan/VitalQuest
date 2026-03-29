import { AppShell } from '@/components/app-shell';
import { getTierLabel, requireViewer } from '@/lib/vitalquest';

export default async function ProtectedAppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const viewer = await requireViewer();

    return (
        <AppShell
            avatarName={viewer.profile?.avatarName ?? 'Astra'}
            tierLabel={getTierLabel(viewer.subscriptionTier)}
            level={viewer.profile?.level ?? 1}
            streakDays={viewer.profile?.streakDays ?? 0}
            guildName={viewer.guildMemberships[0]?.guild.name}
        >
            {children}
        </AppShell>
    );
}
