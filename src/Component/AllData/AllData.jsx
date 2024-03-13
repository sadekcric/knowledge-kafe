import { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import PropTypes from 'prop-types';



const AllData = ({handleClickAddCart, isActive, handleClickInTimeSpend}) => {


  const [blogs, setBlogs]=useState([]);



  useEffect(()=>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])




  return (

    <div className="md:w-2/3">
      {
        blogs.map((blog,index)=><BlogCard key={index} blog={blog} handleClickAddCart={handleClickAddCart} isActive={isActive} handleClickInTimeSpend={handleClickInTimeSpend}/>)
      }
    </div>
    
  );
};

AllData.propTypes={
  handleClickAddCart:PropTypes.func.isRequired,
  isActive:PropTypes.bool,
  handleClickInTimeSpend:PropTypes.func
}

export default AllData;