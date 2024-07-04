import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MyJob from "../pages/MyJob";
import Profile from "../pages/Profile";

function RoutesApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MyJob" element={<MyJob />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default RoutesApp;