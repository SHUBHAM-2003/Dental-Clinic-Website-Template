import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

export default function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericMatch = value.match(/\d+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = value.split(/\d+/)[0] || '';
  const suffix = value.split(/\d+/)[1] || '';

  useEffect(() => {
    if (isInView && numericValue > 0) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = numericValue / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {prefix}{numericValue > 0 ? count : value}{suffix}
    </span>
  );
}
