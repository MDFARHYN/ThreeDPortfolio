import { cn } from "@/lib/utils";
import {Marquee} from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Michael Roberts",
    username: "@michael_rob",
    body: "Farhan Ahmed helped us build a custom AI chatbot that’s revolutionized our customer support. His expertise in AI was evident from the start. Highly recommend his services!",
    img: "/image_1.png",
  },
  {
    name: "Emily Clarkson",
    username: "@em_clarkson",
    body: "Farhan’s web development skills are top-notch. He turned our ideas into a smooth, responsive website that our clients love. I couldn't be happier with the results!",
    img: "/image_2.png",
  },
  {
    name: "Liam Nelson",
    username: "@liam_nelson",
    body: "Amazing work with Python! Farhan developed an efficient backend for our application, making it faster and more scalable. Truly a Python expert.",
    img: "/image_3.png",
  },
  {
    name: "Sophia Wang",
    username: "@sophia_wang",
    body: "I was impressed with Farhan Ahmed’s attention to detail. He built a web application that streamlined our operations. The entire process was seamless, and he was very responsive!",
    img: "/image_4.png",
  },
  {
    name: "Alex Turner",
    username: "@alex_turner",
    body: "Farhan’s AI chatbot solution brought a whole new level of interactivity to our website. It was exactly what we needed to engage our users more effectively.",
    img: "/image_5.png",
  },
  {
    name: "Rachel Green",
    username: "@rach_green",
    body: "Farhan's Python development services are the best we’ve experienced. The automated solutions he built saved us countless hours each week. Absolutely recommend!",
    img: "/image_6.png",
  },
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {/* Title Section */}
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-bold text-black dark:text-white mb-4 mt-5'>What My Clients Say</h1>
        <p className='text-lg text-black dark:text-white'>Hear from my clients about their experiences and the quality of service I provide.</p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/4 md:w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/4 md:w-1/3 bg-gradient-to-l from-white dark:from-background"></div>

    </div>
  );
}
