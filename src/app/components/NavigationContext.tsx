'use client';

import { createContext, useContext } from 'react';

interface NavigationContextType {
  triggerNavLinkClick: (e: React.MouseEvent, href: string) => void;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function useNavigationTrigger() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigationTrigger must be used within a NavigationClient (or its provider)');
  }
  return context;
}