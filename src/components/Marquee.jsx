import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Marquee = ({
  items,
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
}) => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeContent = marqueeRef.current;
    const contentWidth = marqueeContent.scrollWidth;
    
    const duration = contentWidth / 50;

    gsap.set(marqueeContent, {
      x: reverse ? -contentWidth / 2 : 0,
    });

    const tl = gsap.timeline({
      repeat: -1,
      ease: "none",
    });

    if (reverse) {
      tl.fromTo(marqueeContent,
        { x: -contentWidth / 2 },
        { 
          x: 0, 
          duration: duration,
          ease: "none"
        }
      );
    } else {
      tl.fromTo(marqueeContent,
        { x: 0 },
        { 
          x: -contentWidth / 2, 
          duration: duration,
          ease: "none"
        }
      );
    }

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [items, reverse]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center font-light uppercase whitespace-nowrap ${className}`}
    >
      <div ref={marqueeRef} className="flex">
        {[...items, ...items, ...items].map((text, index) => (
          <span
            key={index}
            className="flex items-center px-8 md:px-16 gap-x-16 md:gap-x-32 text-nowrap"
          >
            {text} <Icon icon={icon} className={iconClassName} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;