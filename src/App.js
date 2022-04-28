import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ManageItems from "./Components/ManageItems/ManageItems";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import AddItem from "./Components/AddItem/AddItem";
import NotFound from "./Components/NootFound/NotFound";
import Footer from "./Components/Footer/Footer";
import MyItems from "./Components/MyItems/MyItems";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/manageitems"
                    element={<ManageItems></ManageItems>}
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/additem" element={<AddItem></AddItem>}></Route>
                <Route path="/myitems" element={<MyItems></MyItems>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
