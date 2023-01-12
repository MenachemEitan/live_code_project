
import React, { useRef, useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import './Session.css'

const Session = ({ code:initialCode, language }) => {
    const ref = useRef(null);
    const [code, setCode] = useState(initialCode);

    useEffect(() => {
        hljs.highlightBlock(ref.current);
    }, [code, language]);

    const handleCodeChange = e => {
        setCode(e.target.value);
    }

    return (
        <div>
            {/* <textarea value={code} onChange={handleCodeChange}></textarea> */}
            <pre>
                <code ref={ref} className={`hljs ${language}`} contentEditable>
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default Session;
