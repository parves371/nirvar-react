import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdMailLock } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#07a88c] text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* First Column */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[23%] mb-8 sm:mb-0">
          <h3 className="font-bold text-lg">Nirvar Image for</h3>
          <p className="mt-2 text-sm sm:text-base">
            In this fast-paced world, managing our health and medical needs can
            be a daunting task. From scheduling doctor consultations to keeping
            track of medical history, it's easy to feel overwhelmed. That's
            where Nirvar comes in - the ultimate medical app designed to
            simplify your healthcare journey.
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[23%] mb-8 sm:mb-0">
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link to="#" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Doctor Consultation
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Why Nirvar?
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <div className="text-sm sm:text-base flex items-center gap-x-2">
            <FaLocationArrow />
            <div>House 7, Road 7, Block Link, Mirpur DOHS, Dhaka 1215</div>
          </div>
          <div className="flex items-center gap-x-2 mt-2">
            <FaPhone />
            <div>
              <div>+880 190 000 0000</div>
              <div>+880 190 000 0000</div>
            </div>
          </div>
          <div className="flex items-center gap-x-2 mt-2">
            <MdMailLock />
            <div>
              <div>info@nirvar.com</div>
              <div>contact@nirvar.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social and Download Section */}
      <div className="container mx-auto flex flex-wrap justify-evenly mt-8 px-4">
        <div className="flex items-center w-full sm:w-1/2 mb-4 sm:mb-0">
          <p className="mr-4 text-sm sm:text-base">Follow Us:</p>
          <Link to="#" className="text-2xl mx-2">
            <FaFacebookF />
          </Link>
          <Link to="#" className="text-2xl mx-2">
            <FaInstagram />
          </Link>
          <Link to="#" className="text-2xl mx-2">
            <FaTwitter />
          </Link>
          <Link to="#" className="text-2xl mx-2">
            <FaWhatsapp />
          </Link>
          <Link to="#" className="text-2xl mx-2">
            <FaLinkedinIn />
          </Link>
        </div>
        <div className="flex items-center justify-center w-full sm:w-1/2">
          <h3 className="font-bold text-lg mr-2">Download Now:</h3>
          <div className="flex space-x-2">
            <Link to="#">
              <img
                className="w-32 h-10"
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                alt="Google Play"
              />
            </Link>
            <Link to="#">
              <img
                className="w-32 h-10"
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-mac-app-store.svg"
                alt="App Store"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-4 text-sm sm:text-base">
        <p>&copy; 2023 Nirvar | Privacy Policy | Contact Us</p>
      </div>
    </footer>
  );
};

export default Footer;
