import './App.css';
import './components/HomePage/HomePage'
import HomePage from './components/HomePage/HomePage';
import Session from './components/session/Session';

function App() {
  return (
    <>
    <HomePage></HomePage>
    <Session code={"console.log(כעיכגי)"} language={"js"} ></Session>
    </>
  );
}

export default App;
