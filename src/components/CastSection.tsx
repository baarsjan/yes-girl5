import React from 'react';

 const CastSection = () => (
    <section id="cast" className="bg-black text-white py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-lubalin font-medium">Meet the Cast</h2>
        
        <div className="space-y-8">
          {[
            { 
              name: "Gavin-Viano", 
              role: "BOY", 
              bio: "A dynamic performer bringing raw emotion and vulnerability to the stage.",
              image: "/gavin.png"
            },
            { 
              name: "Hope Landu", 
              role: "GIRL", 
              bio: "Congolese performer whose powerful presence explores the complexities of toxic relationships.",
              image: "/hope.png"
            },
            { 
              name: "Nona Embsen", 
              role: "GIRL", 
              bio: "Understudy",
              image: "/nona.png"
            }
          ].map((actor, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={actor.image} 
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#eb3d92] font-lubalin-condensed">{actor.name}</h3>
                  <p className="text-gray-400 text-sm mb-2 font-lubalin font-light">as {actor.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed font-lubalin font-extralight">{actor.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);

export default CastSection;   