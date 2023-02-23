import { Button, styled } from "@mui/material";

const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    padding: { xl: "5px 35px", md: "5px 25px", xs: "15px 15px" },
    backgroundColor: "transparent",
    border: "1px solid white",
    marginTop: "60px",
    // width: "50%",
    borderRadius: "0px",
    maxWidth: "200px",
    // fontWeight: "100",
}));

const CssButton = ({ children, theme, ...props }) => {
    return (
        <ColorButton
            sx={{
                color: theme === "dark" ? "white" : "black",
                borderColor: theme === "dark" ? "white" : "black",
                backgroundColor: theme === "dark" ? "black" : "white",
                "&:hover": {
                    color: theme === "dark" ? "black" : "white",
                    backgroundColor: theme === "dark" ? "white" : "black",
                },
            }}
            {...props}
        >
            {children}
        </ColorButton>
    );
};

export default CssButton;
