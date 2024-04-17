import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container px-10 md:mx-auto grid grid-cols-2  md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">For designers</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-pink-500">
                Go Pro!
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Explore design work
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Design blog
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Overtime podcast
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Playoffs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Weekly Warm-Up
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Refer a Friend
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Code of conduct
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Hire designers</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-pink-500">
                Post a job opening
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Post a freelance project
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Search for designers
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Brands
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Advertise with us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-pink-500">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Careers
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Support
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Media kit
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                API
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Terms of service
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p className="text-gray-500">© 2023 Dribbble. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;