const mensajes = [
    {
        name: "Hola1",
        description: "Llenar este contenido con el hito"
    },
    {
        name: "Hola2",
        description: "Llenar este contenido con el hito"
    },
    {
        name: "Hola3",
        description: "Llenar este contenido con el hito"
    },
    {
        name: "Hola4",
        description: "Llenar este contenido con el hito"
    },
    {
        name: "Hola5",
        description: "Llenar este contenido con el hito"
    },
    {
        name: "Hola6",
        description: "Llenar este contenido con el hito"
    },
    {
        name: "Hola7",
        description: "Llenar este contenido con el hito"
    },
    , {
        name: "Hola8",
        description: "Llenar este contenido con el hito"
    },
    {
        name: "Hola9",
        description: "Llenar este contenido con el hito"
    },
    {
        name: "Hola10",
        description: "Llenar este contenido con el hito"
    },
    {
        name: "Hola10",
        description: "Llenar este contenido con el hito"
    },
    {
        name: "Hola10",
        description: "Llenar este contenido con el hito"
    }
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