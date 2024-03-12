import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const BlogCard = ({blog, handleClickAddCart}) => {

  // console.log(blog);
  const {author, author_img, cover, hashtags, posted_date, reading_time, title}=blog;

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
          <button onClick={()=>handleClickAddCart(blog)} className='text-2xl'><CiBookmark /></button>
        </div>
        </div>
        
      </div>


      <div className='p-4'>
        <h1 className='text-7xl'>{title}</h1>

        <div className='my-3'>
          {
            hashtags.map((tag,idx)=><span className='mr-3' key={idx}>#{tag}</span>)
          }
        </div>

        <p><a href="">Mark as read</a></p>

      </div>

        

      
    </div>
  );
};

BlogCard.propTypes={
  blog:PropTypes.object.isRequired,
  handleClickAddCart:PropTypes.func.isRequired
}

export default BlogCard;