import React from 'react';
import { createStyles, Theme } from '@mui/material/styles';
import Header from './component/Header';
import Footer from './component/Footer';
import Container from '@mui/material/Container';
import { ClassNameMap, StyleRules, WithStyles, withStyles } from '@mui/styles';

const styles = (theme: Theme): StyleRules =>
    createStyles({
        root: {
            flexGrow: 1,
            minHeight: '100%',
            position: 'relative'
        },
        spacedContainer: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(18)
        }
    });

export const PageLayout: React.FC<WithStyles<typeof styles>> = (props: {
    classes: ClassNameMap;
    children?: JSX.Element[];
}) => {
    const { classes, children } = props;
    return (
        <div className={classes.root}>
            <Header />
            <Container className={classes.spacedContainer}>
                <div>{children}</div>
            </Container>
            <Footer />
        </div>
    );
};

export default withStyles(styles)(PageLayout);
