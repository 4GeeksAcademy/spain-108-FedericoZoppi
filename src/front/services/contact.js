
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
    if (contact.trim() === "") return;

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

 export const putContact = async (contact) => {
 


    try {
     const response =  await fetch(`https://playground.4geeks.com/contact/agendas/Federico/contacts/${contact.id}`,
         {
        method: "PUT",
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          address: contact.address
        }),
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok){
        throw error;
      } return await response.json();
    } catch (error) {
      console.error("Error modificando Contacto:", error);
    }
  };

;