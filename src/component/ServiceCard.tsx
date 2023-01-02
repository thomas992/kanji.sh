import React from 'react';
import { createStyles, Theme } from '@mui/material';
import { StyleRules, WithStyles, withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const styles = (theme: Theme): StyleRules =>
    createStyles({
        root: {
            flexGrow: 1,
            minHeight: theme.spacing(50),
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4)
        },
        rootCard: {
            minHeight: 'inherit',
            borderRadius: theme.spacing(4)
        },
        imageBox: {
            padding: theme.spacing(3)
        },
        textBoxEnd: {
            minHeight: 'inherit',
            background: 'linear-gradient(0deg, rgba(55,60,129,1) 0%, rgba(62,42,144,1) 100%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)',
            [theme.breakpoints.down('xs')]: {
                clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0% 100%)'
            }
        },
        textBoxStart: {
            minHeight: 'inherit',
            background: 'linear-gradient(0deg, rgba(42,77,144,1) 0%, rgba(26,33,129,1) 100%)',
            clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0 100%)',
            [theme.breakpoints.down('xs')]: {
                clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0% 100%)'
            }
        },
        textContainerStart: {
            height: '100%',
            paddingEnd: '20%',
            paddingStart: '10%',
            textAlign: 'start',
            [theme.breakpoints.down('xs')]: {
                textAlign: 'end',
                paddingEnd: '10%',
                paddingStart: '10%'
            }
        },
        textContainerEnd: {
            height: '100%',
            paddingEnd: '10%',
            paddingStart: '20%',
            textAlign: 'end',
            [theme.breakpoints.down('xs')]: {
                paddingEnd: '10%',
                paddingStart: '10%'
            }
        },
        title: {
            fontWeight: 400,
            color: theme.palette.common.white,
            userSelect: 'none',
            msUserSelect: 'none'
        },
        subtitle: {
            color: theme.palette.common.white
        }
    });

interface Props extends WithStyles<typeof styles> {
    title: string;
    subtitle: string;
    imageUrl: string;
    imageDirection: Direction;
}

export enum Direction {
    start,
    end
}

const ServiceCard: React.FC<Props> = (props: Props) => {
    const { classes, title, subtitle, imageUrl, imageDirection } = props;
    return (
        <div className={classes.root}>
            <Card className={classes.rootCard} elevation={2}>
                <Grid
                    container
                    direction={imageDirection === Direction.start ? 'row-reverse' : 'row'}
                    alignItems={'stretch'}
                    style={{ minHeight: 'inherit' }}>
                    {/* Image */}
                    <Grid className={classes.imageBox} item xs={12} sm={5}>
                        <Box
                            style={{
                                textAlign: imageDirection === Direction.start ? 'center' : 'center',
                                height: '100%'
                            }}>
                            <img
                                style={{ width: '80%', height: '100%' }}
                                src={imageUrl}
                                alt={'Study Kanji!'}
                            />
                        </Box>
                    </Grid>

                    {/* Text */}
                    <Grid
                        className={
                            imageDirection === Direction.start
                                ? classes.textBoxStart
                                : classes.textBoxEnd
                        }
                        item
                        xs={12}
                        sm={7}
                        style={{ minHeight: 'inherit' }}>
                        <Grid
                            container
                            className={
                                imageDirection === Direction.start
                                    ? classes.textContainerStart
                                    : classes.textContainerEnd
                            }
                            direction={'row'}
                            alignContent={'center'}
                            alignItems={'center'}>
                            <Grid item>
                                <Typography
                                    className={classes.title}
                                    gutterBottom
                                    variant="h3"
                                    component="h5">
                                    {title}
                                </Typography>
                                <Typography
                                    className={classes.subtitle}
                                    gutterBottom
                                    component="p"
                                    variant="h6">
                                    {subtitle}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};

export default withStyles(styles)(ServiceCard);
