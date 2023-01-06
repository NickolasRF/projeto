function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    /*if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    } or..toggle(alterna)*/

    /*pegar a tag img*/
    const img = document.querySelector("#profile img")
    
    /*substituir a imagem*/
    if(html.classList.contains('light')) {
        /*se tiver no light mode, adicionar a imagem light*/
        img.setAttribute('src', './assets/avatar-white.png')
        img.setAttribute('alt', '<Foto de nickolas rindo com bigode, cavanhaque e de camiseta branca com fundo borrado>')
    }else {
        /*se tiver sem light mode, manter a imagem normal*/
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', '<Foto de nickolas serio com bigode, cavanhaque e de camiseta preta com fundo borrado>')
    }

}