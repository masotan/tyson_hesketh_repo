// import pages
import About from './pages/About.js';
import Resume from './pages/Resume.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
//import router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import stylesheeets
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { motion } from "framer-motion"
// import navigation bar component from bootstrap
import Navigation from './components/Navigation.js'
// end of the import section


function Routing() {
  return(
  <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
     </Routes>

     
  </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navigation/>
    <Container className="content">
    
    <Routing/>
    </Container>
    <div className="footer">
      <Container>

<h1>Contact Me</h1>

</Container>
</div>

      </div>
</BrowserRouter>
  );
}

export default App;
