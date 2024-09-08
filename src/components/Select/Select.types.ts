export type SelectOptionType = {
  label: string,
  value: string,
}

export type SelectProps = {
  placeholder: string;
  options: SelectOptionType[];
  selectedOptionValue: string;
  onChange: (value: string) => void;
};