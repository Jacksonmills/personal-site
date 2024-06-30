'use client';

import React, { use, useEffect, useState } from 'react';

import Image from 'next/image';

import {
  inView,
  motion,
  progress,
  scroll,
  useScroll,
  useSpring,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface MotionShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  imageComp: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function MotionShape({
  className,
  imageComp,
  containerRef,
}: MotionShapeProps) {
  const motionDivRef = React.useRef<HTMLDivElement>(null);
  const staticDivRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: motionDivRef,
    offset: ['0 1', '1.33 1'],
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
          scale: scaleX,
          bottom: bottomValue,
        }}
        className={cn('absolute', className)}
      >
        {imageComp}
      </motion.div>
      <div
        ref={staticDivRef}
        className={cn(
          'absolute rounded-full outline-dashed outline-red-500',
          className
        )}
      >
        <span className="opacity-5">{imageComp}</span>
      </div>
    </>
  );
}
