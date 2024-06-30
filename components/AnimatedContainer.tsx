'use client';

import React from 'react';
import MotionShape from './MotionShape';
import Image from 'next/image';

export default function AnimatedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
    <main className="dark relative grid h-full w-full place-content-center bg-background text-foreground">
      {children}

      <MotionShape
        className="left-12 top-3/4"
        imageComp={<Image src="/shape-1.svg" alt="" width={283} height={283} />}
        containerRef={containerRef}
      />

      <MotionShape
        className="right-16 top-1/4"
        imageComp={<Image src="/shape-2.svg" alt="" width={283} height={283} />}
        containerRef={containerRef}
      />
    </main>
  );
}
