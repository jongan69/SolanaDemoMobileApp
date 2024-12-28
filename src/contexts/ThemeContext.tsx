import { COLORS } from '@/styles/colors';
import React, { createContext, useState, useContext } from 'react';

// Add this type if it doesn't exist
export type ThemeContextType = {
    theme: string;
    colors: {
        primary: string;
        background: string;
        text: string;
        border: string;
        secondaryText: string;
        secondaryBackground: string;
        secondaryBorder: string;
        secondaryPrimary: string;
        // add other colors as needed
    };
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const theme = isDarkMode ? 'dark' : 'light';
    const colors = {
        primary: isDarkMode ? COLORS.RED : COLORS.PINK,
        background: '#000000',
        text: '#FFFFFF',
        border: '#1A1A1A',
        secondaryText: '#9CA3AF',
        secondaryBackground: '#1F2937',
        secondaryBorder: '#374151',
        secondaryPrimary: '#EF4444',
    };
  
    return (
        <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);