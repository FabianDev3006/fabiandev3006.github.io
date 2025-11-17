import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Automation",
    "Scalability",
    "Reliability",
    "Integration",
    "Excellence",
  ];
  const items2 = [
    "contact Me",
    "contact Me",
    "contact Me",
    "contact Me",
    "contact Me",
  ];

  useGSAP(() => {
    // Kill any existing triggers first
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === containerRef.current) {
        trigger.kill();
      }
    });

    // Pin with proper end trigger
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top", // This should end when bottom hits top of viewport
      pin: true,
      pinSpacing: false,
      markers: false, // Set to true temporarily to debug
      anticipatePin: 1,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-8 md:gap-12 py-8 relative z-10" // Added relative z-10
    >
      <Marquee 
        items={items} 
        className="text-white bg-black py-4"
        iconClassName="text-xl"
      />
      
      <div className="overflow-hidden font-light text-center contact-text-responsive px-4 flex-grow flex items-center justify-center">
        <p className="text-4xl md:text-6xl lg:text-7xl leading-tight">
          " Let's automate, <br />
          <span className="font-normal">optimize</span> &{" "}
          <span className="italic">build</span> <br />
          smarter solutions <span className="text-gold">together</span> "
        </p>
      </div>
      
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2 border-gray-300 py-4"
        iconClassName="stroke-gold stroke-2 text-primary text-lg"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;