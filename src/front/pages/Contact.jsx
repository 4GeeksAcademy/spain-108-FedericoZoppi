import { useEffect } from "react"
import { Link } from "react-router-dom"
import { deleteContact, getContacts } from "../services/contact"
import useGlobalReducer from "../hooks/useGlobalReducer"

// 5 CREAMOS FUNCION ASINCRONA HANDLEDELETE QUE LLAMA AL SERVICIO DELETECONTACTS Y HACE EL DISPACH

export const Contact = () => {
  const { store, dispatch } = useGlobalReducer()

  const contacts = store.contacts


  const handleDelete = async (contact) => {

    await deleteContact(contact, dispatch)


  }



  useEffect(() => {
    const get = async () => {

      const contacts = await getContacts()
      dispatch({
        type: "getContacts",
        payload: contacts
      })
      console.log(store.contacts)
    }

    get()


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
              <img   src={`https://randomuser.me/api/portraits/men/${29 + item.id}.jpg`} className="img-fluid rounded-start"  />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {/* 4 CREAMOS BOTON DELETE QUE CON UN ONCLICK EJECUTE LA FUNCION HANDLEDELETE */}
                <button className="btn btn-danger float-end" onClick={() => handleDelete(item)}>
                  🗑️
                </button>
                <h5 className="card-title">{item.name}</h5>
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