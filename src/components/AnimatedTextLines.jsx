import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const AnimatedTextLines = ({text, className}) => {
    const containerRef = useRef(null);
    const lineRefs = useRef([]);
    
    const lines = Array.isArray(text) ? text : [text];

    useGSAP(() => {
        if(lineRefs.current.length > 0) {
            gsap.from(lineRefs.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "back.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                }
            });
        }
    });

    return (
        <div ref={containerRef} className={`flex flex-col items-center text-center ${className}`}>
            {lines.map((line, index) => (
                <span 
                    key={index} 
                    ref={(el) => (lineRefs.current[index] = el)}
                    className="block leading-relaxed tracking-wide text-pretty"
                >
                    {line}
                </span>
            ))}
        </div>
    );
};
