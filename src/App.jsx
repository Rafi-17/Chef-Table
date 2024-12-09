import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {

  return (
    <div className='max-w-[1350px] mx-auto my-10 px-6 lg:px-0'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
  )
}

export default App
