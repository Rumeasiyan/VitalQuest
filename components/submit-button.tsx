'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

type SubmitButtonProps = React.ComponentProps<typeof Button> & {
    idleLabel: string;
    pendingLabel: string;
};

export function SubmitButton({
    idleLabel,
    pendingLabel,
    ...props
}: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <Button {...props} disabled={pending || props.disabled}>
            {pending ? pendingLabel : idleLabel}
        </Button>
    );
}
