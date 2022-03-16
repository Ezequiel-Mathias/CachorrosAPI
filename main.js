'use strict'

const pesquisarRacas = async() =>{
    const url = 'https://dog.ceo/api/breeds/list/all'
    const response = await fetch(url)
    const data = await response.json()
    return Object.keys (data.message)

}

const criarimg = (imagem) =>{
    const img = document.createElement('img')
    img.src = imagem

    return img
}

const pesquisarCachorro = async (raca) =>{
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url)

    const data = await response.json()

    return data
}

const carregarimagens = async () => {
    const container = document.getElementById('imagem-conteiner')

    const raca = document.getElementById('raca').value

    const imagens = await pesquisarCachorro(raca)

    const tagimg = imagens.message.map(criarimg)

    container.replaceChildren(...tagimg) 
}

const carregarRacas = async() => {
    const lista = document.getElementById('lista-racas')
    const racas = await pesquisarRacas()
    lista.innerHTML= `
    
        <option>
            ${racas.join("</option><option>")}
        </otion>
    
    
    `
    

}

document.getElementById('pesquisar').addEventListener('click', carregarimagens)

carregarRacas()

//modal

const abrirModal = () =>{
    document.getElementById('modal-conteiner').classList.add('active')

}

const fecharModal = () =>{
    document.getElementById('modal-conteiner').classList.remove('active')
}




document.getElementById('abrir-modal').addEventListener('click' , abrirModal)
document.getElementById('fechar').addEventListener('click',fecharModal)
document.getElementById('modal-conteiner').addEventListener('click',fecharModal)