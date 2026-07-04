{
  /** Llamado a la API de peliculas **/
}

import { Pelicula } from "./Pelicula.js";

export class TMBD {
  static API_KEY = "3edcc8192cd3f1abde7a843f24192cb1"; // Clave de la API
  static BASE_URL = "https://api.themoviedb.org/3";

  static async obtenerCatalogo(idGenero = "") {
    const url = idGenero
      ? `${this.BASE_URL}/discover/movie?api_key=${this.API_KEY}&language=es-ES&with_genres=${idGenero}`
      : `${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}&language=es-ES`;
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error("Error al conectar con TMDB");
      const datosCrudos = await respuesta.json();
      return datosCrudos.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async obtenerDetalle(id) {
    const url = `${this.BASE_URL}/movie/${id}?api_key=${this.API_KEY}&language=es-ES&append_to_response=credits,release_dates`;
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error("Error al conectar con TMDB");
      const datosCrudos = await respuesta.json();
      return new Pelicula(datosCrudos);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static guardarEnLista(pelicula, lista) {
    let listaActual = JSON.parse(localStorage.getItem(lista)) || [];
    const existe = listaActual.find((p) => p.id === pelicula.id);
    if (!existe) {
      listaActual.push({
        id: pelicula.id,
        titulo: pelicula.titulo,
        posterUrl: pelicula.posterUrl,
      });
      localStorage.setItem(lista, JSON.stringify(listaActual));
      return true;
    }
    return false;
  }
}
