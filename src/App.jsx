import { Box, useMediaQuery } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { BREAKPOINTS } from "./constants";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { setIsMobile } from "./redux/rootReducer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DefaultLayout from "./pages/DefaultLayout/DefaultLayout";
import News from "./pages/News/News";

const THEME = createTheme({
    typography: {
        fontFamily: `"Monsterrat","Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
});

function App() {
    const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.MOBILE.max}px)`);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsMobile(isMobile));
    }, [isMobile]);

    return (
        <ThemeProvider theme={THEME}>
            <SnackbarProvider
                maxSnack={3}
                autoHideDuration={4000}
                anchorOrigin={
                    isMobile
                        ? {
                              horizontal: "left",
                              vertical: "bottom",
                          }
                        : {
                              horizontal: "right",
                              vertical: "top",
                          }
                }
            >
                <Box>
                    <Routes>
                        <Route
                            path="/home"
                            element={
                                <DefaultLayout staticColor={false}>
                                    <HomePage />
                                </DefaultLayout>
                            }
                        />
                        <Route path="/" element={<Navigate to="/home" replace />} />

                        <Route
                            path="/news"
                            element={
                                <DefaultLayout staticColor={true}>
                                    <News />
                                </DefaultLayout>
                            }
                        />

                        <Route
                            path="*"
                            element={
                                <DefaultLayout>
                                    <NotFoundPage />
                                </DefaultLayout>
                            }
                        />
                    </Routes>
                </Box>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
