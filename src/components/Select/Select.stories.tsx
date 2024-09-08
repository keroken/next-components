import type{ Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
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

type Props = {
  size: 'small' | 'medium';
};

const SelectWithHooks = ({size}: Props ) => {
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
      size={size}
    />
  );
};

export const SizeSmall: Story = {
  render: () => <SelectWithHooks size="small" />
};
export const SizeMedium: Story = {
  render: () => <SelectWithHooks size="medium" />
};