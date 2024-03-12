import { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../BlogCard/BlogCard";



const AllData = () => {


  const [blogs, setBlogs]=useState([]);



  useEffect(()=>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])




  return (

    <div className="md:w-3/4">
      {
        blogs.map((blog,index)=><BlogCard key={index} blog={blog}/>)
      }
    </div>
    
  );
};

export default AllData;