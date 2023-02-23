import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import service1 from "src/assets/imgs/service1.jpg";
import service2 from "src/assets/imgs/service2.jpg";
import { getMenuImg } from "src/service/getData";
import { useEffect, useState } from "react";
import styles from "./MenuImg.scss";

function MenuImg() {
    const [dataMenuImg, setDataMenuImg] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        const response = await getMenuImg();
        console.log(response);
        setDataMenuImg(response);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Box
            sx={{
                // paddingRight: { xl: "70px", md: "50px", xs: "0" },
                width: "100%",
                height: "100%",
                backgroundColor: "yellow",
            }}
        >
            <Swiper
                speed={200}
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper1"
                style={{
                    width: "100%",
                    height: "100%",
                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
                {!loading &&
                    dataMenuImg.map((item, index) => {
                        return (
                            <SwiperSlide style={{ maxWidth: "100%", width: "100%", height: "100%" }}>
                                {/* <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundImage: `url(${item.rurl})`,
                                        backgroundPosition: "center center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "contain",
                                        overflow: "hidden",
                                    }}
                                ></Box> */}
                                <Box sx={{ backgroundColor: "red", width: "100%", height: "100%" }}>
                                    <img
                                        src={item.rurl}
                                        alt="slide-service"
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            objectFit: "cover",
                                            // objectPosition: "50% 50%",
                                        }}
                                    />
                                </Box>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </Box>
    );
}

export default MenuImg;
