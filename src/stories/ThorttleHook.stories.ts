import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThrottleExample } from '../hooks/useThrottle';

const meta = {
  title: 'Hooks/Thorttle',
  component: ThrottleExample,
} satisfies Meta<typeof ThrottleExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
