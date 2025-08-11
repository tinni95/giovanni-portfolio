"use client";

import React from 'react';
import { useThemeAware } from '@/components/hooks/useThemeAware';

export default function ThemeAwareWrapper({ children }) {
  const { isLight } = useThemeAware();
  
  // Clone children and pass isLight prop to them
  const childrenWithTheme = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isLight });
    }
    return child;
  });
  
  return <>{childrenWithTheme}</>;
} 