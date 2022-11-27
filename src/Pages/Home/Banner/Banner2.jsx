import React from 'react';
import img1 from '../../../assets/images/banner/11.jpg';
import img2 from '../../../assets/images/banner/12.jpg';
import img3 from '../../../assets/images/banner/13.jpg';

const Banner2 = () => {
    return (
        <div>

<section class="py-3">
  <div class="container px-4 mx-auto">
    <div class="relative pt-12 lg:py-18 px-8 md:px-18 rounded-2xl overflow-hidden">

      <img class="absolute top-0 left-0 h-full w-full object-cover" src={img1} alt=""/>

      <div class="relative max-w-sm mx-auto lg:mx-0 mb-16 lg:mb-0">
        <h3 class="text-3xl font-bold text-white mb-3">Ideal banner asset for your dashboard project</h3>
        <p class="font-medium text-blue-200 mb-6">Go global with our UI Resources and solutions</p>
        <a class="inline-block w-full sm:w-auto px-6 md:px-18 py-3 leading-6 text-center font-semibold text-blue-50 bg-gray-500 hover:bg-gray-600 transition duration-200 rounded-lg" href="#">Get Started</a>
      </div>

      <img class="hidden lg:block absolute bottom-0 right-0 lg:max-w-lg xl:max-w-2xl xl:mr-18" src={img2} alt=""/>

      <img class="relative lg:hidden block mx-auto" src={img3} alt=""/>

    </div>
  </div>
</section>


        </div>
    );
};

export default Banner2;