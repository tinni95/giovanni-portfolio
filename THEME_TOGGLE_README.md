# Dark/Light Mode Toggle Implementation

This implementation adds a seamless dark/light mode toggle to your Next.js portfolio app without requiring URL changes.

## 🎯 Features

- **Global Theme State**: Theme preference is managed globally using React Context
- **Persistent Storage**: Theme choice is saved to localStorage and persists across sessions
- **Smooth Transitions**: CSS transitions provide smooth theme switching
- **Accessible**: Proper ARIA labels and keyboard navigation support
- **Mobile Responsive**: Theme toggle works on both desktop and mobile

## 🏗️ Architecture

### Core Components

1. **ThemeContext** (`components/context/ThemeContext.jsx`)

   - Manages global theme state
   - Provides `isLightMode` and `toggleTheme` functions
   - Handles localStorage persistence

2. **ThemeToggle** (`components/common/ThemeToggle.jsx`)

   - Reusable toggle button component
   - Shows sun/moon icons based on current theme
   - Includes hover effects and accessibility features

3. **ThemeWrapper** (`components/common/ThemeWrapper.jsx`)

   - Applies the `tmp-white-version` class when in light mode
   - Wraps page content to enable theme switching

4. **ThemeAwareWrapper** (`components/common/ThemeAwareWrapper.jsx`)
   - Automatically passes `isLight` prop to child components
   - Eliminates need to manually pass theme props

### How It Works

1. **Theme Provider**: Wraps the entire app in `ThemeProvider` (in `layout.js`)
2. **Theme State**: Uses `useState` to track `isLightMode` boolean
3. **CSS Classes**: Applies `tmp-white-version` class to enable light mode styles
4. **Component Props**: Automatically passes `isLight` prop to components that need it
5. **Persistence**: Saves theme choice to localStorage on every change

## 🎨 Styling

The theme toggle button includes:

- Smooth hover animations
- Theme-appropriate colors (white in dark mode, dark in light mode)
- Responsive design for mobile and desktop
- Proper spacing and positioning

## 📱 Usage

### Adding Theme Toggle to Headers

```jsx
import ThemeToggle from "@/components/common/ThemeToggle";

// In your header component
<ThemeToggle className="your-custom-class" />;
```

### Making Components Theme-Aware

Components that need theme awareness should:

1. Accept an `isLight` prop
2. Use the prop to conditionally render content or adjust styling

```jsx
export default function MyComponent({ isLight = false }) {
  return (
    <div className={`my-component ${isLight ? "light-mode" : "dark-mode"}`}>
      {/* Component content */}
    </div>
  );
}
```

### Wrapping Pages with Theme Support

```jsx
import ThemeWrapper from "@/components/common/ThemeWrapper";
import ThemeAwareWrapper from "@/components/common/ThemeAwareWrapper";

export default function MyPage() {
  return (
    <ThemeWrapper>
      <Header />
      <ThemeAwareWrapper>
        <Component1 />
        <Component2 />
        <Component3 />
      </ThemeAwareWrapper>
      <Footer />
    </ThemeWrapper>
  );
}
```

## 🔧 Customization

### Adding New Theme-Aware Components

1. Create your component with an `isLight` prop
2. Wrap it with `ThemeAwareWrapper` or manually pass the theme state
3. Add appropriate CSS classes for both themes

### Modifying Theme Toggle Styling

Edit the CSS in `public/assets/scss/custom.scss`:

```scss
.theme-toggle-btn {
  // Your custom styles
}

.tmp-white-version .theme-toggle-btn {
  // Light mode specific styles
}
```

### Adding Theme Toggle to Other Locations

Simply import and use the `ThemeToggle` component anywhere in your app:

```jsx
import ThemeToggle from "@/components/common/ThemeToggle";

<ThemeToggle className="sidebar-toggle" />;
```

## 🚀 Benefits

- **No URL Changes**: Theme switching happens instantly without page reloads
- **Performance**: Uses CSS classes for fast theme switching
- **User Experience**: Smooth transitions and persistent preferences
- **Maintainable**: Clean separation of concerns with context and hooks
- **Extensible**: Easy to add new theme-aware components

## 🔍 Technical Details

- **Context API**: Uses React Context for global state management
- **localStorage**: Persists user preferences across browser sessions
- **CSS Variables**: Leverages existing CSS custom properties for theming
- **Component Composition**: Uses wrapper components for clean architecture
- **TypeScript Ready**: Can be easily converted to TypeScript if needed
