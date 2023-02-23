import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import VeChungToi from "./VeChungToi/VeChungToi";
import ThucDon from "./ThucDon/ThucDon";
import DichVu from "./DichVu/DichVu";
import TinTuc from "./TinTuc/TinTuc";

const HomePage = () => {
    return (
        <Box sx={{ bgcolor: "var(--2nd-color)" }}>
            <Banner />
            <VeChungToi />
            <DichVu />
            <ThucDon />
            <TinTuc />
        </Box>
    );
};

export default HomePage;
