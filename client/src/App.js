import Single from "./Pages/home/single/Single";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/setting/Settings";
import Write from "./Pages/write/Write";
import TopBar from "./topbar/TopBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user }=useContext(Context);
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={user ? <Home/> :<Register/>}/>
      <Route path="/login" element={user ? <Home/> : <Login/>}/>
      <Route path="/write" element={user ? <Write/> : <Register/> }/>
      <Route path="/settings" element={user ? <Settings/> : <Register/> }/>
      <Route path="/post/:postId" element={<Single/>}/>
        </Routes>
     
   

          </BrowserRouter>
  );
}

export default App;
