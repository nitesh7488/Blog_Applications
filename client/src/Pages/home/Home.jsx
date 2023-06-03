import "./home.css"
import Header from '../../header/Header'
import Posts from "../../Posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();



  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <>
    
      <Header/>
      <div className="home">
       <Posts posts={posts}/>
       <Sidebar/>
   
    </div>
    </>
  )
}
