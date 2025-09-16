# CalligraphyWriter Component

A modular React component for rendering calligraphy symbols with support for Japanese and English layouts.

## Architecture

This component follows SOLID principles and is split into focused, maintainable modules:

### Directory Structure

```
CalligraphyWriter/
├── components/           # Individual symbol components
│   ├── JapaneseSymbol.jsx
│   ├── AlphabetSymbol.jsx
│   └── AlphabetRow.jsx
├── layouts/             # Layout strategy components
│   ├── JapaneseLayout.jsx
│   ├── AlphabetLayout.jsx
│   └── LayoutFactory.js
├── hooks/               # Custom React hooks
│   └── useAlphabetLayout.js
├── constants.js         # Configuration constants
├── index.js            # Clean exports
└── README.md           # This file
```

## Components

### Main Component
- **CalligraphyWriter**: Main component that orchestrates the rendering based on locale

### Layout Components
- **JapaneseLayout**: Renders Japanese calligraphy symbols in grid layout (top to bottom, right to left)
- **AlphabetLayout**: Renders alphabet symbols in rows (left to right, top to bottom)
- **LayoutFactory**: Factory for creating appropriate layout strategies

### Symbol Components
- **JapaneseSymbol**: Individual Japanese calligraphy symbol
- **AlphabetSymbol**: Individual alphabet calligraphy symbol with weight-based width
- **AlphabetRow**: Container for a row of alphabet symbols

### Hooks
- **useAlphabetLayout**: Custom hook for managing alphabet layout calculations

## Usage

```jsx
import { CalligraphyWriter } from './CalligraphyWriter';

<CalligraphyWriter
  symbols={symbols}
  locale="ja"
  deviceInfo="desktop"
  className="custom-class"
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| symbols | Array | Yes | Array of symbol objects with class, weight, and element properties |
| locale | String | Yes | Locale ('ja' for Japanese, 'en' for English) |
| deviceInfo | String | No | Device type for responsive behavior |
| className | String | No | Custom CSS class name |

## Design Patterns Used

1. **Strategy Pattern**: Different layout strategies for Japanese vs English
2. **Factory Pattern**: LayoutFactory for creating appropriate layouts
3. **Single Responsibility**: Each component has one clear purpose
4. **Open/Closed**: Easy to extend with new languages without modifying existing code
5. **Dependency Inversion**: Components depend on abstractions, not concrete implementations

## Benefits

- **Maintainability**: Each file has a single responsibility
- **Testability**: Components can be tested in isolation
- **Reusability**: Individual components can be reused elsewhere
- **Extensibility**: Easy to add new languages or layout strategies
- **Performance**: Optimized with React.memo and proper memoization
- **Accessibility**: Includes ARIA labels and semantic HTML
