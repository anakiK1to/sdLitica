import React, { useState } from "react";
import LoginForm from "../componetns/LoginForm";
import SignUpForm from "../componetns/SignUpForm";



interface AuthPageProps {
    onLogin: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '400px' }}>
                {isLoginMode ? (
                    <LoginForm onLogin={onLogin} setIsLoginMode={setIsLoginMode} />
                ) : (
                    <SignUpForm onLogin={onLogin} setIsLoginMode={setIsLoginMode} />
                )}
            </div>
        </div>
    );
};

export default AuthPage;
