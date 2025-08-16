import type { Meta, StoryObj } from '@storybook/react-vite';
import { FetchExample } from '../hooks/useFetch/FetchExample';

const meta = {
  title: 'Hooks/FetchExample',
  component: FetchExample,
} satisfies Meta<typeof FetchExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
