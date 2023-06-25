import { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const SwiperSlider = forwardRef(
    (
        {
            options,
            prevIcon,
            nextIcon,
            children,
            className,
            navClass,
            navStyle,
            navPosition,
            dotStyle,
            dotPosition
        },
        ref
    ) => {
        const modules = options?.modules !== undefined ? options.modules : [];
        const prevClass = `prev-${navClass || "swiper-nav"}`;
        const nextClass = `next-${navClass || "swiper-nav"}`;
        const sliderOptions = {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            watchSlidesProgress: true,
            autoHeight: true,
            breakpoints: {},
            ...options,
            modules: [Navigation, Pagination, A11y, Autoplay, ...modules],
            navigation: options?.navigation
                ? {
                      prevEl: `.${prevClass}`,
                      nextEl: `.${nextClass}`,
                  }
                : false,
            pagination: options?.pagination
                ? {
                      clickable: true,
                  }
                : false,
        };

        return (
            <div
                className={cn(
                    className,
                    "swiper-wrap position-relative",
                    sliderOptions.navigation && navStyle && `nav-style-${navStyle}`,
                    sliderOptions.navigation && navPosition && `nav-position-${navPosition}`,
                    sliderOptions.pagination && dotStyle && `dot-style-${dotStyle}`,
                    sliderOptions.pagination && dotPosition && `dot-position-${dotPosition}`,
                )}
                ref={ref}
            >
                <Swiper {...sliderOptions}>{children}</Swiper>

                {sliderOptions?.navigation && (
                    <>
                        <button
                            type="button"
                            className={`swiper-btn swiper-btn-prev ${prevClass}`}
                        >
                            <i className={cn(prevIcon, "icon")} />
                        </button>
                        <button
                            type="button"
                            className={`swiper-btn swiper-btn-next ${nextClass}`}
                        >
                            <i className={cn(nextIcon, "icon")} />
                        </button>
                    </>
                )}
            </div>
        );
    }
);

export { SwiperSlide };

SwiperSlider.propTypes = {
    options: PropTypes.shape({
        modules: PropTypes.array,
        navigation: PropTypes.bool,
        pagination: PropTypes.bool,
    }),
    prevIcon: PropTypes.string,
    nextIcon: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    navClass: PropTypes.string,
    navStyle: PropTypes.oneOf([1, 2]),
    navPosition: PropTypes.oneOf([1, 2]),
    dotStyle: PropTypes.oneOf([1, 2]),
    dotPosition: PropTypes.oneOf([1, 2])
};

SwiperSlider.defaultProps = {
    prevIcon: "fa fa-angle-left",
    nextIcon: "fa fa-angle-right",
    navStyle: 1,
    navPosition: 1,
    dotStyle: 1,
    dotPosition: 1,
};

SwiperSlider.displayName = "SwiperSlider"

export default SwiperSlider;