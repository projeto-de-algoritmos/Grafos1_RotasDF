function pesquisar() {
    var loc = document.getElementById('locinicial')
    var dest = document.getElementById('destino')

    if (dest.value == loc.value) {
        document.getElementById("destino").onclick = function() {
            dest.remove(i);
        };
    }

    if (loc.value.length == '' || dest.value == '') {
        window.alert('[ERROR] Não é possível pesquisar campos vazios. Verifique os dados e tente novamente!')
    } else {
        document.getElementById('rotaPesquisada').innerHTML = 'As rota selecionada passa pelas seguintes cidades: ';
    }

}