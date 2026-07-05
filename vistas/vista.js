{
  /** Muestra visual del código **/
}

export class Vista {
  static mostrarVista(vistaActiva) {
    document.getElementById("vista-catalogo").classList.add("oculto");
    document.getElementById("vista-detalle").classList.add("oculto");
    document.getElementById(vistaActiva).classList.remove("oculto");
  }

  static renderizarCatalago(peliculas, callbackClicPelicula) {
    const grid = document.getElementById("grid-peliculas");
    grid.innerHTML = "";

    peliculas.forEach((pelicula) => {
      const poster = pelicula.poster_path
        ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
        : "https://via.placeholder.com/150x225";

      const card = document.createElement("div");

      card.className = "card";
      card.innerHTML = `
        <img src="${poster}" alt="${pelicula.title}" />
        <p style="margin-top: 10px; font-weight: bold;">${pelicula.title}</p>
      `;
      card.addEventListener("click", () => callbackClicPelicula(pelicula.id));
      grid.appendChild(card);
    });
  }

  static renderizarDetalle(pelicula, callbacksBotones) {
    const contenedor = document.getElementById("contenedor-detalle");

    contenedor.innerHTML = `
    <div style="display: flex; gap: 20px; flex-wrap: wrap; background: #1E1E1E; padding: 20px; border-radius: 10px;">
      <img src="${pelicula.posterUrl}" style="width: 250px; border-radius: 10px;" alt="Poster" />

      <div style="flex: 1; min-width: 300px;">
      <span style="background: red; color: white; padding: 2px 5px; border-radius: 3px; font-size: 12px;">${pelicula.obtenerTipo()}</span>
        <h2 style="color: #BB86FC; margin-top: 10px;">${pelicula.titulo}</h2>
        <p><strong>Géneros:</strong> ${pelicula.generos} | <strong>Edad:</strong> ${pelicula.clasificacionEdad}</p>
        <p><strong> Calificación:</strong> ${pelicula.clasificacion}</p>
        <p><strong>Director:</strong> ${pelicula.director}</p>
        <p><strong>Reparto:</strong> ${pelicula.reparto}</p>
        <p><em>${pelicula.resena}</em></p>

        <div style="margin-top: 20px;">
          <button id="btn-vista" class="btn-accion" style="background: #4CAF50; color: white; font-weight: bold;"> Ya la vi</button>
          <button id="btn-porver" class="btn-accion" style="background: #2196F3; color: white; font-weight: bold;"> Ver más tarde</button>
          <button id="btn-favorito" class="btn-accion" style="background: #FFC107; color: black; font-weight: bold;"> Agregar a favoritos</button>
        </div>
      </div>
    </div>
    `;

    document
      .getElementById("btn-vista")
      .addEventListener("click", () =>
        callbacksBotones.guardar(pelicula, "ya_vistas"),
      );
    document
      .getElementById("btn-porver")
      .addEventListener("click", () =>
        callbacksBotones.guardar(pelicula, "por_ver"),
      );
    document
      .getElementById("btn-favorito")
      .addEventListener("click", () =>
        callbacksBotones.guardar(pelicula, "favoritos"),
      );
  }

  static renderizarCategorias(categorias, callbackFiltro) {
    const contenedor = document.getElementById("contenedor-categorias");
    categorias.forEach((categoria) => {
      const boton = document.createElement("button");
      boton.className = "boton-categoria";
      boton.innerText = categoria.nombre;
      boton.addEventListener("click", () => callbackFiltro(categoria));
      contenedor.appendChild(boton);
    });
  }
}
