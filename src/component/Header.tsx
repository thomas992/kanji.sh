import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { logEvent } from '../firebase';
import Spacer from './atoms/Spacer';
import DonateButton from './atoms/DonateButton';
import HeaderNav from './molecules/HeaderNav';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.dark,
        clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
    },
    appBar: {},
    toolbar: {
        alignItems: 'center',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            paddingBottom: theme.spacing(8),
            alignItems: 'center'
        }
    },
    title: {
        flexGrow: 1,
        alignSelf: 'center',
        userSelect: 'none',
        color: theme.palette.common.white,
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: 700,
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        }
    },
    titleLink: {
        display: 'contents',
        textTransform: 'none',
        userSelect: 'none',
        msUserSelect: 'none',
        textDecoration: 'none'
    },
    navLink: {
        textTransform: 'none',
        textDecoration: 'none',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        fontWeight: 500
    }
}));

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appBar}
                position="static"
                color={'transparent'}
                elevation={0}>
                <Container>
                    <Toolbar className={classes.toolbar}>
                        <div>
                            <Link legacyBehavior href={'/'}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                                <a
                                    className={classes.navLink}
                                    onClick={() => logEvent(/*'navigation', { path: 'home' }*/)}>
                                    <Typography className={classes.title} variant="h3">
                                        kanji.sh
                                    </Typography>
                                </a>
                            </Link>
                        </div>

                        <Spacer />

                        <div>
                            <HeaderNav href={'/read'} eventPath={'read'}>
                                read
                            </HeaderNav>
                            <HeaderNav href={'/write'} eventPath={'write'}>
                                write
                            </HeaderNav>
                            <HeaderNav href={'/about'} eventPath={'about'}>
                                about
                            </HeaderNav>

                            <DonateButton />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;
