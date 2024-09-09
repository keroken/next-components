import { useState } from 'react';
import { SelectList } from './SelectList';
import { type SelectProps } from './Select.types';
import { selectSlotRecipe } from '../../../styled-system/recipes'



export const Select = ({ placeholder, options, selectedOptionValue, size, onChange }: SelectProps) => {
  const [IsListOpen, setIsListOpen] = useState(false);

  const classes = selectSlotRecipe({ size: size  === 'medium' ? 'medium' : 'small' });

  const handleClickTrigger = () => {
    setIsListOpen(prev => !prev);
  };

  const handleClickOption = (value: string) => {
    setIsListOpen(false);
    onChange(value);
  };

  return (
    <>
      <button className={classes.root} onClick={handleClickTrigger}>
        {selectedOptionValue ? selectedOptionValue : placeholder}
      </button>
      {IsListOpen &&
        <SelectList options={options} size={size} selectedValue={selectedOptionValue} onClickOption={handleClickOption} />
      }
    </>
  );
};