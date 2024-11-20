import React, {useState} from "react";
import {Box, Button, Card, CardContent, TextField, Typography, Link} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Clouds from "./clouds/Clouds";
import {useAuth} from "../context/AuthContext";


interface AuthCardProps {
    onLogin: () => void;
    setIsLoginMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<AuthCardProps> = ({onLogin, setIsLoginMode}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const [error, setError] = useState('');

    const mockEmail = "mail@mail.ru";
    const mockPassword = "qwerty";

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        if (email === mockEmail && password === mockPassword) {
            login(email);  // Сохраняем email пользователя в контексте
            navigate('/main');
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="background.default"
        >
            <Clouds isVisible={isVisible}/>

            <Card sx={{maxWidth: 400, p: 4, borderRadius: 2, boxShadow: 3}}>
                <CardContent>
                    <Box display="flex" justifyContent="center" mb={3}>
                        <Typography variant="h4" fontWeight="bold" color="primary">
                            sdLitica
                        </Typography>
                    </Box>

                    <Typography variant="h5" textAlign="center" gutterBottom>
                        Welcome to sdLitica!
                    </Typography>

                    {/* Форма для ввода данных */}
                    <Box component="form" noValidate autoComplete="off" mt={2}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Обновление состояния email
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Обновление состояния password
                        />
                    </Box>


                    {error && (
                        <Typography variant="body2" color="error" textAlign="center" mt={2}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{mt: 2, py: 1.5}}
                        onClick={handleLogin} // Вызов функции для входа
                    >
                        Log In
                    </Button>

                    <Box textAlign="center" mt={2}>
                        <Typography variant="body2" color="text.secondary">
                            Need an account?{' '}
                            <Link href="/register"
                                  underline="hover"
                                  onClick={(e) => {
                                      e.preventDefault();
                                      setIsLoginMode(false);
                                  }}
                            >
                                Sign up
                            </Link>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default LoginForm;
