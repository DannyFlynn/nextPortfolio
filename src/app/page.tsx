"use client"
import { useRef } from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


export default function Home() {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);



  return (
    <div className='spa-container d-flex flex-column'>
      <Navigation projectRef={projectRef} skillsRef={skillsRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Header projectRef={projectRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectRef={projectRef} />
      <Contact contactRef={contactRef} />
    </div>
  )
}
