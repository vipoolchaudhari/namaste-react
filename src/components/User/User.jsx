import './User.scss';

const User = ({name,location}) => {
    return (
        <div className="user-box">
            <h3>{name}</h3>
            <p>{location}</p>
        </div>
    )
}

export default User;