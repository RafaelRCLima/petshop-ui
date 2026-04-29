import { InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { SelectContainer } from './styles';

type SelectComponentProps = {
  itemsList: string[];
  selectLabel: string;
  selectId: string;
  value?: string;
  onChange?: (event: SelectChangeEvent<string>) => void;
  className?: string;
};

export default function SelectComponent({
  itemsList,
  selectLabel,
  selectId,
  onChange,
  value,
  className
}: SelectComponentProps) {
  return (
    <SelectContainer>
      <InputLabel className="input-label" htmlFor={selectId}>
        {selectLabel}
      </InputLabel>
      <Select
        size="small"
        id={selectId}
        onChange={onChange}
        value={value}
        className={className}
      >
        {itemsList.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </SelectContainer>
  );
}
