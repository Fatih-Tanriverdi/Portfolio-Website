import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa"

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            id="scrollBtn"
            onClick={scrollToTop}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollButton;
