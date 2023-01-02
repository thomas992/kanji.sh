import { GridProps, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

const StyledGrid = styled(Grid)(() => ({
    textAlign: 'center'
}));

const CenterGrid: (props: GridProps) => JSX.Element = (props: GridProps) => (
    <StyledGrid {...props} />
);

export default CenterGrid;
