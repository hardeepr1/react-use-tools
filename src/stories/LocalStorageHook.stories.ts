import type { Meta, StoryObj } from '@storybook/react-vite';
import { LocalStorageExample } from '../hooks/useLocalStorage/LocalStorageExample';

const meta = {
  title: 'Hooks/LocalStorage',
  component: LocalStorageExample,
} satisfies Meta<typeof LocalStorageExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
