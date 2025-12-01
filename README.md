# ShadCN UI Sample Project

A modern, fully-configured React + TypeScript application showcasing **ShadCN UI** components with **TweakCN** theme customization support. Built with Vite for blazing-fast development.

## 🚀 Tech Stack

- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vite.dev/)** - Next-generation build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[TweakCN](https://tweakcn.com/editor/theme)** - Theme customization tool
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Storybook](https://storybook.js.org/)** - Component development & documentation

## ✨ Features

- ✅ Pre-configured ShadCN UI components (Button, Card, Input, and more)
- ✅ Storybook with comprehensive stories for all components
- ✅ Tailwind CSS with custom theme variables
- ✅ TweakCN-compatible configuration for easy theme customization
- ✅ TypeScript with strict mode
- ✅ Path aliases (`@/*`) for clean imports
- ✅ ESLint configuration
- ✅ Accessibility testing with Storybook A11y addon
- ✅ Dark mode support in Storybook
- ✅ Production-ready build setup

## 📦 Project Structure

```
sampleshadcn/
├── .storybook/             # Storybook configuration
│   ├── main.ts
│   └── preview.tsx
├── src/
│   ├── components/
│   │   └── ui/             # ShadCN UI components
│   │       ├── button.tsx
│   │       ├── button.stories.tsx
│   │       ├── card.tsx
│   │       ├── card.stories.tsx
│   │       ├── input.tsx
│   │       └── input.stories.tsx
│   ├── lib/
│   │   └── utils.ts        # Utility functions (cn helper)
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles with Tailwind
├── components.json         # ShadCN UI configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🛠️ Prerequisites

- **Node.js** 20.19+ or 22.12+ (required by Vite 7+)
- **npm**, **yarn**, or **pnpm**

> **Note:** If you're using Node 18, upgrade with `nvm use 22` or similar.

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### 3. Start Storybook (Component Documentation)

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006/`

### 4. Build for Production

```bash
npm run build
```

### 5. Build Storybook (Static Documentation)

```bash
npm run build-storybook
```

### 6. Preview Production Build

```bash
npm run preview
```

## 🎨 Customizing the Theme with TweakCN

ShadCN UI uses CSS variables for theming, making it compatible with **[TweakCN](https://tweakcn.com/editor/theme)**:

### Method 1: Using TweakCN Editor

1. Visit [https://tweakcn.com/editor/theme](https://tweakcn.com/editor/theme)
2. Customize colors, border radius, and other design tokens
3. Copy the generated CSS variables
4. Paste into `src/index.css` under the `:root` and `.dark` selectors

### Method 2: Manual Configuration

Edit `src/index.css` to customize theme variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --radius: 0.5rem;
  /* ... more variables */
}
```

Colors are defined in HSL format without commas (e.g., `222.2 47.4% 11.2%`).

## 📚 Storybook - Component Documentation

Storybook provides an interactive development environment for your components:

### What's Included

- **Button Stories** - All variants (default, outline, secondary, ghost, destructive, link), sizes, icons, loading states
- **Card Stories** - Simple cards, notification cards, feature cards, pricing cards
- **Input Stories** - All input types, with labels, icons, password toggle, form examples
- **Accessibility Testing** - Built-in A11y addon to catch accessibility issues
- **Dark Mode Toggle** - Test components in light and dark themes
- **Interactive Controls** - Modify component props in real-time
- **Auto Documentation** - Generated from TypeScript types

### Using Storybook

1. Start Storybook: `npm run storybook`
2. Browse components in the sidebar
3. Toggle between light/dark themes using the toolbar
4. Use the Controls panel to modify props
5. Check the Accessibility panel for a11y issues
6. View auto-generated documentation in the Docs tab

### Creating New Stories

When you add new components, create a `.stories.tsx` file:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './your-component';

const meta = {
  title: 'UI/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // your props
  },
};
```

## 🧩 Adding More ShadCN Components

To add additional ShadCN UI components:

### Option 1: Using ShadCN CLI (Recommended)

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add toast
```

Don't forget to create a `.stories.tsx` file for your new component!

### Option 2: Manual Installation

1. Visit [ui.shadcn.com](https://ui.shadcn.com/)
2. Choose a component
3. Copy the component code
4. Paste into `src/components/ui/[component-name].tsx`
5. Install any required dependencies

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build Storybook for deployment
- `npm run lint` - Run ESLint

## 🔧 Configuration Files

### `components.json`
ShadCN UI configuration file specifying:
- Component style (`default`)
- Path aliases
- CSS variables usage
- Tailwind config location

### `tailwind.config.js`
Tailwind CSS configuration with:
- Custom color tokens using CSS variables
- Border radius utilities
- Dark mode support (`class` strategy)

### `tsconfig.json` & `tsconfig.app.json`
TypeScript configuration with:
- Path aliases (`@/*` → `./src/*`)
- Strict type checking
- Modern ES features

### `vite.config.ts`
Vite configuration with:
- React plugin
- Path alias resolution
- Build optimizations

## 🎯 Key Concepts

### CN Helper Function

The `cn()` utility in `src/lib/utils.ts` combines `clsx` and `tailwind-merge`:

```typescript
import { cn } from "@/lib/utils"

<Button className={cn("custom-class", condition && "conditional-class")} />
```

### Component Variants

ShadCN components use `class-variance-authority` for variants:

```tsx
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
```

## 🌐 Learn More

- [ShadCN UI Documentation](https://ui.shadcn.com/)
- [TweakCN Theme Editor](https://tweakcn.com/editor/theme)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your projects!

---

**Built with ❤️ using ShadCN UI and TweakCN**
