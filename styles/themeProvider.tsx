import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { useColorScheme } from "react-native";

import { themedark, themelight } from "./globlaStyle";

type ThemeType = typeof themelight;

type ThemeContextType = {
  theme: ThemeType;
  isDarkMode: boolean;
  switchTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const colorScheme = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  useEffect(() => {
    setIsDarkMode(colorScheme === "dark");
  }, [colorScheme]);

  const switchTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = isDarkMode ? themedark : themelight;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkMode,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }

  return context;
};
