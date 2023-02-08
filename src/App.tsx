import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types'
import NavBar from './components/navBar'
import Home from './components/home'
import WhyCrappo from './components/whyCrappo'
import Products from './components/products'
import About from './components/about'
import StartMining from './components/startMining'
import Footer from './components/footer'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } 
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  return (
    <div className="app bg-primary-500">
       <NavBar 
      isTopOfPage={isTopOfPage} 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <WhyCrappo setSelectedPage={setSelectedPage} />
      <Products setSelectedPage={setSelectedPage} />
      <About />
      <StartMining />
      <Footer />
    </div>
  )
}

export default App
