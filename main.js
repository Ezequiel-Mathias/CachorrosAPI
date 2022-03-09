'use strict'


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

    console.log(imagens)
    const tagimg = imagens.message.map(criarimg)

    container.replaceChildren(...tagimg) 
}

document.getElementById('pesquisar').addEventListener('click', carregarimagens)