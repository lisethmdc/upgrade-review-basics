const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let comedy = []
let adventure = []
let action =  []
let thriller = []
let animation = []

//INCLUDES

for (var result of movies) {
    if (result.categories.includes('comedia')) {
        comedy.push(result.title)
    } 
    if (result.categories.includes('aventura')) {
        adventure.push(result.title)
    }
    if (result.categories.includes('acción')) {
        action.push(result.title)
    }
    if (result.categories.includes('thriller')) {
        thriller.push(result.title)
    }
    if (result.categories.includes('animación')) {
        animation.push(result.title)
    }
}

console.log('Películas de comedia: ' + comedy)
console.log('Películas de aventura: ' + adventure)
console.log('Películas de acción: ' + action)
console.log('Películas en la categoría thriller: ' + thriller)
console.log('Películas de animación: ' + animation)