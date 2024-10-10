
import Image from 'react-bootstrap/Image';
import img from '../assets/img-1.png'
function ImageBanner() {
    return (
        <Image className='pt-2 p-5 w-100 bg-secondary' src={img} />
    )
}
export default ImageBanner;