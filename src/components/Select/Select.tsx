import { useState } from 'react';
import { SelectList } from './SelectList';
import { SelectOptionType } from './Select.types';

type Props = {
  placeholder: string;
  options: SelectOptionType[];
  selectedOptionValue: string;
  onChange: (value: string) => void;
}

export const Select = ({ placeholder, options, selectedOptionValue, onChange }: Props) => {
  const [IsListOpen, setIsListOpen] = useState(false);

  const handleClickTrigger = () => {
    setIsListOpen(prev => !prev);
  }

  const handleClickOption = (value: string) => {
    setIsListOpen(false);
    onChange(value);
  }

  return (
    <>
      <button onClick={handleClickTrigger}>
        {selectedOptionValue ? selectedOptionValue : placeholder}
      </button>
      {IsListOpen &&
        <SelectList options={options} onClickOption={handleClickOption} />
      }
    </>
  )
}