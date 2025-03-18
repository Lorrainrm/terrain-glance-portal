
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavLink {
  name: string;
  href: string;
}

const links: NavLink[] = [
  { name: 'Overview', href: '#overview' },
  { name: 'Details', href: '#details' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Videos', href: '#videos' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // Find the current active section
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        // Safely cast to HTMLElement to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement; 
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionBottom = sectionTop + htmlSection.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
      setIsDrawerOpen(false);
    }
  };

  const renderNavLinks = () => (
    <ul className={isMobile ? "flex flex-col space-y-6 py-6" : "flex space-x-8"}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={cn(
              "text-sm font-medium transition-all duration-200 relative py-2 focus-ring",
              activeSection === link.href 
                ? "text-primary" 
                : "text-muted-foreground hover:text-primary"
            )}
          >
            {link.name}
            {activeSection === link.href && !isMobile && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="text-primary font-display font-bold text-xl sm:text-2xl focus-ring"
        >
          Terrain Elite
        </a>
        
        {isMobile ? (
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-sm border border-gray-200">
                <Menu className="h-5 w-5 text-primary" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="px-6 py-4">
              <div className="flex flex-col items-center">
                <h3 className="text-primary font-display font-bold text-xl mb-4">Menu</h3>
                {renderNavLinks()}
                <DrawerClose asChild>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="mt-6 inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 bg-primary text-white hover:bg-primary/90 focus-ring w-full"
                  >
                    Contact Us
                  </a>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <>
            <nav className="hidden md:block">
              {renderNavLinks()}
            </nav>
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={cn(
                "hidden sm:inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 focus-ring",
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white/20 backdrop-blur-lg text-primary border border-white/30 hover:bg-white/30"
              )}
            >
              Contact Us
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
