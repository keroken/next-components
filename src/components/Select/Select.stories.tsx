import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Select } from './Select';
import { type SelectProps } from './Select.types';
import { useState } from 'react';

const meta = {
  component: Select,
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { id: 1, label: 'apple', value: 'apple' },
  { id: 2, label: 'orange', value: 'orange' },
  { id: 3, label: 'banana', value: 'banana' },
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

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: args => <SelectWithHooks { ...args } />
};
export const Medium: Story = {
  args: {
    size: 'medium',
  },
  render: args => <SelectWithHooks { ...args } />
};