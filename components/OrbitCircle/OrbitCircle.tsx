import { OrbitingCircles } from "../magicui/orbiting-circles";
import { FaPython, FaReact, FaAws, FaJsSquare, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiNodedotjs } from "react-icons/si";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg     md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        My Skills
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={25}
        delay={0}
        radius={100} // Reduced inner circle radius for a more compact layout
      >
        <SiNextdotjs size={60} color="black" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={25}
        delay={10}
        radius={100}
      >
        <FaPython size={60} color="#306998" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={25}
        delay={20}
        radius={100}
      >
        <FaJsSquare size={60} color="#F7DF1E" />
      </OrbitingCircles>

      {/* Outer Circles (including Node.js and Express) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={200} // Reduced outer circle radius for a smaller layout
        duration={30}
        reverse
        delay={0} 
      >
        <FaReact size={60} color="#61DAFB" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={200}
        duration={30}
        delay={25} 
        reverse
      >
        <FaAws size={60} color="#FF9900" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={200}
        duration={30}
        delay={50} 
        reverse
      >
        <SiTailwindcss size={60} color="#06B6D4" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={200}
        duration={30}
        delay={75} 
        reverse
      >
        <SiNodedotjs size={60} color="#339933" /> {/* Node.js icon */}
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={200}
        duration={30}
        delay={100} 
        reverse
      >
        <FaServer size={60} color="#828282" /> {/* Express icon placeholder */}
      </OrbitingCircles>
    </div>
  );
}
