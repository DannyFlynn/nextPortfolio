import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

type ContactProps = {
    contactRef: React.RefObject<HTMLDivElement>
}

const Contact = ({ contactRef }: ContactProps) => {
    return (
        <footer className="container mt-5">
            <div className='text-center mt-5' ref={contactRef}>
                <h2 className='section-title'>Get in touch</h2>
            </div>
            <div className='d-flex flex-column'>
                <div className=''>
                    <p className='mt-5'>
                        <a href='mailto:flynny386@gmail.com' className='green-text'>flynny386@gmail.com</a>
                    </p>
                    <p className='mt-5' >
                        <a href='tel:07895457593' className='green-text'>07895457593</a>
                    </p>
                    <div className='my-5 d-flex justify-content-evenly justify-content-lg-start'>
                        <a href='tel:07895457593'>
                            <FaPhone size={32} />
                        </a>
                        <a href='https://github.com/DannyFlynn' target="_blank">
                            <FaGithub size={32} className='mx-lg-5' />
                        </a>
                        <a href='https://www.linkedin.com/in/dan-flynn-229a9b24b/' target="_blank" >
                            <FaLinkedinIn size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact