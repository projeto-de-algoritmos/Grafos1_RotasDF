function pesquisar() {
    var loc = document.getElementById('locinicial')
    var dest = document.getElementById('destino')

    if (loc.value.length == '' || dest.value == '') {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }

    if(hora >= 0 && hora < 12) {
        img.src = 'manhas.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tardes.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noites.jpg'
        document.body.style.background = '#191970'
    }
}
