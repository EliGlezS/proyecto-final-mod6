//Importación de imágenes para los eventos
import Event1 from './img/eventPhotos/Event1.jpg'
import Event2 from './img/eventPhotos/Event2.jpg'
import Event3 from './img/eventPhotos/Event3.jpg'
import Event4 from './img/eventPhotos/Event4.jpg'
import Event5 from './img/eventPhotos/Event5.jpg'

const events = [
    {
      id: 1,
      title: "Noches de Lectura Bajo las Estrellas",
      description: "Sumérgete en una experiencia mágica donde la literatura y la naturaleza se fusionan. En este evento al aire libre, nos reuniremos en el hermoso Jardín de la Biblioteca Nacional para disfrutar de lecturas seleccionadas de distintos géneros literarios. Poetas, narradores y actores darán vida a cuentos, novelas y poesías bajo la tenue luz de las estrellas. Los asistentes podrán traer mantas y bebidas calientes para una velada inolvidable. Además, al final de la noche, se abrirá un espacio de micrófono abierto para aquellos que deseen compartir sus propios escritos.",
      date: "20 de junio de 2025",
      location: "Jardín de la Biblioteca Nacional",
      image: Event1,
      schedule: [
        { time: "19:00", activity: "Apertura del evento y bienvenida" },
        { time: "19:30", activity: "Lectura de poesía a cargo de autores invitados" },
        { time: "20:30", activity: "Cuentos narrados bajo las estrellas" },
        { time: "21:30", activity: "Micrófono abierto para asistentes" },
        { time: "22:00", activity: "Cierre del evento" }
      ]
    },
    {
      id: 2,
      title: "El Reto del Libro Perdido",
      description: "Un desafío interactivo diseñado para los amantes de la literatura y los enigmas. En este evento, los participantes deberán resolver acertijos, descifrar pistas y sumergirse en tramas misteriosas inspiradas en la literatura universal para encontrar un libro perdido. Con la posibilidad de jugar en equipos o de manera individual, esta aventura literaria se desarrollará tanto en formato online como en diversas librerías participantes. Aquellos que logren completar el reto recibirán premios exclusivos y descuentos en librerías. ¿Podrás descubrir el libro oculto antes que los demás?",
      date: "15 de agosto de 2025",
      location: "Online y en librerías participantes",
      image: Event2,
      schedule: [
        { time: "10:00", activity: "Apertura del evento y explicación de reglas" },
        { time: "10:30", activity: "Inicio del desafío: búsqueda de pistas" },
        { time: "12:00", activity: "Primer descanso y pistas adicionales" },
        { time: "14:00", activity: "Última pista y resolución del enigma" },
        { time: "15:00", activity: "Entrega de premios y cierre del evento" }
      ]
    },
    {
      id: 3,
      title: "Café con el Autor",
      description: "Disfruta de una tarde acogedora en el Café Literario El Rincón de los Libros, donde escritores invitados compartirán sus experiencias, responderán preguntas del público y firmarán ejemplares de sus obras. En este evento, los asistentes tendrán la oportunidad de conocer el proceso creativo detrás de sus libros favoritos, explorar los desafíos de la escritura y obtener recomendaciones personalizadas de los propios autores. Además, el ambiente relajado del café permitirá conversaciones cercanas mientras se disfruta de un buen café y deliciosos postres.",
      date: "5 de julio de 2025",
      location: "Café Literario El Rincón de los Libros",
      image: Event3,
      schedule: [
        { time: "17:00", activity: "Bienvenida y presentación del autor invitado" },
        { time: "17:30", activity: "Conversación sobre el proceso de escritura" },
        { time: "18:15", activity: "Preguntas y respuestas con el público" },
        { time: "19:00", activity: "Firma de libros y sesión de fotos" },
        { time: "19:30", activity: "Cierre del evento" }
      ]
    },
    {
      id: 4,
      title: "Feria de Nuevos Talentos Literarios",
      description: "Un evento imperdible para descubrir a los escritores emergentes que están revolucionando el mundo de la literatura. La feria contará con presentaciones de libros, sesiones de lectura en vivo y mesas redondas donde los nuevos talentos compartirán sus historias y consejos sobre la publicación de sus obras. Además, habrá talleres sobre estrategias de marketing literario, autoedición y cómo conseguir una editorial. Al final del evento, los asistentes podrán participar en una sesión de networking con editores y agentes literarios en busca de nuevas voces.",
      date: "10 de septiembre de 2025",
      location: "Centro Cultural La Palabra",
      image: Event4,
      schedule: [
        { time: "10:00", activity: "Inauguración de la feria y palabras de bienvenida" },
        { time: "11:00", activity: "Presentación de autores emergentes" },
        { time: "13:00", activity: "Panel: Cómo publicar tu primer libro" },
        { time: "15:00", activity: "Taller de autoedición y marketing literario" },
        { time: "17:00", activity: "Sesión de networking con editores" },
        { time: "18:00", activity: "Clausura del evento" }
      ]
    },
      {
      id: 5,
      title: "El Festival Literario de Viajes",
      description: "Viaja a través de las palabras en este festival que une la literatura con la pasión por explorar el mundo. Escritores de crónicas de viaje, fotógrafos y periodistas compartirán sus relatos más impactantes, experiencias transformadoras y consejos para escribir sobre viajes. El evento contará con exposiciones de fotografías, sesiones de firma de libros y mesas redondas sobre cómo la literatura puede capturar la esencia de los lugares y culturas. Además, habrá un espacio donde los asistentes podrán compartir sus propias historias de viaje y participar en concursos de escritura inspirados en destinos exóticos.",
      date: "12 de octubre de 2025",
      location: "Centro de Convenciones El Mundo Literario",
      image: Event5,
      schedule: [
        { time: "09:30", activity: "Apertura del evento y presentación de expositores" },
        { time: "10:00", activity: "Mesa redonda: Literatura y viajes" },
        { time: "12:00", activity: "Taller de escritura de crónicas de viaje" },
        { time: "14:00", activity: "Exposición de fotografías de viajes literarios" },
        { time: "16:00", activity: "Firma de libros y charlas con autores" },
        { time: "18:00", activity: "Cierre del evento y conclusiones" }
      ]
    }
  ];
  
export default events;
