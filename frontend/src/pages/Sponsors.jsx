"use client";

import CardNav from "@/components/ui/CardNav";
import Silk from "@/components/ui/Silk";
import ShinyText from "../components/ui/ShinyText";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import "./Sponsors.css";
import { Alice } from "next/font/google";

const navItems = [
  {
    label: "Explore",
    bgColor: "#1a1a1a",
    textColor: "#fff",
    links: [
      { label: "About", href: "/about", ariaLabel: "Learn about Code Kalari" },
      { label: "Events", href: "/events", ariaLabel: "View our events" },
      { label: "Projects", href: "/projects", ariaLabel: "See our projects" }
    ]
  },
  {
    label: "Community",
    bgColor: "#2a2a2a",
    textColor: "#fff",
    links: [
      { label: "Join Us", href: "/join", ariaLabel: "Join the community" },
      { label: "Teams", href: "/teams", ariaLabel: "Meet our teams" }
    ]
  },
  {
    label: "Resources",
    bgColor: "#3a3a3a",
    textColor: "#fff",
    links: [
      { label: "Blog", href: "/blog", ariaLabel: "Read our blog" },
      { label: "Docs", href: "/docs", ariaLabel: "View documentation" }
    ]
  }
];

export default function Sponsors() {
  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <CardNav 
          logo="/logo.png"
          logoAlt="Code Kalari"
          items={navItems}
          baseColor="transparent"
          menuColor="#ffffff"
          buttonBgColor="rgba(255, 255, 255, 0.2)"
          buttonTextColor="#ffffff"
        />
      </div>
      {/* Hero Section with Silk Background */}
    
      {/* Sponsors Section */}

      <section id="sponsors" className="sponsors-section">
        <h2
          className="Platinumh2"
          style={{ textAlign: "start" }}
        >
          Platinum Sponsors
        </h2>
        <div className="wrapper-toleft">
          <div className="itemleft leftitem1">
            <ShinyText text="State Bank of India" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem2">
            <ShinyText text="Bank of India" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem3">
            <ShinyText text="HDFC" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem4">
            <ShinyText text="Canara" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem5">
            <ShinyText text="Nvidia" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem6">
            <ShinyText text="Google" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem7">
            <ShinyText text="Facebook" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem8">
            <ShinyText text="Intel" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem9">
            <ShinyText text="Oracle" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem10">
            <ShinyText text="Amazon" disabled={false} speed={3} />
          </div>
        </div>

        <h2 className="Goldh2" style={{ textAlign: "start" }}>
          Gold Sponsors
        </h2>
        <div className="wrapper-toright">
          <div className="itemright rightitem1">
            <ShinyText text="Amazon" disabled={false} speed={3} />
          </div>
          <div className="itemright rightitem2">
            <ShinyText text="Oracle" disabled={false} speed={3} />
          </div>
          <div className="itemright rightitem3">
            <ShinyText text="Intel" disabled={false} speed={3} />
          </div>
          <div className="itemright rightitem4">
            <ShinyText text="Facebook" disabled={false} speed={3} />
          </div>
          <div className="itemright rightitem5">
            <ShinyText text="Google" disabled={false} speed={3} />
          </div>
          <div className="itemright rightitem6">
            <ShinyText text="Nvidia" disabled={false} speed={3} />
          </div>
          <div className="itemright rightitem7">
            <ShinyText text="Canara" disabled={false} speed={3} />
          </div>
          <div className="itemright rightitem8">
            <ShinyText text="HDFC" disabled={false} speed={3} />
          </div>
          <div className="itemright rightitem9">
            <ShinyText text="Bank of India" disabled={false} speed={3} />
          </div>
          <div className="itemright rightitem10">
            <ShinyText text="SBI" disabled={false} speed={3} />
          </div>
        </div>

        <h2 className="Silverh2" style={{ textAlign: "start"}}>
          Silver Sponsors
        </h2>
        <div className="wrapper-toleftsilver">
          <div className="itemleft leftitem1">
            <ShinyText text="State Bank of India" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem2">
            <ShinyText text="Bank of India" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem3">
            <ShinyText text="HDFC" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem4">
            <ShinyText text="Canara" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem5">
            <ShinyText text="Nvidia" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem6">
            <ShinyText text="Google" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem7">
            <ShinyText text="Facebook" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem8">
            <ShinyText text="Intel" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem9">
            <ShinyText text="Oracle" disabled={false} speed={3} />
          </div>
          <div className="itemleft leftitem10">
            <ShinyText text="Amazon" disabled={false} speed={3} />
          </div>
        </div>
      </section>
    </>
  );
}
