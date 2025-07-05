import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      // Hide success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  
  return (
  <section id="newsletter" className="bg-gray-800 text-white py-16 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-[#eb3d92] p-4 rounded-full">
          <Mail size={32} className="text-white" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4 font-lubalin font-medium">Stay Updated</h2>
      <p className="text-gray-300 mb-8 font-lubalin font-light">
        Get the latest news about <span className="text-[#eb3d92] font-semibold">YES, GIRL</span> and upcoming performances
      </p>

      {isSubscribed ? (
        <div className="bg-green-600 text-white p-4 rounded-lg mb-6 font-lubalin font-medium">
          ✓ Thank you for subscribing! Check your email for confirmation.
        </div>
      ) : (
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-[#eb3d92] focus:outline-none font-lubalin font-light"
            required
          />
          <button
            type="submit"
            className="bg-[#eb3d92] hover:bg-[#d13582] text-white px-6 py-3 rounded-lg font-lubalin font-medium transition-all duration-300 hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  </section>
  );
};

export default NewsletterSection;