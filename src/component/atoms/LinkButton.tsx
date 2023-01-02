import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, { PropsWithChildren } from 'react';
import { styled } from '@mui/material';

const ExternalButton = styled(Button)({
    borderRadius: '100px',
    textTransform: 'none',
    padding: '8px 32px',
    backgroundColor: '#3f51b50f',
    marginTop: '8px',
    marginBottom: '16px'
});

interface LinkButtonProps {
    link?: string;
    startIcon?: React.ReactNode;
}

const LinkButton: ({
    link,
    startIcon,
    children,
    ...props
}: React.PropsWithChildren<LinkButtonProps>) => JSX.Element = ({
    link,
    startIcon,
    children,
    ...props
}: PropsWithChildren<LinkButtonProps>) => (
    <React.Fragment>
        <Link href={link} underline="none" rel={'noopener'} target={'_blank'} {...props}>
            <ExternalButton startIcon={startIcon}>{children}</ExternalButton>
        </Link>
    </React.Fragment>
);

export default LinkButton;
