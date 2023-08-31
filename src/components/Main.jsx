import React, { useRef, useEffect } from 'react';



export default function Main() {


    const widthRef1 = useRef(null);
    const widthRef2 = useRef(null);
    const sizer1 = useRef(null);
    const sizer2 = useRef(null);

    useEffect(() => {
        const element1 = widthRef1.current;
        const element2 = widthRef2.current;
        const element3 = sizer1.current;
        const element4 = sizer2.current;


        // track current mouse position in x

        let x, w, v;

        const mouseHandler = (e) => {
            x = e.clientX;
            let sbWidth = window.getComputedStyle(element1).width;
            let sbWidth2 = window.getComputedStyle(element2).width;
            w = parseInt(sbWidth, 10);
            v = parseInt(sbWidth2, 10);

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);

        }

        const mouseMoveHandler = (e) => {
            let dx = e.clientX - x;
            let dy = e.clientX - x;
            let cw = w + dx;
            let cx = v - dy;
            if (cw < 900) {
                element1.style.width = `${cw}px`;
            };
            if (cx !== 1600){
                element2.style.width = `${cx}px`;
                
            }else{
                window.location.reload();
            }
            
        }

        const mouseUpHandler = () => {
            document.removeEventListener('mouseup', mouseUpHandler);
            document.removeEventListener('mousemove', mouseMoveHandler);
        }

        element3.addEventListener('mousedown', mouseHandler);
        element4.addEventListener('mousedown', mouseHandler);

    })



    return (
        <div className="containerHold">
            <div className="box box-side box-one" ref={widthRef1}>
                <div className="holder">
                    <div className="content-box"></div>
                    <div className="content-box"></div>
                    <div className="content-box"></div>
                    <div className="content-box"></div>
                    <div className="content-box"></div>
                    <div className="content-box"></div>
                    <div className="content-box"></div>
                    <div className="content-box"></div>
                    <div className="content-box"></div>
                </div>
            </div>
            <div className="sizer" ref={sizer1} >
            </div>
            <div className="box middleBox" >
                <h1>Thanks For The Opportunity PlugXR.</h1>
            </div>
            <div className="sizer" ref={sizer2}></div>
            <div className="box box-two box-side" ref={widthRef2}></div>
        </div>
    )
}
