//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    let inputAmigo = document.getElementById('amigo');
    let txt = document.getElementById('listaAmigos');
    

    if (amigo.length > 0) {
        listaAmigos.push(amigo);

        console.log(amigo);

        txt.innerHTML += `<li>${amigo}</li>`;

        inputAmigo.value = '';
    } else {
        alert("[ERROR] É necessário digitar o nome do seu amigo!");
    }

}


function sortearAmigo(){
    let valorAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let txtSorteio = document.getElementById('resultado')

    if(listaAmigos.length > 0){
        txtSorteio.innerHTML = `O amigo secreto sorteado é: ${listaAmigos[valorAleatorio]}`
        let txt = document.getElementById('listaAmigos');

        txt.innerHTML = '';
        listaAmigos = []
        
    } else {
        alert('[ERROR] É necessário adicionar os nomes do seu amigo antes de sortear!');
    }

}
