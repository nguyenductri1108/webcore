import { Box, Grid, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import FeatureInfo from "../../../CommonComponent/FeatureInfo/FeatureInfo";
import MenuImg from "./Child/MenuImg";
import MenuText from "./Child/MenuText";

const ThucDon = () => {
    const smallLayout = useMediaQuery("(max-width: 1268px)");

    useEffect(() => {
        console.log(smallLayout);
    }, [smallLayout]);
    return (
        <Box
            sx={{
                maxWidth: "1268px",
                margin: "0 auto",
                // padding: "30px 0",
                backgroundColor: "rgb(34, 34, 34)",
            }}
        >
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                <Box
                    sx={{
                        width: smallLayout ? "100%" : "calc(100% / 3)",
                        height: "600px",
                        // height: "fit-content",
                        minWidth: smallLayout ? "220px" : "420px",
                        // margin: smallLayout ? "0 auto" : "0",
                    }}
                >
                    <MenuText smallLayout={smallLayout} />
                </Box>
                <Box
                    sx={{
                        width: smallLayout ? "100%" : "calc(200% / 3)",
                        height: "600px",
                        minWidth: smallLayout ? "350px" : "650px",
                        maxWidth: smallLayout ? "100%" : "845px",
                    }}
                >
                    <MenuImg />
                </Box>
            </Box>
        </Box>
    );
};

export default ThucDon;
