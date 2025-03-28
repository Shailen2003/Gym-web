import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Fitness Health Club</h1>
        </div>

        
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
      <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.0543731023718!2d76.78888897531937!3d28.20566057590061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d49007a85121b%3A0x66d4964bc53087e6!2sHealth%20is%20Wealth%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1733673493673!5m2!1sen!2sin"  height="450"></iframe>

      {/* contact section */}

      <div id='contact' className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Contact Us</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-white font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div>
            <label className="block text-white font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div>
            <label className="block text-white font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows='4'
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p className="text-gray-400">© 2024 Fitness.health. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
