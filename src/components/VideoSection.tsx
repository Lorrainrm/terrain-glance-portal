
import React from 'react';
import RevealAnimation from './ui/RevealAnimation';

const VideoSection: React.FC = () => {
  // Video data
  const videos = [
    {
      id: "cDDrisx_crs",
      title: "Property Aerial View",
      thumbnail: "https://i.ytimg.com/vi/cDDrisx_crs/maxresdefault.jpg",
      description: "Stunning aerial footage of the property and surrounding landscape."
    },
    {
      id: "XTC2P79YU5o",
      title: "Interior Walkthrough",
      thumbnail: "https://i.ytimg.com/vi/XTC2P79YU5o/maxresdefault.jpg",
      description: "Tour the elegantly designed interior spaces of the condominium."
    },
    {
      id: "JZjAg6fK-BQ",
      title: "Landscape Features",
      thumbnail: "https://i.ytimg.com/vi/JZjAg6fK-BQ/maxresdefault.jpg",
      description: "Explore the natural beauty and landscape features of the terrain."
    }
  ];

  return (
    <section id="videos" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <RevealAnimation>
          <div className="text-center mb-16">
            <span className="tag mb-3">Video Tour</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Property Videos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the property through our immersive video tours, showcasing
              the beauty and features from every angle.
            </p>
          </div>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <div className="glass-panel overflow-hidden hover-lift">
                <div className="relative aspect-video group cursor-pointer">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.id}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </a>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        
        <RevealAnimation delay={400}>
          <div className="mt-16 text-center">
            <a href="#location" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white border border-primary/10 text-primary hover:bg-secondary transition-all duration-200 focus-ring">
              <span>View Property Location</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default VideoSection;
