import React from 'react';
import img1 from '../../../assets/images/banner/11.jpg';
import img2 from '../../../assets/images/banner/12.jpg';
import img3 from '../../../assets/images/banner/13.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Banner = () => {
    return (
        <>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96"
                    // src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                    src={img1}
                    alt="image slide 1"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96"
                    // src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                    src={img2}
                    alt="image slide 2"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96"
                    // src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                    src={img3}
                    alt="image slide 3"
                />
            </SwiperSlide>
        </Swiper>
    </>
    );
};

export default Banner;