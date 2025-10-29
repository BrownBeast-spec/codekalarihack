import CardNav from "@/components/ui/CardNav";

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

export default function About() {
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
          About Us
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-6 text-slate-300">
            Welcome to Code Kalari - where traditional wisdom meets modern technology.
          </p>
          <p className="text-lg mb-4 text-slate-400">
            We are a community dedicated to fostering innovation and excellence in software development.
            Our mission is to empower developers with knowledge and skills to create impactful solutions.
          </p>
          <p className="text-lg text-slate-400">
            Join us on this journey of continuous learning and growth.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
