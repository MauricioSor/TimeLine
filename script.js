const mensajes = [
    {
        name: "1950s: Nacimiento de la programación ",
        description: "Es un hito crucial en la historia de la ingeniería de software, ya que durante este periodo se desarrollaron los primeros lenguajes de programación y herramientas que hicieron posible la creación de software de manera más eficiente y efectiva."
    },
    {
        name: "1960s: Formalización y Crisis del software",
        description: "Fue un periodo crucial en la evolución de la ingeniería de software, caracterizado por la formalización de métodos de desarrollo y el surgimiento de la Crisis del software. Estos eventos marcaron un punto de inflexión en la manera en que se abordaba el desarrollo de software, resaltando la necesidad de prácticas más disciplinadas y estructuradas"
    },
    {
        name: "1970s: Estandarización y Métodos de Desarrollo",
        description: "La década de 1970 fue un periodo de consolidación en la ingeniería de software, marcado por la estandarización de lenguajes y herramientas y el surgimiento de métodos de desarrollo más estructurados. Este fue un momento clave en el que la industria comenzó a adoptar enfoques más sistemáticos y disciplinados para el desarrollo de software, estableciendo las bases para las prácticas modernas"
    },
    {
        name: "1980s: Orientación a Objetos y Herramientas CASE",
        description: "La década de 1980 fue un periodo de innovación y consolidación en la ingeniería de software, caracterizado por la adopción generalizada de la programación orientada a objetos (OOP) y el desarrollo de herramientas CASE. Estos avances transformaron la manera en que se diseñaba, desarrolla y gestiona el software, introduciendo conceptos y herramientas que siguen siendo fundamentales en la industria hoy en dia"
    },
    {
        name: "1990s: Internet y Software Abierto",
        description: "La década de 1990 fue un período revolucionario en la historia de la ingeniería de software, marcada por la explosión de Internet y el crecimiento del movimiento de software abierto. Estos avances no sólo transformaron la manera en que se desarrollaba y distribuía el software, sino que también cambiaron profundamente la forma en que las personas se conectaban y trabajaban con la tecnología."
    },
    {
        name: "2000s: Agilidad y Servicios Web",
        description: "La década de 2000 fue un período de gran innovación y cambio en la ingeniería de software, caracterizado por la adopción generalizada de metodologías ágiles y la creciente importancia de los servicios web. Estos desarrollos redefinieron cómo se planificaba, desarrollaba y entregaba el software, mejorando la capacidad de respuesta a las necesidades del mercado y facilitando la integración de sistemas a gran escala"
    },
    {
        name: "2010s: DevOps, Microservicios y AI",
        description: "La década de 2010 fue un período crucial para la ingeniería de software, marcado por la convergencia de prácticas de DevOps, la adopción masiva de microservicios y el crecimiento exponencial de la inteligencia artificial (AI). Estos desarrollos no solo transformaron la manera en que se construye y despliega software, sino que también ampliaron las capacidades de las aplicaciones, haciéndolas más inteligentes y adaptativas."
    },
    , {
        name: "2020s: Software como Infraestructura Global",
        description: "En la década de 2020, el software ha evolucionado hasta convertirse en la columna vertebral de la infraestructura global, penetrando prácticamente en todos los aspectos de la vida moderna. Este hito refleja cómo el software no solo ha transformado industrias enteras, sino que también ha redefinido la manera en que vivimos, trabajamos y nos comunicamos, consolidándose como un componente esencial en la economía y la sociedad"
    },
    
]


var html = "";
mensajes.forEach(e => {
    html += "<div class='child'><div class='content'><h4>" + e.name + "</h4><p>" + e.description + "</p></div></div>"
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