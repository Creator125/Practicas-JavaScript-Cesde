import './App.css';
import { Nav } from './components/nav';
import { Banner } from './components/banner';
import { Areas } from './components/sesionAreas';
import { Profes } from './components/secionProfesores';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Areas/>
      <Profes/>
    </div>
  );
}

export default App;
