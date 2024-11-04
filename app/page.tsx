import Image from "next/image";
import { GlobeDemo } from "@/components/Globe/Globe";
import { CoverDemo } from "@/components/CoverTitle/CoverTitle";
import { AnimatedPinDemo } from "@/components/3Dpin/ThreeDpin";
import { OrbitingCirclesDemo } from "@/components/OrbitCircle/OrbitCircle";
import { AnimatedListDemo } from "@/components/AnimateList/AnimateList";
import { FaPython, FaAws, FaReact, FaJsSquare, FaSpider, FaBolt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPostman, SiPandas, SiTensorflow, SiGraphql, SiDjango } from "react-icons/si";
import {AnimatedGridPatternDemo}  from "@/components/GridBackGround/GridBackGround";
import JobExperience from "@/components/JobExprience/JobExprience"
import {MarqueeDemo} from "@/components/MyClientReviews/MyClientReviews"
import {ThreeDCardDemo} from "@/components/Card3D/Card3D"
import {StickyScrollRevealDemo} from "@/components/StickyScrollReveal/StickyScrollReveal"
export default function Home() {
  const notifications = [
    {
      name: "Python",
      description: "Programming language for web, AI, and data science",
      time: "6+ years experience",
      icon: (
        <div
          style={{
            backgroundColor: "#306998",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaPython color="white" size={36} />
        </div>
      ),
      color: "#306998",
    },
    {
      name: "Django",
      description: "Python web framework for rapid development",
      time: "6+ years experience",
      icon: (
        <div
          style={{
            backgroundColor: "#092E20",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SiDjango color="white" size={36} />
        </div>
      ),
      color: "#092E20",
    },
    {
      name: "FastAPI",
      description: "High-performance web framework for building APIs",
      time: "6+ years experience",
      icon: (
        <div
          style={{
            backgroundColor: "#009688",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaBolt color="white" size={36} />
        </div>
      ),
      color: "#009688",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for styling",
      time: "3+ years experience",
      icon: (
        <div
          style={{
            backgroundColor: "#06B6D4",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SiTailwindcss color="white" size={36} />
        </div>
      ),
      color: "#06B6D4",
    },
    {
      name: "JavaScript",
      description: "Core language for frontend and backend web development",
      time: "3+ years experience",
      icon: (
        <div
          style={{
            backgroundColor: "#F7DF1E",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaJsSquare color="black" size={36} />
        </div>
      ),
      color: "#F7DF1E",
    },
    {
      name: "AWS",
      description: "Cloud computing platform for hosting and services",
      time: "6+ year experience",
      icon: (
        <div
          style={{
            backgroundColor: "#FF9900",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaAws color="white" size={36} />
        </div>
      ),
      color: "#FF9900",
    },
    {
      name: "Next.js",
      description: "React framework for production web applications",
      time: "3+ years experience",
      icon: (
        <div
          style={{
            backgroundColor: "#000000",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SiNextdotjs color="white" size={36} />
        </div>
      ),
      color: "#000000",
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      time: "3+ years experience",
      icon: (
        <div
          style={{
            backgroundColor: "#61DAFB",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaReact color="white" size={36} />
        </div>
      ),
      color: "#61DAFB",
    },
    {
      name: "Backend Development",
      description: "Building and managing server-side applications",
      time: "6+ years experience",
      icon: (
        <div
          style={{
            backgroundColor: "#4CAF50",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SiNodedotjs color="white" size={36} />
        </div>
      ),
      color: "#4CAF50",
    },
    {
      name: "Web Scraping",
      description: "Extracting data from websites using automation",
      time: "6+ year experience",
      icon: (
        <div
          style={{
            backgroundColor: "#FF4500",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaSpider color="white" size={36} />
        </div>
      ),
      color: "#FF4500",
    },
    {
      name: "AI Projects",
      description: "Creating AI models and solutions",
      time: "3+ year experience",
      icon: (
        <div
          style={{
            backgroundColor: "#8B0000",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SiTensorflow color="white" size={36} />
        </div>
      ),
      color: "#8B0000",
    },
    {
      name: "Data Cleaning and Analysis",
      description: "Processing and analyzing data for insights",
      time: "6+ years experience",
      icon: (
        <div
          style={{
            backgroundColor: "#4B0082",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SiPandas color="white" size={36} />
        </div>
      ),
      color: "#4B0082",
    },
    {
      name: "API Development",
      description: "Designing and implementing APIs",
      time: "6+ years experience",
      icon: (
        <div
          style={{
            backgroundColor: "#FF6C37",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SiPostman color="white" size={36} />
        </div>
      ),
      color: "#FF6C37",
    },
    {
      name: "GraphQL",
      description: "API query language for fetching specific data",
      time: "1 year experience",
      icon: (
        <div
          style={{
            backgroundColor: "#E10098",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SiGraphql color="white" size={36} />
        </div>
      ),
      color: "#E10098",
    },
  ];
  
  const cardData = [
    {
      title: 'AI Chat Bot for Business Solutions',
      subtitle: 'Developed by Farhan Ahmed, this open-source AI Chat Bot helps businesses efficiently handle customer queries. Built with the sentence-transformers/all-MiniLM-L6-v2 model, it delivers quick, relevant responses for a seamless customer experience.',
      imageUrl: "/ai_chat_bot.webp",
      tryNowLink: 'https://github.com/MDFARHYN/AiChatBot', // Primary link
      buttonLink: 'https://github.com/MDFARHYN/AiChatBot', // Secondary button link
      tryNowText: 'Explore Project',
      buttonText: 'View on GitHub',
    },
    {
      title: 'Simple Next.js Admin Panel',
      subtitle: 'A straightforward Next.js admin panel designed for easy product uploads and management. This interface simplifies adding, editing, and organizing products for efficient backend control.',
      imageUrl: "/product_upload.webp",
      tryNowLink: 'https://mdfarhyn.github.io/NextjsEcomm-Admin/myaccount',
      buttonLink: 'https://github.com/MDFARHYN/NextjsEcomm-Admin', // Secondary button link
      tryNowText: 'Try it Out',
      buttonText: 'View on GitHub',
    },
    {
      title: 'E-commerce Solution',
      subtitle: 'A full-fledged e-commerce solution with features such as product listing, cart functionality, and secure checkout, built with Django and Next.js.',
      imageUrl: "/ecommerce_solution.webp",
      tryNowLink: '#', // Primary link
      buttonLink: '#', // Secondary button link
      tryNowText: 'Learn More',
      buttonText: 'Learn More',
    },
  ];
  return (
    <>
      <CoverDemo />
      <AnimatedPinDemo />
      <GlobeDemo />
      <OrbitingCirclesDemo />
      <AnimatedListDemo notifications={notifications} />
       <AnimatedGridPatternDemo component={JobExperience} />
       <MarqueeDemo/>
       <div className='text-center mt-16'>
        <h1 className='text-4xl font-extrabold text-black dark:text-white mb-2'>Projects</h1>
        <p className='text-2xl text-black dark:text-white'>Things I’ve built so far</p>
      </div>
       <div className="flex flex-col justify-center gap-8 p-4 ">
       <div></div>
      {cardData.map((card, index) => (
        <ThreeDCardDemo
        key={index}
        title={card.title}
        subtitle={card.subtitle}
        imageUrl={card.imageUrl}
        tryNowLink={card.tryNowLink}
        buttonLink={card.buttonLink} // Passing buttonLink dynamically
        tryNowText={card.tryNowText}
        buttonText={card.buttonText}
        />
      ))}
    </div>
   <StickyScrollRevealDemo/>
     </>
  );
}
