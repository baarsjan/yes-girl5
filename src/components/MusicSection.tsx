import React from 'react';
import { Music, Play} from 'lucide-react';

const MusicSection = () => (
    <section id="music" className="bg-gray-900 text-white py-16 px-6 relative overflow-hidden">
      {/* Background Abstract Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-40 h-40 bg-[#eb3d92]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#eb3d92]/3 rounded-full blur-2xl animate-float"></div>
        
        {/* Musical note decorations */}
        <div className="absolute top-20 left-1/4 text-[#eb3d92]/20 animate-float">
          <Music size={32} />
        </div>
        <div className="absolute bottom-20 right-1/3 text-purple-400/20 animate-float delay-1000">
          <Music size={24} />
        </div>
        <div className="absolute top-1/3 right-10 text-[#eb3d92]/15 animate-bounce-slow">
          <Music size={20} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center font-lubalin font-medium relative">
           Soundtrack
          
          {/* Enhanced Musical Note Animations around the heading */}
          <div className="absolute -top-8 -left-12 text-[#eb3d92]/30 animate-float">
            <Music size={28} className="transform rotate-12" />
          </div>
          <div className="absolute -top-6 -right-8 text-purple-400/40 animate-bounce-slow">
            <Music size={20} className="transform -rotate-45" />
          </div>
          <div className="absolute -bottom-4 -left-8 text-[#eb3d92]/25 animate-twinkle">
            <Music size={16} className="transform rotate-90" />
          </div>
          <div className="absolute -bottom-6 -right-12 text-purple-300/35 animate-float delay-500">
            <Music size={24} className="transform -rotate-12" />
          </div>
          <div className="absolute top-2 left-1/4 text-[#eb3d92]/20 animate-orbit">
            <Music size={14} />
          </div>
          <div className="absolute -top-2 right-1/3 text-purple-400/25 animate-orbit-reverse delay-300">
            <Music size={18} />
          </div>
          
          {/* Floating treble clef symbols */}
          <div className="absolute -top-10 left-1/2 text-[#eb3d92]/15 animate-float-vertical">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="transform rotate-6">
              <path d="M12 2C13.1 2 14 2.9 14 4V8.5C14 9.3 13.3 10 12.5 10S11 9.3 11 8.5V4C11 2.9 11.9 2 12 2M12 11C13.7 11 15 12.3 15 14S13.7 17 12 17 9 15.7 9 14 10.3 11 12 11M12 18C13.7 18 15 19.3 15 21S13.7 24 12 24 9 22.7 9 21 10.3 18 12 18Z"/>
            </svg>
          </div>
          <div className="absolute -bottom-8 right-1/4 text-purple-300/20 animate-float-vertical delay-1000">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transform -rotate-12">
              <path d="M12 2C13.1 2 14 2.9 14 4V8.5C14 9.3 13.3 10 12.5 10S11 9.3 11 8.5V4C11 2.9 11.9 2 12 2M12 11C13.7 11 15 12.3 15 14S13.7 17 12 17 9 15.7 9 14 10.3 11 12 11M12 18C13.7 18 15 19.3 15 21S13.7 24 12 24 9 22.7 9 21 10.3 18 12 18Z"/>
            </svg>
          </div>
          
          {/* Musical wave lines */}
          <div className="absolute -left-16 top-1/2 opacity-20">
            <svg width="40" height="8" viewBox="0 0 40 8" className="text-[#eb3d92] animate-flow-right">
              <path d="M0,4 Q10,0 20,4 T40,4" stroke="currentColor" strokeWidth="2" fill="none" className="animate-draw-path"/>
            </svg>
          </div>
          <div className="absolute -right-16 top-1/2 opacity-25">
            <svg width="40" height="8" viewBox="0 0 40 8" className="text-purple-400 animate-flow-right delay-500">
              <path d="M0,4 Q10,8 20,4 T40,4" stroke="currentColor" strokeWidth="2" fill="none" className="animate-draw-path-reverse"/>
            </svg>
          </div>
          
          {/* Pulsing dots that follow the rhythm */}
          <div className="absolute -top-4 left-1/3 w-2 h-2 bg-[#eb3d92] rounded-full animate-pulse-rhythm"></div>
          <div className="absolute -bottom-4 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse-rhythm delay-200"></div>
          <div className="absolute top-0 left-2/3 w-1 h-1 bg-[#eb3d92] rounded-full animate-pulse-rhythm delay-400"></div>
        </h2>
        <p className="text-center text-gray-400 mb-12 font-lubalin font-light">
          Experience the powerful music that drives <span className="text-[#eb3d92] font-semibold">YES, GIRL</span>
        </p>

        {/* Main Spotify Player */}
        <div className="bg-black rounded-2xl p-8 shadow-2xl border border-gray-800 mb-8 relative group">
          {/* Decorative elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#eb3d92]/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-[#eb3d92] to-purple-600 p-4 rounded-full">
                <Music size={32} className="text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-center mb-6 font-lubalin font-medium">
              YES, GIRL - Original Soundtrack
            </h3>
            
            {/* Spotify Embed */}
            <div className="mb-6">
              <iframe 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/playlist/4ect1fisJUPoMoW7zpzlTI?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>

            

            {/* Music Credits */}
            <div className="mt-8 p-6 bg-gray-800/30 rounded-xl">
              <h4 className="text-lg font-semibold mb-4 font-lubalin font-medium text-[#eb3d92]">Music Credits</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-lubalin font-medium text-gray-300">Music Production</p>
                  <p className="font-lubalin font-light text-gray-400">
                    <a 
                      href="https://www.instagram.com/donnalugassy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                    >
                      Donna Lugassy
                    </a>, <a 
                      href="https://www.instagram.com/janbaarsmusic/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                    >
                      Jan Baars
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-lubalin font-medium text-gray-300">(Electronic) Strings</p>
                  <p className="font-lubalin font-light text-gray-400">
                    <a 
                      href="https://www.instagram.com/teddy_jill_sicking/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                    >
                    Teddy Sicking
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-lubalin font-medium text-gray-300">Horns</p>
                  <p className="font-lubalin font-light text-gray-400">
                     <a 
                      href="https://www.instagram.com/amsterdamsestudentenbigband/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                    >
                    Amsterdam Student Big Band
                     </a>   
                  </p>
                </div>
                <div>
                  <p className="font-lubalin font-medium text-gray-300">Vocals</p>
                  <p className="font-lubalin font-light text-gray-400">
                     <a 
                      href="https://www.instagram.com/gavinviano/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                       >
                    Gavin-Viano
                       </a>, <a 
                      href="https://www.instagram.com/hopelandu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                    >
                    Hope Landu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Music Links - Modified to be smaller and horizontal */}
        <div className="flex justify-center gap-4">
          {[
            { 
              platform: "Apple Music", 
              icon: Music, 
              color: "from-gray-600 to-gray-800",
              hoverColor: "hover:from-gray-500 hover:to-gray-700"
            },
            { 
              platform: "YouTube Music", 
              icon: Play, 
              color: "from-red-600 to-red-800",
              hoverColor: "hover:from-red-500 hover:to-red-700"
            }
          ].map((platform, index) => (
            <button
              key={index}
              className={`bg-gradient-to-r ${platform.color} ${platform.hoverColor} text-white px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 transform group/platform flex items-center space-x-2`}
            >
              <platform.icon size={18} className="group-hover/platform:scale-110 transition-transform duration-300" />
              <span className="font-lubalin font-medium text-sm">{platform.platform}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );

export default MusicSection;  