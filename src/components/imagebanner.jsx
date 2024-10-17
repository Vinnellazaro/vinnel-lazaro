
import Image from 'react-bootstrap/Image';
import img from '../assets/img-1.png'
function ImageBanner() {
    return (
        <div>
            <Image className='w-100' src={img} style={{padding:'0 7rem'}}/>
            <div className='tag-line text-center' style={{padding:'7rem 7rem'}}>
                <h1><i>"Code with Creativity, Design with Purpose"</i></h1>
                <h4 className='text-body-tertiary'>From concept to code, I bring web designs to life with a focus on usability, accessibility, and aesthetics. Let’s create something amazing together!</h4>
            </div>
        </div>
    )
}
export default ImageBanner;