# Editorial Luz de Tinta - Proyecto Final Grupo 3

## Tabla de Contenido

- [Introducción](#introducción)
- [Metodología de Trabajo](#metodología-de-trabajo)
- [Características Principales](#características-principales)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Validación de Formulario](#validación-de-formulario)
- [Puesta en Marcha e Instalación](#puesta-en-marcha-e-instalación)
- [Mejoras Futuras](#mejoras-futuras)
- [Contribuciones](#contribuciones)
- [Colaboradoras](#colaboradoras)
- [Licencia](#licencia)
- [Read this in English](#english-version)

---

## Introducción

Este proyecto es el resultado del trabajo final del curso de desarrollo Front-End Web. Se trata de una editorial digital donde los usuarios pueden comprar libros y gestionar su perfil. A través de esta plataforma, buscamos ofrecer una experiencia intuitiva y accesible para la compra, combinando diseño atractivo y funcionalidad eficiente.

El desarrollo de esta aplicación se ha llevado a cabo en equipo, permitiendo a cada integrante aplicar los conocimientos adquiridos durante la formación. Desde la concepción del diseño hasta la implementación de las funcionalidades principales, nos hemos enfocado en cumplir con las mejores prácticas y los requisitos mínimos establecidos para garantizar un producto de calidad.

---

## Metodología de Trabajo

Para una mejor organización, el proyecto se ha desarrollado bajo la rama principal `develop`, a partir de la cual se han creado ramas específicas para cada tarea. Posteriormente, estas se han fusionado de nuevo en `develop`, permitiendo una mejor colaboración entre los integrantes del equipo.

---

## Características Principales

- Catálogo de libros con opciones de filtrado y búsqueda.
- Sistema de autenticación para garantizar una experiencia segura.
- Carrito de compras interactivo, con gestión de productos.
- Modal de confirmación al añadir libros a la cesta.
- Selección de método de pago con modal emergente.
- Diseño adaptativo con un header y footer responsivo.
- Menú hamburguesa en el header versión móvil.
- Página de eventos con carrusel interactivo.
- Perfil de usuario con opción de edición de datos, cierre de sesión y eliminación de cuenta, además de Login y Register.
- Formulario de contacto con validaciones y mensajes de confirmación.
- Subscripción a boletín con validación de correo y confirmación mediante modal.
- Página "Quiénes Somos", accesible desde el footer, donde se presenta una breve introducción sobre nuestra experiencia conjunta en el bootcamp y en este proyecto.
- **Página de error 404**: Si el usuario escribe mal la URL, como `/conta` en vez de `/contact`, se muestra una página de error 404 con un mensaje adecuado.

### Mobile First y Página Responsive

El diseño de la aplicación ha sido creado con un enfoque **Mobile First**, lo que significa que se ha priorizado la creación para dispositivos móviles y luego se ha adaptado a pantallas más grandes como tabletas y escritorios. Este enfoque asegura que la aplicación sea completamente funcional en cualquier dispositivo, brindando una experiencia de usuario óptima.

La página es **responsive**, es decir que se adapta automáticamente a diferentes tamaños de pantalla y dispositivos (móviles, tabletas, escritorios). Esto garantiza que la aplicación se vea y funcione correctamente sin importar el dispositivo utilizado.

---

## Estructura del Proyecto

```
public/           # Archivos estáticos
src/components/   # Componentes reutilizables
src/context/      # Contextos globales
src/services/     # Datos mockeados tanto de los libros como de los datos usados para los eventos.
src/styles/       # Estilos CSS del proyecto
src/pages/        # Páginas principales de la aplicación
src/customHooks/  # Hooks personalizados
src/img/          # Imágenes usadas en la página web
```

### Características de las partes del proyecto

1. **Página de inicio (`/`)**: Muestra una lista de productos disponibles y un input tipo search para filtrar y ver las coincidencias.
2. **Recomendados (`/recommended`)**: Lista de productos recomendados.
3. **Detalle de producto (`/books/:id`)**: Información detallada del libro seleccionado.
4. **Registro de usuario (`/register`)**: Registro necesario para iniciar sesión.
5. **Página de Login (`/login`)**: Permite loguear usuarios registrados.
6. **Perfil (`/perfil`)**: Edición de datos y opción de cerrar sesión o eliminar cuenta.
7. **Contacto (`/contact`)**: Formulario de contacto con modal de confirmación.
8. **Eventos (`/events`)**: Información de eventos en carrusel interactivo (manual y automático).
9. **Carrito (`/cart`)**: Gestión de productos en el carrito.
10. **Autenticación y Pago (`/checkout`)**: Métodos de pago y seguridad de sesión.
11. **¿Quiénes somos? (`/nosotras`)**: Información sobre las creadoras del proyecto.
12. (*) : Página de error 404, se puede acceder con * o forzando un error en la URL. 

---

## Tecnologías Utilizadas

- **React con Vite** para un desarrollo rápido y optimizado.
- **HTML5 y CSS** (CSS anidado para mejor organización).
- **React Router DOM** para la navegación.
- **useState y useEffect** para la gestión de estados y efectos.
- **useRef** se utiliza para referenciar elementos del DOM o almacenar valores persistentes entre renders sin causar re-renderizados.
- **Context API** para la administración de la información de los libros, modales, carrito y usuarios.
- **LocalStorage** para la autenticación y almacenamiento de datos.
- **Git y GitHub** para el control de versiones.
- **JavaScript** para la lógica de la aplicación.
- **Trello** para la organización y gestión del proyecto.
- **Figma** para el diseño de interfaces y prototipos.

---

## Validación de Formulario

Se han implementado validaciones para garantizar que los datos ingresados sean correctos:

- **Campos obligatorios**: No pueden quedar vacíos.
- **Formato de email**: Verificación de formato válido.
- **Longitud mínima y máxima**: Control de caracteres permitidos.
- **Solo números en ciertos campos**: Teléfono, por ejemplo.
- **Solo letras en ciertos campos**: Nombres y apellidos.
- **Mensajes de error en tiempo real**: Alertas instantáneas.
- **Imagen de perfil**: Se usa una por defecto en caso de error.
- **Confirmación**: Modal de éxito tras la subscripción.

---

## Puesta en marcha o instalación

1. Clona el repositorio (https://github.com/EliGlezS/proyecto-final-mod6.git).
3. **Página Web**:
   - Si deseas trabajar o visualizar la página web, navega a la carpeta proyect-mod-6.
   - Instala las dependencias con Vite (si aún no lo has hecho):
     **npm install**
   - Luego, para iniciar el servidor de desarrollo de Vite, corre el siguiente comando:
     **npm run dev**
   - Abre tu navegador y visita el local host que aparece después de introducir el comando anterior, a continuación podrás ver la página en acción.
   
**Si deseas realizar cambios y contribuir al proyecto** : 

1. Haz un fork del repositorio.
2. Crea una rama nueva con tu característica o corrección.
(Comando para crear la rama y situarse en ella **git checkout -b nombre-de-tu-rama**).
4. Realiza los cambios y haz un commit con un mensaje descriptivo.
5. Abre un pull request para que revisemos tus cambios.

---

## Mejoras Futuras

- Integración con una API real para obtener los libros dinámicamente.
- Autenticación avanzada con tokens de sesión.
- Pasarela de pago real con facturación y envío de recibo por correo.
- Mejoras en la interfaz, optimización de la experiencia de usuario y accesibilidad.
  
---

## Colaboradoras

Este proyecto fue desarrollado en equipo por:

- [Elena Delgado](https://github.com/ElenaDelHer)
- [Elizabeth González](https://github.com/EliGlezS)
- [Ifara Oropesa](https://github.com/tinadanit)

---

## Licencia

Este proyecto está licenciado bajo la **MIT License**. Consulta el archivo `LICENSE` para obtener más detalles.





## English Version

# Editorial Luz de Tinta - Final Project Group 3

## Table of Contents

- [Introduction](#introduction)
- [Work Methodology](#work-methodology)
- [Main Features](#main-features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Form Validation](#form-validation)
- [Getting Started and Installation](#getting-started-and-installation)
- [Future Improvements](#future-improvements)
- [Contributions](#contributions)
- [Collaborators](#collaborators)
- [License](#license)

---

## Introduction

This project is the final work of the Front-End Web Development course. It is a digital publishing platform where users can purchase books and manage their profiles. Through this platform, we aim to offer an intuitive and accessible experience for buying books, combining attractive design and efficient functionality.

The development of this application has been carried out as a team project, allowing each member to apply the knowledge acquired during the course. From design conception to the implementation of core functionalities, we focused on adhering to best practices and the minimum requirements set to ensure a high-quality product.

---

## Work Methodology

To improve organization, the project was developed under the main `develop` branch, from which specific branches were created for each task. These branches were later merged back into `develop`, allowing for better collaboration among the team members.

---

## Main Features

- Book catalog with filtering and search options.
- Authentication system for a secure experience.
- Interactive shopping cart, with product management.
- Confirmation modal when adding books to the cart.
- Payment method selection with a pop-up modal.
- Adaptive design with a responsive header and footer.
- Mobile version of the header with a hamburger menu.
- Events page with an interactive carousel.
- User profile with options to edit data, log out, or delete the account, along with Login and Register functionalities.
- Contact form with validation and confirmation messages.
- Newsletter subscription with email validation and confirmation via modal.
- "Who We Are" page, accessible from the footer, featuring a brief introduction about our joint experience in the bootcamp and in this project.
- (*) : **404 Error Page** If the user types the wrong URL, such as `/conta` instead of `/contact`, a 404 error page will display an appropriate message.

### Mobile First and Responsive Design

The application was designed with a **Mobile First** approach, which means that it was initially created for mobile devices and then adapted for larger screens such as tablets and desktops. This approach ensures that the application is fully functional on any device, providing an optimal user experience.

The page is **responsive**, meaning it adapts automatically to different screen sizes and devices (mobiles, tablets, desktops). This guarantees that the application looks and works correctly, no matter the device used.

---

## Project Structure

```
public/           # Static files 
src/components/   # Reusable components
src/context/      # Global contexts
src/services/     # Mock data for books and event data
src/styles/       # CSS styles for the project
src/pages/        # Main pages of the application
src/customHooks/  # Custom hooks
src/img/          # mages used in the webpage

```

### Features of the project parts

1. **Home Page (`/`)**: Displays a list of available products and a search input to filter and view matches.
2. **Recommended (`/recommended`)**: List of recommended products.
3. **Product Detail (`/books/:id`)**: Detailed information about the selected book.
4. **User Registration (`/register`)**: Required to log in.
5. **Login Page (`/login`)**: Allows registered users to log in.
6. **Profile (`/perfil`)**: Edit data and options to log out or delete the account.
7. **Contact (`/contact`)**: Contact form with a confirmation modal.
8. **Events (`/events`)**: Event information in an interactive carousel (manual and automatic).
9. **Cart (`/cart`)**: Management of products in the cart.
10. **Authentication and Payment (`/checkout`)**: Payment methods and session security.
11. **Who We Are? (`/nosotras`)**: Information about the creators of the project.
12. **404 Error Page**: Accessed via an incorrect URL or forcing an error.

---

## Technologies Used

- **React with Vite** for fast and optimized development.
- **HTML5 and CSS** (nested CSS for better organization).
- **React Router DOM** for navigation.
- **useState and useEffect** for managing states and effects.
- **useRef** is used to reference DOM elements or store persistent values between renders without causing re-renders.
- **Context API** for managing book data, modals, cart, and user information.
- **LocalStorage** for authentication and data storage.
- **Git and GitHub** for version control.
- **JavaScript** for application logic.
- **Trello** for project organization and management.
- **Figma** for interface design and prototyping.

---

## Form Validation

We have implemented validations to ensure that entered data is correct:

- **Required fields**: Cannot be left empty.
- **Email format**: Valid format verification.
- **Minimum and maximum length**: Character length control.
- **Only numbers in specific fields**: For example, phone number.
- **Only letters in certain fields**: For names and surnames.
- **Real-time error messages**: Instant alerts.
- **Profile image**: Default image is used in case of an error.
- **Confirmation**: Success modal after subscription.

---

## Getting Started and Installation

1. Clone the repository (https://github.com/EliGlezS/proyecto-final-mod6.git).
3. **Web Page**:
   - If you want to work or view the webpage, navigate to the `proyecto-mod-6` folder.
   - Install the dependencies with Vite (if you haven't already):
     **npm install**
   - Then, to start the Vite development server, run the following command:
     **npm run dev**
   - Open your browser and visit the localhost URL that appears after running the above command to see the page in action.

**If you want to make changes and contribute to the project**:

1. Fork the repository.
2. Create a new branch with your feature or fix.
(Use the command **git checkout -b branch-name** to create and switch to the new branch).
4. Make the changes and commit with a descriptive message.
5. Open a pull request for us to review your changes.

---

## Future Improvements

- Integration with a real API to fetch books dynamically.
- Advanced authentication with session tokens.
- Real payment gateway with invoicing and receipt emails.
- Interface improvements, user experience optimization, and accessibility enhancements.

---

## Collaborators

This project was developed as a team by:

- [Elena Delgado](https://github.com/ElenaDelHer)
- [Elizabeth González](https://github.com/EliGlezS)
- [Ifara Oropesa](https://github.com/tinadanit)

---

## License

This project is licensed under the **MIT License**. Please see the `LICENSE` file for more details.

