import { TextField, InputLabel, TextFieldProps } from '@mui/material';
import { InputContainer } from './styles';

type InputProps = {
  inputLabel: string;
  inputId?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & TextFieldProps;

export default function Input({
  inputLabel,
  inputId,
  onChange,
  ...props
}: InputProps) {
  return (
    <InputContainer>
      <InputLabel htmlFor={inputId} className="input-label">
        {inputLabel}
      </InputLabel>
      <TextField size="small" id={inputId} onChange={onChange} {...props} />
    </InputContainer>
  );
}
