import React from 'react';

const TeamSection = () => (
    <section id="team" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-lubalin font-medium">Meet The Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { role: "Lighting Designer", name: "Wes Broersen", link: "https://www.instagram.com/wes_broersen/" },
            { role: "Dramaturg", name: "Yahmani Blackman, Martine Manten", links: { "Yahmani Blackman": "https://www.instagram.com/yahman_i_blackman/", "Martine Manten": "https://www.instagram.com/martinemanten24/" } },
            { role: "Music Producer", name: "Donna Lugassy, Jan Baars", links: { "Donna Lugassy": "https://www.instagram.com/donnalugassy/", "Jan Baars": "https://www.instagram.com/janbaarsmusic/" } },
            { role: "String Player", name: "Teddy Sicking", link: "https://www.instagram.com/teddy_jill_sicking/" },
            { role: "Horns (Amsterdam Student Big Band)", name: "Pepijn Peeters, Brend Kolfschoten, Mette Oskamp, Eva de Wilde, Pepe Morselt, Lisa Redza, Joris Eeftink", links: { "Pepijn Peeters": "https://www.instagram.com/lilpeptalk/", "Brend Kolfschoten": "https://www.instagram.com/brendkolfschoten/", "Mette Oskamp": "https://www.instagram.com/mettejohannaoskamp/", "Eva de Wilde": "https://www.instagram.com/eva_de_wilde/", "Pepe Morselt": "https://www.instagram.com/pepe_morselt/", "Lisa Redza": "https://www.instagram.com/lisa_redza/", "Joris Eeftink": "https://www.instagram.com/joriseeftink/" } },
            { role: "Production Manager", name: "Jostha Delima", link: "https://www.instagram.com/josthaddelima/" },
            { role: "Lighting Technician", name: "Gert Oosterhof" },
            { role: "Sound Technician", name: "Danny van der Lugt, Jamie Barson" },
            { role: "Scenographer", name: "HNT Atelier", link: "https://www.hnt.nl/nl/pQgOkCm/decoratelier" },
            { role: "Lighting Programmers", name: "Joris Schipper, Maarten Hietbrink", links: {"Maarten Hietbrink": "https://www.instagram.com/maarten_hietbrink/"} },
            { role: "Production Assistant", name: "Sophie Adriana Haas" },
            { role: "Co-producers", name: "Frascati, Theaterfestival de Parade & Wisdom Lanes", links: {"Frascati": "https://www.instagram.com/frascatiamsterdam/", "Theaterfestival de Parade": "https://www.instagram.com/theaterfestivaldeparade/", "Wisdom Lanes" : "https://www.instagram.com/wisdomlanes/" } }
          ].map((member, index) => (
            <div 
              key={index} 
              className="bg-black rounded-lg p-6"
            >
              <h3 className="text-[#eb3d92] font-semibold mb-3 font-lubalin-condensed text-sm uppercase tracking-wide">
                {member.role}
              </h3>
              <div className="text-white font-lubalin font-light text-sm leading-relaxed">
                {member.link ? (
                  // Special case for single person with Instagram link (Wes Broersen)
                  <a 
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                  >
                    {member.name}
                  </a>
                ) : member.links ? (
                  // Special case for multiple people with individual Instagram links (Dramaturg)
                  member.name.split(',').map((name, nameIndex) => {
                    const trimmedName = name.trim();
                    const link = member.links![trimmedName];
                    return (
                      <span key={nameIndex}>
                        {link ? (
                          <a 
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                          >
                            {trimmedName}
                          </a>
                        ) : (
                          <a 
                            href="#" 
                            className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                            onClick={(e) => e.preventDefault()}
                          >
                            {trimmedName}
                          </a>
                        )}
                        {nameIndex < member.name.split(',').length - 1 && ', '}
                      </span>
                    );
                  })
                ) : member.name.includes(',') ? (
                  // Handle multiple names separated by commas (no links)
                  member.name.split(',').map((name, nameIndex) => (
                    <span key={nameIndex}>
                      <a 
                        href="#" 
                        className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                        onClick={(e) => e.preventDefault()}
                      >
                        {name.trim()}
                      </a>
                      {nameIndex < member.name.split(',').length - 1 && ', '}
                    </span>
                  ))
                ) : member.name.includes('&') ? (
                  // Handle names separated by &
                  member.name.split('&').map((name, nameIndex) => (
                    <span key={nameIndex}>
                      <a 
                        href="#" 
                        className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                        onClick={(e) => e.preventDefault()}
                      >
                        {name.trim()}
                      </a>
                      {nameIndex < member.name.split('&').length - 1 && ' & '}
                    </span>
                  ))
                ) : (
                  // Single name
                  <a 
                    href="#" 
                    className="hover:text-[#eb3d92] transition-colors duration-300 hover:underline"
                    onClick={(e) => e.preventDefault()}
                  >
                    {member.name}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 font-lubalin font-light">
            A collaborative effort bringing <span className="text-[#eb3d92] font-semibold">YES, GIRL</span> to life
          </p>
        </div>
      </div>
    </section>
  );

export default TeamSection;  