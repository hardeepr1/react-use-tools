import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { WindowSizeExample } from '../hooks/useWindowSize/WindowSizeExample';

const meta = {
  title: 'Hooks/WindowSizeExample',
  component: WindowSizeExample,
} satisfies Meta<typeof WindowSizeExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
