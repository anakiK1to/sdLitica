import React from "react";
import { Box, Drawer, List, ListItemButton, ListItemText, IconButton, Typography, Divider, Button } from "@mui/material";
import { ChevronLeft, ChevronRight, Home, Dashboard, UploadFile, Explore, Folder } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface NavigationBarProps {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isDrawerOpen, toggleDrawer }) => {
    return (
        <Box display="flex" height="100vh">
            {/* Боковая панель с навигацией */}
            <Drawer
                sx={{
                    width: isDrawerOpen ? 250 : 80, // Изменение ширины панели
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: isDrawerOpen ? 250 : 80,
                        boxSizing: 'border-box',
                        backgroundColor: '#0F2D3E',
                        color: '#ADD5ED',
                        transition: 'width 0.3s ease-in-out',
                        position: 'relative',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={true}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    p={2}
                    justifyContent={isDrawerOpen ? "space-between" : "center"}
                    position="relative"
                >
                    {/* Логотип */}
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

                    {/* Кнопка для открытия/закрытия панели */}
                    {isDrawerOpen ? (
                        <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
                            <ChevronLeft />
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={toggleDrawer}
                            sx={{
                                color: 'white',
                                position: 'absolute',
                                right: -20, // Полностью выносится за пределы панели
                                top: '50%',
                                transform: 'translateY(-50%)', // Центрирование по вертикали
                                backgroundColor: '#0F2D3E',
                                borderRadius: '50%',
                                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                                width: 40,
                                height: 40, // Размер стрелки совпадает с кругом
                            }}
                        >
                            <ChevronRight />
                        </IconButton>
                    )}
                </Box>

                {/* Список навигации */}
                {isDrawerOpen && <Divider />}
                <List>
                    <ListItemButton component={Link} to="/home">
                        <ListItemText
                            primary={isDrawerOpen ? "Home" : <Home />}
                            sx={{ color: "white", textAlign: isDrawerOpen ? "left" : "center" }}
                        />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/dashboards">
                        <ListItemText
                            primary={isDrawerOpen ? "Dashboards" : <Dashboard />}
                            sx={{ color: "white", textAlign: isDrawerOpen ? "left" : "center" }}
                        />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/load-data">
                        <ListItemText
                            primary={isDrawerOpen ? "Load Data" : <UploadFile />}
                            sx={{ color: "white", textAlign: isDrawerOpen ? "left" : "center" }}
                        />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/data-explorer">
                        <ListItemText
                            primary={isDrawerOpen ? "Data Explorer" : <Explore />}
                            sx={{ color: "white", textAlign: isDrawerOpen ? "left" : "center" }}
                        />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/buckets">
                        <ListItemText
                            primary={isDrawerOpen ? "Buckets" : <Folder />}
                            sx={{ color: "white", textAlign: isDrawerOpen ? "left" : "center" }}
                        />
                    </ListItemButton>
                </List>

                {isDrawerOpen && (
                    <Box mt="auto" p={2}>
                        <Button fullWidth variant="contained" color="secondary" onClick={() => console.log("Logout")}>
                            Logout
                        </Button>
                    </Box>
                )}
            </Drawer>

            {/* Контент справа от панели */}
            <Box
                component="main"
                flex={1}
                padding={3}
                sx={{
                    transition: "margin-left 0.3s ease-in-out",
                    marginLeft: isDrawerOpen ? 250 : 80,
                }}
            >
                <Typography variant="h4">Main Content</Typography>
            </Box>
        </Box>
    );
};

export default NavigationBar;
