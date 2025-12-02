'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const features = [
    {
    icon: '/svg/edge-icon.svg',
    title: 'Build Seamlessly',
    description:
        'Using either the Platform, CLI, or SDK you can build how you want.',
    },
    {
    icon: '/svg/colaborate-icon.svg',
    title: 'Work Collaboratively',
    description:
        'Invite your team, share deploy previews, test builds and more.',
    },
    {
    icon: '/svg/concentric-circles-icon.svg',
    title: 'Deploy Globally',
    description: 'w3e automatically deploys your app to 100+ edge locations.',
    },
    {
    icon: '/svg/ddos-icon.svg',
    title: 'DDoS Protection',
    description: 'Effortlessly protect your site from DDoS attacks.',
    },
    {
    icon: '/svg/monitoring-icon.svg',
    title: 'Monitoring & Alerting',
    description: 'Get insights and alerts for your app & infra usage.',
    },
    {
    icon: '/svg/ssl-icon.svg',
    title: 'Domains & SSL',
    description:
        'Seamless domain management & free SSL certificates (Lets Encrypt).',
    },
];


const DeveloperExperience = () => {

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

  return (
    <section className=" text-white py-16 px-6 sm:px-24 md:px-36 lg:px-60 relative">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 sm:mb-24">
        Enjoy the developer experience
      </h2>

      {/* Background Connection Lines */}
      {!isMobile && (
      <div className="absolute inset-0 flex justify-center items-center mt-36 -z-10">
        <Image
          src="/svg/elliptical-squiggle-bg.svg"
          alt="background decoration"
          width={1500}
          height={1500}
          className="opacity-50"
        />
      </div>
      )}

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-black gap-6 z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 border-t border-gray-700 p-6 rounded-2xl flex flex-col items-start w-full h-full lg:h-[40vh] hover:shadow-lg transition-all"
          >
            <div className="p-2 rounded-xl mb-4 h-14 w-14">
              <Image src={feature.icon} alt={feature.title} width={60} height={60} />
            </div>
            <div className="w-full sm:w-[80%]">
            <h3 className="text-3xl sm:text-[28px] lg:text-[34px]  font-medium">{feature.title}</h3>
            </div>
            <div className="w-full mt-2">
            <p className="text-gray-400 text-base mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DeveloperExperience;
