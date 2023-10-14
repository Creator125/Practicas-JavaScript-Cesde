//import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/nav';
import { Article } from './components/article';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
