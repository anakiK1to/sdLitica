import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { AuthProvider, useAuth } from "../context/AuthContext"; // Импортируем AuthContext и useAuth
import MainPage from "../pages/MainPage";
import AuthPage from "../pages/AuthPage";

const AppRoutes: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <AuthProvider>
            <Router>
                <Box display="flex" flexDirection="column" minHeight="100vh">
                    <Routes>
                        {/* Защищённый маршрут */}
                        <Route path="/main/*" element={<PrivateRoute />}>
                            <Route path="home" element={<div>Home Content</div>} />
                            <Route path="dashboards" element={<div>Dashboards Content</div>} />
                            <Route path="load-data" element={<div>Load Data Content</div>} />
                            <Route path="data-explorer" element={<div>Data Explorer Content</div>} />
                            <Route path="buckets" element={<div>Buckets Content</div>} />
                            {/* Редирект на home по умолчанию */}
                            <Route path="*" element={<Navigate to="home" replace />} />
                        </Route>

                        {/* Страница авторизации */}
                        <Route path="/" element={<AuthPage onLogin={handleLogin} />} />
                    </Routes>
                </Box>
            </Router>
        </AuthProvider>
    );
};

// Компонент для защищённого маршрута
const PrivateRoute: React.FC = () => {
    const { user } = useAuth(); // Получаем состояние пользователя из контекста

    if (!user) {
        return <Navigate to="/" replace />; // Если нет пользователя, редиректим на AuthPage
    }

    return <MainPage />; // Если пользователь есть, показываем MainPage
};

export default AppRoutes;
