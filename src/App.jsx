
import AllData from './Component/AllData/AllData'
import './App.css'
import Nav from './Component/Navbar/Nav'
import AddCard from './Component/AddCardSection/AddCard'
import { useState } from 'react'

function App() {

  const [items, setItems]=useState([]);
  const [isActive, setIsActive]=useState(false);
  const [timeSpend, setTimeSpend]=useState(0);



  const isActiveTrue=()=>{
    setIsActive(!isActive)
  }



  const handleClickAddCart=(blog)=>{
    const newItem=[...items, blog];
    setItems(newItem)
    isActiveTrue()
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
        <AllData handleClickAddCart={handleClickAddCart} isActive={isActive} handleClickInTimeSpend={handleClickInTimeSpend} />
        <AddCard items={items} timeSpend={timeSpend} />
      </div>
      
    </>
  )
}

export default App
