{
  /** Clase padre Produccion */
}

export class Produccion {
  #id;
  #titulo;
  #resena;
  #posterPath;

  constructor(id, titulo, resena, posterPath) {
    this.#id = id;
    this.#titulo = titulo;
    this.#resena = resena;
    this.#posterPath = posterPath;
  }
  get id() {
    return this.#id;
  }
  get titulo() {
    return this.#titulo;
  }
  get resena() {
    return this.#resena;
  }
  get posterPath() {
    return this.#posterPath;
  }

  get posterUrl() {
    return this.#posterPath
      ? `https://image.tmdb.org/t/p/w500${this.#posterPath}`
      : "https://via.placeholder.com/500x750?text=Sin+Imagen";
  }
}
