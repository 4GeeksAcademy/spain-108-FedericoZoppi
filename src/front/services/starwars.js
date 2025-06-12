

const host = 'https://www.swapi.tech/api'

export const getPlanets = async () => {
    try {
      const response = await fetch(`${host}/planets`);
      if (!response.ok && response.status == 404) {
        console.log("NO ENCONTRÈ LA LISTA DE PLANETAS")
      } 
      const data = await response.json();
    console.log(data)
      return data.results
    } catch (error) {
      console.error("Error al cargar Planetas:", error);
    }
  };

  export const getPlanetsDetails = async (id) => {
    try {
      const response = await fetch (`${host}/planets/${id}`);
      if (!response.ok && response.status == 404) {
        console.log("ME TILDÈ",response)
      }
        const data = await response.json();
    console.log(data)

    return data.result.properties
   }
      catch(error){
        console.error("NO ENCONTRE EL PLANETA")

    }
  }