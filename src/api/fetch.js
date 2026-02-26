export async function obtenerDatos(path) {
    try {
      const res = await fetch(path);
      console.log(res);
  
      // clausula de validacion de respuesta del servidor
      if (!res.ok) {
        // nueva funcionalidad para crear errores en runtime
        throw new Error("Error de HTTP ");
      }
  
      const json = await res.json();
      return json;
    } catch (error) {
      console.log("Error al obtener datos", error.mesagge);
      return null;
    }
  }
  