export type SelectOptionType = {
  id: number,
  label: string,
  value: string,
};

export type SelectSizeType = 'small' | 'medium';

export type SelectProps = {
  placeholder: string;
  options: SelectOptionType[];
  selectedOptionValue: string;
  size: SelectSizeType;
  onChange: (value: string) => void;
};