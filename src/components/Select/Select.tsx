import { useState } from "react";

type Props = {
  placeholder: string;
  options: {
    label: string,
    value: string,
  }[];
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
      <button onClick={handleClickTrigger}>{selectedOptionValue ? selectedOptionValue : placeholder}</button>
      {IsListOpen &&
        <ul>
          {options.map(option => (
            <li onClick={() => handleClickOption(option.value)}>{option.label}</li>
          ))}
        </ul>
      }
    </>
  )
}