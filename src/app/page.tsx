import Banner from "@/_components/Banner";
import Slider from "@/_components/Slider";

import image from "@/public/main_banner.png";

const banners = [
  {
    image,
    alt: "Banner",
    color: "bg-light-purple",
    intro: "Best Furniture For Your Castle....",
    title: "New Furniture Collection Trends in 2020",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cta: (
      <button className="px-10 rounded-full bg-pink h-12 text-white text-base font-semibold">
        Shop now
      </button>
    ),
  },
  {
    image,
    alt: "Banner",
    color: "bg-light-purple",
    intro: "Best Furniture For Your Castle....",
    title: "New Furniture Collection Trends in 2020",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cta: (
      <button className="px-10 rounded-full bg-pink h-12 text-white text-base font-semibold">
        Shop now
      </button>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Slider
        banners={banners.map((banner) => (
          <Banner key={banner.title} {...banner} />
        ))}
      />
    </>
  );
}