import { NavButtons } from "../components/NavButtons";
import { ThemeButton } from "../components/Button";
import { useTheme } from "../themes/ThemeContext";

function MyJob (){

    const {theme} = useTheme();

    return (
        <section className={`App ${theme}`}>
            <h1>MyJob</h1>
            <ThemeButton />
            <NavButtons />
        </section>
    );
}

export default MyJob;