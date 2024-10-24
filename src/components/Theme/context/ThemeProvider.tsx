import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the Theme type
export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    danger: string;
    background: string;
    text: string;
  };
  font: {
    family: string;
    weight: {
      light: number;
      regular: number;
      semiBold: number;
      bold: number;
    };
    size: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
};

// Define the default theme
export const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    tertiary: "#17a2b8",
    danger: "#dc3545",
    background: "#ffffff",
    text: "#000000",
  },
  font: {
    family: "'Roboto', sans-serif",
    weight: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700,
    },
    size: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
  },
};

// Create the ThemeContext
type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Create the ThemeProvider component
type ThemeProviderProps = {
  children: ReactNode;
  initialTheme?: Theme;
};

export const ThemeProvider = ({
  children,
  initialTheme = defaultTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
