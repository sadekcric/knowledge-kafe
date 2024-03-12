
import AllData from './Component/AllData/AllData'
import './App.css'
import Nav from './Component/Navbar/Nav'
import AddCard from './Component/AddCardSection/AddCard'

function App() {
  

  return (
    <>
        <Nav/>


      <div className='flex mt-10 md:w-4/5 mx-auto gap-5'>
        <AllData/>
        <AddCard/>
      </div>
      
    </>
  )
}

export default App
