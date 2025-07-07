import React from 'react';
import { Play } from 'lucide-react';

const VideosSection = () => (
    <section id="videos" className="bg-black text-white py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-lubalin font-medium">Behind the Scenes</h2>
        
        <div className="space-y-8">
          {/* YouTube Video */}
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/h2iXNAZgpYQ?si=hEgnxOTTmovzRCgJ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#eb3d92] font-lubalin-condensed">Official Trailer</h3>
              <p className="text-gray-400 text-sm font-lubalin font-extralight">Get a glimpse into the emotional journey that awaits</p>
            </div>
          </div>

          {/* Other video placeholders */}
          {[
            { title: "Director's Vision", duration: "4:15", description: "Sarah Martinez discusses her approach to intimate storytelling" },
            { title: "Cast Interviews", duration: "6:45", description: "The actors share their personal connections to the material" },
            { title: "Rehearsal Footage", duration: "3:20", description: "Exclusive behind-the-scenes moments from rehearsals" }
          ].map((video, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-800 flex items-center justify-center relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#eb3d92]/20 to-purple-600/20"></div>
                <Play size={48} className="text-white group-hover:text-[#eb3d92] transition-colors transform group-hover:scale-110 duration-300" />
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 px-2 py-1 rounded text-xs font-lubalin font-light">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#eb3d92] font-lubalin-condensed">{video.title}</h3>
                <p className="text-gray-400 text-sm font-lubalin font-extralight">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  export default VideosSection;   







