import type { Meta, StoryObj } from '@storybook/react-vite';
import { GeolocationExample } from '../hooks/useGeolocation';

const meta = {
  title: 'Hooks/Geolocation',
  component: GeolocationExample,
} satisfies Meta<typeof GeolocationExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
