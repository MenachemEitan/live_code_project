import React, { useRef, useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import './student.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SessionContext } from '../../../sessionContext';

const StudentSession = () => {
    console.log("init student");
    const sessionDet = useContext(SessionContext)
    const socket = new WebSocket(`ws://localhost:4000/session?name=${sessionDet.session}`);
    socket.addEventListener('open', function (event) {
        console.log('session is connected to ws server');
    });
    // socket.addEventListener('message', function (event) {
    //     console.log(`message from server ${event.data}`);
    //     hljs.highlightBlock(ref.current,{
    //         lineNodes: true,
    //     });
    // });
    const language = "js"
    const initialCode = "Loading code"
    const ref = useRef(null);
    const count = useRef(0)
    const [code, setCode] = useState(initialCode);

    useEffect(() => {
        hljs.highlightBlock(ref.current, {
            lineNodes: true,
        });
    }, [code]);
    useEffect(() => {
        socket.addEventListener('message', function (event) {
            if (count.current === 0) {
                count.current = count.current + 1
                setCode(event.data);
            }
        });


    }, []);

    const sendMassage = (text) => {
        socket.send(text)
    }

    const handleCodeChange = e => {
        console.log(e.target.innerText);
        // setCode(e.target.textContent);
        socket.send(e.target.innerText)

        

    }
    return (
        <div className='session'>
            <pre>
                <code ref={ref} className={`hljs ${language}`} contentEditable
                    onInput={handleCodeChange}>
                    {code}
                </code>
            </pre>
            <Link to={'/'} className="big-beautiful-button" >Return</Link>

        </div>
    );
};

export default StudentSession;
