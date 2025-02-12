"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface DropdownWrapperProps {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function DropdownWrapper({
  children,
  onClose,
  className,
  style,
}: DropdownWrapperProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.parentElement?.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={`absolute z-50 ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}
