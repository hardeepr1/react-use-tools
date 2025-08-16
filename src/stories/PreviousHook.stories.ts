import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PreviousExample } from '../hooks/usePrevious';

const meta = {
  title: 'Hooks/UsePreviousExample',
  component: PreviousExample,
} satisfies Meta<typeof PreviousExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
