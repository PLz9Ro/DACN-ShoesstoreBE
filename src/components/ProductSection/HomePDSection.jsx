import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeItemSection from "./HomeItemSection";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";



const HomePDSection = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex]= useState(0);
    const slidePrev =()=> setActiveIndex(activeIndex-1);
    const slideNext =()=> setActiveIndex(activeIndex+1);
    const syncActiveInex = ({item})=>setActiveIndex(item); 
    const navigate = useNavigate();
    const responsive = {
        0: { items: 2 },
        568: { items: 3 },
        1024: { items: 5.5 },
    };


    const items = data.slice(0,10).map((item) => <HomeItemSection product={item} />);


    return (
        <div className="relative lg:px-8 px-2 ">
            {/* onClick={()=>navigate(`/product/${5}`)} */}
            <div  className="relative p-5 border-2">
                <h2 className="text-2xl font-extrabold text-gray-800 py-2"> {sectionName}</h2>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveInex}
                    activeIndex={activeIndex}
                />
                <div>
                {activeIndex !== 0 && <button
                    variant="contained"
                    className="z-50 absolute top-[8rem] w-[2rem] left-[-1.3%] bg-white hover:bg-[#CDE7F6] h-[5rem] border-2 "
                    color="white"
                    onClick={slidePrev}
                >
                    <KeyboardArrowLeftIcon />
                </button>}
                {activeIndex !== items.length-5  && <button
                    variant="contained"
                    className="z-50 absolute top-[8rem]  sm:w-[2rem] right-[-1.3%] bg-white hover:bg-[#CDE7F6] h-[5rem] border-2  "
                    color="white"
                    onClick={slideNext}
                >
                    <ChevronRightIcon />
                </button>}

                </div>
            </div>
        </div>
    );
};

export default HomePDSection;
