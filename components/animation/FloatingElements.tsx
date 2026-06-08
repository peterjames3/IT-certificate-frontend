"use client";

import { motion } from "motion/react";
import {
  BookOpen,
  GraduationCap,
  Award,
  Calculator,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const icons = [
  { Icon: BookOpen, color: "text-green-500", size: 24, delay: 0 },
  { Icon: GraduationCap, color: "text-blue-500", size: 28, delay: 0.5 },
  { Icon: Award, color: "text-yellow-500", size: 26, delay: 1 },
  { Icon: Calculator, color: "text-purple-500", size: 22, delay: 1.5 },
  { Icon: Clock, color: "text-red-500", size: 24, delay: 2 },
  { Icon: CheckCircle, color: "text-teal-500", size: 20, delay: 2.5 },
];

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<
    Array<{
      Icon: typeof BookOpen;
      color: string;
      size: number;
      delay: number;
      top: number;
      left: number;
      duration: number;
      floatY: number;
      floatX: number;
    }>
  >([]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const iconsWithPositions = icons.map((item) => ({
        ...item,
        top: Math.random() * 80 + 10,
        left: Math.random() * 80 + 10,
        duration: 15 + Math.random() * 20,
        floatY: Math.random() * 40 - 20,
        floatX: Math.random() * 40 - 20,
      }));

      setFloatingIcons(iconsWithPositions);
      setMounted(true);
    });

    return () => window.clearTimeout(timeout);
  }, []);

  if (!mounted || floatingIcons.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((item, index) => {
        const { Icon, color, size, delay, top, left, duration, floatY, floatX } = item;

        return (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-20`}
            style={{ top: `${top}%`, left: `${left}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.2,
              scale: 1,
              y: [0, floatY, 0],
              x: [0, floatX, 0],
            }}
            transition={{
              opacity: { delay, duration: 1 },
              scale: { delay, duration: 1 },
              y: {
                delay,
                duration,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              x: {
                delay,
                duration: duration * 0.8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
}