# Jadiid UI (NOT FUNCTIONING YET)

Jadiid UI is a modern React component library with modular, customizable components. Built with TypeScript and regular CSS, it provides an elegant UI experience with minimal effort.

## Features

- **Customizable**: Buttons, headers, dropdowns, etc.
- **Theming**: ThemeProvider for easy customization.
- **Responsive**: Adapts to different screens.
- **Accessible**: Dropdowns adjust based on logo.
- **Storybook Integration**: Test and view components.

## Installation

```sh
npm install jadiid-ui
```

## Usage Example

```js
import { Button, Header } from 'jadiid-ui';

const App = () => (
  <ThemeProvider>
    <Header
      logoPosition="left"
      logo="https://via.placeholder.com/100"
      navItems={[{ label: "Home", href: "#" }, { label: "About", href: "#" }]}
      hasDropdown
    />
    <Button label="Click Me" variant="primary" size="lg" />
  </ThemeProvider>
);
```

## Why Jadiid UI?

- **Flexible**: Props-driven customization.
- **No CSS-in-JS**: Uses regular CSS.
- **User-Focused**: Intuitive and adaptive components.
- **Build sleek UIs faster with Jadiid UI**. Contributions welcome!
