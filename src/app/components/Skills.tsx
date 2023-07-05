"use client"
import { useState } from 'react';

import Image from 'next/image';
import collage from '../images/collage.png';

import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/Js.png';

import react from '../images/react.png';
import node from '../images/node.png';
import typescript from '../images/typescript.png';

import git from '../images/git.png';
import bootstrap from '../images/bootstrap.png';
import redux from '../images/redux.png';

type SkillsProps = {
    skillsRef: React.Ref<HTMLDivElement>
}

const Skills = ({ skillsRef }: SkillsProps) => {

    const [desktopImage, setDesktopImage] = useState([
        { id: 1, img: html },
        { id: 2, img: css },
        { id: 3, img: js },
        { id: 4, img: react },
        { id: 5, img: node },
        { id: 6, img: typescript },
        { id: 7, img: git },
        { id: 8, img: bootstrap },
        { id: 9, img: redux },
    ])
    return (
        <div className='container skills mt-5'>
            <div className='text-center mt-5' ref={skillsRef}>
                <h2 className='section-title'>Skills</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <Image
                    className='p-3 d-lg-none'
                    src={collage}
                    width={340}
                    height={400}
                    alt="skills" />
                <div className='d-none d-lg-flex mt-5'>
                    {desktopImage.map(skill => (
                        <Image
                            className='p-3 d-none d-lg-flex'
                            key={skill.id}
                            src={skill.img}
                            width={100}
                            height={100}
                            alt="skills" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills