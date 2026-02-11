import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-lg border-b shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="font-display font-bold text-2xl text-primary tracking-tight cursor-pointer hover:opacity-80 transition-opacity">
            Joma<span className="text-foreground">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("struggles")} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            My Story
          </button>
          <button 
            onClick={() => scrollToSection("gallery")} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Gallery
          </button>
          <Button 
            onClick={() => scrollToSection("support")}
            className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Support Me
          </Button>
        </div>
      </div>
    </nav>
  );
}
