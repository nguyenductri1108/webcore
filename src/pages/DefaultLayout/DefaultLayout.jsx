import { Box } from "@mui/system";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function DefaultLayout({ children, staticColor }) {
    return (
        <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
            <Navbar staticColor={staticColor} />
            {children}
            <Box sx={{ flexGrow: "1" }}></Box>
            <Footer />
        </Box>
    );
}

export default DefaultLayout;
