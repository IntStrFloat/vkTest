import { ReactNode, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

import {
  addOverflowHiddenToBody,
  removeOverflowHiddenFromBody,
} from '@/shared/lib/bodyOverflowHidden';

const modalRootElement = document.querySelector('#modal');
export const Modal = ({
  children,
  open,
  onClose,
}: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}) => {
  const element = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    if (open) {
      addOverflowHiddenToBody();
      modalRootElement?.appendChild(element);
      return () => {
        modalRootElement?.removeChild(element);
      };
    }
  }, [open]);
  if (open) {
    return createPortal(
      <div
        className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-800 bg-opacity-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
            removeOverflowHiddenFromBody();
          }
        }}
      >
        <div className="bg-white p-4 rounded-lg">{children}</div>
      </div>,
      element,
    );
  }
  return null;
};
