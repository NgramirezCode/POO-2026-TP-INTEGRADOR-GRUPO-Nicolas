{
  /** Clase hija Pelicula */
}

import { Produccion } from "./Produccion.js";

export class Pelicula extends Produccion {
  #director;
  #reparto;
  #genero;
  #clasificacion;
  #clasificacionEdad;

  constructor(data) {
    super(data.id, data.title, data.overview, data.poster_path);
    this.#director =
      // ternaria
      data.credits.crew.find((miembro) => miembro.job === "Director")?.name ||
      "Director desconocido";
    // Calificación
    this.#clasificacion = data.vote_average.toFixed(1);
    this.#reparto = data.credits.cast
      .slice(0, 5)
      .map((actor) => actor.name)
      .join(", ");
    this.#genero = data.genres
      ? data.genres.map((genres) => genres.name).join(", ")
      : "Sin Género";

    if (data.credits) {
      const directorData = data.credits.crew.find(
        (miembro) => miembro.job === "Director",
      );

      this.#director = directorData
        ? directorData.name
        : "Director desconocido";
      this.#reparto = data.credits.cast
        .slice(0, 5)
        .map((actor) => actor.name)
        .join(", ");
    } else {
      this.#director = "Director desconocido";
      this.#reparto = "Reparto desconocido";
    }

    if (data.release_dates) {
      const certificacionAR = data.release_dates.results.find(
        (pais) => pais.iso_3166_1 === "AR",
      );
      this.#clasificacionEdad =
        certificacionAR && certificacionAR.release_dates[0].certification !== ""
          ? certificacionAR.release_dates[0].certification
          : "S/C";
    } else {
      this.#clasificacionEdad = "S/C";
    }
  }

  get director() {
    return this.#director;
  }
  get reparto() {
    return this.#reparto;
  }

  get genero() {
    return this.#genero;
  }

  get clasificacion() {
    return this.#clasificacion;
  }

  get clasificacionEdad() {
    return this.#clasificacionEdad;
  }

  obtenerTipo() {
    return "Pelicula";
  }
}
