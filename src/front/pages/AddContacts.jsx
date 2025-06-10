import React, { useState, useEffect } from 'react';
import { getContacts, postContact, putContact } from '../services/contact';   // 1 LLAMAMOS AL SERVICIO 
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from "react-router-dom";


export const AddContacts = () => {

    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactAddress, setContactAddress] = useState('');

    const { store, dispatch } = useGlobalReducer();
    // Importamos el hook para acceder al store y dispatch
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const contactToEdit = store.contacts.find(contact => contact.id === parseInt(id));
            if (contactToEdit) {
                setContactName(contactToEdit.name);
                setContactEmail(contactToEdit.email);
                setContactPhone(contactToEdit.phone);
                setContactAddress(contactToEdit.address);
            }
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: contactName,
            email: contactEmail,
            phone: contactPhone,
            address: contactAddress
        };

        if (id) {
            await putContact(id, data);
        } else {
            await postContact(data);
        }


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

    const handleName = e => setContactName(e.target.value);
    const handleEmail = e => setContactEmail(e.target.value);
    const handlePhone = e => setContactPhone(e.target.value);
    const handleAddress = e => setContactAddress(e.target.value);





    return (
        <div className="container m-auto row">
            <form  >
                <div className="mb-3 col-12">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input onChange={handleName} value={contactName} type="text" placeholder="Federico" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 col-12">
                    <label for="exampleInputPassword2" className="form-label">Email</label>
                    <input onChange={handleEmail} value={contactEmail} type="email" placeholder="exampleEmail@gmail.com" className="form-control" id="exampleInputPassword2" />
                </div>
                <div className="mb-3 col-12">
                    <label for="exampleInputPassword3" className="form-label">Phone</label>
                    <input onChange={handlePhone} value={contactPhone} type="numeric" placeholder="32425" className="form-control" id="exampleInputPassword3" />
                </div>
                <div className="mb-3 col-12">
                    <label for="exampleInputPassword4" className="form-label">Address</label>
                    <input onChange={handleAddress} value={contactAddress} type="text" placeholder="World" className="form-control" id="exampleInputPassword4" />
                </div>

                <button onClick={handleSubmit} type="submit" className="col-12 btn btn-primary">Submit</button>
            </form>
        </div>
    );
}