export const initialStore=()=>{
  return{
    message: null,
    contacts: [],
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
      
    case 'putContact':
      const updatedContacts = store.contacts.map(contact => 
        contact.id === action.payload.id ? action.payload : contact
      );
      return { ...store, contacts: updatedContacts };
      
    default:
      throw Error('Unknown action.');
  }    
}
