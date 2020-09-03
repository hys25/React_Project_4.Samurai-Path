import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/userImage.png';

class Users extends React.Component{

    constructor (props) {
        super(props);
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div>   
            {
                this.props.users.map ( u => <div key={u.id}>
                    <span>
                        <div>
                            
                        </div>
                        <div>
                            { u.followed 
                                ? <button onClick={ () => { this.props.unfollow(u.id) } }>Unfollow</button>
                                : <button onClick={ () => { this.props.follow(u.id) } }>Follow</button>
                            }
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users;