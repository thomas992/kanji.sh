import React, { useState } from 'react';
import { Button, Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FileData } from '../Metadata';
import { StyleRules, WithStyles } from '@mui/styles/withStyles';
import withStyles from '@mui/styles/withStyles';
import { logEvent } from '../firebase';
import { GetAppRounded, VisibilityRounded } from '@mui/icons-material';
import FilePreview from './FilePreview';

const NORMAL_ELEVATION = 2;
const HOVER_ELEVATION = 10;

const styles = (theme: Theme): StyleRules =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: '320px',
            height: '100%',
            marginStart: 'auto',
            marginEnd: 'auto'
        },
        media: {
            height: theme.spacing(22),
            clipPath: 'polygon(0 0, 100% 0%, 100% 90%, 0% 100%)'
        },
        title: {
            textAlign: 'center',
            fontWeight: 400,
            lineHeight: `${theme.spacing(22)}px`,
            color: theme.palette.common.white,
            userSelect: 'none',
            msUserSelect: 'none'
        },
        previewButton: {
            alignSelf: 'center',
            width: '100%',
            marginTop: theme.spacing(2)
        },
        downloadButton: {
            alignSelf: 'center',
            width: '100%',
            marginTop: theme.spacing(1)
        }
    });

interface Props extends WithStyles<typeof styles> {
    fileData: FileData;
}

const FileCard: (props: Props) => JSX.Element = (props: Props) => {
    const { classes, fileData } = props;
    const [elevation, setElevation] = useState(NORMAL_ELEVATION);
    const [open, setOpen] = useState(false);

    const _elevate: () => void = () => setElevation(HOVER_ELEVATION);

    const _lower: () => void = () => setElevation(NORMAL_ELEVATION);

    const _downloadFile: (fileData: FileData) => void = (/*fileData: FileData*/) => {
        logEvent(/*'file_download', { file: fileData.title }*/);
    };

    const _previewFile: (fileData: FileData) => void = (/*fileData: FileData*/) => {
        logEvent(/*'file_preview', { file: fileData.title }*/);
        setOpen(true);
    };

    return (
        <Card
            className={classes.root}
            onMouseOver={_elevate}
            onMouseOut={_lower}
            elevation={elevation}>
            <CardMedia className={classes.media} style={{ backgroundColor: fileData.metaColor }}>
                <Typography className={classes.title} gutterBottom variant="h2" component="h5">
                    {fileData.title}
                </Typography>
            </CardMedia>

            <CardContent>
                <Typography gutterBottom variant="subtitle1" align="center">
                    {fileData.description}
                </Typography>

                <FilePreview
                    id={fileData.filePath}
                    fileData={fileData}
                    open={open}
                    onClose={() => setOpen(false)}>
                    <Button
                        className={classes.previewButton}
                        startIcon={<VisibilityRounded />}
                        variant="contained"
                        color="primary"
                        disableElevation
                        href=""
                        target="_blank"
                        onClick={() => _previewFile(fileData)}
                        download>
                        Preview
                    </Button>
                </FilePreview>

                <Button
                    className={classes.downloadButton}
                    startIcon={<GetAppRounded />}
                    variant="contained"
                    color="primary"
                    disableElevation
                    href={`/api/download?path=${fileData.filePath}&name=${fileData.title}`}
                    target="_self"
                    onClick={() => _downloadFile(fileData)}
                    download>
                    Download
                </Button>
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(FileCard);
