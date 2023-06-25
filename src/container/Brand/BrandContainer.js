import PropTypes from "prop-types";
import React from 'react';
import BrandData from '../../data/brand/brand.json';
import Brand from '../../components/Brand/Brand.jsx';
import Swiper, { SwiperSlide } from "../../components/swiper";

const BrandContainer = ({ classOption }) => {
    const sliderOptions = {
        spaceBetween: 30,
        slidesPerView: 6,
        loop: true,
        breakpoints: {
            1200:{
                slidesPerView : 6
            },
            992:{
                slidesPerView : 5
            },
            768:{
                slidesPerView : 5

            },
            576:{
                slidesPerView : 4
            },
            320:{
                slidesPerView : 2
            }
        }
    }
    return (
        <div className={`brand-section section ${classOption}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <div className="brand-wrapper">
                            <div className="brand-list">
                                <Swiper className="brand-carousel" options={sliderOptions}>
                                    {BrandData &&
                                        BrandData.map((single, key) => {
                                            return(
                                                <SwiperSlide key={key}>
                                                    <Brand data={single} key={key} />
                                                </SwiperSlide>
                                            ); 
                                    })}
                                        
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

BrandContainer.propTypes = {
    classOption: PropTypes.string
};
BrandContainer.defaultProps = {
    classOption: "brand-section section section-padding-bottom"
};

export default BrandContainer;
