import type { Meta, StoryObj } from '@storybook/react-vite';
import { SessionStorageExample } from '../hooks/useSessionStorage';

const meta = {
  title: 'Hooks/SessionStorage',
  component: SessionStorageExample,
} satisfies Meta<typeof SessionStorageExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
