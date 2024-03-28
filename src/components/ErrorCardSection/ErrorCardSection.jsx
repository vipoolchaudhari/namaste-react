import './ErrorCardSection.scss';
import error from '../../assets/img/error.jpg'

const ErrorCardSection = () => {
    return (
        <div className='error-card-wrapper'>
            <div className='error-msg'>
                <h4>Sorry, No match found</h4>
                <p>Try again with other combination</p>
            </div>
            <div className='img-wrapper'>
                <img src={error} alt="" />
            </div>
        </div>
    )
}

export default ErrorCardSection;