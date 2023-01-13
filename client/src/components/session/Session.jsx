import React, { useRef, useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import './Session.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SessionContext } from '../../sessionContext';

const Session =() => {
    const sessionDet = useContext(SessionContext)
    const socket = new WebSocket(`ws://localhost:4000/session?name=${sessionDet.session}`);
    socket.addEventListener('open', function(event){
        console.log('session is connected to ws server');
    });
    socket.addEventListener('message', function(event){
        console.log(`message from server ${event.data}`);
    })

    if(sessionDet){
        console.log("sessionDet",sessionDet.session);
    }
    const language = "js"
    const initialCode = "console.log(1); const b = class()"
    const ref = useRef(null);
    const [code, setCode] = useState(initialCode);

    useEffect(() => {
        hljs.highlightBlock(ref.current);
    }, [code]);

    const sendMassage = () =>{
        socket.send(code)
    }

    const handleCodeChange = e => {
        ref.current = e.target
        sendMassage()
    }
    

    return (
        <div className='session'>
            <pre>
                <code ref={ref} className={`hljs ${language}`} contentEditable onInput={handleCodeChange}>
                    {code}
                </code>
            </pre>
            <Link to={'/'} className="big-beautiful-button" >Return</Link>

        </div>
    );
};

export default Session;
