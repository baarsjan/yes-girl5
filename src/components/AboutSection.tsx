import React from 'react';

const AboutSection = () => (
    <section id="about" className="bg-black text-white py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-lubalin font-medium">About the Show</h2>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p className="text-lg font-lubalin font-normal">
            <span className="text-[#eb3d92] font-semibold">YES, GIRL</span> is the new music theatre performance by Gavin-Viano. This time around Congolese performer Hope Landu will join him for a duet.
          </p>
          
          <p className="font-lubalin font-light">
            The theme is the politics within a toxic relationship. Live music conducted by electronic string player Teddy Sicking mixed with heavy beats by Donna Lugassy & Jan Baars will be topped off by the Amsterdam Student Big Band.
          </p>
          
          <p className="font-lubalin font-light">
            An unforgettable story on the stage of Theatre Festival De Parade.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6">
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <h3 className="text-[#eb3d92] font-semibold mb-2 font-lubalin-condensed">Director</h3>
            <h3 className="text-[#eb3d92] font-semibold mb-2 font-lubalin-condensed">Playwright</h3>
            <h3 className="text-[#eb3d92] font-semibold mb-2 font-lubalin-condensed">& BOY</h3>
        
            <p className="text-sm font-lubalin font-light">Gavin-Viano</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <h3 className="text-[#eb3d92] font-semibold mb-2 font-lubalin-condensed">GIRL</h3>
            <p></p>
            <p className="text-sm font-lubalin font-light">Hope Landu</p>
            <p className="text-sm font-lubalin font-light">&</p>
            <p className="text-sm font-lubalin font-light">Nona Embsen</p>
          </div>
        </div>

        {/* Cast Portrait Section with Enhanced Abstract Animations */}
        <div className="mt-16 text-center relative">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Swirl Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 swirl-element opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#eb3d92] animate-spin-slow">
                <path d="M50,10 Q90,30 70,50 Q50,70 30,50 Q10,30 30,10 Q50,-10 70,10" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="animate-draw-path"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-16 -right-16 w-32 h-32 swirl-element opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400 animate-spin-reverse">
                <path d="M20,20 Q80,20 80,50 Q80,80 50,80 Q20,80 20,50 Q20,20 50,20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      className="animate-draw-path-reverse"/>
              </svg>
            </div>

            {/* Geometric Shapes */}
            <div className="absolute top-10 right-10 w-6 h-6 bg-[#eb3d92] rotate-45 animate-float opacity-60"></div>
            <div className="absolute bottom-20 left-16 w-4 h-4 bg-purple-400 rounded-full animate-bounce-slow opacity-50"></div>
            <div className="absolute top-1/3 -left-8 w-8 h-8 border-2 border-[#eb3d92] rotate-12 animate-pulse-slow opacity-40"></div>
            
            {/* Particle Elements */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#eb3d92] rounded-full animate-twinkle"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-1000"></div>
            <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#eb3d92] rounded-full animate-twinkle delay-2000"></div>

            {/* Flowing Lines */}
            <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#eb3d92] to-transparent animate-flow-down opacity-30"></div>
            <div className="absolute bottom-0 right-1/3 w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-flow-right opacity-30"></div>
          </div>

          <div className="relative inline-block group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#eb3d92] to-purple-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl animate-pulse-glow"></div>
            <img 
              src="/no background 4X5-GAVIN-VIANO-1536x1920.png" 
              alt="Gavin-Viano and Hope Landu - YES GIRL Cast" 
              className="relative w-96 h-96 object-cover rounded-2xl mx-auto shadow-2xl border-2 border-[#eb3d92]/30 group-hover:border-[#eb3d92]/60 transition-all duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500 animate-shimmer"></div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#eb3d92] rounded-full animate-orbit"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-orbit-reverse delay-300"></div>
            <div className="absolute top-1/4 -right-4 w-2 h-2 bg-[#eb3d92] rounded-full animate-float-vertical"></div>
            <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-purple-300 rounded-full animate-float-vertical delay-500"></div>
          </div>
          <p className="text-gray-400 text-sm mt-6 font-lubalin font-extralight">
            The dynamic duo bringing <span className="text-[#eb3d92] font-semibold">YES, GIRL</span> to life
          </p>
        </div>
      </div>
    </section>

    );

export default AboutSection;   