import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Heart, Mail, Loader2 } from 'lucide-react';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    asChild: {
      control: 'boolean',
      description: 'Change the default rendered element',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Button
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

// All Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// All Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Heart className="h-4 w-4" />
      </Button>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Login with Email
      </Button>
      <Button variant="outline">
        <Heart className="mr-2 h-4 w-4" />
        Like
      </Button>
      <Button variant="secondary">
        Save Changes
        <Heart className="ml-2 h-4 w-4" />
      </Button>
    </div>
  ),
};

// Loading State
export const Loading: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button variant="outline" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading
      </Button>
    </div>
  ),
};

// Disabled State
export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>Default Disabled</Button>
      <Button variant="secondary" disabled>Secondary Disabled</Button>
      <Button variant="outline" disabled>Outline Disabled</Button>
    </div>
  ),
};

// Icon Only Buttons
export const IconOnly: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button size="icon">
        <Heart className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline">
        <Mail className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="secondary">
        <Heart className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="ghost">
        <Mail className="h-4 w-4" />
      </Button>
    </div>
  ),
};

// Interactive Example
export const Interactive: Story = {
  args: {
    children: 'Click Me',
    variant: 'default',
    size: 'default',
  },
};
