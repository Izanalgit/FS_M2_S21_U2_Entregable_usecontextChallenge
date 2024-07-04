import { NavButtons } from "../components/NavButtons";
import { ThemeButton } from "../components/Button";
import { useTheme } from "../themes/ThemeContext";

function Home (){

    const {theme} = useTheme();

    return (
        <section className={`App ${theme}`}>
            <h1>Home</h1>
            <ThemeButton />
            <NavButtons />
        </section>
    );
}

export default Home;