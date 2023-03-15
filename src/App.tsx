import { useEffect, useState } from 'react';
import NavBar from "@/components/navbar";
import { SelectedPage } from './types/Enum';
import Home from '@/Pages/Home';
import Benefits from '@/Pages/Benefits';
import OurClasses from './Pages/OurClasses';
import ContactUs from './Pages/ContactUs';
import Footer from './Pages/Footer';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScrollY = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) setIsTopOfPage(false); 
    }
    window.addEventListener('scroll', handleScrollY);
    return () => window.removeEventListener('scroll', handleScrollY);
  }, []);

  return (
    <div className="App bg-gray-20">
        <NavBar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer/>
    </div>
  )
}

export default App;
