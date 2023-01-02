import { GetStaticPaths, GetStaticProps } from 'next';
import PageLayout from '../../../src/PageLayout';
import { GroupData, mappedData } from '../../../src/Metadata';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import FileCard from '../../../src/component/FileCard';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material';

type CollectionParam = { collection: string };

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    header: {
        marginBottom: theme.spacing(4)
    }
}));

const CollectionPage: React.FC<{ collectionId: string }> = (pathParams) => {
    const classes = useStyles();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const groupData: GroupData = mappedData!.get(pathParams.collectionId)!;
    return (
        <PageLayout>
            <Typography gutterBottom className={classes.header} variant="h3">
                {groupData.heading}
            </Typography>
            <Grid
                container
                direction={'row'}
                spacing={4}
                alignItems={'center'}
                alignContent={'flex-start'}
                justifyContent={'flex-start'}>
                {groupData.files.map((fileData) => (
                    <Grid key={fileData.filePath} item xs={12} sm={4} md={3} xl={2}>
                        <FileCard fileData={fileData} />
                    </Grid>
                ))}
            </Grid>
        </PageLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const collectionId = (params as CollectionParam).collection as string;
    return {
        props: {
            collectionId
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = new Array<{ params: CollectionParam }>();
    mappedData.forEach((groupData, key) => {
        paths.push({ params: { collection: key } });
    });
    return {
        paths,
        fallback: false
    };
};

export default CollectionPage;
