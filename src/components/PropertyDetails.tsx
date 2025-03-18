
import React from 'react';
import RevealAnimation from './ui/RevealAnimation';

const PropertyDetails: React.FC = () => {
  // Data for property details
  const terrainFeatures = [
    { title: "Total Area", value: "5.2 Acres" },
    { title: "Topography", value: "Gentle Slope" },
    { title: "Soil Type", value: "Loamy Sand" },
    { title: "Vegetation", value: "Mature Trees" },
    { title: "Water Features", value: "Natural Stream" },
    { title: "Elevation", value: "320 ft" },
    { title: "Zoning", value: "Residential" },
    { title: "Road Access", value: "Private Road" }
  ];
  
  const condoFeatures = [
    { title: "Year Built", value: "2021" },
    { title: "Building Size", value: "3,200 sq ft" },
    { title: "Bedrooms", value: "4" },
    { title: "Bathrooms", value: "3" },
    { title: "Floors", value: "2" },
    { title: "Heating", value: "Central, Radiant" },
    { title: "Cooling", value: "Central AC" },
    { title: "Garage", value: "2 Cars, Attached" }
  ];
  
  const amenities = [
    "Gourmet Kitchen", "Home Office", "Smart Home System", "Solar Panels",
    "Infinity Pool", "Outdoor Kitchen", "Fire Pit", "Garden",
    "Wine Cellar", "Fitness Room", "Home Theater", "Guest House"
  ];

  return (
    <section id="details" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <RevealAnimation>
          <div className="text-center mb-16">
            <span className="tag mb-3">Property Specifications</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Details</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive information about the terrain and condominium specifications,
              designed with precision and attention to detail.
            </p>
          </div>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <RevealAnimation delay={100}>
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Terrain Specifications
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {terrainFeatures.map((feature, index) => (
                  <div key={index} className="border-b border-primary/10 pb-3">
                    <span className="text-muted-foreground text-sm block">{feature.title}</span>
                    <span className="font-medium">{feature.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={200}>
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Condominium Specifications
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {condoFeatures.map((feature, index) => (
                  <div key={index} className="border-b border-primary/10 pb-3">
                    <span className="text-muted-foreground text-sm block">{feature.title}</span>
                    <span className="font-medium">{feature.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
        
        <RevealAnimation delay={300}>
          <div className="glass-panel p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Premium Amenities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
        
        <RevealAnimation delay={400}>
          <div className="mt-16 text-center">
            <a href="#gallery" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white border border-primary/10 text-primary hover:bg-secondary transition-all duration-200 focus-ring">
              <span>View Property Gallery</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default PropertyDetails;
