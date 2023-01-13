import './App.css';
import './components/HomePage/HomePage'
import HomePage from './components/HomePage/HomePage';
import Session from './components/session/Session';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='session' element={<Session />}></Route>
    </Routes>
    </>
  );
}

export default App;
