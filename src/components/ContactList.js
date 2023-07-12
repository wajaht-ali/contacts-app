import React from "react"
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // console.log(props);
    const deletContcatHandler = (id) => {
        props.getCOntactId(id);
    }
    const renderContactsList = props.contacts.map((contacts) => {
        return (
            <ContactCard contacts={contacts} 
            clickHandler = {deletContcatHandler} key={contacts.id}/>
        )
    })

    return (
        <div className="ui celled list">
            {renderContactsList}
        </div>
    );
};

export default ContactList