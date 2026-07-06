# POO-2026-TP-INTEGRADOR-GRUPO-Nicolas

### Nombre del proyecto:

¡Cine BOOM!

### Integrantes:

- Ramírez, Nicolás Gabriel.

### Descripción:

Aplicación web que consume la API externa de The Movie Database (TMDB). El proyecto está desarrollado bajo el paradigma de la Programación Orientada a Objetos (POO), implementando clases, herencia, encapsulamiento y polimorfismo. A nivel arquitectónico, utiliza el patrón de diseño MVC (Modelo-Vista-Controlador) mediante módulos nativos de JavaScript (ES6) para separar la lógica de negocio, la interfaz de usuario y la persistencia de datos.

### Funcionalidades:

- **Catálogo Dinámico:** Visualización de películas populares filtradas por categorías oficiales (Acción, Comedia, Terror, Ciencia Ficción).
- **Fichas Técnicas:** Al hacer clic en una película, se realiza una petición profunda a la API para mostrar detalles específicos instanciados en objetos (director, reparto, calificación y clasificación por edades).
- **Persistencia de Datos:** Los usuarios pueden guardar películas en listas personalizadas ("Ya la vi", "Quiero verla" o "Favoritos"). Estos datos persisten en el navegador utilizando `LocalStorage`.
- **Navegación Fluida:** Transiciones instantáneas entre el catálogo y los detalles sin necesidad de recargar la página web.

### Instrucciones de ejecución:

**Importante:** Dado que el proyecto utiliza Módulos de JavaScript (`import`/`export`), no se puede ejecutar simplemente abriendo el archivo `index.html` en el navegador. Se requiere de un servidor local para evitar bloqueos de CORS.

1. Clonar el repositorio en tu máquina local:
   git clone https://github.com/NgramirezCode/POO-2026-TP-INTEGRADOR-GRUPO-Nicolas.git

2. Abrir la carpeta del proyecto en Visual Studio Code.

3. Instalar la extensión Live Server (si no se encuentra instalada).

4. Hacer clic derecho sobre el archivo index.html y seleccionar la opción "Open with Live Server" (o hacer clic en el botón "Go Live" en la barra inferior).

5. La aplicación se abrirá automáticamente en tu navegador predeterminado (usualmente en http://127.0.0.1:5500/).
