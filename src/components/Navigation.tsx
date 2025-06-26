import { useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "../components/ui/button";
import { useTheme } from "../contexts/ThemeContext";
import LogoWhite from "../media/Portfolio-logo-white.png";
import LogoBlack from "../media/Portfolio-logo-black.png";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="github-bg-secondary border-b github-border sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {/* Logo toggles based on theme */}
                <img
                src={theme === "dark" ? LogoWhite : LogoBlack}
                alt="Logo"
                className="h-8 w-8 object-contain"
                />
              <span className="text-xl font-semibold github-text-primary">Bhavan Arimaan</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="github-text-primary hover:text-github-blue transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="github-hover"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden github-hover"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t github-border">
            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 github-hover rounded-md github-text-primary"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
      