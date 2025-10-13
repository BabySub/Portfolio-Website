import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, Building, GraduationCap, Menu, X, Mail } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "experience", label: "Experience", icon: Building },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 hidden md:block ${
          isScrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div
          className={`bg-card/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-card flex items-center space-x-1 transition-all duration-300 ${
            isScrolled ? "shadow-card-hover" : ""
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-primary/10 ${
                  isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
                {isActive && (
                  <div className="absolute inset-0 bg-primary rounded-full -z-10 animate-scale-in" />
                )}
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Mobile/Tablet Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-card/70 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-bold bg-text-gradient bg-clip-text">
             Subham's Portfolio
            </div>

            <div className="flex items-center gap-2">
              {/* Theme toggle (icon only for mobile) */}
              <ThemeToggle variant="icon" />

              {/* Hamburger */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-primary/10"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="bg-card/70 backdrop-blur-md border-b border-border/50 animate-fade-in">
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full justify-start hover:bg-primary/10"
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for mobile */}
      <div className="h-16 md:h-0" />

      {/* Desktop floating theme toggle */}
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Navigation;
