import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { getNews, getNewsNpageUrl } from "src/service/getData";
import { Grid } from "@mui/material";
import { getDateAndMonth } from "src/utils/Dateutils";
import Navbar from "../Navbar/Navbar";
import CssButton from "src/CommonComponent/Button";

function News({ staticColor }) {
    const [dataNews, setDataNews] = useState([]);
    const [endData, setEndData] = useState(false);
    const npageUrl = useRef();

    const getData = async () => {
        const response = await getNews();
        npageUrl.current = response.meta.npage_url;
        setDataNews(response.news);
    };

    const getDataNpageUrl = async () => {
        const response = await getNewsNpageUrl(npageUrl.current);
        console.log(response);
        if (!response.meta.end) {
            npageUrl.current = response.meta.npage_url;
        } else {
            setEndData(true);
        }
        setDataNews((prev) => [...prev, ...response.news]);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Box sx={{ height: "60px", backgroundColor: "white" }}></Box>
            <Box
                sx={{
                    height: "200px",
                    backgroundColor: "lightblue",
                    color: "var(--main-color-first)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h3">Tin tức</Typography>
            </Box>
            <Box
                sx={{
                    maxWidth: { xs: "345px", sm: "567px", md: "768px", lg: "968px", xl: "1268px" },
                    margin: "0 auto",
                    paddingTop: "32px",
                }}
            >
                <Grid container spacing={3}>
                    {dataNews.map((item, index) => {
                        const [month, day] = getDateAndMonth(item.dpublish);

                        return (
                            <Grid item xl={3} md={4} sm={6} xs={12}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        height: "320px",
                                        position: "relative",
                                        "&:hover": {
                                            boxShadow: "2px 2px 10px #ccc",
                                            cursor: "pointer",
                                        },
                                    }}
                                    key={index}
                                >
                                    <Box sx={{ height: "50%", width: "100%" }}>
                                        <img src={item.pimg.thumb_url} height="100%" width="100%" alt="news" />
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
                    {!endData && (
                        <CssButton
                            onClick={() => {
                                getDataNpageUrl();
                            }}
                            theme="light"
                        >
                            Xem Thêm
                        </CssButton>
                    )}
                </Box>
            </Box>
        </>
    );
}

export default News;
