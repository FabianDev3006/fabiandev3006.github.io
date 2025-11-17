import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
    const text="From Technical System Planning to Backend Engineering"
    const aboutText=`I’m a Technical Systemplaner with a background in Electrical Engineering, now working as a Python Backend Developer with a strong interest in BIM automation. I recently completed my backend development course at the Digital Career Institute, where I focused on Python, Django, and building RESTful APIs.

With hands-on experience in technical drawings and system planning, I bring an engineering mindset to software development structured, precise, and process-oriented. My goal is to combine my BIM experience with backend engineering to build tools, services, and integrations that streamline digital construction workflows.

I enjoy working with backend systems, exploring API design, and developing automation solutions that make complex processes more efficient. I am currently deepening my knowledge of backend architecture and BIM-related workflows and would love to grow in a role where both worlds meet.
`;
    const imgRef = useRef(null);
    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub:true ,
            },
            ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        WebkitClipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        WebkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 2,
        easse: "power4.out",
        scrollTrigger: {trigger: imgRef.current},
    }
    )

    });

    return ( <section 
        id="about" 
        className="min-h-screen bg-black rounded-b-4xl"
        >
            <AnimatedHeaderSection 
            subTitle={"How My Story Led Me to Backend Development"}
            title={"My Path"}
            text={text}
            textColor={"text-white"}  
            withScrollTrigger={true}
            />  
            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
            <img ref={imgRef} src="images/man.jpg" alt="man" className="w-md rounded-3xl" />
            <AnimatedTextLines text={aboutText} className={"w-full"} />
            </div>
        </section>
    );
};

export default About;