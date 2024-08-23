const mensajes = [
{
    name: "Hola",
    description: "Llenar este contenido con el hito"
},
{
    name: "Hola",
    description: "Llenar este contenido con el hito"
},
{
    name: "Hola",
    description: "Llenar este contenido con el hito"
}, 
{
    name: "Hola",
    description: "Llenar este contenido con el hito"
}, 
{
    name: "Hola",
    description: "Llenar este contenido con el hito"
}, 
{
    name: "Hola",
    description: "Llenar este contenido con el hito"
}, 
{
    name: "Hola",
    description: "Llenar este contenido con el hito"
}, 
{
    name: "Hola",
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
    if (element.offsetTop < 300)
        element.classList.add('_show')
})

window.addEventListener('scroll', e => {
    var scroll = document.documentElement.scrollTop
    var items = document.querySelectorAll(".child")
    items.forEach(elem => {
        if (elem.offsetTop - window.innerHeight/2 < scroll) {
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        } else {
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }

    })
})