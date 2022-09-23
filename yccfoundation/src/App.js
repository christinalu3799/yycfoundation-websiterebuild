import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className='flex flex-col items-center'>
        <Nav />
        <Home />
    </div>
  );
}

export default App;
