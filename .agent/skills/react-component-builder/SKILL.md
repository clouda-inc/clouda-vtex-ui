---
name: react-component-builder
description: Translates Figma designs into granular React components using Tailwind CSS and Storybook. Use this skill when the user provides a design and requests component generation.
---

# React Component Builder Skill

This skill guides the creation of a React component library from visual designs. It ensures atomic decomposition, proper styling architecture, and comprehensive documentation.

## When to use this skill
- When the user provides a Figma design (image or link) and asks to build components.
- When creating new UI elements for the `lib/` folder.
- When generating Storybook stories for visual testing.

## Operational Workflow

### Phase 1: Decomposition & Planning
**Do not build the entire page at once.**
1.  **Analyze**: Scan the provided design.
2.  **Identify**: Break the UI down using **Atomic Design** principles:
    * *Atoms*: Buttons, Inputs, Icons, Typography.
    * *Molecules*: Search bars, User cards.
    * *Organisms*: Navbars, Sidebars.
3.  **Plan**: Present a build order starting from **Atoms**.

### Phase 2: Component Construction
For each component in the plan:

1.  **Directory Setup**: `lib/<ComponentName>/`
    * **Sub-Components**: If a component is complex (e.g., a `Card` with distinct headers/footers), create sub-components (e.g., `CardHeader.tsx`, `CardBody.tsx`) **inside this same folder**. Do not expose them globally if they are specific to this component.
2.  **Implementation (`<ComponentName>.tsx`)**:
    * **Framework**: React (Functional Components) with TypeScript.
    * **Styling**: Use **Tailwind CSS**.
    * **Class Merging (CRITICAL)**: You MUST use `tailwind-merge` (and optional `clsx`) to allow prop overrides.
        * *Pattern*: `className={twMerge("default-classes", className)}`
    * **Props**: Define an interface that extends standard HTML attributes (e.g., `ButtonHTMLAttributes`) plus custom style props.
3.  **Storybook (`<ComponentName>.stories.tsx`)**:
    * Create a `Default` story matching the Figma design.
    * Create `Custom` stories showing overridden styles (colors, fonts).

### Phase 3: Automated Verification Loop
**The IDE must verify the component. Do not ask the user to check.**

1.  **Launch Storybook**:
    * Run: `npm run storybook` (Ensure this runs in the background or a separate terminal so the agent remains active).
    * **Wait**: Poll `http://localhost:6006` until the server returns a 200 OK status.
2.  **Visual Inspection**:
    * **Action**: Use the browser tool to navigate to the specific component story URL (e.g., `http://localhost:6006/?path=/story/componentname--default`).
    * **Compare**: Analyze the rendered page against the original Figma requirements.
        * *Check 1*: Color accuracy (hex codes).
        * *Check 2*: Spacing and padding (Tailwind classes).
        * *Check 3*: Typography (Font size/weight).
3.  **Self-Correction**:
    * **If Mismatched**: Modify `<ComponentName>.tsx` styles immediately. Refresh the page and check again.
    * **If Matched**: Proceed to Phase 4.

### Phase 4: Detailed Documentation
Once verified, create `lib/<ComponentName>/WALKTHROUGH.md`. This document must be thorough.

1.  **Screenshots**: Capture and embed **multiple screenshots** if necessary to show different states:
    * *Default View*
    * *Hover/Focus States* (if applicable)
    * *Variants* (e.g., Primary vs. Secondary)
2.  **Structure**:
    * `# <ComponentName>`: High-level description of purpose.
    * `## Visual States`: Embedded screenshots of the verified Storybook stories.
    * `## Props API`: A detailed table containing:
        * **Prop Name**: e.g., `variant`
        * **Type**: e.g., `'primary' | 'secondary'`
        * **Default**: e.g., `'primary'`
        * **Description**: Explanation of what this prop controls.
    * `## Usage Examples`: Provide 2-3 copy-pasteable code snippets demonstrating common use cases (e.g., "Basic Usage," "With Custom Icon," "Inverted Style").

## Code Standards & Templates

### Tailwind Merge Pattern
Every component that accepts a `className` must follow this pattern to prevent style conflicts:

```tsx
import { twMerge } from 'tailwind-merge';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
}

export const MyComponent = ({ className, variant = 'primary', ...props }: Props) => {
  const baseStyles = "px-4 py-2 rounded-md transition-colors";
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-900"
  };

  return (
    <div 
      className={twMerge(baseStyles, variants[variant], className)} 
      {...props} 
    />
  );
};