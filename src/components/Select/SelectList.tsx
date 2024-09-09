import { type SelectOptionType, SelectSizeType } from './Select.types';
import { selectSlotRecipe } from '../../../styled-system/recipes';
import { CheckIcon } from '../../icons/check-icon';

type Props ={
  options: SelectOptionType[];
  selectedValue: string;
  size: SelectSizeType;
  onClickOption: (value: string) => void;
};

export const SelectList = ({ options, selectedValue, size, onClickOption }: Props) => {
  const classes = selectSlotRecipe({ size: size === 'medium' ? 'medium' : 'small' });
  return (
    <ul className={classes.list}>
      {options.map(option => (
        <li className={classes.item} onClick={() => onClickOption(option.value)}>{option.label}{option.value === selectedValue ? CheckIcon : null}</li>
      ))}
    </ul>
  )
};