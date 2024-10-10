// import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'react-bootstrap/Spinner';
//import { faCircleExlamation } from '@fortawesome/free-regular-svg-icons';
function Inprogress() {
    return (
        <>
        <div className="p-5 text-center">
            <div className='text-warning mb-3'>
                <FontAwesomeIcon size="4x" icon={faTriangleExclamation} />
            </div>
            <h5 className='mb-4'>Inprogress</h5>
            <Spinner animation="border" style={{ width: '10rem', height: '10rem'}}/>
        </div>
        </>
    )
}
export default Inprogress;