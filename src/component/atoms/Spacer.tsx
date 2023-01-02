import { styled } from '@mui/material';
import { Theme } from '@mui/material';

export type Space = number;

const StyledDiv = styled('div')((props: { theme: Theme } & { space?: Space }) => ({
    flex: 1,
    padding: props.theme.spacing(props.space || 1)
})) as any;

const Spacer: (props: { space?: Space }) => JSX.Element = (props: { space?: Space }) => (
    <StyledDiv {...props} />
);

export default Spacer;
