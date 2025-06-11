
// stor
export const initialStore=()=>{
  return{
    message: null,
    user: "Federico",
    contacts: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
      
      case "getContacts":
        const contacts = action.payload
        return { ...store, contacts: contacts }
      
case 'postContact':
  return { ...store, contacts: [...store.contacts, action.payload] };
      
    case 'deleteContacts':
      const remainingContacts = store.contacts.filter(contact => contact.id !== action.payload.id);
      return { ...store, contacts: remainingContacts };

     case 'putContact':
  const editedContacts = store.contacts.map(contact =>
    contact.id === action.payload.id ? action.payload : contact
  );
  return { ...store, contacts: editedContacts };


    default:
      throw Error('Unknown action.');
  }    

   

}

