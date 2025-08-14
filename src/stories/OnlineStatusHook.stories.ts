import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { OnlineStatusExample } from '../hooks/useOnlineStatus/OnlineStatusExample';

const meta = {
  title: 'Hooks/OnlineStatus',
  component: OnlineStatusExample,
} satisfies Meta<typeof OnlineStatusExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
