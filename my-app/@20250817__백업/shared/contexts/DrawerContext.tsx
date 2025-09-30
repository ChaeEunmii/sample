'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface DrawerContextType {
  stack: string[];
  push: (id: string) => void;
  pop: (id: string) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [stack, setStack] = useState<string[]>([]);

  const push = useCallback((id: string) => {
    setStack((prev) => [...prev, id]);
  }, []);

  const pop = useCallback((id: string) => {
    setStack((prev) => prev.filter((d) => d !== id));
  }, []);

  return <DrawerContext.Provider value={{ stack, push, pop }}>{children}</DrawerContext.Provider>;
};
