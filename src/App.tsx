import { Route, Routes } from "react-router";    
import './App.css';

import LandingPage from './components/LandingPage';
import DisplayCard from './components/DisplayCard';

function App() {
  return (

      <Routes>
        <Route path='/'  element={<LandingPage />} />
        <Route path='/showCard/:id'  element={<DisplayCard />} />
      </Routes>

  );
}

export default App;
