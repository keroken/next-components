import type{ Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { type SelectProps } from './Select.types';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { label: 'apple', value: 'apple' },
  { label: 'orange', value: 'orange' },
  { label: 'banana', value: 'banana' },
];

const SelectWithHooks = (props: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <Select
      placeholder="select items"
      options={options}
      onChange={handleSelect}
      selectedOptionValue={selectedOption}
      size={props.size}
    />
  );
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
  render: args => <SelectWithHooks { ...args } />
};
export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
  render: args => <SelectWithHooks { ...args } />
};