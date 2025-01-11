"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b bg-white relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="https://swu7aik9l9.ufs.sh/f/w1oZdaymV9eMDyMXYC3afpqdTeOXJ97Ajk8NzEWi36PvmVbS"
                alt="KoinX"
                className="h-6 contain"
                width={90}
                height={15}
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/crypto-taxes">Crypto Taxes</Link>
            <Link href="/free-tools">Free Tools</Link>
            <Link href="/resource-center">Resource Center</Link>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ top: "64px" }} // height of header
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/crypto-taxes"
                className="py-2 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Crypto Taxes
              </Link>
              <Link
                href="/free-tools"
                className="py-2 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Free Tools
              </Link>
              <Link
                href="/resource-center"
                className="py-2 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resource Center
              </Link>
              <div className="pt-2">
                <Button
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
