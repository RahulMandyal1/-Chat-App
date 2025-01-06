import axios from 'axios';
import { createContext, useState, ReactNode } from "react";
import { getUser } from '@/api/userAPI';
import { useQuery } from '@tanstack/react-query';

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({ user: null });

const AuthProvider = ({ children }: AuthProviderProps) => {
    const { data, error } = useQuery({
        queryKey: ["getUser"],
        queryFn: getUser
    });

    if (error) {
        console.error("Error fetching user:", error);
    }

    return (
        <AuthContext.Provider value={{ user : data
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
