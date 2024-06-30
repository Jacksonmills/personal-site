'use client';

import React from 'react';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MotionShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  imageComp: React.ReactNode;
}

export default function MotionShape({
  className,
  imageComp,
}: MotionShapeProps) {
  const motionDivRef = React.useRef<HTMLDivElement>(null);

  const debug = false;

  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: motionDivRef,
    offset: ['0 1', '1 1'],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const bottomValue = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  return (
    <>
      <motion.div
        ref={motionDivRef}
        style={{
          scale: shouldReduceMotion ? 1 : scaleX,
          bottom: shouldReduceMotion ? 0 : bottomValue,
        }}
        className={cn('absolute', className)}
      >
        {imageComp}
      </motion.div>
      {debug && (
        <div
          className={cn(
            'absolute rounded-full outline-dashed outline-red-500',
            className
          )}
        >
          <span className="opacity-5">{imageComp}</span>
        </div>
      )}
    </>
  );
}
