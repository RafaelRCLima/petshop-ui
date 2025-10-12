import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import { TextField, InputLabel } from '@mui/material';
import { DatePickerContainer } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePickerComponent({ ...props }) {
  type TExcludeDate =
    | {
        date: Date;
        message?: string;
      }[]
    | Date[];

  const excludeDates: TExcludeDate = [
    addDays(new Date(), 1),
    addDays(new Date(), 5)
  ];

  return (
    <DatePickerContainer>
      <InputLabel className="input-label">Data</InputLabel>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={props.selected}
        onChange={props.onChange}
        minDate={new Date()}
        excludeDates={excludeDates}
        customInput={<TextField size="small" />}
      />
    </DatePickerContainer>
  );
}
