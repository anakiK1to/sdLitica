import React, { createContext, useState, ReactNode, useContext } from 'react';

// Типы для состояния аутентификации
interface AuthContextType {
    user: string | null; // Или можно хранить объект пользователя
    login: (email: string) => void;
    logout: () => void;
}

// Создание контекста с дефолтными значениями
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Провайдер аутентификации
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);

    const login = (email: string) => {
        // Сохраняем email пользователя при успешной аутентификации
        setUser(email);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Хук для использования контекста
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
