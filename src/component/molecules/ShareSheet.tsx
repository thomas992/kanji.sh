import { Facebook, Reddit, Twitter } from '@mui/icons-material';
import React from 'react';
import { styled } from '@mui/material';
import LinkButton from '../atoms/LinkButton';

const SocialButton = styled(LinkButton)(({ theme }) => ({
    marginRight: theme.spacing(2)
}));

const ShareSheet: React.FC = () => {
    /* TODO: Add Copy to Clipboard Button */
    return (
        <div>
            <SocialButton
                startIcon={<Twitter />}
                link={
                    'https://twitter.com/intent/tweet/?text=Check%20this%20awesome%20website%20to%20practice%20Japanese%20Kanji.&amp;url=https%3A%2F%2Fkanji.sh'
                }>
                Twitter
            </SocialButton>
            <SocialButton
                startIcon={<Facebook />}
                link={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkanji.sh'}>
                Facebook
            </SocialButton>
            <SocialButton
                startIcon={<Reddit />}
                link={
                    'https://reddit.com/submit/?url=https%3A%2F%2Fkanji.sh&amp;resubmit=true&amp;title=Check%20this%20awesome%20website%20to%20practice%20Japanese%20Kanji.'
                }>
                Reddit
            </SocialButton>
        </div>
    );
};

export default ShareSheet;
