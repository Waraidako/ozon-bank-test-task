# Progress component prototype

A prototype of a circular progress indicator for use in mobile web apps. Designed to be easily reusable and provides an API for controlling the component's state.

## Demo

GitHub Pages: https://waraidako.github.io/ozon-bank-test-task/

## Technologies used

- HTML
- CSS
- Vanilla JavaScript
- Vite for development and production builds

## Component overview

The component is initialized via `setupProgress(element)`, located in `src/progress/progress.js`. It sets up the component inside the passed element and adds the necessary styles to the application.

## Component states

### Normal

The base state. The progress arc reflects the current value and smoothly transitions when the value changes.

### Animated

An independent boolean state that rotates the component clockwise around its center with a period of 1 second.

### Hidden

An independent boolean state that hides the component while preserving its layout space.

## Component API

The API is located in `src/progress/progress.js`.

### `setupProgress(element)`

Initializes a Progress component inside the provided element.

### `setProgressValue(element, value)`

Sets the progress value. Values are normalized to the `0–100` range.

### `setProgressAnimated(element, isAnimated)`

Enables or disables clockwise rotation of the component.

### `setProgressHidden(element, isHidden)`

Shows or hides the component.

## How to run the project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
