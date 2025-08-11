"use client";

import React from 'react';
import { useTheme } from '@/components/context/ThemeContext';

export default function ThemeWrapper({ children }) {
  const { isLightMode } = useTheme();

  return (
    <div className={isLightMode ? 'tmp-white-version' : ''}>
      {children}
    </div>
  );
} 