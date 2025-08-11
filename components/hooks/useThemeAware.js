"use client";

import { useTheme } from '@/components/context/ThemeContext';

export const useThemeAware = () => {
  const { isLightMode } = useTheme();
  
  return {
    isLight: isLightMode,
  };
}; 