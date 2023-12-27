import React, { useRef, useEffect, useState } from 'react';

const ScrollPositionComponent = () => {
    const targetRef = useRef(null);
    const [_text, _setText] = useState("Scroll Position Tracking");

    const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const targetTop = targetRef.current.offsetTop - 100;
        //offset().top
        if (targetTop < scrollPosition) {
            console.log("스크롤 드디어 닿음", targetTop)
            targetRef.current.style.backgroundColor = "red";
            _setText("changed!!!")
        } else {
            targetRef.current.style.backgroundColor = "white";
            _setText("Scroll Position Tracking")
        }
    };


    useEffect(() => {

        const targetElement = targetRef.current;
        if (targetElement) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (targetElement) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div ref={targetRef} style={{ border: '1px solid #ccc' }}>
            <h2>{_text}</h2>
            <div style={{ height: '1000px' }}>Scroll down to see the effect</div>
        </div>
    );
};

export default ScrollPositionComponent;
