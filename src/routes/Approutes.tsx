import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import Home from "../Pages/Home";
import All from "../Pages/All";
import NotFound from "../Pages/NotFounds";

export default function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> }  />
                <Route path="/All" element={<All /> } />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}