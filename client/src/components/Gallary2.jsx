import React from "react";
import "../Styles/Services.css";
import "../Styles/GalleryCSS.css";
import image9 from "../assets/gallary-21.jpg";
import image10 from "../assets/gallary22.jpg";
// import image11 from "../assets/gallry23.jpg";
import image11 from '../assets/image23.jpg'
import image12 from "../assets/gallary24.jpg";
import image13 from "../assets/gallary25.jpg";

const Gallery2 = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center font-semibold text-xl mt-10 pt-24">
          <h1 className="heading tracking-wide">
            Gallery <span>&mdash;&mdash;</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center mt-10 w-full ">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <img src={image9} className="w-full md:w-[18rem] md:h-[18rem] lg:w-[22rem] lg:h-[20rem] m-1" alt="image 9" />
            <img src={image10} className="w-full md:w-[18rem] md:h-[18rem] lg:w-[22rem] lg:h-[20rem] m-1" alt="image 10" />
            <img src={image11} className="w-full md:w-[20rem] md:h-[18rem] lg:w-[22rem] lg:h-[20rem] m-1" alt="image 11" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center  mb-24 flex-wrap mr-1 items-center">
          <img src={image12} className="w-fullmd:w-[20rem] md:h-[18rem] lg:w-[22rem] lg:h-[20rem] m-1" alt="image 12" />
          <img src={image13} className="w-fullmd:w-[20rem] md:h-[18rem] lg:w-[22rem] lg:h-[20rem] m-1" alt="image 13" />
        </div>
      </div>
    </div>

  );
};

export default Gallery2;
