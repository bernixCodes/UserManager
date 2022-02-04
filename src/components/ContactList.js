import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

function ContactList({contacts,removeContact}) {

    
    const deleteContact = (id)=>{
       return removeContact(id)
    }

    const contactList = contacts.map(contact =>{
        return(
         
              <tr key={contact.id} >
               <ContactCard  contact ={contact} deleteContact={deleteContact}/>
             </tr>
            
        )
    })

    return (
             <div className='container'>
                 <h2 className='mt-5'>User List 
                 <Link to='/add'>
                 <button type="button" className="btn float-end btn-primary " style={{width:'100px'}} >Add</button>
                 </Link>
                  </h2> 
                  <div className=' d-inline-flex justify-content-around me-3 ms-3' >
            <table className="table table-striped custab">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email </th>
                      <th>City </th>
                      <th className="text-center">Action</th>
                  </tr>
              </thead>
              <tbody>
                 
               {contactList}
               </tbody>
             
             </table>
        </div>
             </div>
    )
}

export default ContactList
