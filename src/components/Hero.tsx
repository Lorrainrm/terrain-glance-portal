
import React from 'react';
import RevealAnimation from './ui/RevealAnimation';

const Hero: React.FC = () => {
  return (
    <section id="overview" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/80 via-transparent to-transparent -z-10" />
      
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <RevealAnimation>
              <span className="tag mb-4">Premium Property</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Exceptional Terrain & Luxury Living Space
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Discover an extraordinary living experience with our premium terrain and 
                expertly designed condominium. Where nature meets sophisticated architecture.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all duration-200 focus-ring"
                >
                  Inquire Now
                </a>
                <a 
                  href="#gallery" 
                  className="px-8 py-3 bg-white border border-primary/10 text-primary rounded-full font-medium hover:bg-secondary transition-all duration-200 focus-ring"
                >
                  View Gallery
                </a>
              </div>
            </RevealAnimation>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <RevealAnimation delay={200}>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] animate-image-glow">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                  alt="Luxury property exterior" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-2000"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10">
                <div className="glass-panel px-5 py-4 md:px-8 md:py-6 max-w-xs">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Premium Location</h3>
                      <p className="text-muted-foreground text-sm">Situated in an exclusive area with stunning views and excellent connectivity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        {/* Stats section */}
        <RevealAnimation delay={400}>
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="glass-panel p-6 text-center hover-lift">
              <div className="text-3xl md:text-4xl font-bold mb-2">5.2</div>
              <div className="text-muted-foreground text-sm">Acres of Land</div>
            </div>
            <div className="glass-panel p-6 text-center hover-lift">
              <div className="text-3xl md:text-4xl font-bold mb-2">2021</div>
              <div className="text-muted-foreground text-sm">Year Built</div>
            </div>
            <div className="glass-panel p-6 text-center hover-lift">
              <div className="text-3xl md:text-4xl font-bold mb-2">3,200</div>
              <div className="text-muted-foreground text-sm">Square Feet</div>
            </div>
            <div className="glass-panel p-6 text-center hover-lift">
              <div className="text-3xl md:text-4xl font-bold mb-2">4/3</div>
              <div className="text-muted-foreground text-sm">Bed/Bath</div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
