import {
    Box,
    Button,
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Slide,
    SwipeableDrawer,
    Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import LogoImg from "../../assets/imgs/nhahangsenvang.png";
import Toolbar from "@mui/material/Toolbar";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import classNames from "classnames/bind";
import styles from "./Navbar.scss";
import { useEffect, useState } from "react";
import useScrollHandle from "src/utils/CustomHook/useScrollHandle";
import zIndex from "@mui/material/styles/zIndex";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { ColorButton } from "../HomePage/ThucDon/Child/MenuText";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LogoSvg from "src/assets/svgs/Logo";

const cx = classNames.bind(styles);

const Navbar = ({ staticColor }) => {
    // const [pageYoffset, setPageYoffset] = useState(null)
    const [colorHeader, setColorHeader] = useState(null);
    const [colorTextHeader, setColorTextHeader] = useState("white");

    const [drawerState, setDrawerState] = useState(false);
    const [openNestMenu, setOpenNestMenu] = useState(false);

    const handleClickOpenNestMenu = (e) => {
        e.stopPropagation();
        setOpenNestMenu(!openNestMenu);
    };

    const UnderlineHoverTypo = styled(Typography)(() => ({
        borderBottom: "2px solid transparent",
        "&:hover": {
            borderBottomColor: `${colorTextHeader}`,
        },
    }));

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    const handleOpenDrawer = () => {
        setDrawerState(true);
    };

    const handleCloseDrawer = () => {
        setDrawerState(false);
    };

    const setPageScroll = () => {
        const scrollBarPos = window.pageYOffset;
        const opacityBg = clamp(scrollBarPos, 0, 500) / 500;

        const colorFill = 255 * (1 - opacityBg);

        setColorHeader(`rgba(255,255,255,${opacityBg})`);
        setColorTextHeader(`rgba(${colorFill},${colorFill},${colorFill},1)`);
    };

    useEffect(() => {
        window.addEventListener("scroll", setPageScroll);

        return () => {
            window.removeEventListener("scroll", setPageScroll);
        };
    }, []);

    const trigger = useScrollTrigger();

    const HtmlTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
        ({ theme }) => ({
            [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: "black",
                color: "var(--2nd-color)",
                maxWidth: 220,
                fontSize: theme.typography.pxToRem(12),
                borderRadius: 0,
                padding: "10px 20px",
            },
        })
    );

    return (
        <>
            <Slide in={!trigger}>
                <AppBar
                    elevation={0}
                    color="transparent"
                    sx={{
                        bgcolor: staticColor ? "white" : `${colorHeader}!important`,
                        display: "flex",
                        height: "var(--header-height)",
                        color: "var(--main-color-2nd)",
                        justifyContent: "space-between",
                    }}
                >
                    <Toolbar>
                        <Box
                            sx={{
                                width: "1268px",
                                margin: "auto",
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box sx={{ display: { xl: "none", lg: "none", md: "none", sm: "block" } }}>
                                    <IconButton onClick={handleOpenDrawer}>
                                        <MenuIcon sx={{ color: staticColor ? "black" : `${colorTextHeader}` }} />
                                    </IconButton>
                                </Box>
                                <Box sx={{ margin: "0 64px 0 0", height: "var(--header-height)" }}>
                                    <LogoSvg
                                        staticColor={staticColor}
                                        bgColor={colorHeader}
                                        textColor={colorTextHeader}
                                    />
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: { md: "flex", sm: "none", xs: "none" },
                                    columnGap: "25px",
                                    color: "var(--2nd-color)",
                                    fontWeight: 300,
                                    color: staticColor ? "black" : `${colorTextHeader}!important`,
                                    height: "100%",
                                }}
                            >
                                <UnderlineHoverTypo className={cx("header-text")} variant="body2">
                                    Trang chủ
                                </UnderlineHoverTypo>
                                <UnderlineHoverTypo className={cx("header-text")} variant="body2">
                                    Giới thiệu
                                </UnderlineHoverTypo>
                                <Typography className={cx("header-text")} variant="body2">
                                    <HtmlTooltip
                                        placement="bottom-start"
                                        title={
                                            <>
                                                <Typography className={cx("item-menu-header")} color="inherit">
                                                    Dịch vụ 1
                                                </Typography>
                                                <Typography className={cx("item-menu-header")} color="inherit">
                                                    Dịch vụ 2
                                                </Typography>
                                            </>
                                        }
                                    >
                                        <span>Dịch vụ</span>
                                    </HtmlTooltip>
                                </Typography>

                                <UnderlineHoverTypo className={cx("header-text")} variant="body2">
                                    Thực đơn
                                </UnderlineHoverTypo>
                                <UnderlineHoverTypo className={cx("header-text")} variant="body2">
                                    Tin tức
                                </UnderlineHoverTypo>
                                <UnderlineHoverTypo className={cx("header-text")} variant="body2">
                                    Liên hệ
                                </UnderlineHoverTypo>
                            </Box>

                            <Box className={cx("divGrow")} sx={{ flexGrow: "1" }}></Box>

                            <Box>
                                <ColorButton
                                    sx={{
                                        color: staticColor ? "black" : `${colorTextHeader}`,
                                        padding: "5px 15px",
                                        margin: "0",
                                        minWidth: "150px",
                                        display: { xl: "none", lg: "none", md: "none", xs: "flex" },
                                        borderColor: staticColor ? "black" : `${colorTextHeader}`,
                                    }}
                                >
                                    <LocalPhoneIcon />
                                    <Typography sx={{ marginLeft: "16px" }}>Liên hệ</Typography>
                                </ColorButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Slide>
            <SwipeableDrawer anchor="left" open={drawerState} onClose={handleCloseDrawer} onOpen={handleOpenDrawer}>
                <Box
                    sx={{
                        width: "250px",
                        paddingTop: "32px",
                    }}
                >
                    <List>
                        <ListItemButton>
                            <ListItemText
                                sx={{
                                    marginLeft: "16px",
                                    "& span": {
                                        fontWeight: "bold",
                                    },
                                }}
                            >
                                Trang chủ
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText
                                sx={{
                                    marginLeft: "16px",
                                    "& span": {
                                        fontWeight: "bold",
                                    },
                                }}
                            >
                                Giới thiệu
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton disableRipple>
                            <ListItemText
                                sx={{
                                    marginLeft: "16px",
                                    "& span": {
                                        fontWeight: "bold",
                                    },
                                }}
                            >
                                Dịch vụ
                            </ListItemText>
                            <IconButton onClick={handleClickOpenNestMenu}>
                                {openNestMenu ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </ListItemButton>
                        <Collapse in={openNestMenu} timeout="auto" unmountOnExit>
                            <List sx={{ paddingLeft: "16px" }} component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText>Dịch vụ 1</ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText>Dịch vụ 2</ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton>
                            <ListItemText
                                sx={{
                                    marginLeft: "16px",
                                    "& span": {
                                        fontWeight: "bold",
                                    },
                                }}
                            >
                                Thực đơn
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText
                                sx={{
                                    marginLeft: "16px",
                                    "& span": {
                                        fontWeight: "bold",
                                    },
                                }}
                            >
                                Tin tức
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText
                                sx={{
                                    marginLeft: "16px",
                                    "& span": {
                                        fontWeight: "bold",
                                    },
                                }}
                            >
                                Liên hệ
                            </ListItemText>
                        </ListItemButton>
                    </List>
                </Box>
            </SwipeableDrawer>
        </>
    );
};

export default Navbar;
