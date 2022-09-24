import Nav from './components/Nav'

// IMPORT PAGES
import Home from './pages/Home';
import Mission from './pages/Mission';
import News from './pages/News'
import ErrorPage from './pages/ErrorPage'

import {
    BrowserRouter as Router,
    Routes, 
    Route
  } from "react-router-dom";
  
const App = () => {
  return (
    <Router>
        {/* Everything outside the Routes tags will show up on every page */}
        <Nav />
        {/* Rander what's in the Routes Tag */}
        <Routes>
            <Route path='/'element={<Home />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/mission' element={<Mission />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </Router>
    // <div >
    //     <Nav />
    //     <Home />
    // </div>
  );
}

export default App;
