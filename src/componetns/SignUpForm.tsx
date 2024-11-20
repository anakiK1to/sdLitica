import React, { useState } from "react";
import { Box, Button, Card, CardContent, TextField, Typography, Link } from '@mui/material';
import Clouds from "./clouds/Clouds";


interface RegisterCardProps {
    onLogin: () => void;
    setIsLoginMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpForm: React.FC<RegisterCardProps> = ({ onLogin, setIsLoginMode}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();


        console.log('Registration Data:', { firstName, lastName, email, password, confirmPassword });
    };

    const handleRegister = () => {
        if (firstName && lastName && email && password) {
            onLogin();
        }
    };


    const [isVisible, setIsVisible] = useState(true);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="background.default"
        >


            <Clouds isVisible={isVisible} />


            <Card sx={{ maxWidth: 400, p: 4, borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                    <Box display="flex" justifyContent="center" mb={3}>
                        <Typography variant="h4" fontWeight="bold" color="primary">
                            sdLitica
                        </Typography>
                    </Box>


                    <Typography variant="h5" textAlign="center" gutterBottom>
                        Create your account
                    </Typography>


                    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} mt={2}>
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            margin="normal"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            margin="normal"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            variant="outlined"
                            margin="normal"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Box>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, py: 1.5 }}
                        type="submit"
                        onClick={handleRegister}
                    >
                        Sign Up
                    </Button>


                    <Box textAlign="center" mt={2}>
                        <Typography variant="body2" color="text.secondary">
                            Already have an account?{' '}
                            <Link href="#"
                                  underline="hover"
                                  onClick={(e) => {
                                      e.preventDefault();
                                      setIsLoginMode(true);
                                  }}
                            >
                                Sign In
                            </Link>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SignUpForm;
