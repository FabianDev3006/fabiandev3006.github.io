import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = ({ services }) => {
    useGSAP(() => {
        gsap.fromTo("#title-service-1", {
            xPercent: 20
        }, {
            xPercent: 8,
            scrollTrigger: {
                target: "#title-service-1",
                scrub: true,
                end: "+=300",
            },
        });
        gsap.fromTo("#title-service-2", {
            xPercent: -30
        }, {
            xPercent: 5,
            scrollTrigger: {
                target: "#title-service-2",
                scrub: true,
                end: "+=500",
            },
        });gsap.fromTo("#title-service-3", {
            xPercent: 100
        }, {
            xPercent: 0,
            scrollTrigger: {
                target: "#title-service-3",
                scrub: true,
                end: "+=700",
            },
        });gsap.fromTo("#title-service-4", {
            xPercent: -100
        }, {
            xPercent: 5,
            scrollTrigger: {
                target: "#title-service-4",
                scrub: true,
                end: "+=800",
            },
        });
    });
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive text-lg md:text-xl ">
      <div id="title-service-1" className="mb-8">
        <p>Technical Integration</p>
      </div>
      
      <div id="title-service-2" className="flex items-center justify-center gap-3 translate-x-16 mb-8">
        <p className="font-normal">Python Development</p>
        <div className="w-2 h-1 md:w-12 bg-gold" />
        <p>Automation</p>
      </div>
      
      <div id="title-service-3" className="flex items-center justify-center gap-3 translate-x-24 mb-8">
        <p>BIM workflows</p>
        <div className="w-2 h-1 md:w-12 bg-gold" />
        <p className="italic">APIs</p>
        <div className="w-2 h-1 md:w-12 bg-gold" />
        <p>Django & Databases</p>
      </div>
      <div id="title-service-4" className="flex items-center justify-center gap-3 -translate-x-24 mb-8">
        <p>Testing & CI</p>
        <div className="w-2 h-1 md:w-12 bg-gold" />
        <p>Git / GitHub</p>
        <div className="w-2 h-1 md:w-12 bg-gold" />
        <p>Team Workflow</p>
      </div>
    </section>
  )
}

export default ServiceSummary;