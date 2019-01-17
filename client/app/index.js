var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos); //verificando conteudo do array

//precisamos de  tbody, pois ele à a tr vamos construir
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

    //cancelando a submissão do formulario
    event.preventDefault();

    //substituindo o alert pelo novo código
    var tr = document.createElement('tr');

    campos.forEach(function(campo){
        
        //criar uma td sem informações
        var td = document.createElement('td');

        //atribuir o vaçor do campo à td
        td.textContent = campo.value;

        //adicionar a td na tr
        tr.appendChild(td);
    });

    //nova td que armazenara o volume da negociacao
    var tdVolume = document.createElement('td');

    //as posicoes 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;

    //adicionando a td que faltava à tr
    tr.appendChild(tdVolume);

    //adicionando a tr
    tbody.appendChild(tr);

    //limpa o campo da data
    campos[0].value = '';

    //limpa o campo da quantidade
    campos[1].value = '1';

    //limpa o campo do valor
    campos[2].value = '0';

    //foca no campo da data
    campos[0].focus();
    
});

