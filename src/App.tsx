import NavigationMenu from './components/NavigationMenu';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CastSection from './components/CastSection';
import PhotosSection from './components/PhotoSection';
import VideosSection from './components/VideosSection';
import NewsletterSection from './components/NewsletterSection';
import MusicSection from './components/MusicSection';
import TeamSection from './components/TeamSection';
import DatesSection from './components/DatesSection';
import React, { useState, useEffect } from 'react';
import { Play, Info, Users, Calendar, MapPin, Clock, Heart, Share2, Menu, ExternalLink, Camera, Music, Mail } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  const Footer = () => (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 text-[#eb3d92] font-lubalin font-medium">Thank You</h3>
        <p className="text-gray-400 mb-8 leading-relaxed font-lubalin font-light">
          Thank you for being part of this intimate journey with us. Your presence makes this experience complete.
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <button className="flex items-center space-x-2 text-gray-400 hover:text-[#eb3d92] transition-colors transform hover:scale-105 duration-300 font-lubalin font-light">
            <Heart size={20} />
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-400 hover:text-[#eb3d92] transition-colors transform hover:scale-105 duration-300 font-lubalin font-light">
            <Share2 size={20} />
            <span>Share</span>
          </button>
        </div>
        
        <div className="text-gray-500 text-sm font-lubalin font-extralight">
          <p>&copy; 2025 Intimate Connections. All rights reserved.</p>
          <p className="mt-2">Studio Theatre • Downtown Arts District</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-black">
      <NavigationMenu
  isMenuOpen={isMenuOpen}
  toggleMenu={toggleMenu}
  scrollToSection={scrollToSection}
  setIsMenuOpen={setIsMenuOpen}
/>
      
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-40 text-white hover:text-[#eb3d92] transition-colors"
      >
        <Menu size={24} />
      </button>
      
      <main>
        <HeroSection />
        <AboutSection />
        <CastSection />
        <VideosSection />
        <PhotosSection />
        <NewsletterSection/>
        <MusicSection />
        <TeamSection />
        <DatesSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;