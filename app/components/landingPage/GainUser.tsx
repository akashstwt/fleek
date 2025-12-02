"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const IconList = [
  {
    icon: "/svg/seo-icon.svg",
    description: "improve seo",
  },
  {
    icon: "/svg/bounce-icon.svg",
    description: "reduce bounce rates",
  },
  {
    icon: "/svg/hosting-icon.svg",
    description: "gain & retain more users ",
  },
];

type CardProp = {
  icon: string;
  description: string;
};

const Card: React.FC<CardProp> = (props) => {
  return (
    <div className="flex items-center gap-4 rounded-full border-t border-white/20 bg-white/10 p-2 pl-4">
      <Image src={props.icon} alt={props.description} loading="lazy" width={40} height={40} />
      <p className="text-white/70 text-md">{props.description}</p>
    </div>
  );
};

const GainUsers: React.FC = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [isVideoVisible, setVideoVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect viewport width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile view for screens < 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!videoRef.current || isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoVisible(true);
            observer.unobserve(videoRef.current!);
          }
        });
      },
      {
        rootMargin: "-50px",
        threshold: 0.1,
      }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section className="pt-10 sm:pt-20 sm:pb-16 overflow-hidden h-auto lg:h-[80vh] px-6 sm:px-2 lg:px-24 sm:py-10 mb-4 border-y border-white/20">
      <div className="grid md:grid-cols-2 md:gap-12 lg:gap-24 xl:gap-10" ref={videoRef}>
        {/* Left Side: Video (only for tablet and desktop) */}
        {!isMobile && (
          <div className="relative flex ml-0 md:ml-12 lg:ml-36 justify-center">
            <video
              className="pointer-events-none absolute left-[25%] -z-1 hidden md:block -translate-x-1/2 -translate-y-1/2 scale-[2.2] transform-gpu mix-blend-screen md:top-[65%] lg:top-[80%] xl:left-[35%]"
              width={460}
              height={460}
              autoPlay
              muted
              loop
              poster="/landing-page/globe.webp"
            >
              {isVideoVisible && <source src="https://fleek.network/media/globe_animation.mp4" type="video/mp4" />}
            </video>
          </div>
        )}

        {/* Right Side: Text and Features */}
        <div className="w-full md:w-[30vh] lg:w-[60vh] text-left">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold text-white">Gain more users</h3>
            <p className="text-white/70 text-lg">
              {"Your app needs to load fast, otherwise you'll lose customers. w3e runs your app in 100+ edge locations to ensure fast loading worldwide."}
            </p>
          </div>

          {/* Features List */}
          <div className="mt-8 flex flex-col gap-2">
            {IconList.map((item, index) => (
              <Card icon={item.icon} description={item.description} key={index} />
            ))}
          </div>

          {/* Globe Mobile SVG (only for mobile) */}
          {isMobile && (
            <div className="flex justify-center bottom-0 mt-20">
              <Image src="/svg/globe-mobile.svg" alt="Globe Mobile" width={300} height={300} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GainUsers;
