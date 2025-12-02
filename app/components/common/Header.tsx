'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import NewLogo from '@/public/w3e.png'
import { Button } from '../ui/button'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, ); // Added lastScrollY to dependency array

  // Close menu on scroll
  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', closeMenuOnScroll);
    return () => {
      window.removeEventListener('scroll', closeMenuOnScroll);
    };
  }, [menuOpen]);

  return (
    <>
      <header
         className={`fixed top-5 left-10 right-10 rounded-full z-50 bg-black/30 border border-white/20 duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Mobile Header */}
          <div className="flex lg:hidden flex-col w-full">
            <div className="flex items-center justify-between px-5 py-3">
              <Link href="/" className="flex items-center w-[35px] h-[35px]">
                <Image
                  src={NewLogo}
                  alt="w3e"
                  width={35}
                  height={35}
                  className="w-[35px] h-[35px]"
                />
              </Link>
              <div className="flex items-center gap-3">
                <Button
                  variant="yellow"
                  size="icon"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="lg:hidden bg-[#C1FF72] hover:bg-[#b8f766] text-black rounded-xl w-10 h-10 p-2"
                >
                  {isNavOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex  items-center justify-between w-full px-6 py-1">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center w-[48px] h-[48px]">
                <Image
                  src={NewLogo}
                  alt="w3e"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px]"
                  priority
                />
              </Link>
              <nav className="flex items-center gap-3">
                <Link href="/">
                  <Button
                    variant="yellow"
                    className=" text-black rounded-xl px-6 py-1 text-sm font-medium"
                  >
                    Sentient
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="yellow"
                    className=" text-black rounded-xl px-6 py-1 text-sm font-medium"
                  >
                    Prototype
                  </Button>
                </Link>
                <Link href="/Agents">
                  <Button
                    variant="yellow"
                    className=" text-black rounded-xl px-6 py-1 text-sm font-medium"
                  >
                    AI Agent
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden ${
          isNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsNavOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setIsNavOpen(false)
          }
        }}
      >
        <div
          className={`absolute top-[6rem] left-0 right-0 bg-black transition-all duration-300 transform ${
            isNavOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsNavOpen(false)
            }
          }}
        >
          <div className="p-4 space-y-2">
            <Link
              href="/"
              className="block"
              onClick={() => setIsNavOpen(false)}
            >
              <Button
                variant="default"
                className="w-full bg-[#C1FF72] hover:bg-[#b8f766] text-black rounded-xl py-1.5 text-sm font-medium"
              >
                Sentient
              </Button>
            </Link>
            <Link
              href="/"
              className="block"
              onClick={() => setIsNavOpen(false)}
            >
              <Button
                variant="default"
                className="w-full bg-[#C1FF72] hover:bg-[#b8f766] text-black rounded-xl py-1.5 text-sm font-medium"
              >
                Prototype
              </Button>
            </Link>
            <Link
              href="/agents"
              className="block"
              onClick={() => setIsNavOpen(false)}
            >
              <Button
                variant="yellow"
                className="w-full text-black rounded-xl py-1.5 text-sm font-medium"
              >
                AI Agent
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
