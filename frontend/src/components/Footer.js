import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-100  py-10">
      <div className="container px-10 md:mx-auto grid grid-cols-2 mx-8 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
        <div>
        <h3 className="text-2xl font-bold text-pink-600 mb-4">dribble</h3>
        <p>Dribble is a world leading community for creatives to share, grow, and get hired</p>
        <div>
    <div className="flex flex-row gap-5 my-10 lg:mt-10 ">
        <FaTwitter className="h-6  w-fit"/>
    < FaFacebookF className="h-6  w-fit" />
    <FaInstagram className="h-6  w-fit " />
    <FaLinkedinIn className="h-6  w-fit "/>
    <FiYoutube className="h-6  w-fit " />
    </div>
</div>
        </div>
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


        <div>
          <h3 className="text-lg font-bold mb-4">Directories</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-pink-500">
                Design jobs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
              Designer hire

              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
              Freelance Designer

              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Tags
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Places
              </a>
            </li>
          </ul>
        </div>




        <div>
          <h3 className="text-lg font-bold mb-4">Design Assets</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-pink-500">
                Marketplace
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Creative Market
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Fontspring
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
               Font Squirrel
              </a>
            </li>
            
          </ul>
        </div>



        <div>
          <h3 className="text-lg font-bold mb-4">Design Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-pink-500">
                Freelancing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Design Hiring
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Design Portfolio
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
              Design Education

              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Creative Process
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500">
                Design Industry
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