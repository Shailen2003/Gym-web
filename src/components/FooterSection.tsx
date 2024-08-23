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

        {/* Navigation Links */}
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Services</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>

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
        <p className="text-gray-400">© 2024 Fitness.health. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
