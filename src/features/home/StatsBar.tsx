"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function useCounter(target: number, duration = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, target, duration]);

  return { count, ref };
}

export function StatsBar() {
  const s1 = useCounter(5, 1.5);
  const s2 = useCounter(50, 2);
  const s3 = useCounter(10, 1.5);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { ref: s1.ref, value: `${s1.count}+`, label: "Years Experience" },
            { ref: s2.ref, value: `${s2.count}+`, label: "Projects Shipped" },
            { ref: s3.ref, value: `${s3.count}+`, label: "Tech Stacks" },
            { ref: null, value: "∞", label: "Cups of Coffee" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              ref={stat.ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-foreground/35 text-sm font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
