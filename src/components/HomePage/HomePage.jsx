import React from 'react';
import './HomePage.css';

const HomePage = () => {
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
                <div>
                    <button className="big-beautiful-button">loop's</button>
                </div>
                <div>
                    <button className="big-beautiful-button">Recursion</button>
                </div>
                <div>
                    <button className="big-beautiful-button">async function</button>
                </div>
                <div>
                    <button className="big-beautiful-button">Class</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
