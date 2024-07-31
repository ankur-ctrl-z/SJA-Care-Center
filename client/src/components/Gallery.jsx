import React from "react";
import image9 from '../assets/gallary-1.jpg'
import Gallery2 from "../assets/gallary-2.jpg";
import Gallary3 from '../assets/gallary-3.jpg'
import "../Styles/Gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="-mt-24 md:-mt-[14rem]">
      <div className="flex justify-center">
        <h1 className="gallary p-8 font-semibold text-2xl lg:text-4xl mt-10 md:mt-[10rem]">
          Gallery <span>&mdash;</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center -ml-[14px] items-center">
        <div className="">
          <img
            src={image9}
            alt="Image 9"
            className="card-gallery m-6 border border-black"
          />
        </div>
        <div>
          <img
            src={Gallery2}
            alt="Image 10"
            className="card-gallery m-6 border border-black"
          />
        </div>
        <div>
          <img
            src={Gallary3}
            alt="Image 11"
            className="card-gallery m-6 border border-black"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <Link to="/gallery">
          <button className="bg-orange-600 hover:shadow-md hover:bg-orange-800 transition sm:h-6 px-3 sm:px-4 hover:bg-red md:h-12 md:px-6 font-semibold tracking-wide text-white text-xs sm:text-xs md:text-base lg:text-lg rounded-3xl">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
