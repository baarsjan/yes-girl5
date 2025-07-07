import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

  


 function PhotosSection() {
  
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState(0);


// Performance photos array
  const performancePhotos = [
    { src: '/livephotos/frascati_gavin viano_003.jpg', alt: 'YES GIRL Performance - Intimate moment on stage' },
    { src: '/livephotos/frascati_gavin viano_006.jpg', alt: 'YES GIRL Performance - Dynamic duo in action' },
    { src: '/livephotos/frascati_gavin viano_012.jpeg', alt: 'YES GIRL Performance - Emotional expression' },
    { src: '/livephotos/frascati_gavin viano_017.jpg', alt: 'YES GIRL Performance - Stage lighting magic' },
    { src: '/livephotos/frascati_gavin viano_019.jpg', alt: 'YES GIRL Performance - Powerful moment' },
    { src: '/livephotos/frascati_gavin viano_023.jpg', alt: 'YES GIRL Performance - Theatrical intensity' },
    { src: '/livephotos/frascati_gavin viano_024.jpg', alt: 'YES GIRL Performance - Raw emotion' },
    { src: '/livephotos/frascati_gavin viano_025.jpeg', alt: 'YES GIRL Performance - Connection on stage' },
    { src: '/livephotos/frascati_gavin viano_027.jpg', alt: 'YES GIRL Performance - Artistic expression' },
    { src: '/livephotos/frascati_gavin viano_036.jpg', alt: 'YES GIRL Performance - Dramatic lighting' },
    { src: '/livephotos/frascati_gavin viano_037.jpeg', alt: 'YES GIRL Performance - Performance energy' },
    { src: '/livephotos/frascati_gavin viano_040.jpeg', alt: 'YES GIRL Performance - Stage presence' },
    { src: '/livephotos/frascati_gavin viano_042.jpg', alt: 'YES GIRL Performance - Theatrical moment' },
    { src: '/livephotos/frascati_gavin viano_046.jpg', alt: 'YES GIRL Performance - Emotional depth' },
    { src: '/livephotos/frascati_gavin viano_049.jpeg', alt: 'YES GIRL Performance - Dynamic performance' },
    { src: '/livephotos/frascati_gavin viano_052.jpeg', alt: 'YES GIRL Performance - Artistic vision' },
    { src: '/livephotos/frascati_gavin viano_054.jpeg', alt: 'YES GIRL Performance - Stage artistry' },
    { src: '/livephotos/frascati_gavin viano_067.jpeg', alt: 'YES GIRL Performance - Performance magic' },
    { src: '/livephotos/frascati_gavin viano_073.jpg', alt: 'YES GIRL Performance - Theatrical excellence' },
    { src: '/livephotos/frascati_gavin viano_076.jpeg', alt: 'YES GIRL Performance - Emotional journey' },
    { src: '/livephotos/frascati_gavin viano_077.jpeg', alt: 'YES GIRL Performance - Stage dynamics' },
    { src: '/livephotos/frascati_gavin viano_078.jpeg', alt: 'YES GIRL Performance - Performance intensity' },
    { src: '/livephotos/frascati_gavin viano_079.jpeg', alt: 'YES GIRL Performance - Artistic moment' },
    { src: '/livephotos/frascati_gavin viano_082.jpeg', alt: 'YES GIRL Performance - Stage emotion' },
    { src: '/livephotos/frascati_gavin viano_084.jpeg', alt: 'YES GIRL Performance - Performance art' },
    { src: '/livephotos/frascati_gavin viano_086.jpeg', alt: 'YES GIRL Performance - Theatrical power' },
    { src: '/livephotos/frascati_gavin viano_088.jpeg', alt: 'YES GIRL Performance - Stage connection' },
    { src: '/livephotos/frascati_gavin viano_089.jpeg', alt: 'YES GIRL Performance - Performance energy' },
    { src: '/livephotos/frascati_gavin viano_090.jpeg', alt: 'YES GIRL Performance - Artistic expression' },
    { src: '/livephotos/frascati_gavin viano_091.jpeg', alt: 'YES GIRL Performance - Stage presence' },
    { src: '/livephotos/frascati_gavin viano_092.jpeg', alt: 'YES GIRL Performance - Emotional performance' },
    { src: '/livephotos/frascati_gavin viano_093.jpeg', alt: 'YES GIRL Performance - Theatrical moment' },
    { src: '/livephotos/frascati_gavin viano_094.jpeg', alt: 'YES GIRL Performance - Performance finale' }
  ];

  // Removed auto-advance carousel - now only manual navigation

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % performancePhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + performancePhotos.length) % performancePhotos.length);
  };

  const openLightbox = (index: number) => {
    setLightboxPhotoIndex(index);
    setIsLightboxOpen(true);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    // Restore body scroll when lightbox is closed
    document.body.style.overflow = 'unset';
  };

  const nextLightboxPhoto = () => {
    setLightboxPhotoIndex((prev) => (prev + 1) % performancePhotos.length);
  };

  const prevLightboxPhoto = () => {
    setLightboxPhotoIndex((prev) => (prev - 1 + performancePhotos.length) % performancePhotos.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'ArrowLeft') {
          prevLightboxPhoto();
        } else if (e.key === 'ArrowRight') {
          nextLightboxPhoto();
        } else if (e.key === 'Escape') {
          closeLightbox();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen]);
  return (  
    <section id="photos" className="bg-gray-900 text-white py-16 px-6 relative overflow-hidden">
      {/* Background Abstract Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#eb3d92]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#eb3d92]/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center font-lubalin font-medium">
          Photos
        </h2>
        <p className="text-center text-gray-400 mb-12 font-lubalin font-light">
          Photography: <a 
            href="https://www.linkedin.com/in/bylilarodrigues/?originalSubdomain=nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#eb3d92] hover:text-[#d13582] transition-colors duration-300 hover:underline"
          >
            Lila Rodrigues
          </a>
        </p>

        {/* Main Carousel - Changed to Square */}
        <div className="relative mb-12">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group max-w-2xl mx-auto">
            {/* Main Image */}
            <img 
              src={performancePhotos[currentPhotoIndex].src}
              alt={performancePhotos[currentPhotoIndex].alt}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              onError={(e) => {
                console.error('Image failed to load:', performancePhotos[currentPhotoIndex].src);
              }}
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#eb3d92]/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm nav-button"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm nav-button"
            >
              <ChevronRight size={24} />
            </button>

            {/* Expand Button */}
            <button 
              onClick={() => openLightbox(currentPhotoIndex)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm nav-button"
            >
              <Maximize2 size={20} />
            </button>

            {/* Photo Counter */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm font-lubalin font-light photo-caption">
              {currentPhotoIndex + 1} / {performancePhotos.length}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-1 flex-wrap">
            {performancePhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhotoIndex(index)}
                className={`progress-dot w-1 h-1 rounded-full transition-all duration-300 ${
                  index === currentPhotoIndex 
                    ? 'bg-[#eb3d92] w-3 active' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center font-lubalin font-medium">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {performancePhotos.slice(0, 12).map((photo, index) => (
              <div 
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group thumbnail-hover"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Thumbnail failed to load:', photo.src);
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Maximize2 size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className={`absolute inset-0 ring-2 ring-transparent ${index === currentPhotoIndex ? 'ring-[#eb3d92]' : ''} transition-all duration-300`}></div>
              </div>
            ))}
          </div>
          
          {performancePhotos.length > 12 && (
            <div className="text-center mt-6">
              <button 
                onClick={() => openLightbox(0)}
                className="bg-[#eb3d92] hover:bg-[#d13582] text-white px-6 py-3 rounded-full font-lubalin font-medium transition-all duration-300 hover:scale-105"
              >
                View All {performancePhotos.length} Photos
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden lightbox-enter">
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 nav-button z-10"
          >
            <X size={24} />
          </button>

          {/* Photo Counter */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm font-lubalin font-light photo-caption z-10">
            {lightboxPhotoIndex + 1} / {performancePhotos.length}
          </div>

          {/* Main Image Container */}
          <div className="flex-1 flex items-center justify-center w-full px-4 pb-20">
            <img 
              src={performancePhotos[lightboxPhotoIndex].src}
              alt={performancePhotos[lightboxPhotoIndex].alt}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                console.error('Lightbox image failed to load:', performancePhotos[lightboxPhotoIndex].src);
              }}
            />
          </div>

          {/* Navigation Controls Below Photo */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-6 z-10">
            <button 
              onClick={prevLightboxPhoto}
              className="bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 nav-button"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextLightboxPhoto}
              className="bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 nav-button"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
 }
export default PhotosSection; 



  