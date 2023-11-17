
import React, { useContext } from 'react';
import './App.css';
import Contact from './component/Contact/Contact';
import Experience from './component/Experience/Experience';
import Footer from './component/Footer/Footer';
import Intro from './component/Intro/Intro';
import Navbar from './component/Navbar/Navbar';
import Portfolio from './component/Portfolio/Portfolio';
import Services from './component/Services/Services';
import Testimonials from './component/Testimonials/Testimonials';
// import Work from './component/Work/Work';
import { themeContext } from './Context';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='App'
    style={{
        background : darkMode? 'black' :'',
        color:darkMode? 'white' : ''
    }}
    >
      
     <Navbar />
     <Intro />
     <Services />
     <Experience />
     {/* <Work /> */}
     <Portfolio />
     <Testimonials />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
