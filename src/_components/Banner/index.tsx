'use client';

import 'swiper/css';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type BannerProps = {
    image: StaticImageData;
    alt: string;
    color: string;
    intro: string;
    title: string;
    subtitle: string;
    cta: React.ReactNode;
};


const Banner = ({ image, alt, color, intro, title, subtitle, cta }: BannerProps) => {
    return (
        <div className={`relative h-[764px] overflow-hidden flex justify-center items-center ${color}`}>
            <Image src={image} alt={alt} className='w-auto h-full max-w-none' />
            <div className='container-base absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>
                <div className='max-w-2xl'>
                    <h3 className='text-pink font-bold text-base mb-3'>{intro}</h3>
                    <h2 className='text-5xl font-bold mb-3'>{title}</h2>
                    <p className='max-w-xl text-base font-bold mb-7'>{subtitle}</p>
                    {cta}
                </div>
            </div>
        </div>
    );
};

export default Banner;