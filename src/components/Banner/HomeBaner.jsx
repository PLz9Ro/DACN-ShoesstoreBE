import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeBannerDT } from "./HomeBannerDT";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};
const items = HomeBannerDT.map((item) => (
  <div className="z-0 lg:h-[40rem]  sm:min-h-[20rem] w-full object-cover ">
    <img
      src={item.image}
      alt="banner"
      className="cursor-pointer h-full w-full "
      role=" resentation"
    />
  </div>
));

const HomeBaner = () => {
  return (
    <AliceCarousel
      items={items}
      responsive={responsive}
      autoPlay
      autoPlayInterval={2000}
      animationDuration={1000}
      disableButtonsControls
      disableDotsControls
      infinite
    />
  );
};

export default HomeBaner;
