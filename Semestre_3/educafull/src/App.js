import './App.css';
import { Nav } from './components/nav';
import { Banner } from './components/banner';
import { Areas } from './components/areasSetion';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Areas/>
    </div>
  );
}

export default App;
