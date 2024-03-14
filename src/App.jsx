
import AllData from './Component/AllData/AllData'
import './App.css'
import Nav from './Component/Navbar/Nav'
import AddCard from './Component/AddCardSection/AddCard'
import { useState } from 'react'

function App() {

  const [items, setItems]=useState([]);
  const [timeSpend, setTimeSpend]=useState(0);
 



  const handleClickAddCart=(blog)=>{

    const isExist = items.find(item => item.id == blog.id);
    
    if(!isExist){
      const newItem=[...items, blog];
    setItems(newItem)
    }
    
  }


  const handleClickInTimeSpend = (id, time) =>{
    
    setTimeSpend(timeSpend + time)
    const remainingItem = items.filter(item=>item.id !== id);
    setItems(remainingItem)
  }
  

  return (
    <>
      <Nav/>


      <div className='flex flex-col md:flex-row mt-10 md:w-4/5 mx-auto gap-5'>
        <AllData handleClickAddCart={handleClickAddCart} handleClickInTimeSpend={handleClickInTimeSpend} />
        <AddCard items={items} timeSpend={timeSpend} />
      </div>
      
    </>
  )
}

export default App
