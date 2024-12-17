'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type SliderProps = {
    banners: React.ReactNode[];
};


const Slider = ({ banners }: SliderProps) => {
    return (
        <Swiper
            slidesPerView={1}
        >
            {banners.map((banner, index) => <SwiperSlide key={index}>{banner}</SwiperSlide>)}
        </Swiper>
    );
};

export default Slider;