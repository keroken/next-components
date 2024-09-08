import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Select } from './Select';
import { type SelectProps } from './Select.types';
import { useState } from 'react';

const meta = {
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

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