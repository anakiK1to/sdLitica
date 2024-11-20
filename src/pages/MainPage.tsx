import React, { useState } from "react";
import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    IconButton,
    Typography,
    Divider,
    Button,
} from "@mui/material";
import { ExpandMore, ExpandLess, Home, Dashboard, UploadFile, Explore, Folder } from "@mui/icons-material";
import { Link } from "react-router-dom";

const DropdownNavigation: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <Box>
            {/* Верхняя панель с логотипом */}
            <Box
                display="flex"
                alignItems="center"
                bgcolor="#0F2D3E"
                color="#ADD5ED"
                padding={2}
                justifyContent="space-between"
                sx={{ boxShadow: "0px 4px 8px rgba(0,0,0,0.2)" }}
            >
                {/* Логотип в круге */}
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={40}
                    height={40}
                    borderRadius="50%"
                    bgcolor="#ADD5ED"
                    color="#0F2D3E"
                    fontWeight="bold"
                    fontSize="18px"
                >
                    sdL
                </Box>

                {/* Кнопка открытия/закрытия навигации */}
                <IconButton onClick={toggleDrawer} sx={{ color: "#ADD5ED" }}>
                    {isDrawerOpen ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </Box>

            {/* Навигационная панель (выпадающая вниз) */}
            <Drawer
                sx={{
                    '& .MuiDrawer-paper': {
                        width: "100%", // Ширина панели на всю страницу
                        boxSizing: "border-box",
                        backgroundColor: "#0F2D3E",
                        color: "#ADD5ED",
                        transition: "height 0.3s ease-in-out",
                    },
                }}
                anchor="top" // Панель открывается вниз
                open={isDrawerOpen}
                variant="persistent"
            >
                <Box padding={2}>
                    {/* Заголовок и кнопка закрытия */}
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={2}
                    >
                        <Typography variant="h6" color="white" fontWeight="bold">
                            Navigation
                        </Typography>
                        <Button
                            variant="outlined"
                            onClick={toggleDrawer}
                            sx={{
                                color: "#ADD5ED",
                                borderColor: "#ADD5ED",
                                textTransform: "none",
                                "&:hover": {
                                    borderColor: "#ffffff",
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                },
                            }}
                        >
                            Close
                        </Button>
                    </Box>

                    <Divider sx={{ bgcolor: "#ADD5ED" }} />

                    <List>
                        <ListItemButton component={Link} to="/home">
                            <Home sx={{ marginRight: 2 }} />
                            <ListItemText
                                primary="Home"
                                sx={{ color: "white", textAlign: "left" }}
                            />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/dashboards">
                            <Dashboard sx={{ marginRight: 2 }} />
                            <ListItemText
                                primary="Dashboards"
                                sx={{ color: "white", textAlign: "left" }}
                            />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/load-data">
                            <UploadFile sx={{ marginRight: 2 }} />
                            <ListItemText
                                primary="Load Data"
                                sx={{ color: "white", textAlign: "left" }}
                            />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/data-explorer">
                            <Explore sx={{ marginRight: 2 }} />
                            <ListItemText
                                primary="Data Explorer"
                                sx={{ color: "white", textAlign: "left" }}
                            />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/buckets">
                            <Folder sx={{ marginRight: 2 }} />
                            <ListItemText
                                primary="Buckets"
                                sx={{ color: "white", textAlign: "left" }}
                            />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default DropdownNavigation;
