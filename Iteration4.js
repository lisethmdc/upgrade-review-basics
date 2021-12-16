let bugs = ["Caracol", "Mosquito", "Salamandra", "Ajolote"]

function findArrayIndex(array, text) {
    let index = array.findIndex((a) => a === text)
    
    console.log(index)
}

findArrayIndex(bugs, 'Mosquito')
findArrayIndex(bugs, 'Ajolote')
