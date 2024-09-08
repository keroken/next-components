import { type SelectOptionType, SelectSizeType } from './Select.types'
import { selectSlotRecipe } from '../../../styled-system/recipes'

type Props ={
  options: SelectOptionType[];
  size: SelectSizeType;
  onClickOption: (value: string) => void;
};

export const SelectList = ({ options, size, onClickOption }: Props) => {
  const classes = selectSlotRecipe({ size: size === 'medium' ? 'medium' : 'small' });
  return (
    <ul className={classes.list}>
      {options.map(option => (
        <li className={classes.item} onClick={() => onClickOption(option.value)}>{option.label}</li>
      ))}
    </ul>
  )
};