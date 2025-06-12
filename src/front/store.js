import { PlanetDetails } from "./pages/PlanetDetails";

// stor
export const initialStore = () => {
  return {
    message: null,
    contacts: [],
    favorites: [],
    characters: [],
    planets: [],
    planetDetail:{},
    starships: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    case "getContacts":
      const contacts = action.payload;
      return { ...store, contacts: contacts };

    case "postContact":
      return { ...store, contacts: [...store.contacts, action.payload] };

    case "deleteContacts":
      const remainingContacts = store.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
      return { ...store, contacts: remainingContacts };

    case "putContact":
      const editedContacts = store.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );

      return { ...store, contacts: editedContacts };

    case "planets":
      const planet = action.payload;
      return { ...store, planets: planet };

      case "planetDetail":
        const planetDetail= action.payload
        return {...store, planetDetail: planetDetail}

    default:
      throw Error("Unknown action.");
  }
}

// case "getCharacters":
//   const characters = action.payload
//   return {...store, characters: characters};
// case "getStarships":
//   const starships = action.payload
//   return {...store, starships: starships};

// case 'addFavorite':
// return { ...store, favorites: [...store.favorites, action.payload] };
