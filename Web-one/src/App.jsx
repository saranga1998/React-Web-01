import './App.css'
import Pages from './Components/Pages/Pages'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()},[])
  

  return (
    <>
      <Pages/>
    </>
  )
}

export default App
