import me from '../images/me.jpg';
import Image from 'next/image';

const MeImage = () => {
    return (
        <div className='d-flex justify-content-center mt-4'>
            <Image
                className='p-3 d-md-none'
                src={me}
                width={320}
                height={200}
                alt="Picture of the author" />
            <Image
                className='p-3 d-none d-md-block'
                src={me}
                width={350}
                height={200}
                alt="Picture of the author" />
        </div>
    )
}

export default MeImage