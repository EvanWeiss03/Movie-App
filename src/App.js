import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Browse from './Pages/Browse'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes >
          <Route path='/' element={<Home />} ></Route>
          <Route path='/Browse' element={<Browse />} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
