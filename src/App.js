import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FinalScreen from './FinalScreen';
import Questions from './Questions';
import Settings from './Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Settings />}/>
        <Route path='/questions' element={<Questions />}/>
        <Route path='/score' element={<FinalScreen />}/>
      </Routes>
    </Router>
  );
}

export default App;
