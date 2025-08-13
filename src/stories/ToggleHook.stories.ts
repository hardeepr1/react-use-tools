import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleExample } from '../hooks/useToggle/ToggleExample';

const meta = {
  title: 'Hooks/ToggleExample',
  component: ToggleExample,
} satisfies Meta<typeof ToggleExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
