import { Box, Grid, Paper, Typography } from "@mui/material";
import FeatureInfo from "../../../CommonComponent/FeatureInfo/FeatureInfo";
import nhahangImg from "src/assets/imgs/nhahang.jpg";
import monanImg from "src/assets/imgs/monan.jpg";
import classNames from "classnames/bind";
import styles from "./DichVu.scss";

const cx = classNames.bind(styles);

const DichVu = () => {
    return (
        <Box sx={{ backgroundColor: "rgba(30,30,30,0.3)" }}>
            <Box sx={{ maxWidth: "1268px", margin: "0 auto", padding: { xl: "50px", md: "30px", xs: "20px" } }}>
                <Typography variant="h6" sx={{ padding: "0 0 30px", fontSize: "18px" }}>
                    DỊCH VỤ
                </Typography>
                <Grid container alignItems="stretch" spacing={5}>
                    <Grid item xl={4} md={6} xs={12}>
                        <Paper
                            className={cx("dichvuItem")}
                            sx={{
                                background: `url(${nhahangImg})`,
                                minHeight: "400px",
                                backgroundSize: "cover",
                                backgroundPosition: "50% 50%",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    padding: "8px 24px",
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: `var(--2nd-color)`,
                                    flexDirection: "column",
                                    textShadow: "1px 1px 5px #000000",
                                }}
                            >
                                <Typography variant="h4" sx={{ marginBottom: "12px" }}>
                                    Title
                                </Typography>
                                <Typography variant="body2">Description</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <Paper
                            className={cx("dichvuItem")}
                            sx={{
                                background: `url(${nhahangImg})`,
                                minHeight: "400px",
                                backgroundSize: "cover",
                                backgroundPosition: "50% 50%",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    padding: "8px 24px",
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: `var(--2nd-color)`,
                                    flexDirection: "column",
                                    textShadow: "1px 1px 5px #000000",
                                }}
                            >
                                <Typography variant="h4" sx={{ marginBottom: "12px" }}>
                                    Title
                                </Typography>
                                <Typography variant="body2">Description</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <Paper
                            className={cx("dichvuItem")}
                            sx={{
                                background: `url(${nhahangImg})`,
                                minHeight: "400px",
                                backgroundSize: "cover",
                                backgroundPosition: "50% 50%",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    padding: "8px 24px",
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: `var(--2nd-color)`,
                                    flexDirection: "column",
                                    textShadow: "1px 1px 5px #000000",
                                }}
                            >
                                <Typography variant="h4" sx={{ marginBottom: "12px" }}>
                                    Title
                                </Typography>
                                <Typography variant="body2">Description</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <Paper
                            className={cx("dichvuItem")}
                            sx={{
                                background: `url(${monanImg})`,
                                minHeight: "400px",
                                backgroundSize: "cover",
                                backgroundPosition: "50% 50%",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    padding: "8px 24px",
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: `var(--2nd-color)`,
                                    flexDirection: "column",
                                    textShadow: "1px 1px 5px #000000",
                                }}
                            >
                                <Typography variant="h4" sx={{ marginBottom: "12px" }}>
                                    Title
                                </Typography>
                                <Typography variant="body2">Description</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <Paper
                            className={cx("dichvuItem")}
                            sx={{
                                background: `url(${nhahangImg})`,
                                minHeight: "400px",
                                backgroundSize: "cover",
                                backgroundPosition: "50% 50%",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    padding: "8px 24px",
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: `var(--2nd-color)`,
                                    flexDirection: "column",
                                    textShadow: "1px 1px 5px #000000",
                                }}
                            >
                                <Typography variant="h4" sx={{ marginBottom: "12px" }}>
                                    Title
                                </Typography>
                                <Typography variant="body2">Description</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <Paper
                            className={cx("dichvuItem")}
                            sx={{
                                background: `url(${monanImg})`,
                                minHeight: "400px",
                                backgroundSize: "cover",
                                backgroundPosition: "50% 50%",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    padding: "8px 24px",
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: `var(--2nd-color)`,
                                    flexDirection: "column",
                                    textShadow: "1px 1px 5px #000000",
                                }}
                            >
                                <Typography variant="h4" sx={{ marginBottom: "12px" }}>
                                    Title
                                </Typography>
                                <Typography variant="body2">Description</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default DichVu;
