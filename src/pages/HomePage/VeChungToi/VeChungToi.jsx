import { Box, Grid, Paper, Typography } from "@mui/material";
import SignImg from "src/assets/imgs/signature.png";
import AboutUsImg from "src/assets/imgs/home_pic.jpg";

const VeChungToi = () => {
    return (
        <Box sx={{ maxWidth: "1268px", margin: "0 auto", padding: "60px 60px" }}>
            <Grid container spacing={8}>
                <Grid item xl={6} lg={6} md={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" sx={{ padding: "30px 0", fontSize: "18px" }}>
                            VỀ CHÚNG TÔI
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: "700", paddingBottom: "20px" }}>
                            Mona Beach – Hơn cả 1 kì nghỉ dưỡng trên biển
                        </Typography>
                        <Typography paragraph>
                            Chúng tôi tự hào nói rằng kể từ khi mở cửa vào năm 98, chúng tôi đã phục vụ khách truy cập
                            theo cách tốt nhất có thể. Trong khách sạn Monavi, nơi mỗi một trong số 17 phòng của chúng
                            tôi – với cá tính và phong cách riêng – sẽ giúp bạn cảm thấy như ở nhà và sống trải nghiệm
                            Monavi trải nghiệm như bạn sẽ không bao giờ tưởng tượng được.
                        </Typography>
                        <img src={SignImg} style={{ width: "50%", height: "auto" }} alt="sign" />
                        <Typography sx={{ fontWeight: "600", paddingTop: "10px" }}>
                            RICARD MORGAN – GENERAL MANAGER
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xl={6} lg={6} md={6}>
                    <img src={AboutUsImg} style={{ width: "100%", height: "auto" }} alt="about-us" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default VeChungToi;
