import React from 'react';
import PageLayout from '../../src/PageLayout';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ConstructionAnimation } from '../../src/component/atoms/AnimatedImage';
import Spacer from '../../src/component/atoms/Spacer';
import SubscriptionForm from '../../src/component/molecules/SubscriptionForm';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1
    },
    imageContainer: {
        textAlign: 'center',
        alignSelf: 'center'
    },
    image: {
        width: '100%'
    },
    centerText: {
        textAlign: 'center'
    },
    textField: {
        width: '100%'
    },
    buttonContainer: {
        textAlign: 'center'
    },
    roundButton: {
        borderRadius: theme.spacing(16),
        textTransform: 'none'
    }
}));

const ReadPage: React.FC = () => {
    const classes = useStyles();
    return (
        <PageLayout>
            <Grid
                container
                direction={'column'}
                alignItems={'stretch'}
                spacing={5}
                justifyContent={'center'}>
                <Grid item xs={12} className={classes.centerText}>
                    <Typography variant={'h3'}>Ooops!</Typography>
                </Grid>
                <Grid item className={classes.imageContainer} xs={12} sm={8} md={6}>
                    <ConstructionAnimation className={classes.image} />
                </Grid>
                <Grid item xs={12} className={classes.centerText}>
                    <Typography variant={'subtitle1'}>
                        I haven&apos;t started adding reading sessions yet.
                    </Typography>
                    <Typography variant={'subtitle1'}>
                        If you would like it, signup for the updates. No spams, I promise!
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.buttonContainer}>
                    <SubscriptionForm />
                </Grid>
            </Grid>
            <Spacer space={3} />
        </PageLayout>
    );
};

export default ReadPage;
