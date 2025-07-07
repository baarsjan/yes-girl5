
import React from 'react';
import { X, Heart, Info, Users, Calendar, Camera, Play, Mail, Music } from 'lucide-react';

const NavigationMenu = ({ isMenuOpen, toggleMenu, scrollToSection, setIsMenuOpen }) => {
  return (  

<div className={`fixed inset-0 bg-black bg-opacity-95 z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-end p-6">
        <button onClick={toggleMenu} className="text-white">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-8 mt-12">
        {[
          { id: 'home', label: 'Home', icon: Heart },
          { id: 'about', label: 'About', icon: Info },
          { id: 'cast', label: 'Cast', icon: Users },
          { id: 'photos', label: 'Photos', icon: Camera },
          { id: 'videos', label: 'Videos', icon: Play },
          { id: 'newsletter', label: 'Newsletter', icon: Mail },
          { id: 'music', label: 'Music', icon: Music },
          { id: 'team', label: 'Team', icon: Users },
          { id: 'dates', label: 'Show Dates', icon: Calendar },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => {
              if (id === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                scrollToSection(id);
              }
              setIsMenuOpen(false);
            }}
            className="flex items-center space-x-3 text-white text-xl font-lubalin font-medium hover:text-[#eb3d92] transition-colors"
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  ); 
};

export default NavigationMenu; 