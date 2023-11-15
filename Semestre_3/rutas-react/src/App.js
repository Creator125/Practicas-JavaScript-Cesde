import {Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Default from './page/Default';
import Dashboard from './pages/Dashboard';
import About from './page/About'

function App() {
  return (
    <div>
      <h1>Rutas</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />}/>
          <Route path="/" element={<Home />}/>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="*" element={<Default />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
