//Contante que pega o botao adiconarAmigos e fixa na variavel adcionar amigos
const adcionarAmigo = document.querySelector('#adcionarAmigo');
//Varial que receberar os nomes dos amigos(Do Tipo array)
let amigos = [];
//Fução que vai receber o nomes
function adcionarAmigo(){
   //Variavel que recebe os nomes 
    let input = document.querySelector('#nomeAmigos');
    let nome = input.value.trim();
    amigos.push(nome);
    console.log(amigos)
}


//def nomeAmigod()
