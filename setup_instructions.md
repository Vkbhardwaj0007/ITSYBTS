# Shadcn Project Setup Instructions

Your project is currently a static HTML site. To use the new **RadialOrbitalTimeline** React component, you need to set up a Modern React environment (like Vite or Next.js) with Shadcn UI, Tailwind CSS, and TypeScript.

## Step 1: Initialize a React Project (Vite Recommended)

If you want to transition your site to React, run the following command in your terminal:

```bash
npm create vite@latest ./ -- --template react-ts
```

## Step 2: Install Tailwind CSS

Follow these steps to set up Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.ts` (or `.js`) to include the paths to your components.

## Step 3: Initialize Shadcn UI

Run the following command and follow the prompts (default settings are usually best):

```bash
npx shadcn@latest init
```

> [!IMPORTANT]
> When asked for the component location, ensuring it is `components/ui` is critical for maintaining the standard Shadcn structure, which allows you to easily add new components via the CLI in the future.

## Step 4: Install Dependencies

I have already prepared the component files. You just need to install the required external libraries:

```bash
npm install lucide-react class-variance-authority @radix-ui/react-slot clsx tailwind-merge
```

## Step 5: File Structure Created

I have already created the following files for you:
- `lib/utils.ts`: Utility for merging tailwind classes.
- `components/ui/badge.tsx`, `button.tsx`, `card.tsx`: Shadcn UI dependencies.
- `components/ui/radial-orbital-timeline.tsx`: The main timeline component.
- `components/ui/demo.tsx`: A demo usage of the timeline.
- `globals.css`: Extended styles and animations.

## Why use `/components/ui`?

Creating the `components/ui` folder is important because:
1. **Shadcn CLI Default**: The Shadcn CLI automatically places newly installed components here.
2. **Separation of Concerns**: It keeps atomic UI elements (like buttons, badges) separate from your layout/page components.
3. **Maintainability**: It follows the industry-standard folder structure for modern React applications.

## How to use the component

Once your setup is complete, you can import and use the demo in your main `App.tsx`:

```tsx
import { RadialOrbitalTimelineDemo } from "./components/ui/demo";

function App() {
  return (
    <div className="dark">
      <RadialOrbitalTimelineDemo />
    </div>
  );
}
```
