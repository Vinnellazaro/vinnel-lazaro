// import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'react-bootstrap/Spinner';
//import { faCircleExlamation } from '@fortawesome/free-regular-svg-icons';
function Inprogress() {
    return (
        <>
        <div className="text-center text-light" style={{padding:'3rem'}}>
            <div style={{position:'relative'}}>
                <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                    <div className='text-warning mb-3'>
                        <FontAwesomeIcon size="2x" icon={faTriangleExclamation} />
                    </div>
                    <p className='mb-4 lead'>Under<br></br>Construction</p>
                </div>
                <Spinner animation="border" style={{ width: '12rem', height: '12rem'}}/>
            </div>
            <h6 className='display-6 mt-5'>&quot;Something Awesome is Coming Soon!&quot;</h6>
            <p className='lead mt-4'>&quot;Hold tight! My new website is under construction, and I can’t wait to share it with you.&quot;</p>
            {/* <ProgressBar className='mt-5' animated striped variant="warning" now={100} /> */}
        </div>
        </>
    )
}
export default Inprogress;