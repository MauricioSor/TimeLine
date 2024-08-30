const mensajes = [
 
    {
        name: "1950s: Los Primeros Lenguajes de Programación ",
        description: "La década de 1950 fue un período crucial en la historia del software, marcado por el desarrollo de los primeros lenguajes de programación de alto nivel. Estos lenguajes permitieron a los programadores escribir instrucciones en un formato más cercano al lenguaje humano, en lugar de utilizar directamente el lenguaje de máquina, que era difícil de manejar y propenso a errores. Este avance hizo que la programación fuera más accesible y facilitó el desarrollo de aplicaciones más complejas. De estos lenguajes destacaban FORTRAN en 1957 y LISP en 1958  "
    },
    {
        name: "1960s - Sistemas Operativos y Expansión de Lenguajes",
        description: "La década de 1960 fue caracterizado por la consolidación de los sistemas operativos y la expansión de lenguajes de programación que definirían la era moderna del software. Durante estos años, los sistemas operativos evolucionaron para gestionar eficientemente los recursos de hardware y facilitar el desarrollo de software, mientras que los lenguajes de programación se diversificaron y expandieron para atender a diferentes necesidades de la industria y la academia.  "
    },
    {
        name: "1970s - Bases de Datos y Software Empresarial",
        description: "La década de 1970 fue un periodo de de gran innovación en la informática, marcado por la introducción y expansión de sistemas de bases de datos relacionales y el desarrollo de software empresarial. Estos avances transformaron cómo las organizaciones almacenaban, accedían y gestionaban grandes cantidades de datos, y cómo utilizaban el software para automatizar y optimizar procesos comerciales. Estos avances no solo mejoraron la eficiencia interna de las empresas, sino que también sentaron las bases para la transformación digital que definiría las siguientes décadas."
    },
    {
        name: "1980s - PC y Software Comercial",
        description: "Esta década estuvo marcada por la popularización de la computadora personal (PC) y el surgimiento de la industria del software comercial. La PC se convirtió en una herramienta cotidiana en hogares y oficinas, mientras que el software comercial surgió como una industria clave que impulsaría la economía global en las décadas siguientes. Estos avances no solo hicieron que la tecnología fuera más accesible, sino que también establecieron las bases para la era digital moderna. "
    },
    {
        name: "1990s - La Era de Internet",
        description: "Durante estos años, Internet pasó de ser una herramienta utilizada principalmente por académicos y militares a convertirse en una red global accesible para el público en general.Estos desarrollos no solo cambiaron la forma en que las personas se conectan y se comunican, sino que también establecieron las bases para la economía digital y la sociedad en red del siglo XXI. De este hito destacamos: World Wide Web(WWW)-1991, permitió la creación y navegación de páginas web interconectadas mediante hipervínculos, haciendo que la informacion en internet fuera fácilmente accesible."
    },
    {
        name: "2000s - Software de Código Abierto y Móvil",
        description: "El movimiento de software de código abierto, que había comenzado en las décadas anteriores, se consolidó en los años 2000. El software de código abierto es aquel cuyo código fuente está disponible para que cualquiera lo use, modifique y distribuya libremente. Este modelo contrastaba con el software propietario, donde el código fuente era cerrado y controlado por una sola empresa. La década de 2000 también vio el surgimiento del software móvil como una fuerza dominante, impulsada por la rápida adopción de teléfonos inteligentes y dispositivos móviles. El software móvil transformó la forma en que las personas acceden a la información, se comunican y realizan tareas diarias. De este hito destacamos: Linux, Firefox,Git, Android, y el lanzamiento de IPhone"
    },
    {
        name: "2010s - La Nube y la Inteligencia Artificial",
        description: "Esta década de 2010 fue marcada por la adopción masiva de la computación en la nube y los avances exponenciales en inteligencia artificial (IA). La computación en la nube se refiere al uso de servidores remotos en Internet para almacenar, gestionar y procesar datos, en lugar de utilizar servidores locales o computadoras personales. La década de 2010 fue testigo de avances significativos en inteligencia artificial (IA) y machine learning (ML), impulsados por el aumento en la disponibilidad de datos, la mejora en el hardware (especialmente GPUs), y el desarrollo de nuevos algoritmos. De esta decada se destaca, de parte de computación en la nube: AWS,Microsoft Azure y Google Cloud Platform. De parte de la inteligencia artificial se destaca: Deep Learning, Asistentes Virtuales, IA en la Medicina, Autos Autónomos"
    },
    , {
        name: "2020s - Automatización y Machine Learning",
        description: "La década de 2020 ha sido testigo de una aceleración en la adopción de la automatización y el machine learning (ML) en una amplia gama de industrias. Estos avances están redefiniendo el panorama tecnológico, impulsando la eficiencia, la innovación y la personalización a niveles sin precedentes.La automatización inteligente se refiere al uso de tecnologías avanzadas, como la inteligencia artificial (IA), el machine learning y la robótica, para automatizar tareas complejas que anteriormente requerían intervención humana. A diferencia de la automatización tradicional, que se basa en reglas predefinidas, la automatización inteligente utiliza capacidades cognitivas para aprender y adaptarse a diferentes situaciones.Machine learning, un subcampo de la inteligencia artificial, ha avanzado de manera significativa en la década de 2020, con modelos cada vez más potentes que están siendo utilizados en una variedad de aplicaciones. Desde la personalización hasta la predicción, el ML se ha integrado en prácticamente todos los aspectos de la tecnología moderna."
    },
    {
        name: "2020s: Software como Infraestructura Global",
        description: "En la década de 2020, el software ha evolucionado hasta convertirse en la columna vertebral de la infraestructura global, penetrando prácticamente en todos los aspectos de la vida moderna. Este hito refleja cómo el software no solo ha transformado industrias enteras, sino que también ha redefinido la manera en que vivimos, trabajamos y nos comunicamos, consolidándose como un componente esencial en la economía y la sociedad"
    },
    
]


var html = "";
mensajes.forEach(e => {
    html += "<div class='child'><div class='content'><h4 class='fw-bold text-center'>" + e.name + "</h4><p>" + e.description + "</p></div></div>"
})
timeline.innerHTML = html

var _items = document.querySelectorAll(".child")
_items.forEach(element => {
    if (element.offsetTop < 200)
        element.classList.add('_show')
})

window.addEventListener('scroll', e => {
    var scroll = document.documentElement.scrollTop-100
    var items = document.querySelectorAll(".child")
    items.forEach(elem => {
        if (elem.offsetTop - window.innerHeight / 2 < scroll) {
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        } else {
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }

    })
})