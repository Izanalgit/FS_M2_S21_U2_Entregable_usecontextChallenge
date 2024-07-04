import { useTheme } from "../themes/ThemeContext";

export const ThemeButton = () =>{

    const {theme,changeTheme} = useTheme();

    return (
        <button onClick={changeTheme}>{theme}</button>
    );

}