import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const lightTheme = {
    mode: 'light',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    card: '#F7F7F9', // Light gray for cards/blocks
    text: '#37352F', // Notion's signature dark gray
    textSecondary: 'rgba(55, 53, 47, 0.65)',
    accent: '#2EAADC', // Subtle blue or keep it minimal
    border: '#E9E9E9',
    icon: '#37352F',
    tabBar: '#FFFFFF',
    gradient: ['#FFFFFF', '#FFFFFF'], // No gradient in Notion, flat
    glassCard: '#FFFFFF', // Solid card for Notion style
    glassBorder: '#E9E9E9',
    statusBarStyle: 'dark',
};

export const darkTheme = {
    mode: 'dark',
    background: '#191919', // Notion Dark Mode Background
    surface: '#202020',
    card: '#2F2F2F', // Slightly lighter for cards
    text: '#D4D4D4', // Off-white for text
    textSecondary: 'rgba(255, 255, 255, 0.45)',
    accent: '#2EAADC',
    border: 'rgba(255, 255, 255, 0.1)',
    icon: '#D4D4D4',
    tabBar: '#191919',
    gradient: ['#191919', '#191919'], // Flat dark
    glassCard: '#2F2F2F',
    glassBorder: 'rgba(255, 255, 255, 0.1)',
    statusBarStyle: 'light',
};

export const ThemeProvider = ({ children }) => {
    // Default to dark mode as it was the original design
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
