import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CopyToClipboardExample } from '../hooks/useCopyToClipboard/CopyToClipboardExample';

const meta = {
  title: 'Hooks/CopyToClipboard',
  component: CopyToClipboardExample,
} satisfies Meta<typeof CopyToClipboardExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
