
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


//   const addTask = async () => {
//     if (newTask.trim() === "") return;

//     try {
//       const response = await fetch(POST_URL, {
//         method: "POST",
//         body: JSON.stringify({ label: newTask, is_done: false }),
//         headers: { "Content-Type": "application/json" }
//       });

//       if (!response.ok) throw new Error(`Error: ${response.status}`);
//       setNewTask("");
//       getTodos();
//     } catch (error) {
//       console.error("Error al agregar tarea:", error);
//     }
//   };


//   const deleteTask = async (id) => {
//     try {
//       const response = await fetch(`${host}/todos/${id}`, {
//         method: "DELETE"
//       });
//       if (response.ok) {
//         getTodos();
//       } else {
//         console.error("Error eliminando tarea:", response.status);
//       }
//     } catch (error) {
//       console.error("Error eliminando tarea:", error);
//     }
//   };