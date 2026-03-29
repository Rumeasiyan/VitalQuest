import { SignUp } from '@clerk/nextjs';
import { AuthShell } from '@/components/auth-shell';
import { authAppearance } from '@/lib/clerk-appearance';

export default function SignUpPage() {
    return (
        <AuthShell mode="sign-up">
            <SignUp
                path="/sign-up"
                routing="path"
                signInUrl="/sign-in"
                appearance={authAppearance}
            />
        </AuthShell>
    );
}
