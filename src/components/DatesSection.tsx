import React from 'react';
import { ExternalLink } from 'lucide-react';

  const DatesSection = () => (
    <section id="dates" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-lubalin font-medium">Show Dates</h2>
        
        <div className="space-y-12">
          {/* Rotterdam */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#eb3d92] font-lubalin-condensed">Rotterdam</h3>
            <div className="space-y-4">
              {[
                { date: "Wednesday June 25", times: ["19:30", "20:45", "22:00"] },
                { date: "Thursday June 26", times: ["19:30", "20:45", "22:00"] },
                { date: "Friday June 27", times: ["19:30", "20:45", "22:00"] },
                { date: "Saturday June 28", times: ["19:30", "20:45", "22:00"] },
                { date: "Sunday June 29", times: ["18:15", "19:30", "20:45"] }
              ].map((show, index) => (
                <div key={index} className="bg-black rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="font-semibold font-lubalin font-medium">{show.date}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {show.times.map((time, timeIndex) => (
                      <span
                        key={timeIndex}
                        className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-lubalin font-light"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Amsterdam */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#eb3d92] font-lubalin-condensed">Amsterdam</h3>
            <div className="space-y-4">
              {[
                "Wednesday August 6",
                "Thursday August 7", 
                "Friday August 8",
                "Saturday August 9",
                "Sunday August 10"
              ].map((date, index) => (
                <div key={index} className="bg-black rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="font-semibold font-lubalin font-medium">{date}</h4>
                  </div>
                  <div className="text-gray-400 font-lubalin font-light">
                    Not For Sale Yet
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Utrecht */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#eb3d92] font-lubalin-condensed">Utrecht</h3>
            <div className="space-y-4">
              {[
                "Friday August 15",
                "Saturday August 16",
                "Sunday August 17",
                "Monday August 18"
              ].map((date, index) => (
                <div key={index} className="bg-black rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="font-semibold font-lubalin font-medium">{date}</h4>
                  </div>
                  <div className="text-gray-400 font-lubalin font-light">
                    Not For Sale Yet
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://deparade.nl/programma/yes-girl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#eb3d92] hover:bg-[#d13582] text-white px-8 py-4 rounded-full font-lubalin font-medium transition-all duration-300 hover:scale-105 transform"
          >
            <span>Get Tickets</span>
            <ExternalLink size={20} />
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 font-lubalin font-light">
            More dates and locations to be announced soon
          </p>
        </div>
      </div>
    </section>
  );

export default DatesSection;