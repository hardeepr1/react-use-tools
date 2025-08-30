import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventListenerExample } from '../hooks/useEventListener';

const meta = {
  title: 'Hooks/EventListener',
  component: EventListenerExample,
} satisfies Meta<typeof EventListenerExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
