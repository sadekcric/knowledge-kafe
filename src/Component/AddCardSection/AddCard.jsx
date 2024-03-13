import PropTypes from 'prop-types';
import AddCartChild from '../AddCartChild/AddCartChild';

const AddCard = ({items, timeSpend}) => {
  return (
    <section className="flex-1">

      <div className="space-y-5">

        <div className="bg-[#6047EC1A] border-2 border-[#6047EC] px-7 py-4">
          <h3 className="text-center text-xl font-bold text-[#6047EC]">Spent time on read: <span>{timeSpend}</span> min</h3>
        </div>

        <div className="bg-gray-100 px-7 py-4">
          <div>
            <h3 className="text-2xl font-bold">Bookmarked Blogs: {items.length}</h3>
          </div>

          <div>
            {
                items.map(item=><AddCartChild key={item.id} item={item} />)
            }
          </div>
        </div>
      </div>
      
    </section>
  );
};

AddCard.propTypes={
  items:PropTypes.array.isRequired,
  timeSpend:PropTypes.number
}

export default AddCard;