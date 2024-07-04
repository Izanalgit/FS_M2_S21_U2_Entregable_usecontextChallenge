import { useContext, createContext, useState} from "react";

const ThemeContext = createContext();

const ThemeProvaider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        if(theme == 'light') setTheme('dark');
        if(theme == 'dark') setTheme('light');
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}

const useTheme = () => useContext(ThemeContext);

export {ThemeProvaider,useTheme};