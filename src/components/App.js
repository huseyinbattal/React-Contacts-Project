import contacts  from "../contacts";
import React  from 'react';
import Card  from "./Card";



export default function App() {

    return <div>
        <h1 className="heading">My Contact</h1>
        {contacts.map(contact => {
           return <Card 
           key={contact.id}
           name={contact.name}
           img={contact.imgURL}
           phone={contact.phone}
           email={contact.email}
/> 
        } )}
    </div>
    
}