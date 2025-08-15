import type { Meta, StoryObj } from '@storybook/react-vite';
import { DebounceValueExample } from '../hooks/useDebounceValue/DebounceValueExample';

const meta = {
  title: 'Hooks/DebouncedValue',
  component: DebounceValueExample,
} satisfies Meta<typeof DebounceValueExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
