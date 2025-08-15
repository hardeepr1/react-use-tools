import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageVisibilityExample } from '../hooks/usePageVisibility';

const meta = {
  title: 'Hooks/PageVisibility',
  component: PageVisibilityExample,
} satisfies Meta<typeof PageVisibilityExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
