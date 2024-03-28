import './User.scss';
import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }
    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div className="user-box">
                <h3>{name}</h3>
                <p>{location}</p>
                <p>{count}</p>
                <button onClick={()=> {
                    this.setState({
                        count : count +1
                    })
                }}>Click Increment</button>
            </div>
        )
    } 
}

export default UserClass;