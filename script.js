function pesquisar() {
    var loc = document.getElementById('locinicial')
    var dest = document.getElementById('destino')

    if (loc.value.length == '' || dest.value == '') {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }

}
