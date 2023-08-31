import React, {useRef, useState, useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const draggable = useRef(null);


    useEffect(() => {

        const element = draggable.current;

        let offsetX, offsetY;

        const move = (e) => {
            element.style.left = `${e.clientX - offsetX}px`
            element.style.top = `${e.clientY - offsetY}px`
        }

        element.addEventListener('mousedown', (e) => {
            offsetX = e.clientX - element.offsetLeft;
            offsetY = e.clientY - element.offsetTop;
            document.addEventListener('mousemove', move);
        });

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move);
        });
    })
    


    const openNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className="navbar">
                <button onClick={openNav}>Save</button>
            </div>
            <div className={`navContainer ${nav ? "open-nav" : ""}`}>
                <div ref={draggable} className="draggable">
                    <div className='logoHold' onClick={openNav}>
                        <AiFillCloseCircle/>
                    </div>
                
                </div>
            </div>
        </>

    )
}
