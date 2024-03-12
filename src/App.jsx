
import AllData from './Component/AllData/AllData'
import './App.css'
import Nav from './Component/Navbar/Nav'
import AddCard from './Component/AddCardSection/AddCard'
import { useState } from 'react'

function App() {

  const [items, setItems]=useState([]);


  const handleClickAddCart=(blog)=>{
    const newItem=[...items, blog];
    setItems(newItem)
  }

  console.log(items);
  

  return (
    <>
        <Nav/>


      <div className='flex mt-10 md:w-4/5 mx-auto gap-5'>
        <AllData handleClickAddCart={handleClickAddCart}/>
        <AddCard/>
      </div>
      
    </>
  )
}

export default App
