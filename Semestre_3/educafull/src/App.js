import './App.css';
import { Nav } from './components/nav';
import { Banner } from './components/banner';
import { Areas } from './components/sesionAreas';
import { Profes } from './components/secionProfesores';
import { Testimonios } from './components/secionTestimonios';
import { Contactos } from './components/sesionContacto';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Areas/>
      <Profes/>
      <Testimonios/>
      <Contactos/>
      <Footer/>
    </div>
  );
}

export default App;
