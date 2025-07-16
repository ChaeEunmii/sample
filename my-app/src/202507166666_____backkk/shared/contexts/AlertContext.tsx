'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { AlertDialog } from '@shared/ui';

type AlertItem = {
  title?: string;
  message: string | ReactNode;
  onConfirm?: () => void;
  showCancel?: boolean;
  labelProps?: {
    confirm?: string;
    cancel?: string;
  };
}

// 기본 파라미터 방식과 객체 방식 모두 지원
type AlertOptions = {
  (message: string | ReactNode): void; //오버로드
  (title: string | ReactNode, message: string, onConfirm?: () => void, showCancel?: boolean, labelProps?: {}): void;
  (options: AlertItem): void;
};

interface AlertContextType {
  showAlert: AlertOptions;
  removeAlert: () => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  const showAlert: AlertOptions = useCallback((...args: any[]) => {
    if (typeof args[0] === 'object') {  
      setAlerts(prev => [...prev, args[0]]); // 객체 형태 호출

    } else { // 매개변수 호출
      if (args.length === 1) {
        setAlerts(prev => [...prev, { message: args[0] }]); // 단독 메세지 호출
        return;
      }
      setAlerts(prev => [...prev, {
        title: args[0],
        message: args[1],
        onConfirm: args[2],
        showCancel: args[3],
        labelProps: args[4],
      }]);
    }
  }, []);

  const removeAlert = useCallback(() => {
    setAlerts(prev => prev.slice(1));
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert, removeAlert }}>
      {children}

      {alerts.map((alert, index) => (
        <AlertDialog
          key={index}
          title={alert.title}
          message={alert.message}
          onConfirm={() => {
            alert.onConfirm?.();
            removeAlert();
          }}
          onCancel={alert.showCancel ? removeAlert : undefined}
          labelProps={alert.labelProps}
        />
      ))}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert는 AlertProvider 내부에서만 사용할 수 있습니다.');
  }
  return context;
};