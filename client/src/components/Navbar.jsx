import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { MdCall, MdMenu } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import logo from "../assets/logo.png";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-3 h-20 fixed z-10 bg-white w-full top-0 md:mb-6">

        <div className="flex-row gap-1 items-center text-md mt-1 md:mb-0">
          <div className="flex flex-col md:flex-col lg:flex-row">
            <div className="flex">
             
                <h3 className="sm:hidden lg:text-[13px] xl:text-lg lg:block lg:mt-1 text-orange-600 font-semibold tracking-wide md:text-[15px] text-[10px] cursor-pointer">
                  For Appointment:
                </h3>
              

              <a href="tel:+919967521331" className="flex items-center lg:ml-2 ">
                <MdCall className="md:text-2xl lg:text-3xl sm:text-sm " />
                <div className="md:text-[15px] lg:text-[13px] xl:text-lg text-[10px] lg:mr-5 mr-1">
                  +91-9967521331
                </div>
              </a>

              <a href="tel:+919136631331" className="flex items-center ">
                <MdCall className="md:text-2xl lg:text-3xl sm:text-sm" />
                <div className=" md:text-[15px] lg:text-[13px] xl:text-lg text-[10px]  lg:mr-5 mr-1">
                  +91-9136631331
                </div>
              </a>
            </div>

            <div className="flex justify-center mt-1 lg:-mt-1">
              <a
                href="mailto:spinejoint.arthritiscare@gmail.com"
                className="flex items-center ml-1"
              >
                <IoMdMail className="mr-1 md:text-2xl lg:text-3xl sm:text-sm" />
                <div className="md:mr-5 lg:text-[13px]  xl:text-lg md:text-[15px] text-[10px] mr-1">
                  spinejoint.arthritiscare@gmail.com
                </div>
              </a>
            </div>
          </div>
          
        </div>

        {/* socail icons */}
        <div className="hidden sm:flex flex-col md:flex-row  items-center">
          <div className="flex items-center mb-2  md:mb-0">
            <a
              href="https://www.google.com/maps?q=Bhayandar(E),+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 md:text-base lg:text-[13px] xl:text-lg   sm:text-sm text-sm cursor-pointer"
            >
              Bhayandar(E), Mumbai(MH)
            </a>
          </div>

          <div className="flex items-center">
            <a
              href="https://www.youtube.com/@drdsdubey3069"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl text-red-700 hover:text-red-700"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/spine_joints_arthritis_care"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl text-purple-600 hover:text-purple-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064044185076&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl text-blue-600 hover:text-blue-600"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* navbar */}

      <div className="mt-4 md:mt-8 lg:mt-8 rounded-full flex flex-col md:flex-row justify-between bg-[#eee9e9] shadow-xl items-center z-10 fixed w-full top-10">
        <div className="flex items-center -ml-[12rem] sm:-ml-[1rem] mt-4 mb-2 d:mb-0">
           <Link to={'/'}>
           <img
              src={logo}
              alt="Logo"
              className="logo md:-mt-2 ml-12 h-8 md:h-16 lg:h-16 sm:h-12 rounded-3xl cursor-pointer"
            />
            </Link>
           
            
            <Link to={'/'}>
            <h1 className="md:text-base md:-mt-3 lg:text-lg sm:text-sm text-sm font-bold ml-2 tracking-wide cursor-pointer">
              SJA CARE CENTER
            </h1></Link>
          
       
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="flex items-center md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <MdMenu className="text-2xl -mt-9 ml-60 flex justify-end" />
            </button>
          </div>

          {/* hamburger icon */}
          <div
            className={`flex-col md:flex-row items-center md:flex ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:-mt-1 md:flex-row gap-1 lg:gap-8 items-center cursor-pointer">
              <li className="font-semibold hover:text-orange-700 text-sm md:[15px] lg:text-lg p-0 md:p-2">
                <Link to="/" smooth={true} duration={500}>
                  HOME
                </Link>
              </li>
              <li className="font-semibold text-sm hover:text-orange-700 md:[15px] lg:text-lg p-0 md:p-2">
                <Link to="/services" smooth={true} duration={500}>
                  SERVICES
                </Link>
              </li>
              <li className="font-semibold text-sm hover:text-orange-700 md:[15px] lg:text-lg p-0 md:p-2">
                <Link to={"/aboutus"} smooth={true} duration={500}>
                  ABOUT US
                </Link>
               
              </li>
              <li className="font-semibold  text-sm hover:text-orange-700 md:[15px] lg:text-lg p-0 md:p-2">
                <Link to="/gallery" smooth={true} duration={500}>
                  GALLERY
                </Link>
              </li>
              
              <li className="font-semibold mb-2 md:p-2">
                <Link to="/contactus" smooth={true} duration={500}>
                  <button className="contact-button h-8 bg-orange-600 hover:shadow-md hover:bg-orange-800 transition sm:h-6 px-3 sm:px-4 hover:bg-red md:h-12 md:px-6 font-semibold tracking-wide text-white text-xs sm:text-xs md:text-base lg:text-lg rounded-3xl">
                    CONTACT US
                    <i className="fas fa-location-arrow ml-2"></i>
                  </button>
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
      </div>
      </>

  );
};

export default Navbar;
