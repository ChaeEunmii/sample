import { useState, useEffect } from 'react';

export function usePortal(rootId = 'root', portalId = 'portal-root') {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root =
        document.getElementById(portalId) ||
        (() => {
          const div = document.createElement('div');
          div.id = 'portal-root';
          document.getElementById(rootId)?.appendChild(div);
          return div;
        })();
      setPortalRoot(root);
    }
  }, [portalId]);

  return portalRoot;
}
