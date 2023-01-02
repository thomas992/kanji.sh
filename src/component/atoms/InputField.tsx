import { styled } from '@mui/material';
import 'formik-mui';
import { TextField, TextFieldProps } from 'formik-mui';

const StyledTextField = styled(TextField)(() => ({}));

const InputField: (props: TextFieldProps) => JSX.Element = (props: TextFieldProps) => (
    <StyledTextField
        variant={'outlined'}
        color={'primary'}
        multiline={false}
        fullWidth={true}
        {...props}
    />
);

export default InputField;
