import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HomePage.css';
import { useContext } from 'react';
import { SessionContext } from '../../sessionContext';



const HomePage = () => {
    const sessionDet = useContext(SessionContext)
    const handleSubmit =async (text) =>{
        await sessionDet.setSession(text)
    }
    return (
        <div className="home-page-container">
            <div className='welcome-text'>
                <h1>Welcome to live coding</h1>
                <p>This site is designed to allow the student to share the process of writing code with the teacher.<br/>
                     You have at your disposal four sessions of learning code in different fields,<br/>
                     the first user who enters the session is defined as a teacher and will be given the option of viewing only.<br/>
                      Any additional user who enters the session will be considered a student and will have the option to editing the code.<br/>
                      Good luck and enjoy learning</p>
            </div>

            <div className="button-container">
                <div >
                    <Link to={'/session'} className="big-beautiful-button" onClick={()=>{handleSubmit("loop")}}>loop's</Link>
                </div>
                <div>
                    <Link to={'/session'}  className="big-beautiful-button" onClick={()=>{handleSubmit("recursion")}}>Recursion</Link>
                </div>
                <div >
                    <Link to={'/session'} className="big-beautiful-button" onClick={()=>{handleSubmit("async")}}>async function</Link>
                </div>
                <div >
                    <Link to={'/session'} className="big-beautiful-button" onClick={()=>{handleSubmit("class")}}>Class</Link>
                </div>
                <div >
                    <Link to={'/teacher'} className="big-beautiful-button" >teacher</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
