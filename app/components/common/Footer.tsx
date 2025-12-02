import Link from "next/link";
import Image from "next/image";
import NewLogo from "@/public/w3e.png";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/20 text-white lg:h-[50vh] py-10 px-6 sm:px-24 lg:px-60">
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0">
        
        {/* Left Section - Logo & Status */}
        <div className="text-center md:text-left">
        <Link href="/" className="flex items-center w-[50px] h-[50px]">
                <Image
                  src={NewLogo}
                  alt="w3e"
                  width={50}
                  height={50}
                />
          </Link>
          <p className="text-gray-400 mt-2">Deploy autonomous apps and AI agents.</p>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            {/* Social Icons (Replace # with actual links) */}
            <Link href="#"><Image src={"/svg/github-navbar-icon.svg"} alt={"Github"} height={30} width={30} className="text-gray-400 hover:text-white text-2xl"/></Link>
            <Link href="#"><FaXTwitter height={30} width={30} className="text-gray-400 hover:text-white text-2xl"/></Link>
            <Link href="#"><FaDiscord height={30} width={30} className="text-gray-400 hover:text-white text-2xl"/></Link>
          </div>
          {/* Status Indicator */}
          <div className="mt-4 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm">
            <span className="bg-green-500 w-3 h-3 rounded-full"></span>
            <span>All systems operational</span>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        <div>
            <h3 className="text-gray-400 uppercase text-sm mb-3">Product</h3>
            <div className="space-y-2"> {/* This adds spacing between links */}
            <Link href="#"><span className="block hover:text-white leading-loose">AI agent hosting</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Web app hosting</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">w3e Machines</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">w3e Functions</span></Link>
            </div>
        </div>
        
        <div>
            <h3 className="text-gray-400 uppercase text-sm mb-3">Developers</h3>
            <div className="space-y-2">
            <Link href="#"><span className="block hover:text-white leading-loose">w3e Network</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Changelog</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">GitHub</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Status</span></Link>
            </div>
        </div>

        <div>
            <h3 className="text-gray-400 uppercase text-sm mb-3">Resources</h3>
            <div className="space-y-2">
            <Link href="#"><span className="block hover:text-white leading-loose">Documentation</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Media kit</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Guides</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Support</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Report abuse</span></Link>
            </div>
        </div>

        <div>
            <h3 className="text-gray-400 uppercase text-sm mb-3">Company</h3>
            <div className="space-y-2">
            <Link href="#"><span className="block hover:text-white leading-loose">Blog</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Pricing</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Careers</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">About</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Terms of Service</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Privacy Policy</span></Link>
            <Link href="#"><span className="block hover:text-white leading-loose">Contact us</span></Link>
            </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
