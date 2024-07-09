import React from 'react';

import BannerImage from '../assets/bannerImage.jpg'

const Banner = () => {
  return (
    <div className='mt-[7.5rem] sm:mt-40 w-full h-64'>
      <img src={BannerImage} alt="Banner" className="w-full object-cover"/>
    </div>
  );
}

export default Banner;

