'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface DrawerContextType {
  stack: string[];
  push: (id: string) => void;
  pop: (id: string) => void;
  // 최상위 drawer가 닫힐 때 바로 다음 Drawer를 미리 보여지게 하기 위해, 다음 드로워를 preShows에 추가하는 함수
  addPreShow: (id: string) => void;
  // 미리 보여질 다음 Drawer 목록 (연속 닫기되는 경우 깜빡임 방지를 위해 목록으로 관리)
  preShows: Set<string>;
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
  const [preShows, setPreShows] = useState<Set<string>>(new Set());

  const push = useCallback((id: string) => {
    setStack((prev) => [...prev, id]);
  }, []);

  const pop = useCallback((id: string) => {
    setStack((prev) => prev.filter((d) => d !== id));
    setPreShows((prev) => {
      const nextIds = new Set(prev);
      nextIds.delete(id);
      return nextIds;
    });
  }, []);

  const addPreShow = useCallback((id: string) => {
    setPreShows((prev) => {
      const nextIds = new Set(prev);
      nextIds.add(id);
      return nextIds;
    });
  }, []);

  return (
    <DrawerContext.Provider value={{ stack, push, pop, addPreShow, preShows }}>
      {children}
    </DrawerContext.Provider>
  );
};
