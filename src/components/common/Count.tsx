"use client"
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface CountType {
  number: number;
  text?: string;
  add_style?: boolean;
}

const Count = ({ number, text, add_style }: CountType) => {
  const [focus, setFocus] = useState<boolean>(false);
  const sentinelRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !focus) {
        setFocus(true);
      }
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [focus]);

  return (
    <>
      <CountUp start={focus ? 0 : undefined} end={number} duration={2}>
        {({ countUpRef }) => (
          <div className={`d-flex ${add_style ? "align-items-center justify-content-center" : ""} `}>
            <strong ref={countUpRef} />
            <span ref={sentinelRef}>
              {text && <span>{text}</span>}
            </span>
          </div>
        )}
      </CountUp>
    </>
  );
};

export default Count;
