import { useState } from "react";
import periods from "../../data/periods";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";

function SliderCircle() {
    const [activeIndex, activeIndexSet] = useState(0);
    const itemNumInc = (swiper) => {
        activeIndexSet(swiper.activeIndex);
    };
    // const swiperSlide = useSwiperSlide();
    // const itemNumInc = (swiper) => console.log(swiper.activeIndex + 1);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return (
                '<span id="' + '" class="' + className + '">' + "</span>"
            );
        },
    };

    return (
        <>
            <Swiper
                cssMode={true}
                pagination={pagination}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="slider__circle"
                onSlideChange={itemNumInc}
                onSlideStart={(swiper) => console.log((this)[0].currentElm.attr('id'))}
            >
                <div className="slider__fraction">
                    <span>0{activeIndex + 1}</span>
                    <span>/</span>
                    <span>0{periods.length}</span>
                </div>
                {periods.map((period) => {
                    return (
                        <SwiperSlide key={period.id}>
                            <h2 className="slider__subtitle">
                                <span className="slider__subtitle--one">{period.period.dateOne}</span>
                                <span className="slider__subtitle--two">{period.period.dateTwo}</span>
                            </h2>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="slider__bottom">
                <Swiper
                    cssMode={true}
                    slidesPerView={3}
                    pagination={false}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className=""
                    spaceBetween={0}
                >
                    {periods[activeIndex].events.map((slide) => {
                        return (
                            <SwiperSlide key={slide.id}>
                                <div className="slider__bottom__item">
                                    <h3 className="slider__bottom__item--date">{slide.date}</h3>
                                    <p className="slider__bottom__item--desc">{slide.description}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default SliderCircle;