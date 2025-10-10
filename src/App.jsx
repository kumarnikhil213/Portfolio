//  import {Routes,Route} from 'react-router-dom'
//  import Home from './Pages/Home'
//  import About from './Pages/About'
//  import Services from './Pages/Services'
//  import Contact from './Pages/Contact'


//  import './App.css'

//  function App() {


//    return (
//      <>
//       <div>
//       <Routes>
//        <Route path='/' element={<Home/>} />
//        <Route path='/about' element={<About />}/>
//        <Route path='/services' element={<Services/>}/>
//        <Route path='/contact' element={<Contact/>}/>
//       </Routes>
//       </div>
//      </>
//    )
//  }

//  export default App;

/************************************************************************************* */

import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  return (
    <Layout>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section> 
    </Layout>
  );
}

export default App;
