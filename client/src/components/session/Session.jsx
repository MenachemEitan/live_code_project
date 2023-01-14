import React, { useRef, useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import './Session.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SessionContext } from '../../sessionContext';

const Session =() => {
    console.log("init");
    const sessionDet = useContext(SessionContext)
    const socket = new WebSocket(`ws://localhost:4000/session?name=${sessionDet.session}`);
    socket.addEventListener('open', function(event){
        console.log('session is connected to ws server');
    });
    socket.addEventListener('message', function(event){
        console.log(`message from server ${event.data}`);
        hljs.highlightBlock(ref.current,{
            lineNodes: true,
        });
    })
    const language = "js"
    const initialCode = "Loading code"
    const ref = useRef(null);
    const [code, setCode] = useState(initialCode);

    useEffect(() => {
        hljs.highlightBlock(ref.current,{
            lineNodes: true,
        });
    }, [code | ""]);
    useEffect(() => {
        socket.addEventListener('message', function(event){
            setCode(event.data);
            hljs.highlightBlock(ref.current,{
                lineNodes: true,
            });
        });
    }, []);
    

    const sendMassage = (text) =>{
        socket.send(text)
    }

    const handleCodeChange = e => {
        console.log(e.target.innerText);
        // setCode(e.target.innerText)
        ref.current = e.target.textContent
        // hljs.highlightBlock(code,{
        //     lineNodes: true,
        // });
        sendMassage(e.target.textContent)
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

export default Session;
