let searchButton;


$(document).ready(function(){
    searchButton = $("#searchBtn");

    searchButton.click(pesquisar);
    
})



function pesquisar() {

    var loc = document.getElementById('origem')
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

    var $origem = $('#origem');
    var $destino = $('#destino');

    console.log($origem);
    let data = {	
        origem : $origem.value, 
        destino : $destino.value
    };
    let url = "http://localhost:8000/"
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json",
        success: (data)=>{
            $.each(data, (i, value) => {
                
            })
        }
      });

}

