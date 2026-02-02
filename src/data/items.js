// Datos de los gatos en adopción
// Las imágenes están en /public/images

const cats = [
  {
    id: 1,
    name: "Milo",
    age: "3 meses",
    location: "Valencia",
    image: "/images/cat1.webp",
    description: "Activo, curioso y siempre buscando juego.",
    descriptionLong: "Milo es un gatito lleno de energía y curiosidad. Le encanta explorar su entorno y jugar con todo lo que encuentra a su paso. Es muy sociable y disfruta de la compañía tanto de humanos como de otros animales. Ideal para familias con niños o personas activas que busquen un compañero de aventuras.",
    likes: 5,

    adoptionStatus: {
    sterilized: false,
    vaccinated: true,
    dewormed: true,
    foster: true,
  }
  },
  {
    id: 2,
    name: "Nube",
    age: "2 meses",
    location: "Castellón",
    image: "/images/cat9.webp",
    description: "Dulce, delicada y le encanta explorar con calma.",
    descriptionLong: "Nube es una gatita tranquila y cariñosa que disfruta de los momentos de calma y afecto. Le gusta explorar su entorno a su propio ritmo, observando todo con atención antes de aventurarse. Es perfecta para personas que buscan una mascota que aporte serenidad y ternura a su hogar.",
    likes: 3,

    adoptionStatus: {
    sterilized: false,
    vaccinated: false,
    dewormed: false,
    foster: false,
  }
  },
  {
    id: 3,
    name: "Anubis",
    age: "4 años",
    location: "Sagunto",
    image: "/images/cat3.webp",
    description: "Sereno, observador y un gran compañero de sofá.",
    descriptionLong: "Anubis es un gato adulto con una personalidad calmada y sabia. Le encanta pasar tiempo acurrucado en el sofá, observando su entorno con ojos atentos. Es un compañero leal que disfruta de la tranquilidad del hogar y de la compañía humana. Ideal para personas mayores o aquellos que buscan un amigo tranquilo.",
    likes: 8,

    adoptionStatus: {
    sterilized: true,
    vaccinated: true,
    dewormed: true,
    foster: true,
  }
  },
  {
    id: 4,
    name: "Luna",
    age: "2 años",
    location: "Almassora",
    image: "/images/cat8.webp",
    description: "Independiente, elegante y muy atenta a todo.",
    descriptionLong: "Luna es una gata con una personalidad fuerte e independiente. Le gusta explorar y observar todo lo que sucede a su alrededor, siempre con un aire de elegancia. A pesar de su independencia, sabe cuándo acercarse para recibir cariño y atención. Perfecta para personas que valoran la autonomía pero también disfrutan de la compañía felina.",
    likes: 2,

    adoptionStatus: {
    sterilized: true,
    vaccinated: false,
    dewormed: true,
    foster: true,
  }
  },

    {
    id: 5,
    name: "Mia",
    age: "3 años",
    location: "Valencia",
    image: "/images/cat6.webp",
    description: "Expresiva, inteligente y siempre “conversando”.",
    descriptionLong: "Mia es una gata muy comunicativa que utiliza una variedad de maullidos y gestos para expresar sus necesidades y emociones. Es inteligente y aprende rápidamente, lo que la hace ideal para hogares que disfrutan interactuando con sus mascotas. Le encanta participar en actividades y juegos, y siempre está lista para una buena charla.",
    likes: 5,

    adoptionStatus: {
    sterilized: true,
    vaccinated: false,
    dewormed: true,
    foster: false,
  }
  },
    {
    id: 6,
    name: "Sombra",
    age: "6 meses",
    location: "Alicante",
    image: "/images/cat7.webp",
    description: "Tímida al principio, pero muy dulce cuando confía.",
    descriptionLong: "Sombra es una gatita que puede mostrarse reservada al principio, pero una vez que se siente segura, revela su naturaleza dulce y cariñosa. Le encanta acurrucarse y recibir mimos, y es muy leal a quienes la cuidan. Ideal para personas pacientes que estén dispuestas a ganarse su confianza y ofrecerle un hogar lleno de amor.",
    likes: 7,

    adoptionStatus: {
    sterilized: false,
    vaccinated: false,
    dewormed: true,
    foster: true,
  }
  },
];

export default cats;
