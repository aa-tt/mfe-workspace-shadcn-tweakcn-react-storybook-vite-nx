import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { Mail, Search, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'The type of input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Input
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

// Input Types
export const Types: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Text Input</label>
        <Input type="text" placeholder="Enter text" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Email Input</label>
        <Input type="email" placeholder="Email" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Password Input</label>
        <Input type="password" placeholder="Password" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Number Input</label>
        <Input type="number" placeholder="123" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Search Input</label>
        <Input type="search" placeholder="Search..." />
      </div>
    </div>
  ),
};

// With Labels
export const WithLabel: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <Input id="password" type="password" />
      </div>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input className="pl-10" type="email" placeholder="Email" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input className="pl-10" type="search" placeholder="Search..." />
        </div>
      </div>
    </div>
  ),
};

// Password Toggle Example
export const PasswordToggle: Story = {
  render: function PasswordToggleExample() {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="w-[350px] space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
    );
  },
};

// Disabled State
export const Disabled: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Disabled Input</label>
        <Input disabled placeholder="Disabled" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Disabled with Value</label>
        <Input disabled value="Cannot edit this" readOnly />
      </div>
    </div>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-6 rounded-lg border p-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Create Account</h3>
        <p className="text-sm text-muted-foreground">Enter your details below to create your account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email-form" className="text-sm font-medium">
            Email
          </label>
          <Input id="email-form" type="email" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password-form" className="text-sm font-medium">
            Password
          </label>
          <Input id="password-form" type="password" />
        </div>
        <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Create Account
        </button>
      </div>
    </div>
  ),
};

// File Input
export const FileInput: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <label htmlFor="file" className="text-sm font-medium">
        Upload File
      </label>
      <Input id="file" type="file" />
    </div>
  ),
};

// Interactive Example
export const Interactive: Story = {
  args: {
    placeholder: 'Type something...',
    type: 'text',
  },
};
