import React, { useState } from 'react';
import {getContacts, postContact} from '../services/contact';   // 1 LLAMAMOS AL SERVICIO 
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer'; 

export const AddContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactAddress, setContactAddress] = useState('');

    const { store, dispatch } = useGlobalReducer();
// Importamos el hook para acceder al store y dispatch
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
        name: contactName,
        email: contactEmail,
        phone: contactPhone,
        address: contactAddress
    };


    await postContact(newContact);

    const contacts = await getContacts();
    dispatch({
        type: "getContacts",
        payload: contacts
    });
    
    // 2 HACEMOS DISPATCH DE GETCONTACTS PARA ACTUALIZAR LA LISTA DE CONTACTOS

        setContactName('');
        setContactEmail('');
        setContactPhone('');
        setContactAddress('');

        
           navigate('/contact');
         
    // 3 USAMOS USENAVIGATE PARA REDIRECCIONAR A LA PAGINA DE CONTACTOS
    
   
};
   
    const handleFullName = e => setContactName(e.target.value); console.log('handleFullName', handleFullName);
    const handleEmail = e => setContactEmail(e.target.value); console.log('handleEmail', handleEmail);
    const handlePhone = e => setContactPhone(e.target.value); console.log('handlePhone', handlePhone);
    const handleAddress = e => setContactAddress(e.target.value); console.log('handleAddress', handleAddress);





    return (
        <div className="container m-auto row">
            <form  >
                <div className="mb-3 col-12">
                    <label for="exampleInputPassword1" className="form-label">Full Name</label>
                    <input onChange={handleFullName} value={contactName} type="text" placeholder="Name" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 col-12">
                    <label for="exampleInputPassword2" className="form-label">Email</label>
                    <input onChange={handleEmail} value={contactEmail} type="email" placeholder="Email" className="form-control" id="exampleInputPassword2" />
                </div>
                <div className="mb-3 col-12">
                    <label for="exampleInputPassword3" className="form-label">Phone</label>
                    <input onChange={handlePhone} value={contactPhone} type="numeric" placeholder="Phone" className="form-control" id="exampleInputPassword3" />
                </div>
                <div className="mb-3 col-12">
                    <label for="exampleInputPassword4" className="form-label">Address</label>
                    <input onChange={handleAddress} value={contactAddress} type="text" placeholder="Address" className="form-control" id="exampleInputPassword4" />
                </div>

                <button onClick={handleSubmit} type="submit" className="col-12 btn btn-primary">Submit</button>
            </form>
        </div>
    );
}