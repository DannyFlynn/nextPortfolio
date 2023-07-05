"use client"
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

type NavProps = {
    projectRef: React.RefObject<HTMLDivElement>
    skillsRef: React.RefObject<HTMLDivElement>
    aboutRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
}

const Navigation = ({ projectRef, skillsRef, aboutRef, contactRef }: NavProps) => {



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //navigation logic handle close is aimed at smalled devices not desktops
    const pagePart = (part: string): void => {
        if (part === 'projects' && projectRef.current) {
            projectRef.current.scrollIntoView({ behavior: 'smooth' });

        } else if (part === 'skills' && skillsRef.current) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });

        } else if (part === 'about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });

        } else if (part === 'contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });

        }
        handleClose();
    }


    return (
        <>
            <Navbar bg="dark" variant="dark" className='nav'>
                <div className='w-100 d-flex p-1'>
                    <Navbar.Brand className='p-1 w-50 d-flex d-flex justify-content-start' href="#home">
                        <span className='green-text'>&lt; / &gt;</span>
                    </Navbar.Brand>
                    <Nav className="w-50 d-flex d-none d-md-flex justify-content-around ">
                        <Nav.Link onClick={() => pagePart('about')}>About Me</Nav.Link>
                        <Nav.Link onClick={() => pagePart('skills')}>Skills</Nav.Link>
                        <Nav.Link onClick={() => pagePart('projects')}>Projects</Nav.Link>
                        <Nav.Link onClick={() => pagePart('contact')}>Contact</Nav.Link>
                    </Nav>
                    <div className="w-100 d-flex d-md-none justify-content-end">
                        <FaBars onClick={handleShow} className='p-1' size={42} />
                        <Offcanvas show={show} onHide={handleClose} placement="end"
                            className="mobile-nav-canvas"
                            style={{ backgroundColor: '#212529' }}
                        >
                            <Offcanvas.Header>
                                <Offcanvas.Title></Offcanvas.Title>
                                <button className='close-nav-btn' onTouchEnd={handleClose}>
                                    <span className='p-2 green-text'>X</span>
                                </button>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='d-flex flex-column justify-content-around'>
                                <span className='mob-link p-2' onTouchEnd={() => pagePart('about')}>About Me</span>
                                <span className='mob-link p-2' onTouchEnd={() => pagePart('skills')}>Skills</span>
                                <span className='mob-link p-2' onTouchEnd={() => pagePart('projects')}>Projects</span>
                                <span className='mob-link p-2' onTouchEnd={() => pagePart('contact')}>Contact</span>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Navigation