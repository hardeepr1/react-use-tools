import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CopyToClipboardExample } from '../hooks/useCopyToClipboard/CopyToClipboardExample';
import { ClickOutsideExample } from '../hooks';

const meta = {
  title: 'Hooks/ClickOutsideHandlerExample',
  component: ClickOutsideExample,
} satisfies Meta<typeof ClickOutsideExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
