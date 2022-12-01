import React from 'react';
import img1 from '../../../assets/images/banner/11.jpg';
import img2 from '../../../assets/images/banner/12.jpg';
import img3 from '../../../assets/images/banner/13.jpg';

const Banner2 = () => {
    return (
        <div>

<section className="py-3">
  <div className="container px-4 mx-auto">
    <div className="relative pt-12 lg:py-18 px-8 md:px-18 rounded-2xl overflow-hidden">

      <img className="absolute top-0 left-0 h-full w-full object-cover" src={img1} alt=""/>

      <div className="relative max-w-sm mx-auto lg:mx-0 mb-16 lg:mb-0">
        <h3 className="text-3xl font-bold text-white mb-3">Books are packed with knowledge, they give you life lessons, and they teach you about hardships, love, fear, and every little thing that is a part of life</h3>
        
       
      </div>

      <img className="hidden lg:block absolute bottom-0 right-0 lg:max-w-lg xl:max-w-2xl xl:mr-18" src={img2} alt=""/>

      <img className="relative lg:hidden block mx-auto" src={img3} alt=""/>

    </div>
  </div>
</section>


        </div>
    );
};

export default Banner2;