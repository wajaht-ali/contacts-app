import React from 'react'
import user from '../images/user.png'

const ContactCard = (props) => {
    const { contacts } = props;
    // const { id, name, email } = props.contacts; 
    //we can also use it in this way, so we are not required to use props.contacts.name, props.contacts.email, etc. 
    return (
        <div className="item">
            <img className='ui avatar image' src={user} alt="user" />
            <div className="content">
                <div className="header">
                    {contacts.name}
                    {/* {name} */}
                </div>
                <div >
                    {contacts.email}
                    {/* {email} */}
                </div>
            </div>
            <i class="trash alternate icon"
                style={{ color: "red", margin: "8px 5px", float: "right", height: "25px", width: "25px", cursor: "pointer"}}
                onClick={() => props.clickHandler(id)}
            ></i>
        </div>
    )
}

export default ContactCard