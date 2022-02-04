import React,{useState} from 'react'
import { useNavigate  } from 'react-router-dom';

function AddContact(props) {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [successAlert, setSuccessAlert] = useState('');
    const [dangerAlert, setDangerAlert] = useState('');
    const navigate = useNavigate();

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleCity = (e)=>{
        setCity(e.target.value)
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const addContact = (e)=>{
        e.preventDefault();
        if(!name || !city || !email){
            setDangerAlert('All fields are required')
            return
        }
        let payload ={
            name: name,
            city: city,
            email:email
        }
         setSuccessAlert('Successfully added a contact')
         props.newContactDetail(payload);
         setName('')
         setCity('')
         setEmail('')
         setTimeout(()=>{
             navigate('/')
         }, 2000)

         ;
       
    }


    return (
        <div className='container'>
            {
               dangerAlert&&(
                <div className="alert alert-danger alert-dismissible fade show " role="alert">
                <span >{dangerAlert}
                <span type="button" className="close float-end" data-bs-dismiss="alert"  aria-label="Close"aria-hidden="true">&times;</span>
                
                </span>
              </div>
               )

            }

            {
                successAlert &&(
                    <div className="alert alert-success alert-dismissible fade show " role="alert">
                       <span> {successAlert}
                       <span type="button" className="close float-end" data-bs-dismiss="alert" aria-label="Close"aria-hidden="true">&times;</span>

                       </span>
                   </div>
                )
            }
           

                 
            <h2 className='mt-3 mb-2'>Add Contact</h2>
              <form onSubmit={addContact}>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" value={name} className="form-control" id="name"  onChange={handleName}/> 
                </div>
                <div className="mb-3">
                    <label  className="form-label">City</label>
                    <input type="text" value={city} className="form-control" id="contact"  onChange={handleCity}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email Address</label>
                    <input type="email" value={email} className="form-control" id="email" onChange={handleEmail} />
                </div>
                
                <button type="submit" className="btn btn-primary">Add</button>
              </form>
        </div>
    )
}

export default AddContact
