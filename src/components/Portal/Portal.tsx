"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    elRef.current = document.createElement("div");
    document.body.appendChild(elRef.current);
    document.body.classList.add("overflow-hidden");
    setMounted(true);

    return () => {
      if (elRef.current && document.body.contains(elRef.current)) {
        document.body.removeChild(elRef.current);
      }
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return mounted && elRef.current
    ? createPortal(
        <div
          ref={backdropRef}
          className="fixed inset-0 w-full h-dvh bg-backdrop flex items-center justify-center"
          onClick={(e) => {
            if (e.target === backdropRef.current) {
              onClose();
            }
          }}
        >
          {children}
        </div>,
        elRef.current
      )
    : null;
};

export default Portal;
