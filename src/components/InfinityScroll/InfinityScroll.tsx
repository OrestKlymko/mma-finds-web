import React, { useState, useEffect, useRef, ReactNode } from "react";

const InfinityScroll = ({ children }: { children: ReactNode }) => {
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const bottomBoundaryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsFetching(true);
      }
    });

    if (bottomBoundaryRef.current) {
      observer.current.observe(bottomBoundaryRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    // Fetch more data here
    setIsFetching(false);
  }, [isFetching]);

  return (
    <div>
      {children}
      <div ref={bottomBoundaryRef} style={{ height: "20px" }} />
    </div>
  );
};

export default InfinityScroll;
