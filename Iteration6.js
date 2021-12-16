let ejemplo = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap (array, i1, i2) {
    [array[i1], array[i2]] = [array[i2], array[i1]]
    console.log(array)
}

swap(ejemplo, 3, 1)
