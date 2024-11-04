import React, { FC } from 'react';
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/animated-grid-pattern";

// Define the props interface
interface AnimatedGridPatternDemoProps {
 
  component: React.ComponentType;
}

export const AnimatedGridPatternDemo: FC<AnimatedGridPatternDemoProps> = ({  component: Component }) => {
  return (
    <div className="relative  w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
     
      {Component && <Component />} {/* Render the dynamic component prop if it exists */}
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
};
