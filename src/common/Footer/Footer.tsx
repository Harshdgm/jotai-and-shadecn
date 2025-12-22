import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

import images from "@/assets/images";

const Footer = () => {
  return (
    <footer className="bg-[#05203c] text-white py-12 px-5 md:px-10">
      <div className="max-w-1200px mx-auto flex flex-wrap justify-between gap-10 border-b border-white/20 pb-6">
        <div className="flex-1 min-w-250px">
          <img src={images.Footer} alt="DGMTech Logo" className="w-[180px] mb-4" />
          <p className="text-[16px] leading-relaxed mb-5">
            DGMTech Solutions is a Surat-based IT company 
            specializing in custom web development, 
            mobile app development, and UI/UX design.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn" className="border border-white rounded-full p-2 text-lg hover:text-red-500 hover:border-red-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="border border-white rounded-full p-2 text-lg hover:text-red-500 hover:border-red-500 transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919825805271" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="border border-white rounded-full p-2 text-lg hover:text-red-500 hover:border-red-500 transition">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Facebook" className="border border-white rounded-full p-2 text-lg hover:text-red-500 hover:border-red-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="border border-white rounded-full p-2 text-lg hover:text-red-500 hover:border-red-500 transition">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-180px">
          <h4 className="text-xl md:text-2xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-white font-light hover:underline">Home</a>
            </li>
            <li>
              <a href="/about-us" className="text-white font-light hover:underline">About</a>
            </li>
            <li>
              <a href="/career" className="text-white font-light hover:underline">Career</a>
            </li>
            <li>
              <a href="/portfolio" className="text-white font-light hover:underline">Portfolio</a>
            </li>
            <li>
              <a href="/contact" className="text-white font-light hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-180px">
          <h4 className="text-xl md:text-2xl font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="/web-development" className="text-white font-light hover:underline">Web Development</a>
            </li>
            <li>
              <a href="/app-development" className="text-white font-light hover:underline">App Development</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-250px">
          <h4 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MdEmail className="mt-1" /> 
              dgmtechsolution@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <BsTelephoneFill className="mt-1" /> 
              +91 982580-5271
            </li>
            <li className="flex items-start gap-2">
              <MdLocationOn className="mt-1" />
              <span>
                228 Rise on plaza,<br />
                Sarthana Jakatnaka,<br />
                Surat, Gujarat-395008
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DGM, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
