const books = [ 
    {
        id: 1,
        title: "El legado de la sombra",
        price: 15.99,
        stock: true,
        author: "Ismael Rivas",
        genre: "Fantasía",
        publicationDate: "2015-03-12",
        cover: "src/img/booksCover/Libro1.jpg",
        synopsis: "Un joven descubre que su familia oculta un antiguo poder prohibido.",
        reviews: [
            "Una historia épica llena de magia y misterio.",
            "Personajes bien desarrollados y una trama atrapante."
        ]
    },
    {
        id: 2,
        title: "Horizontes Perdidos",
        price: 12.50,
        stock: false,
        author: "Valentina Gómez",
        genre: "Ciencia ficción",
        publicationDate: "2020-07-05",
        cover: "src/img/booksCover/Libro2.jpg",
        synopsis: "Una astronauta viaja a un planeta desconocido y descubre una civilización antigua.",
        reviews: [
            "Un viaje interestelar con giros sorprendentes.",
            "Me hizo reflexionar sobre el futuro de la humanidad."
        ]
    },
    {
        id: 3,
        title: "El susurro del bosque",
        price: 18.75,
        stock: true,
        author: "Carlos Méndez",
        genre: "Misterio",
        publicationDate: "2018-09-21",
        cover: "src/img/booksCover/Libro3.jpg",
        synopsis: "Una periodista investiga desapariciones en un bosque donde ocurren hechos paranormales.",
        reviews: [
            "Suspenso bien construido, no podía soltar el libro.",
            "El final es inesperado y brillante."
        ]
    },
    {
        id: 4,
        title: "Crónicas de un sueño eterno",
        price: 21.99,
        stock: false,
        author: "Elena Vargas",
        genre: "Drama",
        publicationDate: "2016-12-01",
        cover: "src/img/booksCover/Libro4.jpg",
        synopsis: "Un anciano con alzhéimer escribe su historia antes de olvidar su pasado.",
        reviews: [
            "Conmovedor y profundamente humano.",
            "Una historia que toca el alma."
        ]
    },

    {
        id: 5,
        title: "Bajo la luna escarlata",
        price: 14.25,
        stock: true,
        author: "Martín Ruiz",
        genre: "Terror",
        publicationDate: "2022-10-31",
        cover: "src/img/booksCover/Libro5.jpg",
        synopsis: "Un pueblo es acechado por una criatura que solo aparece en las noches de luna llena.",
        reviews: [
            "Realmente perturbador, no lo leí de noche.",
            "Uno de los mejores libros de terror que he leído."
        ]
    },

    {
        id: 6,
        title: "El códice perdido",
        price: 19.99,
        stock: false,
        author: "Ricardo Fernández",
        genre: "Aventura",
        publicationDate: "2014-06-18",
        cover: "src/img/booksCover/Libro6.jpg",
        synopsis: "Un arqueólogo encuentra un manuscrito que podría cambiar la historia de la humanidad.",
        reviews: [
            "Llena de acción y misterios arqueológicos.",
            "Si te gusta Indiana Jones, este libro es para ti."
        ]
    },

    {
        id: 7,
        title: "Ecos del abismo",
        price: 22.50,
        stock: true,
        author: "Mariana Suárez",
        genre: "Terror",
        publicationDate: "2019-10-01",
        cover: "src/img/booksCover/Libro7.jpg",
        synopsis: "Un grupo de exploradores desciende a una cueva donde el tiempo parece detenerse.",
        reviews: [
            "Terror psicológico que te deja helado.",
            "Me recordó a ‘El descenso’, pero aún más aterrador."
        ]
    },

    {
        id: 8,
        title: "El enigma de los sueños",
        price: 17.45,
        stock: true,
        author: "Luciano Ramírez",
        genre: "Ciencia ficción",
        publicationDate: "2021-02-14",
        cover: "src/img/booksCover/Libro8.jpg",
        synopsis: "Un neurocientífico descubre cómo viajar a través de los sueños, pero a un alto costo.",
        reviews: [
            "Fascinante mezcla de ciencia y filosofía.",
            "Te hace cuestionar la realidad."
        ]
    },

    {
        id: 9,
        title: "Bajo la tormenta",
        price: 13.80,
        stock: false,
        author: "Fernanda López",
        genre: "Drama",
        publicationDate: "2017-08-25",
        cover: "src/img/booksCover/Libro9.jpg",
        synopsis: "Dos hermanos deben sobrevivir en una ciudad devastada por una tormenta catastrófica.",
        reviews: [
            "Emotivo y desgarrador.",
            "Una historia de supervivencia y amor fraternal."
        ]
    },

    {
        id: 10,
        title: "El secreto del alquimista",
        price: 20.99,
        stock: true,
        author: "Alberto Medina",
        genre: "Fantasía",
        publicationDate: "2013-11-30",
        cover: "src/img/booksCover/Libro10.jpg",
        synopsis: "Un joven aprendiz de alquimia descubre una fórmula que desafía la muerte.",
        reviews: [
            "Una aventura fascinante llena de misterio y magia.",
            "Muy recomendable para los amantes de la fantasía."
        ]
    },
        
    {
        id: 11,
        title: "Las crónicas del viento",
        price: 16.75,
        stock: true,
        author: "Gabriela Rojas",
        genre: "Fantasía",
        publicationDate: "2012-05-14",
        cover: "src/img/booksCover/Libro11.jpg",
        synopsis: "Un joven aventurero emprende un viaje para encontrar el origen de los vientos mágicos.",
        reviews: [
            "Una historia llena de imaginación y emoción.",
            "Me transportó a un mundo completamente nuevo."
        ]
    },
    {
        id: 12,
        title: "El último pasajero",
        price: 14.99,
        stock: false,
        author: "Julián Méndez",
        genre: "Misterio",
        publicationDate: "2018-04-22",
        cover: "src/img/booksCover/Libro12.jpg",
        synopsis: "Un detective investiga la desaparición de un tren fantasma que nunca llega a su destino.",
        reviews: [
            "Misterioso y atrapante de principio a fin.",
            "Una trama muy bien construida."
        ]
    },
    {
        id: 13,
        title: "Sombras en la nieve",
        price: 18.30,
        stock: true,
        author: "Daniela Fuentes",
        genre: "Terror",
        publicationDate: "2021-12-10",
        cover: "src/img/booksCover/Libro13.jpg",
        synopsis: "Un grupo de montañistas queda atrapado en una cabaña asediada por seres desconocidos.",
        reviews: [
            "Increíblemente escalofriante, lo leí de una sentada.",
            "Perfecto para los amantes del horror psicológico."
        ]
    },
    {
        id: 14,
        title: "El faro olvidado",
        price: 19.50,
        stock: false,
        author: "Tomás Valverde",
        genre: "Drama",
        publicationDate: "2015-07-19",
        cover: "src/img/booksCover/Libro14.jpg",
        synopsis: "Un viejo farero recuerda los secretos que oculta su faro antes de su retiro.",
        reviews: [
            "Una historia melancólica y hermosa.",
            "Reflexiva y emotiva, me hizo llorar."
        ]
    },
    {
        id: 15,
        title: "Circuito infinito",
        price: 22.75,
        stock: true,
        author: "Ernesto Salgado",
        genre: "Ciencia ficción",
        publicationDate: "2019-09-30",
        cover: "src/img/booksCover/Libro15.jpg",
        synopsis: "Un programador crea una inteligencia artificial que desarrolla conciencia propia.",
        reviews: [
            "Fascinante y aterrador a la vez.",
            "Plantea cuestiones éticas muy interesantes."
        ]
    },
    {
        id: 16,
        title: "La estrella perdida",
        price: 23.99,
        stock: true,
        author: "Laura Estévez",
        genre: "Fantasía",
        publicationDate: "2016-11-07",
        cover: "src/img/booksCover/Libro16.jpg",
        synopsis: "Una joven busca recuperar una estrella robada que puede destruir su mundo.",
        reviews: [
            "Un mundo mágico lleno de misterios y aventura.",
            "Me encantó, ¡es perfecto para los fans de la fantasía!"
        ]
    },
    {
        id: 17,
        title: "El eco de las olas",
        price: 17.90,
        stock: false,
        author: "Antonio Pérez",
        genre: "Drama",
        publicationDate: "2018-04-10",
        cover: "src/img/booksCover/Libro17.jpg",
        synopsis: "Un hombre regresa a su pueblo natal tras una tragedia, para reconciliarse con su pasado.",
        reviews: [
            "Una historia profunda sobre la pérdida y la redención.",
            "Me hizo pensar en mi propia vida y mis decisiones."
        ]
    },
    {
        id: 18,
        title: "El portal de cristal",
        price: 20.30,
        stock: true,
        author: "Ricardo Jiménez",
        genre: "Aventura",
        publicationDate: "2020-03-18",
        cover: "src/img/booksCover/Libro18.jpg",
        synopsis: "Un grupo de amigos encuentra un portal hacia otra dimensión que pone en peligro sus vidas.",
        reviews: [
            "¡Increíble! Aventura y magia a cada página.",
            "Un gran libro, lleno de acción y suspenso."
        ]
    },
    {
        id: 19,
        title: "La máscara del diablo",
        price: 16.80,
        stock: false,
        author: "Javier Lozano",
        genre: "Terror",
        publicationDate: "2019-10-13",
        cover: "src/img/booksCover/Libro19.jpg",
        synopsis: "Un antiguo artefacto provoca la liberación de una fuerza demoníaca que aterrorizará a una ciudad.",
        reviews: [
            "Intenso y aterrador, no pude dejar de leerlo.",
            "Es un libro que te mantiene al borde del asiento."
        ]
    },
    {
        id: 20,
        title: "El horizonte del fin",
        price: 25.00,
        stock: true,
        author: "Susana Martínez",
        genre: "Ciencia ficción",
        publicationDate: "2021-06-15",
        cover: "src/img/booksCover/Libro20.jpg",
        synopsis: "La humanidad se enfrenta a su última oportunidad para salvarse antes del fin del mundo.",
        reviews: [
            "Una visión apocalíptica impresionante.",
            "Un libro emocionante que te deja pensando durante días."
        ]
    },
    {
        id: 21,
        title: "El jardín de las estrellas",
        price: 18.99,
        stock: true,
        author: "María López",
        genre: "Romántico",
        publicationDate: "2017-02-14",
        cover: "src/img/booksCover/Libro21.jpg",
        synopsis: "Dos almas gemelas se encuentran en un jardín mágico que conecta el pasado y el futuro.",
        reviews: [
            "Un romance hermoso y lleno de emoción.",
            "La historia te hace soñar con el amor verdadero."
        ]
    },
    {
        id: 22,
        title: "La rebelión de los dioses",
        price: 23.50,
        stock: false,
        author: "Gabriela Sánchez",
        genre: "Fantasía épica",
        publicationDate: "2018-12-10",
        cover: "src/img/booksCover/Libro22.jpg",
        synopsis: "Los dioses se rebelan contra los humanos, creando un caos que amenaza la existencia misma.",
        reviews: [
            "Un mundo increíblemente vasto y bien construido.",
            "Me encanta cómo la magia y la política se entrelazan en este libro."
        ]
    },
    {
        id: 23,
        title: "Un millón de mundos",
        price: 19.90,
        stock: true,
        author: "Fernando Pérez",
        genre: "Ciencia ficción",
        publicationDate: "2021-05-17",
        cover: "src/img/booksCover/Libro23.jpg",
        synopsis: "Un científico descubre la existencia de infinitos universos paralelos, lo que cambia la visión del mundo.",
        reviews: [
            "Una trama que te hace cuestionar todo lo que sabes sobre la realidad.",
            "Amo cómo la ciencia ficción puede volverse tan filosófica."
        ]
    },
    {
        id: 24,
        title: "La última sonrisa",
        price: 13.40,
        stock: true,
        author: "Ricardo González",
        genre: "Misterio",
        publicationDate: "2016-09-22",
        cover: "src/img/booksCover/Libro24.jpg",
        synopsis: "Un detective debe resolver un crimen sin pruebas, solo con las sonrisas que quedan en las fotos.",
        reviews: [
            "Un misterio retorcido que no pude soltar.",
            "Una historia que mantiene la tensión hasta el último capítulo."
        ]
    },
    {
        id: 25,
        title: "Bajo el manto de las sombras",
        price: 20.99,
        stock: false,
        author: "Lucía Fernández",
        genre: "Terror psicológico",
        publicationDate: "2020-03-20",
        cover: "src/img/booksCover/Libro25.jpg",
        synopsis: "Una mujer es perseguida por sus propios miedos, en un mundo donde la realidad y la pesadilla se confunden.",
        reviews: [
            "Atmósfera espeluznante, te atrapa desde la primera página.",
            "El terror psicológico más efectivo que he leído."
        ]
    },
    {
        id: 26,
        title: "Voces en el viento",
        price: 21.50,
        stock: true,
        author: "Antonio García",
        genre: "Histórico",
        publicationDate: "2014-11-30",
        cover: "src/img/booksCover/Libro26.jpg",
        synopsis: "Un soldado romano en el siglo I vive una historia de amor prohibido en tiempos de guerra.",
        reviews: [
            "Una historia épica que combina romance y aventura.",
            "Los detalles históricos están muy bien logrados."
        ]
    },
    {
        id: 27,
        title: "La joya de los mares",
        price: 16.00,
        stock: true,
        author: "Carolina Márquez",
        genre: "Aventura",
        publicationDate: "2019-02-12",
        cover: "src/img/booksCover/Libro27.jpg",
        synopsis: "Un grupo de piratas busca una antigua joya en el fondo del océano, enfrentándose a misterios y criaturas marinas.",
        reviews: [
            "Aventura pura, llena de acción y emoción.",
            "Me recordó a las viejas historias de piratas, pero mucho mejor."
        ]
    },
    {
        id: 28,
        title: "El reino del silencio",
        price: 22.40,
        stock: false,
        author: "Julieta Morales",
        genre: "Ficción contemporánea",
        publicationDate: "2020-01-14",
        cover: "src/img/booksCover/Libro28.jpg",
        synopsis: "En un mundo donde nadie puede hablar, una joven busca la verdad detrás del silencio impuesto por el gobierno.",
        reviews: [
            "Una reflexión sobre el poder y la libertad, tan relevante hoy en día.",
            "El concepto de un mundo sin palabras es fascinante."
        ]
    },
    {
        id: 29,
        title: "Entre las estrellas",
        price: 18.99,
        stock: true,
        author: "David Martínez",
        genre: "Romántico",
        publicationDate: "2017-04-18",
        cover: "src/img/booksCover/Libro29.jpg",
        synopsis: "Dos jóvenes se enamoran en un viaje espacial hacia un planeta lejano, mientras enfrentan los retos del espacio.",
        reviews: [
            "Una historia de amor que trasciende el tiempo y el espacio.",
            "Hermosa y tierna, aunque un poco predecible."
        ]
    },
    {
        id: 30,
        title: "La furia del viento",
        price: 20.99,
        stock: true,
        author: "Fernando Rodríguez",
        genre: "Thriller",
        publicationDate: "2021-08-29",
        cover: "src/img/booksCover/Libro30.jpg",
        synopsis: "Una periodista investiga un caso de corrupción que pone en peligro su vida y la de sus seres queridos.",
        reviews: [
            "Intenso y lleno de giros inesperados.",
            "No podía parar de leer, cada capítulo te atrapa más."
        ]
    },   
    {
        id: 31,
        title: "El fuego de la luna",
        price: 19.20,
        stock: true,
        author: "Adriana Cruz",
        genre: "Fantasía",
        publicationDate: "2015-07-11",
        cover: "src/img/booksCover/Libro31.jpg",
        synopsis: "Una joven aprendiz de hechicero descubre una antigua magia que puede alterar el destino de su mundo.",
        reviews: [
            "Un libro lleno de magia y giros sorprendentes.",
            "Me encantó cómo mezcló el misterio y la aventura."
        ]
    },
    {
        id: 32,
        title: "La sombra del árbol",
        price: 16.75,
        stock: true,
        author: "Miguel Hernández",
        genre: "Suspenso",
        publicationDate: "2019-10-08",
        cover: "src/img/booksCover/Libro32.jpg",
        synopsis: "Un escritor comienza a recibir cartas misteriosas relacionadas con un viejo caso sin resolver.",
        reviews: [
            "Tensa y absorbente, te mantiene pegado al libro.",
            "Me hizo pensar en los viejos thrillers de Agatha Christie."
        ]
    },
    {
        id: 33,
        title: "Vuelvo a ti",
        price: 15.60,
        stock: false,
        author: "Paola Martínez",
        genre: "Romántico",
        publicationDate: "2018-05-23",
        cover: "src/img/booksCover/Libro33.jpg",
        synopsis: "Una joven regresa a su ciudad natal después de muchos años para enfrentarse a su primer amor.",
        reviews: [
            "Muy emotivo, me hizo recordar mi propio amor de juventud.",
            "Historia perfecta para los fanáticos de los romances nostálgicos."
        ]
    },
    {
        id: 34,
        title: "El imperio de la mente",
        price: 21.90,
        stock: true,
        author: "Sergio Paredes",
        genre: "Ciencia ficción",
        publicationDate: "2021-11-15",
        cover: "src/img/booksCover/Libro34.jpg",
        synopsis: "Un neurocientífico crea una tecnología capaz de controlar los pensamientos humanos, pero el precio es alto.",
        reviews: [
            "Intrigante y perturbador, plantea preguntas sobre el futuro.",
            "Me hizo pensar en la ética de la inteligencia artificial."
        ]
    },
    {
        id: 35,
        title: "La caída de los cielos",
        price: 24.50,
        stock: false,
        author: "René García",
        genre: "Apocalíptico",
        publicationDate: "2017-09-05",
        cover: "src/img/booksCover/Libro35.jpg",
        synopsis: "Un meteorito se aproxima a la Tierra y un pequeño grupo de sobrevivientes luchará por encontrar una manera de salvarse.",
        reviews: [
            "Tenso y lleno de acción, me hizo pensar en ‘El día después de mañana’.",
            "Un gran thriller apocalíptico."
        ]
    },
    {
        id: 36,
        title: "La voz de la ausente",
        price: 18.00,
        stock: true,
        author: "Raquel Pérez",
        genre: "Drama",
        publicationDate: "2016-03-29",
        cover: "src/img/booksCover/Libro36.jpg",
        synopsis: "Una madre busca a su hija desaparecida, enfrentándose a una realidad dolorosa y a un sistema que la rechaza.",
        reviews: [
            "Una historia desgarradora sobre el dolor y la esperanza.",
            "El mejor drama que he leído en mucho tiempo."
        ]
    },
    {
        id: 37,
        title: "Entre las ruinas",
        price: 19.70,
        stock: true,
        author: "Oscar Delgado",
        genre: "Historia",
        publicationDate: "2019-01-14",
        cover: "src/img/booksCover/Libro37.jpg",
        synopsis: "Un historiador encuentra los restos de una civilización perdida y trata de reconstruir su historia.",
        reviews: [
            "Lleno de detalles fascinantes sobre culturas antiguas.",
            "Perfecto para los amantes de la historia y los misterios perdidos."
        ]
    },
    {
        id: 38,
        title: "Las puertas del destino",
        price: 22.60,
        stock: false,
        author: "Mónica Gómez",
        genre: "Fantasía",
        publicationDate: "2020-06-19",
        cover: "src/img/booksCover/Libro38.jpg",
        synopsis: "Un joven debe atravesar varias puertas mágicas para salvar a su mundo de la destrucción total.",
        reviews: [
            "Una historia épica llena de magia, aventura y sacrificio.",
            "Ideal para los fanáticos de las aventuras mágicas."
        ]
    },
    {
        id: 39,
        title: "La melodía del viento",
        price: 17.20,
        stock: true,
        author: "Carlos Torres",
        genre: "Romántico",
        publicationDate: "2018-11-09",
        cover: "src/img/booksCover/Libro39.jpg",
        synopsis: "Un músico perdido en su dolor encuentra la inspiración en una joven que cambia su vida.",
        reviews: [
            "Romántico, emotivo y lleno de pasión.",
            "Una obra maestra sobre la música y el amor."
        ]
    },
    {
        id: 40,
        title: "El otro lado del tiempo",
        price: 25.90,
        stock: true,
        author: "Sara González",
        genre: "Fantasía",
        publicationDate: "2017-08-14",
        cover: "src/img/booksCover/Libro40.jpg",
        synopsis: "Un grupo de viajeros del tiempo lucha para impedir un futuro devastador.",
        reviews: [
            "La mejor historia de viajes en el tiempo que he leído.",
            "Lleno de giros y sorpresas."
        ]
    },
    {
        id: 41,
        title: "Los secretos del bosque",
        price: 18.50,
        stock: true,
        author: "Isabel Navarro",
        genre: "Aventura",
        publicationDate: "2022-04-21",
        cover: "src/img/booksCover/Libro41.jpg",
        synopsis: "Un grupo de exploradores se adentra en un misterioso bosque lleno de secretos y criaturas fantásticas.",
        reviews: [
            "Una aventura llena de magia y peligros inesperados.",
            "Me encantó cómo combina lo natural con lo sobrenatural."
        ]
    },
    {
        id: 42,
        title: "El jardín de las sombras",
        price: 16.40,
        stock: true,
        author: "Antonio Ruiz",
        genre: "Terror",
        publicationDate: "2021-11-30",
        cover: "src/img/booksCover/Libro42.jpg",
        synopsis: "Una familia se muda a una antigua mansión con un jardín que oculta terribles secretos.",
        reviews: [
            "¡Terrorífico! No pude dormir después de leerlo.",
            "Una historia que te atrapa en cada página."
        ]
    },
    {
        id: 43,
        title: "La ciudad flotante",
        price: 21.90,
        stock: false,
        author: "Carlos Mendoza",
        genre: "Ciencia ficción",
        publicationDate: "2018-06-05",
        cover: "src/img/booksCover/Libro43.jpg",
        synopsis: "En un futuro donde las ciudades flotan sobre el agua, un joven debe luchar por sobrevivir en una sociedad desigual.",
        reviews: [
            "Una historia futurista impresionante, muy bien escrita.",
            "Me sorprendió lo original de la trama y su crítica social."
        ]
    },
    {
        id: 44,
        title: "Los ecos del pasado",
        price: 19.10,
        stock: true,
        author: "Javier Ramírez",
        genre: "Histórico",
        publicationDate: "2020-02-11",
        cover: "src/img/booksCover/Libro44.jpg",
        synopsis: "Un arqueólogo descubre una antigua civilización, pero los secretos que desentierra podrían cambiar el curso de la historia.",
        reviews: [
            "Un viaje fascinante al pasado, lleno de descubrimientos.",
            "Los detalles históricos están increíblemente bien investigados."
        ]
    },
    {
        id: 45,
        title: "El espejo",
        price: 22.00,
        stock: true,
        author: "Laura Gómez",
        genre: "Fantástico",
        publicationDate: "2019-03-30",
        cover: "src/img/booksCover/Libro45.jpg",
        synopsis: "Una joven encuentra un espejo antiguo que la transporta a un mundo paralelo lleno de criaturas misteriosas.",
        reviews: [
            "Increíble mundo paralelo, no podía dejar de leer.",
            "Un libro fantástico con una trama envolvente."
        ]
    },
    {
        id: 46,
        title: "El refugio del viento",
        price: 18.99,
        stock: true,
        author: "Felipe Torres",
        genre: "Romántico",
        publicationDate: "2017-07-15",
        cover: "src/img/booksCover/Libro46.jpg",
        synopsis: "Un escritor y una mujer solitaria encuentran el amor en una pequeña isla deshabitada.",
        reviews: [
            "Una historia romántica que te toca el corazón.",
            "Hermoso, aunque algo predecible, sigue siendo encantador."
        ]
    },
    {
        id: 47,
        title: "La puerta al abismo",
        price: 23.40,
        stock: true,
        author: "Ramón Pérez",
        genre: "Thriller",
        publicationDate: "2020-09-05",
        cover: "src/img/booksCover/Libro47.jpg",
        synopsis: "Un periodista investiga una serie de desapariciones que parecen estar conectadas con un antiguo portal místico.",
        reviews: [
            "Un thriller que te mantiene en vilo todo el tiempo.",
            "¡Impresionante! La intriga está presente hasta la última página."
        ]
    },
    {
        id: 48,
        title: "La última profecía",
        price: 24.50,
        stock: false,
        author: "Esteban López",
        genre: "Misterio",
        publicationDate: "2021-01-12",
        cover: "src/img/booksCover/Libro48.jpg",
        synopsis: "Un detective se enfrenta a una serie de crímenes que parecen seguir una antigua profecía.",
        reviews: [
            "Un libro intrigante, lleno de giros y misterio.",
            "Es imposible adivinar lo que sucederá en el siguiente capítulo."
        ]
    },
    {
        id: 49,
        title: "Los protectores del tiempo",
        price: 25.30,
        stock: true,
        author: "Ricardo Salazar",
        genre: "Fantasía épica",
        publicationDate: "2019-04-22",
        cover: "src/img/booksCover/Libro49.jpg",
        synopsis: "Un grupo de guerreros viaja a través del tiempo para evitar una catástrofe que podría destruir el mundo.",
        reviews: [
            "Un libro épico lleno de magia, acción y emoción.",
            "¡Me encantó! Los personajes son fascinantes."
        ]
    },
    {
        id: 50,
        title: "El corazón de la noche",
        price: 17.80,
        stock: true,
        author: "Valeria Ríos",
        genre: "Terror psicológico",
        publicationDate: "2018-11-08",
        cover: "src/img/booksCover/Libro50.jpg",
        synopsis: "Una joven mujer se enfrenta a sus peores miedos cuando comienza a recibir cartas anónimas que amenazan su vida.",
        reviews: [
            "Una historia psicológica profunda y perturbadora.",
            "Te mantiene en tensión todo el tiempo, ¡horror psicológico de calidad!"
        ]
    },
    {
        id: 51,
        title: "El susurro las estrellas",
        price: 18.99,
        stock: true,
        author: "Clara Montes",
        genre: "Ciencia Ficción",
        publicationDate: "2022-08-15",
        cover: "src/img/booksCover/Libro51.jpg",
        synopsis: "Un astronauta descubre un mensaje oculto en las estrellas que podría cambiar el destino de la humanidad.",
        reviews: [
          "Una historia increíblemente envolvente.",
          "Me fascinó la forma en que mezcla ciencia y filosofía."
        ]
    },
    {
        id: 52,
        title: "Los misterios del bosque encantado",
        price: 14.50,
        stock: true,
        author: "Elena Ríos",
        genre: "Fantasía",
        publicationDate: "2021-11-22",
        cover: "src/img/booksCover/Libro52.jpg",
        synopsis: "Una joven exploradora descubre que los árboles susurran antiguas leyendas que solo ella puede entender.",
        reviews: [
          "Hermosa narración, me transportó a otro mundo.",
          "Una historia mágica con personajes entrañables."
        ]
    },
    {
        id: 53,
        title: "El asesino de medianoche",
        price: 19.99,
        stock: false,
        author: "Javier Mendoza",
        genre: "Thriller",
        publicationDate: "2023-02-10",
        cover: "src/img/booksCover/Libro53.jpg",
        synopsis: "Una detective sigue las pistas de un asesino en serie que solo ataca a la medianoche.",
        reviews: [
          "Suspenso puro, no pude soltar el libro.",
          "Un final inesperado y brillante."
        ]
    },
    {
        id: 54,
        title: "El enigma de las pirámides",
        price: 21.00,
        stock: true,
        author: "Roberto Sánchez",
        genre: "Historia",
        publicationDate: "2020-06-18",
        cover: "src/img/booksCover/Libro54.jpg",
        synopsis: "Una arqueóloga descubre un manuscrito que podría cambiar la historia del Antiguo Egipto.",
        reviews: [
          "Me encantó, muy bien documentado.",
          "Perfecto para amantes de la historia y el misterio."
        ]
    },
    {
        id: 55,
        title: "Caminos cruzados",
        price: 16.75,
        stock: true,
        author: "Sofía Ramírez",
        genre: "Romance",
        publicationDate: "2019-09-25",
        cover: "src/img/booksCover/Libro55.jpg",
        synopsis: "Dos desconocidos con vidas completamente diferentes encuentran el amor en circunstancias inesperadas.",
        reviews: [
          "Una historia de amor preciosa y conmovedora.",
          "Me hizo llorar y sonreír al mismo tiempo."
        ]
    },
    {
        id: 56,
        title: "El último refugio",
        price: 17.80,
        stock: false,
        author: "Federico Larraín",
        genre: "Distopía",
        publicationDate: "2021-12-05",
        cover: "src/img/booksCover/Libro56.jpg",
        synopsis: "En un mundo devastado, un grupo de supervivientes busca el último refugio seguro.",
        reviews: [
          "Muy realista y aterrador, me dejó pensando.",
          "Un libro que te atrapa desde la primera página."
        ]
    },
    {
        id: 57,
        title: "Códigos ocultos",
        price: 22.30,
        stock: true,
        author: "Alejandro Núñez",
        genre: "Misterio",
        publicationDate: "2023-04-01",
        cover: "src/img/booksCover/Libro57.jpg",
        synopsis: "Un profesor universitario descubre un código secreto en antiguos manuscritos medievales.",
        reviews: [
          "Me recordó a El Código Da Vinci, fascinante.",
          "Intrigante de principio a fin."
        ]
    },
    {
        id: 58,
        title: "Los guardianes del tiempo",
        price: 20.50,
        stock: true,
        author: "Gabriela Torres",
        genre: "Aventura",
        publicationDate: "2022-10-15",
        cover: "src/img/booksCover/Libro58.jpg",
        synopsis: "Un grupo de exploradores encuentra un portal que los transporta a distintas épocas de la historia.",
        reviews: [
          "Me encantó la mezcla de historia y aventura.",
          "Increíble viaje en el tiempo, muy bien escrito."
        ]
    },
    {
        id: 59,
        title: "En busca de la verdad",
        price: 13.99,
        stock: false,
        author: "Patricia Jiménez",
        genre: "Drama",
        publicationDate: "2018-07-30",
        cover: "src/img/booksCover/Libro59.jpg",
        synopsis: "Una periodista investiga un escándalo de corrupción que podría costarle la vida.",
        reviews: [
          "Historia impactante y muy bien narrada.",
          "Me mantuvo enganchado hasta la última página."
        ]
    }, 
    {
        id: 60,
        title: "El laboratorio perdido",
        price: 18.25,
        stock: true,
        author: "Carlos Valverde",
        genre: "Ciencia Ficción",
        publicationDate: "2023-01-11",
        cover: "src/img/booksCover/Libro60.jpg",
        synopsis: "Un científico descubre una fórmula que podría cambiar el destino de la humanidad.",
        reviews: [
          "Un thriller científico fascinante.",
          "Muy bien documentado, una historia que te hace pensar."
        ]
    },
    {
        id: 61,
        title: "Las sombras del pasado",
        price: 15.99,
        stock: true,
        author: "Mariano Ledesma",
        genre: "Novela Negra",
        publicationDate: "2022-03-22",
        cover: "src/img/booksCover/Libro61.jpg",
        synopsis: "Un expolicía retirado debe enfrentar su pasado cuando un antiguo caso resurge con pistas nuevas.",
        reviews: [
          "Intrigante y oscura, con giros sorprendentes.",
          "Un thriller clásico con un protagonista complejo."
        ]
    },
    {
        id: 62,
        title: "El diario de un viajero del tiempo",
        price: 19.50,
        stock: false,
        author: "Luis Castañeda",
        genre: "Steampunk",
        publicationDate: "2021-08-10",
        cover: "src/img/booksCover/Libro62.jpg",
        synopsis: "Un inventor victoriano crea una máquina del tiempo y registra sus viajes en un diario lleno de misterios.",
        reviews: [
          "La ambientación steampunk es increíble.",
          "Me encantó la mezcla de ciencia y aventura."
        ]
    },
    {
        id: 63,
        title: "Bajo el océano infinito",
        price: 22.75,
        stock: true,
        author: "Camila Ortega",
        genre: "Aventura Submarina",
        publicationDate: "2020-06-05",
        cover: "src/img/booksCover/Libro63.jpg",
        synopsis: "Una expedición científica encuentra restos de una civilización perdida en las profundidades del océano.",
        reviews: [
          "Fascinante, sentí que estaba buceando junto a los protagonistas.",
          "Una historia emocionante y llena de misterio."
        ]
    },
    {
        id: 64,
        title: "Secretos en la mansión",
        price: 17.90,
        stock: true,
        author: "Elena Fernández",
        genre: "Gótico",
        publicationDate: "2023-02-14",
        cover: "src/img/booksCover/Libro64.jpg",
        synopsis: "Una joven hereda una mansión en ruinas y descubre los oscuros secretos que esconde.",
        reviews: [
          "Una novela gótica con una atmósfera inquietante.",
          "Suspenso y horror sutil en su máxima expresión."
        ]
    },
    {
        id: 65,
        title: "El renacimiento del dragón",
        price: 24.00,
        stock: false,
        author: "Martín Salazar",
        genre: "Alta Fantasía",
        publicationDate: "2019-12-20",
        cover: "src/img/booksCover/Libro65.jpg",
        synopsis: "Un joven guerrero es elegido para despertar a un antiguo dragón y salvar su reino de la destrucción.",
        reviews: [
          "Una épica fantasía con un mundo increíblemente detallado.",
          "Personajes memorables y una trama apasionante."
        ]
    },
    {
        id: 66,
        title: "Los susurros del bosque",
        price: 16.99,
        stock: true,
        author: "Nora Beltrán",
        genre: "Realismo Mágico",
        publicationDate: "2022-09-15",
        cover: "src/img/booksCover/Libro66.jpg",
        synopsis: "En un pequeño pueblo, los árboles susurran secretos a quienes están dispuestos a escuchar.",
        reviews: [
          "Hermosa prosa y una historia conmovedora.",
          "Un cuento lleno de magia y poesía."
        ]
    },
    {
        id: 67,
        title: "Historias de la vieja taberna",
        price: 14.50,
        stock: true,
        author: "Ramón Esquivel",
        genre: "Cuentos Cortos",
        publicationDate: "2021-07-05",
        cover: "src/img/booksCover/Libro67.jpg",
        synopsis: "Una serie de cuentos narrados por los clientes de una taberna antigua donde cada historia es más extraña que la anterior.",
        reviews: [
          "Cada cuento es una pequeña joya literaria.",
          "Entretenido y perfecto para leer en pequeñas dosis."
        ]
    }, 
    {
        id: 68,
        title: "Las melodías del viento",
        price: 18.20,
        stock: false,
        author: "Isabela Contreras",
        genre: "Poesía",
        publicationDate: "2020-11-03",
        cover: "src/img/booksCover/Libro68.jpg",
        synopsis: "Una colección de poemas inspirados en la naturaleza y el paso del tiempo.",
        reviews: [
          "Versos hermosos que llegan al alma.",
          "Cada poema es un susurro del viento."
        ]
    },
    {
        id: 69,
        title: "El exilio de los dioses",
        price: 21.99,
        stock: true,
        author: "Fernando Rojas",
        genre: "Mitología",
        publicationDate: "2018-10-30",
        cover: "src/img/booksCover/Libro69.jpg",
        synopsis: "Los dioses han sido desterrados de sus reinos y deben aprender a vivir entre los humanos.",
        reviews: [
          "Un relato mitológico moderno y emocionante.",
          "Fascinante reinterpretación de los mitos clásicos."
        ]
    },
    {
        id: 70,
        title: "Los dioses del Olimpo",
        price: 19.99,
        stock: true,
        author: "María del Mar Rodríguez",
        genre: "Mitología Griega",
        publicationDate: "2024-03-10",
        cover: "src/img/booksCover/Libro70.jpg",
        synopsis: "Un fascinante recorrido por las historias, poderes y leyendas de los dioses que habitan el Monte Olimpo, desde Zeus hasta Atenea.",
        reviews: [
          "Una obra que revive los mitos clásicos de manera accesible y emocionante.",
          "Una mirada profunda a los dioses griegos y sus increíbles relatos."
        ]
    }
]

//GetAllBooks

export const GetAllBooks = () => {
    return books;
}