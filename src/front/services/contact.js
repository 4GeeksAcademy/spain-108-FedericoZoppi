
export const getContacts = async () => {
    try {
      const response = await fetch("https://playground.4geeks.com/contact/agendas/Federico/contacts");
      if (!response.ok && response.status == 404) {
        AddContacts()
        return
      } 
      const data = await response.json();
      console.log("Contacts:", data);
      return data.contacts;

    } catch (error) {
      console.error("Error al cargar tareas:", error);
    }
  };

  export const postContact = async (contact) => {
  try {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/Federico/contacts", {
      method: "POST",
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
      if (response.ok) {
        getContacts()
      }

    } catch (error) {
      console.error("Error al crear usuario:", error);
    }}


  export const deleteContact = async (contact, dispatch) => {
  try {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Federico/contacts/${contact.id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      console.error("Error eliminando contacto:", response.status);
      return;
    }

    // Volvemos a cargar todos los contactos actualizados
    const updatedContacts = await getContacts();

    // Actualizamos el store con la lista nueva
    dispatch({
      type: "getContacts",
      payload: updatedContacts
    });

    console.log("Contacto eliminado:", contact);
  } catch (error) {
    console.error("Error eliminando Contacto:", error);
  }
}

//  export const putContacts = async (e) => {
//     e.preventDefault();
//     if (editContact.trim() === "") return;

//     try {
//       await fetch(`${host}/todos/${editTodo.id}`, {
//         method: "PUT",
//         body: JSON.stringify({
//           label: editContact,
//           is_done: editCompleted
//         }),
//         headers: { "Content-Type": "application/json" }
//       });

//       setEditTask("");
//       setEditCompleted(false);
//       setEditTodo({});
//       setIsEdit(false);
//       getTodos();
//     } catch (error) {
//       console.error("Error modificando tarea:", error);
//     }
//   };

// ;