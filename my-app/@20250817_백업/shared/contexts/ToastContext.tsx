'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Toast } from '@shared/ui';

type ToastMessage = {
  id: number;
  message: string;
  duration?: number;
  button?: ToastButton;
};

type ToastOptions = {
  isAccessible: boolean;
};

type ToastButton = {
  label: string;
  onClick: () => void;
  point?: boolean;
};

interface ToastContextType {
  showToast: (message: string, button?: ToastButton, options?: Partial<ToastOptions>) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // 접근성 대응(공백제외 5글자 이상일 경우, 추가 5글자마다 1초씩 추가)
  const accessibleDuration = (message: string, baseDuration: number) => {
    const trimMessage = message.replace(/\s/g, '');

    if (trimMessage.length <= 5) {
      return baseDuration;
    }
    const addSeconds = Math.floor((trimMessage.length - 5) / 5);
    return baseDuration + addSeconds * 1000;
  };

  const showToast = useCallback(
    (message: string, button?: ToastButton, options?: Partial<ToastOptions>) => {
      const id = Date.now();
      const baseDuration = 2000;
      const isAccessible = options?.isAccessible ?? false;
      const calcDuration = isAccessible ? accessibleDuration(message, baseDuration) : baseDuration;

      setToasts((prev) => [
        ...prev,
        {
          id,
          message,
          duration: calcDuration,
          button,
        },
      ]);
    },
    []
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      {toasts.map(({ id, message, duration, button }) => (
        <Toast
          key={id}
          message={message}
          onClose={() => removeToast(id)}
          duration={duration}
          button={button}
        />
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast는 ToastProvider 내부에서만 사용할 수 있습니다.');
  }
  return context;
};
