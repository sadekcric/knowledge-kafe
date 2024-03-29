import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa"
import { useState } from 'react';


const BlogCard = ({blog, handleClickAddCart, handleClickInTimeSpend}) => {

  // console.log(blog);
  const {author, author_img, cover, hashtags, posted_date, reading_time, title, id}=blog;

  const [isActive, setIsActive]=useState(false);
  
  

  const btnClick =()=>{
      if(!isActive){
        setIsActive(!isActive)
      }
    
    // 
    handleClickAddCart(blog)
  }



  const markAsReadBtn = () =>{
    handleClickInTimeSpend(id, reading_time);
    if(isActive){
      setIsActive(!isActive)
    }

  }
  
  
  return (
    <div className='mb-24 border border-slate-100 shadow-xl'>
      <div>
      <img src={cover} alt="" />
      </div>


      <div className='flex justify-between items-center mt-3 p-4'>
        <div className='flex gap-4 items-center'>

            <div className=''>
              <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
            </div>

            <div>
              <h5 className='font-semibold text-lg'>{author}</h5>
              <p>{posted_date}</p>
            </div>

        </div>

          

        <div>
        <div className='flex items-center gap-5'>
          <p>{reading_time} min read</p>
          <button onClick={btnClick} 
          className='text-2xl'>{isActive?  <FaBookmark /> : <CiBookmark /> }</button>
        </div>
        </div>
        
      </div>


      <div className='px-4'>
        <h1 className='text-4xl lg:text-5xl '>{title}</h1>

        <div className='my-3'>
          {
            hashtags.map((tag,idx)=><span className='mr-3' key={idx}>#{tag}</span>)
          }
        </div>

        <p className='text-purple-800 '><button className='underline decoration-solid' onClick={markAsReadBtn}>Mark as read</button></p>

      </div>

        

      
    </div>
  );
};

BlogCard.propTypes={
  blog:PropTypes.object.isRequired,
  handleClickAddCart:PropTypes.func.isRequired,
  isActive:PropTypes.bool,
  handleClickInTimeSpend:PropTypes.func
}

export default BlogCard;


