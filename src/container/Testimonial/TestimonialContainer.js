import PropTypes from "prop-types";
import React from 'react';
import TestimonialData from '../../data/testimonial/testimonial.json'
import Testimonial from '../../components/Testimonial/Testimonial.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import Swiper, { SwiperSlide } from "../../components/swiper";



const TestimonialContainer = ({ classOption }) => {
    const sliderOptions = {
        spaceBetween: 50,
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        autoplay: false,
        pagination: true,
        breakpoints: {
            991:{
                slidesPerView : 2
            },
            1499:{
                slidesPerView : 3
            }
        }
    }
    return (
        <div className={`testimonial-section section section-padding-t90 section-padding-bottom ${classOption}`}>
            <div className="container-fluid ps-xl-16 ps-lg-3 ps-md-3 ps-sm-3 ps-3 pe-xl-16 pe-lg-3 pe-md-3 pe-sm-3 pe-3">
                <SectionTitle
                    headingOption="title fz-28"
                    title="What our customers are saying about our services"
                    subTitle="Get your company heading in the right direction with our digital
                        marketing strategist"
                />

                <Swiper className="testimonial-slider" data-aos="fade-up" data-aos-delay="300" options={sliderOptions}>
                    {TestimonialData &&
                        TestimonialData.map((single, key) => {
                            return(
                                <SwiperSlide key={key}>
                                    <Testimonial data={single} key={key} />
                                </SwiperSlide>
                            ); 
                    })}
                </Swiper>
            </div>
        </div>
    )
}

TestimonialContainer.propTypes = {
    classOption: PropTypes.string
};
TestimonialContainer.defaultProps = {
    classOption: "testimonial-section section section-padding-t90 section-padding-bottom"
};

export default TestimonialContainer;
