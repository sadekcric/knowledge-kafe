
import PropTypes from 'prop-types';

const AddCartChild = ({item}) => {
  
  return (
    <div className='bg-white p-4 my-4'>
      <h3 className='text-2xl'>{item.title}</h3>
    </div>
  );
};

AddCartChild.propTypes = {
  item: PropTypes.object.isRequired
};



export default AddCartChild;