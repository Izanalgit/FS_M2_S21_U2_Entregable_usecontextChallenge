import { NavButtons } from "../components/NavButtons";
import { ThemeButton } from "../components/Button";
import { useTheme } from "../themes/ThemeContext";

function Profile (){
    
    const {theme} = useTheme();

    return (
        <section className={`App ${theme}`}>
            <h1>Profile</h1>
            <ThemeButton />
            <NavButtons />
        </section>
    );
}

export default Profile;