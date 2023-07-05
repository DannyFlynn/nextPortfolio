import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

type ProjectProps = {
    projectRef: React.RefObject<HTMLDivElement>
}

const Header = ({ projectRef }: ProjectProps) => {

    const scrollToProjects = () => {
        if (projectRef.current) {
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header className='container d-flex flex-column justify-content-start align-items-start  justify-content-lg-center'>
            <div className='mt-5 mt-lg-0'>
                <span className="px-2">Hi, I&apos;m Danny Flynn</span>
                <h1 className="caption green-text mt-4 px-2 fw-bold">A Developer on the Rise!</h1>
                <p className="mt-4 px-2 caption-text">
                    <span className="green-text">&quot;</span>
                    Initiating my coding quest to unlock endless possibilities.
                    <br />
                    As an aspiring developer, I am driven by an insatiable curiosity for technology and a passion for crafting innovative solutions.
                    <span className="green-text">&quot;</span>
                </p>
                <div className='px-2 mt-4'>
                    <a href='https://github.com/DannyFlynn' target="_blank">
                        <FaGithub size={32} />
                    </a>
                    <a href='tel:07895457593'>
                        <FaPhone size={32} className='mx-5' />
                    </a>
                    <a href='https://www.linkedin.com/in/dan-flynn-229a9b24b/' target="_blank" className='d-none d-lg-inline-block'>
                        <FaLinkedinIn size={32} />
                    </a>
                    <button className='header-btns p-2 d-lg-none'><span className='green-text' onTouchEnd={scrollToProjects}>projects</span></button>
                </div>
            </div>
        </header>
    )
}

export default Header