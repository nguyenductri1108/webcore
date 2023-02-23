import { Box, Grid, Paper, Typography } from "@mui/material";
import classNames from "classnames/bind";
import styles from "./TinTuc.scss";
import { ColorButton } from "../ThucDon/Child/MenuText";
import { useEffect, useRef, useState } from "react";
import { getNews } from "src/service/getData";
import { getDateAndMonth } from "src/utils/Dateutils";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const TinTuc = () => {
    const [dataNews, setDataNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getData = async () => {
        setLoading(true);
        const response = await getNews();
        setDataNews(response.news);
        setLoading(false);
    };

    const handleClick = () => {
        navigate("/news");
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Box sx={{ maxWidth: { xl: "1268px", lg: "960px", md: "768px", sm: "520px", xs: "380px" }, margin: "0 auto" }}>
            <Typography variant="h6" sx={{ padding: "30px 0", fontSize: "18px" }}>
                TIN TỨC
            </Typography>
            <Grid container spacing={3}>
                {!loading &&
                    dataNews.map((item, index) => {
                        const [month, day] = getDateAndMonth(item.dpublish);

                        return (
                            <Grid item xl={3} md={4} sm={6} xs={12} key={index}>
                                <Paper
                                    className={cx("news-item")}
                                    elevation={2}
                                    sx={{ height: "320px", position: "relative" }}
                                >
                                    <Box sx={{ height: "50%", width: "100%" }}>
                                        <img src={item.pimg.thumb_url} width="100%" height="100%" alt="news" />
                                    </Box>
                                    <Box sx={{ padding: "0.7em 1.2em 1.4em", width: "100%" }}>
                                        <Typography
                                            sx={{
                                                display: "block",
                                                paddingBottom: ".5em",
                                                fontWeight: "bold",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                "-webkit-box-orient": "vertical",
                                                lineClamp: "2",
                                                height: "2.8em",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Box
                                            sx={{
                                                height: "2px",
                                                backgroundColor: "rgba(0,0,0,0.1)",
                                                margin: "1em 0 1em",
                                                width: "100%",
                                                maxWidth: "30px",
                                            }}
                                        ></Box>
                                        <Typography
                                            sx={{
                                                display: "block",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                "-webkit-box-orient": "vertical",
                                                lineClamp: "2",
                                                height: "2.8em",
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            backgroundColor: "var(--main-color-first)",
                                            position: "absolute",
                                            top: "2em",
                                            left: "0",
                                            color: "var(--2nd-color)",
                                            padding: "3px 5px",
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: "bold" }}>{day}</Typography>
                                        <Typography sx={{ fontWeight: "bold" }}>{`Th${month}`}</Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        );
                    })}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ColorButton
                    sx={{
                        backgroundColor: "var(--main-color-first)",
                        color: "var(--2nd-color)",
                        borderColor: "var(--2nd-color)",
                        paddingRight: "16px",
                        paddingLeft: "16px",
                        // "&:hover": {
                        //     color: "var(--main-color-first)",
                        // },
                        "&:hover": {
                            backgroundColor: "#fff",
                            borderColor: "#000",
                        },
                    }}
                    onClick={handleClick}
                >
                    Xem Thêm
                </ColorButton>
            </Box>
        </Box>
    );
};

export default TinTuc;
