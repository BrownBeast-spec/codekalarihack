"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MorphingTextDemo from "@/components/MorphingTextDemo";
import StaggeredMenu from "@/components/ui/StaggeredMenu";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About Us', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Pricing', ariaLabel: 'View our pricing', link: '/pricing' }
];

export default function Home() {
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  useEffect(() => {
    let smoother;
    
    // Initialize smooth scroll
    if (smoothWrapperRef.current && smoothContentRef.current) {
      smoother = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current,
        content: smoothContentRef.current,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });
    }

    return () => {
      smoother?.kill();
    };
  }, []);

  return (
    <>
      {/* Fixed Background Video */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Forest.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Fixed Menu */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        displaySocials={false}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={false}
        colors={['#f97316', '#ea580c']}
        accentColor="#f97316"
        isFixed={true}
      />

      {/* Smooth Scroll Wrapper */}
      <div id="smooth-wrapper" ref={smoothWrapperRef}>
        <div id="smooth-content" ref={smoothContentRef}>
          {/* Scrollable Content */}
          <div className="relative">
            <section className="min-h-screen flex items-center justify-center px-4">
              <div className="text-center w-full flex flex-col items-center justify-center">
                {/* Main Title - Code Kalari */}
                <div 
                  style={{
                    fontFamily: '"Bodoni MT", "Libre Bodoni", "Didot", "Playfair Display", serif',
                    fontSize: 'clamp(60px, 10vw, 230px)',
                    color: '#F5EFE6',
                    textAlign: 'center',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    textShadow: `
                      2px 2px 0px rgba(0, 0, 0, 0.15),
                      3px 3px 0px rgba(0, 0, 0, 0.1),
                      4px 4px 0px rgba(0, 0, 0, 0.08),
                      5px 5px 8px rgba(0, 0, 0, 0.25)
                    `,
                    filter: 'drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.3))'
                  }}
                >
                  <MorphingTextDemo />
                </div>
              </div>
            </section>

            {/* Add more sections here for scrollable content */}
          
          </div>
        </div>
      </div>
    </>
  );
}
