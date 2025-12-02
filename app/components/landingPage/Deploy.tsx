'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const IconList = [
  {
    icon: "/svg/git-integration-icon.svg",
    description: "GIT INTEGRATION, ACTIONS & CHECK RUNS",
  },
  {
    icon: "/svg/zig-zag-icon.svg",
    description: "DEPLOY PREVIEWS WITH EVERY PULL REQUEST",
  },
  {
    icon: "/svg/ns-icon.svg",
    description: "AUTOMATIC UPDATES ON EVERY PUSH, WITH ZERO DOWNTIME",
  },
];

type CardProps = {
  icon: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, description }) => {
  return (
    <div className="bg-white/10 border-t flex sm:flex-col flex-row items-center sm:items-start border-white/10 p-2 sm:p-6 rounded-2xl w-full sm:w-1/3 lg:w-1/3">
      <div className="bg-black/40 border w-10 h-10 sm:w-14 sm:h-14 border-white/20 rounded-xl p-2 mb-0 sm:mb-4">
        <Image src={icon} alt={description} width={40} height={40} />
      </div>
      <p className="text-xs sm:text-xs lg:text-sm ml-3 sm:ml-0 text-gray-300">{description}</p>
    </div>
  );
};

const DeployFlash = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Keep mobile view unchanged
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-black h-auto sm:h-[70vh] border-y border-gray-500 flex flex-col md:flex-row text-white justify-between py-16 px-8 md:px-24 lg:px-60">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Deploy in a flash</h2>
          <p className="text-gray-400 mt-3 text-lg">
            Link your app or agent&apos;s repo and go live. <br />
            Deploy from a Git Provider or the w3e CLI.
          </p>
        </div>

        {isMobile && (
          <div className="flex items-start justify-end w-full mt-10 mb-10">
            <Image src="/svg/deploy-to-repo.svg" alt="Auto Updates" width={425} height={425} />
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {IconList.map((item, index) => (
            <Card key={index} icon={item.icon} description={item.description} />
          ))}
        </div>
      </div>

      {/* Right Side */}
      {!isMobile && (
        <div className="flex items-start justify-end w-full md:w-1/2">
          <Image src="/svg/deploy-to-repo.svg" alt="Auto Updates" width={425} height={425} />
        </div>
      )}
    </section>
  );
}

export default DeployFlash;
