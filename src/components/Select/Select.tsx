import { useState } from 'react';
import { SelectList } from './SelectList';
import { type SelectProps } from './Select.types';
import { selectSlotRecipe } from '../../../styled-system/recipes'



export const Select = ({ placeholder, options, selectedOptionValue, onChange }: SelectProps) => {
  const [IsListOpen, setIsListOpen] = useState(false);

  const classes = selectSlotRecipe();

  const handleClickTrigger = () => {
    setIsListOpen(prev => !prev);
  }

  const handleClickOption = (value: string) => {
    setIsListOpen(false);
    onChange(value);
  }

  return (
    <>
      <button className={classes.root} onClick={handleClickTrigger}>
        {selectedOptionValue ? selectedOptionValue : placeholder}
      </button>
      {IsListOpen &&
        <SelectList options={options} onClickOption={handleClickOption} />
      }
    </>
  )
}