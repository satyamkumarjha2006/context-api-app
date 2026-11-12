import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeBtn:"light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeContextProvider = ThemeContext.Provider

export const UseTheme = () => {
    return useContext(ThemeContext)  
}