"use client";

import { AdvisorsSection } from "../components/AdvisorsSection";
import { CompliantSection } from "../components/CompliantSection";
import { DiverseAssetSection } from "../components/DiverseAssetSection";
import { FaqSection } from "../components/FaqSection";
import { Hero } from "../components/Hero";
import { ReadyToInvestSection } from "../components/ReadyToInvestSection";
import { Testimonials } from "../components/Testimonials";
import { WhySection } from "../components/WhySection";
import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { ALTERN8_CUSTOMER_TESTIMONIALS } from "../config/config";
import { Footer } from "@/components/Footer";

const useSmoothScroll = () => {
  const smoothScrollTo = (targetRef: React.RefObject<HTMLElement>) => {
    if (targetRef && targetRef.current) {
      const targetPosition =
        targetRef.current.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duration in milliseconds
      let startTime: number | null = null;

      const smoothScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(smoothScroll);
      };

      const ease = (t: number, b: number, c: number, d: number): number => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(smoothScroll);
    }
  };

  return smoothScrollTo;
};

export default function Navbar() {
  const smoothScrollTo = useSmoothScroll();
  const ReadyToInvestSectionRef = useRef<HTMLDivElement>(null);
  const FaqSectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
        <div className="w-full max-h-20 mx-auto px-10 ">
          <div className="flex justify-between h-20 items-center">
            <Link href="#" className="flex items-center" prefetch={false}>
              <img alt="navbar logo" src="/Alter8_nav_logo.svg" />
            </Link>
            <nav className="hidden md:flex gap-10">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(ReadyToInvestSectionRef);
                }}
                className="font-medium flex items-center text-sm transition-colors hover:underline"
              >
                Invest
              </a>
              <Link
                href="/about-us"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
              >
                About Us
              </Link>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(FaqSectionRef);
                }}
                className="font-medium flex items-center text-sm transition-colors hover:underline"
              >
                Contact Us
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
              >
                Login
              </a>
              <Button variant={"outline"}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(FaqSectionRef);
                  }}
                  className="font-medium flex items-center text-sm transition-colors"
                >
                  Reserve Access
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <Hero />
      <WhySection />
      <ReadyToInvestSection ref={ReadyToInvestSectionRef} />
      <DiverseAssetSection />
      <Testimonials name="Patrons Testimonial" data={ALTERN8_CUSTOMER_TESTIMONIALS} whichTestimonial={0}/>
      

      <AdvisorsSection />
      {/* <div className=" w-[90vw] h-[400px] mx-auto sm:w-[500px] sm:h-[400px] my-10">
        <PieChart />
      </div> */}
      <CompliantSection />
      <FaqSection ref={FaqSectionRef} />
      <Footer />
    </>
  );
}
