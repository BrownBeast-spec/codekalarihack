"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="text-foreground hover:text-foreground/80 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/pricing" 
            className="text-foreground hover:text-foreground/80 transition-colors"
          >
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
}
