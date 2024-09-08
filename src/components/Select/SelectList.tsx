import { type SelectOptionType } from './Select.types'

type Props ={
  options: SelectOptionType[];
  onClickOption: (value: string) => void;
}

export const SelectList = ({ options, onClickOption }: Props) => {
  return (
    <ul>
      {options.map(option => (
        <li onClick={() => onClickOption(option.value)}>{option.label}</li>
      ))}
    </ul>
  )
}