import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Careers", href: "#careers" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full z-40">
      {/* Navbar bar */}
      <div
        className={cn(
          "w-full transition-all duration-300",
          isScrolled ? "py-5 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a href="#top" className="flex items-center gap-x-6">
            <img
              src="/logo.svg"
              alt="Counts&Accounts Logo"
              className="h-20 w-auto align-middle"
            />
            <span className="text-4xl md:text-5xl font-bold text-primary relative z-10">
              <span className="text-glow text-foreground">Counts</span>&
              <span className="text-glow text-foreground">Accounts</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-xl text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-5 py-1 text-xl rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
              >
                Inquire Now
              </a>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/60 backdrop-blur-md shadow-md z-40 flex flex-col items-center justify-center space-y-8 text-xl transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-5 py-1 text-xl rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </nav>
  );
};
