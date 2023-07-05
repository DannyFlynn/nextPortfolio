"use client"
import React, { useState, useEffect } from 'react';
import MeImage from './MeImage';
import { FaArrowUp } from 'react-icons/fa';

type AboutProps = {
    aboutRef: React.RefObject<HTMLDivElement>
}

const About = ({ aboutRef }: AboutProps) => {

    //not desktops this will apply for smaller devices
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY || document.documentElement.scrollTop;
            setShowButton(scrollPos > 700);
            if (scrollPos > 600) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='container about mt-5 '>
            <div className='text-center mt-5' ref={aboutRef}>
                <h2 className='section-title'>About Me</h2>
            </div>
            <MeImage />
            <div className='p-3'>
                <p>
                    During the COVID-19 pandemic, I made a bold career pivot to pursue my passion for technology and ensure job security.
                    It all started with a YouTube video that sparked my curiosity about coding.
                </p>
                <p>
                    Motivated to expand my knowledge, I embarked on a self-guided learning journey, focusing on mastering React for frontend development and gaining proficiency in other frameworks.
                    I also delved into backend development, gaining practical experience with Node.js and MySQL.
                </p>
            </div>
            {showButton &&
                <FaArrowUp size={46} className='phone-arrow-icon d-lg-none' onClick={scrollToTop} />
            }
        </div>
    )
}

export default About