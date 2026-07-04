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
        <p>${pelicula.title}</p>
      `;
      card.addEventListener("click", () => callbackClicPelicula(pelicula.id));
      grid.appendChild(card);
    });
  }

  static renderizarDetalle(pelicula, callbacksBotones) {
    const contenedor = document.getElementById("contenedor-detalle");

    contenedor.innerHTML = `
    <div>
      <img src="${pelicula.posterUrl}" alt="${pelicula.titulo}" />

      <div>
        <h2>${pelicula.titulo}</h2>
        <p><strong>Género:</strong> ${pelicula.generos} | <strong>Edad:</strong> ${pelicula.clasificacionEdad}</p>
        <p><strong> Calificación:</strong> ${pelicula.clasificacion}</p>
        <p><strong>Director:</strong> ${pelicula.director}</p>
        <p><strong>Reparto:</strong> ${pelicula.reparto}</p>
        <p><em>${pelicula.resena}</em></p>

        <div>
          <button id="btn-vista" class="btn-accion"> Ya la vi</button>
          <button id="btn-porver" class="btn-accion"> Ver más tarde</button>
          <button id="btn-favorito" class="btn-accion"> Agregar a favoritos</button>
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
