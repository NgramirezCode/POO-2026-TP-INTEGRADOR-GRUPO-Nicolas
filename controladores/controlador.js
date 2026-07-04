{
  /** Controlador de logica */
}

import { TMBD } from "../modelos/Modelo.js";
import { Vista } from "../vistas/Vista.js";

export class Controlador {
  static categorias = [
    { id: "", nombre: "Populares" },
    { id: 28, nombre: "Acción" },
    { id: 35, nombre: "Comedia" },
    { id: 27, nombre: "Terror" },
    { id: 878, nombre: "Ciencia Ficción" },
  ];

  static iniciar() {
    Vista.renderizarCategorias(this.categorias, (categoria) => {
      document.getElementById("titulo-seccion").innerText = categoria.nombre;
      this.cargarCatalogo(categoria.id);
    });

    this.cargarCatalogo("");

    document.getElementById("boton-volver").addEventListener("click", () => {
      Vista.mostrarVista("vista-catalogo");
    });
  }

  static async cargarCatalogo(idGenero) {
    const peliculas = await TMBD.obtenerCatalogo(idGenero);

    Vista.renderizarCatalago(peliculas, (idPelicula) =>
      this.abrirDetalle(idPelicula),
    );
  }

  static async abrirDetalle(idPelicula) {
    try {
      const pelicula = await TMBD.obtenerDetalle(idPelicula);

      const acciones = {
        guardar: (pelicula, lista) => {
          const exito = TMBD.guardarEnLista(pelicula, lista);

          if (exito) alert(`¡"${pelicula.titulo}" agregada a tu lista!`);
          else alert("Esta película ya se encuentra en tu lista.");
        },
      };
      Vista.renderizarDetalle(pelicula, acciones);
      Vista.mostrarVista("vista-detalle");
    } catch (error) {
      alert("Error al cargar el detalle de la película. ");
    }
  }
}
