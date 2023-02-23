import { Button, Grid, Paper, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    padding: { xl: "5px 35px", md: "5px 25px", xs: "15px 15px" },
    backgroundColor: "transparent",
    border: "1px solid white",
    marginTop: "60px",
    // width: "50%",
    borderRadius: "0px",
    maxWidth: "200px",
    "&:hover": {
        background: "#fff !important",
        color: "#000",
        border: "1px solid #fff",
        cursor: "pointer",
        // fontWeight: "100",
    },
}));

const MenuTextItem = ({ smallLayout }) => {
    return (
        <Box
            sx={{
                backgroundColor: "rgb(34, 34, 34)",
                color: "var(--2nd-color)",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                padding: "70px",
                height: "100%",
            }}
        >
            <Typography variant="h4" sx={{ paddingBottom: "10px", textTransform: "capitalize", fontWeight: "bold" }}>
                Luxury Room
            </Typography>

            <Typography sx={{ paddingBottom: { xl: "70px", md: "40px", xs: "20px" } }}>TỪ 800K / ĐÊM</Typography>

            <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
                <Typography>
                    Giường :&nbsp; &nbsp; &nbsp;<em>King Bed</em>
                </Typography>
                <Typography>
                    Dành cho :&nbsp; &nbsp; &nbsp;<em>3 người lớn + 1 trẻ em</em>
                </Typography>
                <Typography>
                    Kích thước :&nbsp; &nbsp;<em>55m²</em>
                </Typography>
                <Typography>
                    View :&nbsp; &nbsp; &nbsp;<em>Cạnh bờ biển</em>
                </Typography>
                <Typography>
                    Phù hợp :&nbsp; &nbsp; &nbsp;<em>Gia đình và công việc</em>
                </Typography>
            </Box>

            <ColorButton>Xem chi tiết</ColorButton>

            <Box sx={{ flexGrow: "1" }}></Box>
        </Box>
    );
};

function MenuText({ smallLayout }) {
    return (
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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
            <SwiperSlide>
                <MenuTextItem smallLayout={smallLayout} />
            </SwiperSlide>
            <SwiperSlide>
                <MenuTextItem smallLayout={smallLayout} />
            </SwiperSlide>
            <SwiperSlide>
                <MenuTextItem smallLayout={smallLayout} />
            </SwiperSlide>
        </Swiper>
    );
}

export default MenuText;
