import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
//import { faCircleExlamation } from '@fortawesome/free-regular-svg-icons';
function Inprogress() {
    return (
        <>
        <div className="p-5 text-center">
            <div className='text-warning mb-3'>
                <FontAwesomeIcon size="4x" icon={faCircleExclamation} />
            </div>
            <h5 className='mb-4'>Inprogress</h5>
            <ProgressBar variant="info" animated now={30} />
        </div>
        </>
    )
}
export default Inprogress;