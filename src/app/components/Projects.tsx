"use client"
import React, { useState } from 'react';

import Image from 'next/image';
import nextEccomerce from '../images/nextEccomerce.png';
import jetSet from '../images/jetsetHolidays.png';
import cinema from '../images/cinema.png';
import quiz from '../images/quiz.png';
import nextJsMovies from '../images/nextjs_movies.png'

type ProjectProps = {
    projectRef: React.RefObject<HTMLDivElement>
}

const Projects = ({ projectRef }: ProjectProps) => {

    const [projects, setProjects] = useState([
        {
            id: 1, title: 'S.K.A Next E-Commerce',
            paragraph: "Student E-commerce Project: Crafting an Online Store using Next.js, TypeScript, Stripe, and Redux! I integrated Stripe for secure payment processing. This feature lets customers purchase items. I used custom hooks to break down different functionalities like managing the shopping basket and wishlist. Also My project achieved a Lighthouse score of 90, reflecting my focus on optimizing performance and providing a great user experience. Well-Rounded Accessibility: I aimed for inclusivity by ensuring an accessibility score of 100, making the website usable for all users. Best Practices and SEO: The project adheres to best practices and has a solid SEO foundation, which received perfect scores.",
            showMore: false, image: nextEccomerce, demo: 'https://vocal-fenglisu-4ca0eb.netlify.app/'
        },
        {
            id: 2,
            title: 'Jetset Holidays', paragraph: `Jetset Holidays is a React TypeScript application that lets you search for awesome vacation options. 
                I built it using hooks like useState, useContext, useEffect, and useRef,
                 so you know it's super modern and efficient and for the styling I have used bootstrap. With Jetset Holidays, 
                you can easily find the perfect holiday that suits your preferences.Just select your desired options from the 
                user- friendly interface, and the app will show you a list of fantastic destinations. 
                You can even track how many adults, children, and kids are going on the trip using the person counter feature. 
                The best part ? Kids get a sweet discount at half the price of adults! You can find the source code for 
                Jetset Holidays on my GitHub repository.Feel free to check it out and have fun exploring the demo 
                by clicking the picture.It's a project I worked on to practice my skills with TypeScript.`,
            showMore: false, image: jetSet, demo: 'https://gilded-fairy-bc9a53.netlify.app/',
        },
        {
            id: 3,
            title: 'NextJS_Movies', paragraph: `Next.js Movies is a TypeScript-driven web application crafted with Next.js and Axios. It introduces a security layer by prompting users to select from two options before gaining access to the main content, thereby preventing URL tampering. The application seamlessly integrates with The Movie Database (TMDb) via Axios for fetching movie data. A responsive video player enhances the user experience on larger screens, and pagination ensures smooth navigation through a collection of movies. With a concise project structure, including key components like VideoPlayer and Pagination, Next.js Movies offers a clean and engaging platform for exploring movie content.`,
            showMore: false, image: nextJsMovies, demo: 'https://statuesque-khapse-537fcf.netlify.app/'
        },
        {
            id: 4,
            title: 'Cinema', paragraph: `MovieBuff a dynamic movie search and selection platform built using React JS. The project features seamless API integration using Axios and the useEffect hook, ensuring a smooth and up-to-date user experience. Whether searching for the latest popular releases or diving into the highest rated films, this platform provides a seamless browsing experience. The useEffect hook updates the content seamlessly, providing the user with real-time information on the selected movie options. With its intuitive design and dynamic functionality, this project offers a user-friendly solution for all your movie search needs. Simply click the picture for a live preview and experience the power of React JS and Axios for yourself.`,
            showMore: false, image: cinema, demo: 'https://comforting-bubblegum-0d832a.netlify.app/'
        }
    ])

    const showFullText = (id: number) => {

        const copyArray = projects.map(project => {
            if (project.id === id) {
                return { ...project, showMore: !project.showMore };
            } else {
                return project;
            }
        })
        setProjects(copyArray);
    }

    return (
        <div className="container projects mt-5" ref={projectRef}>
            {/*small and mid screens*/}
            <div className="p-3 text-center d-lg-none" >
                <h3 className="section-title my-4">
                    {projects[0]['title']}
                </h3>
                <a href='https://vocal-fenglisu-4ca0eb.netlify.app/' target="_blank">
                    <Image
                        className='p-3'
                        src={nextEccomerce}
                        width={250}
                        height={400}
                        alt="project" />
                </a>
                <div className=' d-block d-lg-none'>
                    <div>
                        <p className='mt-3'>{projects[0]['showMore'] === false ? projects[0]['paragraph'].substring(0, 100) : projects[0]['paragraph']}
                        </p><button className='green-text project-btns p-2' onTouchEnd={(e) => { e.preventDefault(); showFullText(1) }}>{projects[0]['showMore'] === false ? 'Show more' : 'Show less'}</button>
                    </div>
                </div>
            </div>
            <div className="p-3 text-center d-lg-none" >
                <h3 className="section-title my-4">
                    {projects[1]['title']}
                </h3>
                <a href='https://gilded-fairy-bc9a53.netlify.app/' target="_blank">
                    <Image
                        className='p-3'
                        src={jetSet}
                        width={250}
                        height={400}
                        alt="project" />
                </a>
                <div className=' d-block d-lg-none'>
                    <div>
                        <p className='mt-3'>{projects[1]['showMore'] === false ? projects[1]['paragraph'].substring(0, 100) : projects[1]['paragraph']}
                        </p><button className='green-text project-btns p-2' onTouchEnd={(e) => { e.preventDefault(); showFullText(2) }}>{projects[1]['showMore'] === false ? 'Show more' : 'Show less'}</button>
                    </div>
                </div>
            </div>
            <div className="p-3 text-center mt-4 d-lg-none">
                <h3 className="section-title my-4">
                    {projects[2]['title']}
                </h3>
                <a href='https://comforting-bubblegum-0d832a.netlify.app/' target="_blank">
                    <Image
                        className='p-3'
                        src={nextJsMovies}
                        width={250}
                        height={400}
                        alt="project" />
                </a>
                <div className=' d-block d-lg-none'>
                    <div>
                        <p className='mt-3'>{projects[2]['showMore'] === false ? projects[2]['paragraph'].substring(0, 100) : projects[2]['paragraph']}
                        </p><button className='green-text project-btns p-2' onTouchEnd={(e) => { e.preventDefault(); showFullText(3) }}>{projects[2]['showMore'] === false ? 'Show more' : 'Show less'}</button>
                    </div>
                </div>
                <div className="p-3 text-center mt-4 d-lg-none">
                    <h3 className="section-title my-4">
                        {projects[3]['title']}
                    </h3>
                    <a href='https://comforting-bubblegum-0d832a.netlify.app/' target="_blank">
                        <Image
                            className='p-3'
                            src={cinema}
                            width={250}
                            height={400}
                            alt="project" />
                    </a>
                    <div className=' d-block d-lg-none'>
                        <div>
                            <p className='mt-3'>{projects[3]['showMore'] === false ? projects[3]['paragraph'].substring(0, 100) : projects[3]['paragraph']}
                            </p><button className='green-text project-btns p-2' onTouchEnd={(e) => { e.preventDefault(); showFullText(4) }}>{projects[3]['showMore'] === false ? 'Show more' : 'Show less'}</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*end small screens and mid*/}

            {/*big screens*/}
            <div className="p-3 text-center d-none d-lg-block">
                {projects.map((project, id) => (
                    <div key={project.id} className='mt-5'>
                        <h3 className="section-title my-3">
                            {project.title}
                        </h3>
                        <div className={id % 2 === 0 ? 'd-flex justify-content-around' : 'd-flex flex-row-reverse justify-content-around'}>
                            <a href={project.demo} target="_blank">
                                <Image
                                    className='p-3 '
                                    src={project.image}
                                    width={250}
                                    height={400}
                                    alt="project" />
                            </a>
                            <div className='container '>
                                <p className='mt-3 p-3 '>{project.paragraph}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/*end big screens*/}
            <div className='my-3 p-3 text-center'>
                <h3 className="section-title my-3">
                    Other Projects
                </h3>
                <div className='d-flex flex-column-reverse align-items-center '>
                    <div className='d-flex flex-column justify-content-center'>
                        <p className='mt-2'>Check out my GitHub portfolio for a collection of diverse projects, ranging from CRUD applications to authentication systems.</p>
                        <p >
                            <a href='https://github.com/DannyFlynn' className='green-text'>https://github.com/DannyFlynn</a>
                        </p>
                    </div>
                    <a href='https://tiny-praline-574708.netlify.app/' target='_blank'>
                        <Image
                            className='p-3 '
                            src={quiz}
                            width={250}
                            height={400}
                            alt="project" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects