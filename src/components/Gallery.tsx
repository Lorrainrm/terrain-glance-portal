
import React, { useState } from 'react';
import RevealAnimation from './ui/RevealAnimation';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Image data for the gallery
  const images = [
    {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Front view of the property",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Backyard with pool",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Living room",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Kitchen area",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Aerial view",
      category: "Aerial"
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Front view at dusk",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Master bedroom",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Bathroom",
      category: "Interior"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="section-container">
        <RevealAnimation>
          <div className="text-center mb-16">
            <span className="tag mb-3">Visual Tour</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Property Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our property through this collection of high-quality images showcasing
              both the terrain and condominium features.
            </p>
          </div>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <RevealAnimation key={index} delay={index * 50}>
              <div 
                className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer hover-lift"
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-white text-sm font-medium">{image.category}</span>
                  <span className="text-white/90 text-lg">{image.alt}</span>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none">
            <img 
              src={selectedImage || ''} 
              alt="Large view" 
              className="w-full h-auto object-contain rounded-lg max-h-[80vh]"
            />
          </DialogContent>
        </Dialog>
        
        <RevealAnimation delay={400}>
          <div className="mt-16 text-center">
            <a href="#videos" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white border border-primary/10 text-primary hover:bg-secondary transition-all duration-200 focus-ring">
              <span>Watch Property Videos</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Gallery;
