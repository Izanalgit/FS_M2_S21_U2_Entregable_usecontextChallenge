import { Link } from "react-router-dom";

export const NavButtons = () =>{
    return (
        <div className="navigation">
            <Link to={'/'}><button>HOME</button></Link>
            <Link to={'/MyJob'}><button>MyJOB</button></Link>
            <Link to={'/Profile'}><button>PROFILE</button></Link>
        </div>
    )
}