import './Heading.scss';

const Heading = ({type,name}) => {
    return (
        <div className='heading-wrapper'>
            <span className='heading-type'>{type}</span>
            <h2 className='heading'>{name}</h2>
        </div>
    )
}

export default Heading;
