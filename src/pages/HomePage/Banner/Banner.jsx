import { Box } from "@mui/material";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import HoGuom from "../../../assets/imgs/hanoi_adobe_express.svg";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Banner.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { axiosGet } from "src/utils/AxiosUtils";
import { BASE_API } from "src/constants";
import { getBanners } from "src/service/getData";

const cx = classNames.bind(styles);

const SlideRender = ({ data }) => {
    let componentRender = <></>;

    switch (data.itype) {
        case "IMAGE": {
            componentRender = <SlideImage data={data} />;
            break;
        }
        case "VIDEO": {
            componentRender = <SlideVideo data={data} />;
            break;
        }
        default: {
            componentRender = <SwiperSlide></SwiperSlide>;
        }
    }
    return componentRender;
};

const SlideImage = ({ data }) => {
    // const swiperRef = useSwiper();

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${data.rurl})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        ></Box>
    );
};

const SlideVideo = ({ data, active }) => {
    const videoRef = useRef();

    return (
        <Box>
            <video ref={videoRef} id={data._id} width="100%" style={{ objectFit: "fill" }} autoPlay muted loop>
                <source src={data.rurl} type="video/mp4" />
            </video>
        </Box>
    );
};

const Banner = () => {
    const [dataBanner, setDataBanner] = useState([]);
    const [loading, setLoading] = useState(false);
    const timeoutRef = useRef();
    const swiperRef = useRef();

    const getData = async () => {
        setLoading(true);
        const response = await getBanners();
        // console.log(response);
        setDataBanner(response);
        setLoading(false);
    };

    const initEvent = async (swiper) => {
        // console.log(swiper);
        // const timeout = dataBanner[swiper.realIndex].tshow;
        // timeoutRef.current = setTimeout(() => {
        //     swiper.slideNext();
        // }, timeout * 1000);
    };

    const clearTimeoutRef = () => {
        clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        let initNextSlide = null;
        if (dataBanner.length !== 0) {
            const timeout = dataBanner[swiperRef.current.swiper.realIndex].tshow;
            initNextSlide = setTimeout(() => {
                swiperRef.current.swiper.slideNext();
            }, timeout * 1000);
        }
        return () => {
            clearTimeout(initNextSlide);
        };
    }, [dataBanner]);

    return (
        <Box sx={{ width: "100%", height: { xl: "900px", lg: "750px", md: "650px", sm: "500px", xs: "350px" } }}>
            {/* <img src={HoGuom} alt='bg' style={{width: '100%', objectFit: 'contain'}} ></img> */}
            <Swiper
                speed={200}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                style={{ width: "100%", height: "100%", position: "relative" }}
                // onClick={() => {
                //     console.log(`swiper: ${swiperRef}`);
                // }}
                onRealIndexChange={(swiper) => {
                    clearTimeoutRef();
                    console.log("activeindex", swiper.realIndex);
                    const timeout = dataBanner[swiper.realIndex].tshow;
                    timeoutRef.current = setTimeout(() => {
                        swiper.slideNext();
                    }, timeout * 1000);
                }}
                onAfterInit={initEvent}
                ref={swiperRef}
            >
                {dataBanner.map((item, index) => {
                    if (item.itype === "IMAGE") {
                        return (
                            <SwiperSlide key={index} virtualIndex={index}>
                                <SlideImage data={item} />
                            </SwiperSlide>
                        );
                    }
                    if (item.itype === "VIDEO") {
                        return (
                            <SwiperSlide key={index} virtualIndex={index}>
                                {({ isActive }) => <SlideVideo data={item} active={isActive} />}
                            </SwiperSlide>
                        );
                    }
                })}
                {/* <SwiperSlide>
                    <Box>
                        <video id="vid" width="100%" style={{ objectFit: "fill" }} muted>
                            <source
                                src="https://masterisehome.mangoads.com.vn/layoutnew/assets/images/video2.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </Box>
                </SwiperSlide> */}
            </Swiper>
        </Box>
    );
};

export default Banner;
