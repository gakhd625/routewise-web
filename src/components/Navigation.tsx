import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const Navigation = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Download", href: "#download" },
    { name: "Support", href: "#support" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          {/* <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold text-foreground">BusTracker</span>
          </div> */}
          <Link to="/um,gae" className="flex items-center gap-3">
            <div className="w-10 h-10 overflow-hidden rounded-xl">
              <img
                src="/Images/ePara.png"
                alt="ePARA Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-foreground">ePARA</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm" className="shadow-glow">
              <Download className="mr-2 w-4 h-4" />
              Get App
            </Button>
          </div>
          
          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-card">
            <div className="px-6 py-6 space-y-4">
              {menuItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 space-y-3 border-t border-border/50">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Sign In
                </Button>
                <Button variant="default" size="sm" className="w-full shadow-glow">
                  <Download className="mr-2 w-4 h-4" />
                  Get App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;