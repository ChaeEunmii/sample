'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { IconName } from '@shared/ui';

type ActionItem = {
  name: IconName;
  label: string;
  onClick: () => void;
};

interface FABContextType {
  actions: ActionItem[];
  setActions: (actions: ActionItem[]) => void;
  clearActions: () => void;
}

const FABContext = createContext<FABContextType | undefined>(undefined);

export const FABProvider = ({ children }: { children: ReactNode }) => {
  const [actions, setActionsState] = useState<ActionItem[]>([]);
  const setActions = useCallback((act: ActionItem[]) => {
    setActionsState(act);
  }, []);

  const clearActions = useCallback(() => setActions([]), []);

  return (
    <FABContext.Provider
      value={{
        actions,
        setActions,
        clearActions,
      }}
    >
      {children}
    </FABContext.Provider>
  );
};

export const useFAB = () => {
  const context = useContext(FABContext);
  if (context === undefined) {
    throw new Error('useFAB FABProvider 내부에서만 사용할 수 있습니다.');
  }
  return context;
};
