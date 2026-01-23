---
name: figma_to_react_component
description: Converts a selected Figma node into a pixel-perfect React component in the lib folder, including Storybook stories and visual verification.
---

# Figma to React Component Workflow

This skill encapsulates the process of transforming a Figma design selection into a fully implemented and verified React component.

## 1. Analyze Figma Styling & Requirements
- **Action**: Use the `mcp_figma_dev_mode_mcp_server_get_design_context` tool.
    - **Purpose**: Get the raw code generation to understand structure, text content, and CSS properties.
- **Action**: Use the `mcp_figma_dev_mode_mcp_server_get_screenshot` tool.
    - **Purpose**: Capture the visual "truth" of the design to verify against later.
- **Analysis**:
    - Identify the component's purpose (e.g., "Product Details Section", "Header").
    - Identify dynamic data (props) vs static content.
    - Note specific typography (Font family, weight, size) and Colors (Hex codes vs Variables). *Note: If variables are used in Figma but not in the repo, fallback to Hex codes.*

## 2. Check Project Configuration
- **Action**: Check `tailwind.config.js` and `src/index.css` (or `lib/tailwind.css`).
    - **Purpose**: Understand existing theme tokens, fonts, and global styles.
- **Action**: Check `package.json` and `tsconfig.json`.
    - **Purpose**: Confirm dependencies (React version, etc.) and import paths.

## 3. Implementation
- **Create Component**:
    - Path: `lib/<ComponentName>/<ComponentName>.tsx`
    - **Rules**:
        - Use Functional Components with TypeScript interfaces.
        - Use Tailwind CSS for styling.
        - **Typography**: Be precise! If Figma says `DM Sans`, ensures it is imported or available.
        - **Layout**: Use Flexbox/Grid to match the Figma Screenshot exactly.
- **Create Stories**:
    - Path: `lib/<ComponentName>/<ComponentName>.stories.tsx`
    - **Rules**:
        - Create a `Default` story with realistic mock data that mirrors the Figma content.
        - Create edge case stories if applicable (e.g., empty lists).
- **Export**:
    - Update `lib/main.ts` (or the library entry point) to export the new component.

## 4. Verification & Refinement
- **Note**: Storybook will be running.
- **Action**: Use `browser_subagent` to navigate to the story.
    - **Task**: "Navigate to the story, wait for render, and take a screenshot."
- **Comparison**:
    - Compare the Storybook Screenshot with the Figma Screenshot.
    - **Refinement Loop**:
        - If margins/padding are off -> Adjust Tailwind classes.
        - If colors match but font is wrong -> Check font imports.
        - If borders are missing -> Add specific border widths/colors.
    - **Repeat** the screenshot verification after fixes.

## 5. Final Output
- **Action**: Create a `walkthrough.md` artifact.
- **Content**:
    - Summary of the component created.
    - File links (`.tsx`, `.stories.tsx`).
    - **Proof**: Embed the final Storybook screenshot(s) showing it matches the design.
