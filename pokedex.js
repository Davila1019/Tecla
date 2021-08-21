/*async function getPokemon(){
    let url 
}*/

let miPromesa = new Promise((r,re) => {
    setTimeout( () => {
        r("OK")
    }, 1000)
})

function imprimir(data){
    console.log(data)
}

function inicio(call){
    miPromesa.then(r => {
        console.log("Obtubimos una respuesta")
    }).catch(error => {
        console.error(error)
    })

    if (typeof call === 'function') {
        call("Es una función")
    } else {
        console.log("Inicio esta corriedno")
    }
}

inicio(imprimir);