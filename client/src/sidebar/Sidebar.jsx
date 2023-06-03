import { useEffect, useState } from "react";
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
  const getCats = async ()=>
  {
    const res =await axios.get("/categories")
    setCats(res.data)
  };
  getCats();
  },[])
    return (
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1xMJ2XcsRzubw_2XUUTSnBgoyFwNCc2h-zQ0ZGBR_lFWTC_MgQyFZimuTGbhUEeyrLc&usqp=CAU"
            alt=""
          />
          <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
          </p>
        </div>
         <div className="siderbarItem">
         <span className="sidebarTitle">CATEGORIES</span>
         <ul className="sidebarList">
         {cats.map((c)=>(
          <Link to={`/?cat=${c.name}`} className="link">
           <li className="sidebarListItem">{c.name}</li>
          </Link>
           
            ))}
            </ul> 
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sideIcon fab fa-facebook-square"></i>
            <i className="sideIcon fab fa-twitter-square"></i>
            <i className="sideIcon fab fa-pinterest-square"></i>
            <i className="sideIcon fab fa-instagram-square"></i>
            </div>
         </div>
        </div>
  );
}
