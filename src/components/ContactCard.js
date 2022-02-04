import React from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';


function ContactCard(props) {
    const {id,name,email,city} = props.contact;
    let navigate = useNavigate();

    const showDetails = ()=>{
        navigate(`/contact/${id}`, { state: props.contact });
    }

    return (

            <>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{city}</td>
                <td class="text-center">
                    <a  onClick={showDetails} className='btn btn-info btn-xs' > <span  className="glyphicon glyphicon-edit"></span> View</a>
                    <a onClick={() =>props.deleteContact(id)}  className="btn btn-danger btn-xs"><span  className="glyphicon glyphicon-remove"></span> Del</a></td>
            </>
 
  
    )
}

export default ContactCard
