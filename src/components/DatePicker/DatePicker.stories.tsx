import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DatePicker } from './DatePicker';
import { useState } from 'react';

const meta = {
  component: DatePicker,
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

const DatePickerWithHooks = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleSelectDate = (data: Date) => {
    setSelectedDate(data);
  };
  return (
    <>
      <h1>Date Picker</h1>
      <DatePicker selectedDate={selectedDate} onChange={handleSelectDate} />
      <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
    </>
  );
};

export const Default: Story = {
  render: () => <DatePickerWithHooks />
};