let searchButton;


$(document).ready(function(){
    searchButton = $("#searchBtn");

    searchButton.click(pesquisar);
    
})



function pesquisar() {

    var loc = document.getElementById('locinicial')
    var dest = document.getElementById('destino')

    for (i = loc.value; i < dest.length; i++) {
        document.getElementById("destino").onclick = function() {
            dest.remove(i);
        };
    }

    if (loc.value == '' || dest.value == '') {
        window.alert('[ERROR] Não é possível pesquisar campos vazios. Verifique os dados e tente novamente!')
    } else if (dest.value == loc.value) {
        window.alert('[ERROR] Não é possível pesquisar campos iguais. Verifique os dados e tente novamente!')
    } else {
        document.getElementById('rotaPesquisada').innerHTML = 'A rota selecionada passa pelas seguintes cidades: ';
    }

    let dados = {	
        origem : "Taguatinga", 
        destino : "Sobradinho"
    };
    fetch('http://localhost:8000/', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
    .then(function(response) {
        console.log(response);
    });
}

