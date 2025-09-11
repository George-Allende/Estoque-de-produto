let produtos = []
let preco = []
let quantidade = []
let valorTotal = []

function sumir() {
    document.getElementById("corpo").classList.add('hidden')
    document.getElementById("aparecer").classList.remove('hidden')
}

function aparecer() {
    document.getElementById("corpo").classList.remove('hidden')
    document.getElementById("sumir").classList.remove('hidden')
    document.getElementById("aparecer").classList.add('hidden')
}



function cadastrar() {

    


}
for (let i = 0; i < nomes.length ; i++) {
    const linha = document.createElement("tr")
    linha.innerHTML = `  
        <td>${produtos[i]}</td> 
        <td>${preco[i]}</td> 
        <td>${quantidade[i]}</td> 
        <td>${valorTotal[i]}</td>      
    `
    corpo.appendChild(linha)

}