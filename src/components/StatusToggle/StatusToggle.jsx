import './StatusToggle.scss';
import checkStatus from '../../utils/checkStatus';

const StatusToggle = () => {
    const checkOnline = checkStatus();

    return (
        <div className = {`status-toggle-section ` +  (checkOnline === false ? 'active' : '') }>
            <div className='status-toggle'>
                <h4 className='title'>Connection Error</h4>
                <p className='msg'>Please check your internet connection and try again.</p>
            </div>
        </div>
    )
}

export default StatusToggle;