import { Box, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ColorButton } from "../HomePage/ThucDon/Child/MenuText";

const CssTextField = styled(TextField)({
    "& label.MuiFormLabel-root": {
        color: "white",
    },
    "& label.Mui-focused": {
        color: "white",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "white!important",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "red",
        },
        "&:hover fieldset": {
            borderColor: "yellow",
        },
        "&.Mui-focused fieldset": {
            borderColor: "white",
        },
    },
    "& input.MuiInput-input": {
        color: "white",
    },
});

const Footer = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: "100px" }}>
            <img
                src="http://mauweb.monamedia.net/hotellerbeach/wp-content/uploads/2019/03/wave-hoteller.png"
                style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                }}
                alt="padding-footer"
            />
            <Box sx={{ width: "100%", backgroundColor: "#222222" }}>
                <Box sx={{ maxWidth: "1200px", width: "100%", margin: "30px auto", padding: "60px" }}>
                    <Grid
                        container
                        spacing={5}
                        sx={{
                            color: "white",
                        }}
                    >
                        <Grid item xl={4} lg={4} md={4}>
                            <Typography sx={{ marginBottom: "20px" }} variant="h6">
                                Địa chỉ
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }}>Startup by Le Cong Thanh</Typography>
                            <Typography variant="body2">4th Floor, Hoa Binh Green City, Ha Noi</Typography>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4}>
                            <Typography sx={{ marginBottom: "20px" }} variant="h6">
                                Đặt chỗ
                            </Typography>
                            <Typography variant="body2">Tel:0123456789</Typography>
                            <Typography sx={{ marginTop: "20px" }} variant="body2">
                                abc@gmail.com
                            </Typography>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4}>
                            <Typography sx={{ marginBottom: "20px" }} variant="h6">
                                Nhận tin
                            </Typography>
                            <CssTextField
                                // color="white"
                                sx={{
                                    color: "white",
                                }}
                                id="standard-password-input"
                                label="Message"
                                // type="password"
                                variant="standard"
                            />
                            <ColorButton>Đăng ký</ColorButton>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
