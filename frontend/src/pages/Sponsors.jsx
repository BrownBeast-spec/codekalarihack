"use client";

import CardNav from "@/components/ui/CardNav";
import Silk from "@/components/ui/Silk";
import ShinyText from "../components/ui/ShinyText";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import "./Sponsors.css";
import { Alice } from "next/font/google";
import SponsorIcon from "@/components/ui/SponsorIcon";


const navItems = [
  {
    label: "Explore",
    bgColor: "#1a1a1a6e",
    textColor: "#fff",
    links: [
      { label: "About", href: "/about", ariaLabel: "Learn about Code Kalari" },
      { label: "Events", href: "/events", ariaLabel: "View our events" },
      { label: "Projects", href: "/projects", ariaLabel: "See our projects" }
    ]
  },
  {
    label: "Community",
    bgColor: "#1a1a1a6e",
    textColor: "#fff",
    links: [
      { label: "Join Us", href: "/join", ariaLabel: "Join the community" },
      { label: "Teams", href: "/teams", ariaLabel: "Meet our teams" }
    ]
  },
  {
    label: "Resources",
    bgColor: "#1a1a1a6e",
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

      <section className="rating-section">
        <div className="rating-badge">
          <span className="star">★</span>
          <p>Meet Our Sponsors</p>
        </div>
      </section>
      <section className="testimonials-section">

        <div className="wrapper-toright">
          <div className="item-right item1">
            <div className="testimonial-card">
              <SponsorIcon type="diamond" /> 
              <p className="testimonial-text">
                Wellnest’s coaching program helped me find balance in my busy
                life. I feel more energetic and confident every day.
              </p>
              <div className="testimonial-author">
                <img
                  src={'./logo.png'}
                  alt="Riya Sharma"
                  className="author-img"
                />
                <div>
                  <h4>Tanshiq</h4>
                  <p>Bengaluru</p>
                </div>
              </div>
            </div>
          </div>

          <div className="item-right item2">
            <div className="testimonial-card">
              <SponsorIcon type="platinum" /> 
              <p className="testimonial-text">
                The personalized wellness plan truly changed my lifestyle. My
                stress levels have gone down drastically.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt="Arjun Mehta"
                  className="author-img"
                />
                <div>
                  <h4>Sparx</h4>
                  <p>Pune</p>
                </div>
              </div>
            </div>
          </div>

          <div className="item-right item3">
            <div className="testimonial-card">
              <SponsorIcon type="gold" /> 
              <p className="testimonial-text">
                The meditation and diet guidance from Wellnest made me more
                focused and productive at work.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="Priya Nair" className="author-img" />
                <div>
                  <h4>Cipla</h4>
                  <p>Kochi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="item-right item4">
            <div className="testimonial-card">
              <SponsorIcon type="silver" /> 
              <p className="testimonial-text">
                I never thought wellness coaching could have such an impact. I
                feel healthier and happier than ever before.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt="Karan Patel"
                  className="author-img"
                />
                <div>
                  <h4>BBQ In</h4>
                  <p>Ahmedabad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="item-right item5">
            <div className="testimonial-card">
            <SponsorIcon type="silver" /> 
              <p className="testimonial-text">
                The yoga sessions and coaching at Wellnest gave me clarity and
                inner peace I was searching for.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="Ananya Gupta" className="author-img" />
                <div>
                  <h4>Addidas</h4>
                  <p>New Delhi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="item-right item6">
            <div className="testimonial-card">
              <SponsorIcon type="diamond" /> 
              <p className="testimonial-text">
                The team is supportive and motivating. My sleep has improved and
                I’ve built healthy routines.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="Rohit Verma" className="author-img" />
                <div>
                  <h4>Nike</h4>
                  <p>Mumbai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="item-right item7">
            <div className="testimonial-card">
          <SponsorIcon type="gold" /> 
              <p className="testimonial-text">
                The guidance helped me lose weight in a healthy way and gain
                confidence in myself again.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt=""
                  className="author-img"
                />
                <div>
                  <h4>Mimosa</h4>
                  <p>IIIT Kottayam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="item-right item8">
            <div className="testimonial-card">
             <SponsorIcon type="gold" /> 
              <p className="testimonial-text">
                Wellnest’s holistic approach towards mental and physical health
                is exactly what I needed.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt=""
                  className="author-img"
                />
                <div>
                  <h4>Amazon</h4>
                  <p>Gurugram</p>
                </div>
              </div>
            </div>
          </div>

          <div className="item-right item9">
            <div className="testimonial-card">
              <SponsorIcon type="silver" /> 
              <p className="testimonial-text">
                My anxiety levels have reduced, and I feel more in control of my
                daily life thanks to their sessions.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>US POLOS</h4>
                  <p>Hyderabad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="item-right item10">
            <div className="testimonial-card">
            <SponsorIcon type="platinum" /> 
              <p className="testimonial-text">
                This journey with this has been life-changing. I feel
                healthier, calmer, and more positive.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Peter Englands</h4>
                  <p>Nagpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper-toleft">
          <div className="item-left item1">
            <div className="testimonial-card">
            <SponsorIcon type="gold" /> 
              <p className="testimonial-text">
                The guidance helped me gain in a way and gain
                confidence in myself again.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Tommy Hilfiger</h4>
                  <p>Chennai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item2">
            <div className="testimonial-card">
            <SponsorIcon type="diamond" /> 
              <p className="testimonial-text">
                The personalized approach made all the difference. I finally
                feel like I’m on the right track.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt=""
                  className="author-img"
                />
                <div>
                  <h4>ALLEN SOLLY</h4>
                  <p>Bangalore</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item3">
            <div className="testimonial-card">
            <SponsorIcon type="silver" /> 
              <p className="testimonial-text">
                I never thought I could achieve this level. Thank
                you!
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Raymond</h4>
                  <p>Mumbai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item4">
            <div className="testimonial-card">
          <SponsorIcon type="diamond" /> 
              <p className="testimonial-text">
                The support has been invaluable. I’m so grateful
                for this service.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Central Bank of India</h4>
                  <p>Delhi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item5">
            <div className="testimonial-card">
            <SponsorIcon type="platinum" /> 
              <p className="testimonial-text">
                I’ve tried many programs, but approach is truly
                unique and effective.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Punjab National Bank</h4>
                  <p>Pune</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item6">
            <div className="testimonial-card">
            <SponsorIcon type="gold" /> 
              <p className="testimonial-text">
                I appreciate the holistic approach to hack. It’s made a real
                difference in my life.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt=""
                  className="author-img"
                />
                <div>
                  <h4>Axis Bank</h4>
                  <p>Noida</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item7">
            <div className="testimonial-card">
            <SponsorIcon type="gold" /> 
              <p className="testimonial-text">
                The personalized coaching has been a game changer for me.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt=""
                  className="author-img"
                />
                <div>
                  <h4>Bandhan Bank</h4>
                  <p>Bangalore</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item8">
            <div className="testimonial-card">
        <SponsorIcon type="diamond" /> 
              <p className="testimonial-text">
                I’ve never felt more supported in my journey.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>Bank of India</h4>
                  <p>Mumbai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item9">
            <div className="testimonial-card">
            <SponsorIcon type="silver" /> 
              <p className="testimonial-text">
                The community support is incredible. I feel like I belong.
              </p>
              <div className="testimonial-author">
                <img src="./logo.png" alt="" className="author-img" />
                <div>
                  <h4>HDFC</h4>
                  <p>Delhi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-left item10">
            <div className="testimonial-card">
            <SponsorIcon type="platinum" /> 
              <p className="testimonial-text">
                I’m amazed at the progress I’ve made in such a short time.
              </p>
              <div className="testimonial-author">
                <img
                  src="./logo.png"
                  alt=""
                  className="author-img"
                />
                <div>
                  <h4>State Bank of India</h4>
                  <p>Pune</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
