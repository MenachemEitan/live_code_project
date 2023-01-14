import './App.css';
import './components/HomePage/HomePage'
import HomePage from './components/HomePage/HomePage';
import Session from './components/session/Session';
import { Route, Routes } from "react-router-dom";
import TeacherSession from './components/session/teacher/teacher';
import StudentSession from './components/session/student/student'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='session' element={<StudentSession />}></Route>
      <Route path='teacher' element={<TeacherSession />}></Route>
    </Routes>
    </>
  );
}

export default App;
