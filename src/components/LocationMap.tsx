
import React from 'react';
import RevealAnimation from './ui/RevealAnimation';

const LocationMap: React.FC = () => {
  const locationFeatures = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Downtown",
      distance: "15 min drive"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Airport",
      distance: "25 min drive"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Shopping Mall",
      distance: "10 min drive"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
        </svg>
      ),
      title: "Schools",
      distance: "5 min drive"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Parks",
      distance: "Walking distance"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Highway Access",
      distance: "5 min drive"
    }
  ];

  return (
    <section id="location" className="py-16 md:py-24">
      <div className="section-container">
        <RevealAnimation>
          <div className="text-center mb-16">
            <span className="tag mb-3">Location</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prime Location</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Situated in a prime location with easy access to amenities and attractions,
              offering the perfect balance between privacy and convenience.
            </p>
          </div>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <RevealAnimation className="lg:col-span-2">
            <div className="glass-panel overflow-hidden rounded-2xl h-full">
              {/* Replace with an actual map or embed one */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937883!2d2.2922926156741447!3d48.85837360866236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1651066475353!5m2!1sen!2sus" 
                className="w-full h-full min-h-[300px] lg:min-h-[500px]" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <div className="glass-panel p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Nearby Attractions</h3>
              
              <div className="space-y-4">
                {locationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 py-2 border-b border-primary/10 last:border-b-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-primary/10">
                <h4 className="font-medium mb-2">Property Address</h4>
                <p className="text-muted-foreground">
                  123 Exclusive Drive<br />
                  Luxury Heights, CA 90210<br />
                  United States
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>
        
        <RevealAnimation delay={400}>
          <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white border border-primary/10 text-primary hover:bg-secondary transition-all duration-200 focus-ring">
              <span>Contact Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default LocationMap;
