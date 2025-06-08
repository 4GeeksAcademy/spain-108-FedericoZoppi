import { useEffect } from "react"
import { Link } from "react-router-dom"
import { getContacts } from "../services/contact"
import useGlobalReducer from "../hooks/useGlobalReducer"



export const Contact = () => {
  const { store, dispatch } = useGlobalReducer()

  const contacts = store.contacts


// 5 CREAMOS FUNCION ASINCRONA HANDLEDELETE QUE LLAMA AL SERVICIO DELETECONTACTS Y HACE EL DISPACH

  
  
  useEffect(() => {
    const get = async () =>  {
      
      const contacts = await getContacts()
      dispatch({
        type: "getContacts",
        payload: contacts
      })
      console.log(store.contacts)
    }
    
    get ()
    

  }, [])




  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/addcontacts" className="btn btn-success m-2">
          Add new contact
        </Link>
      </div>

      {contacts.map((item) => (
        <div className="card mb-3" key={item.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://via.placeholder.com/150" className="img-fluid rounded-start" alt="avatar" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
        {/* 4 CREAMOS BOTON DELETE QUE CON UN ONCLICK EJECUTE LA FUNCION HANDLEDELETE */}

                <h5 className="card-title">{item.full_name}</h5>
                <p className="card-text">📍 {item.address}</p>
                <p className="card-text">📞 {item.phone}</p>
                <p className="card-text">📧 {item.email}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};