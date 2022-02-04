import React from 'react'
import user from '../images/girl.jpg';
import { useLocation ,useNavigate } from 'react-router-dom';

function ContactDetail() {
  let location = useLocation();
  const navigate = useNavigate();
  const handleRedirect =()=>{
    navigate('/')
  }
 let contact = location.state;
    return (
        <div className="card" style={{width: '18rem', display:'flex', justifyContent:'center', alignContent:'center', margin:'0 auto', marginTop:'30px'}}>
        <img className="card-img-top" src={user} alt=""/>
        <div className="card-body">
          <p className="card-text">Name: {contact.name}  </p>
          <p className="card-text">Email: {contact.email} </p>
          <p className="card-text">City: {contact.city} </p>
        </div>
        <button type="button" onClick={handleRedirect} className="btn btn-primary">Back to Contact Lists</button>
      </div>
    )
}

export default ContactDetail
