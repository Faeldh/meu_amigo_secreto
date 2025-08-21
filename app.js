
//Varial que receberar os nomes dos amigos(Do Tipo array)
let amigos = [];
//Fução que vai receber o nomes
function adcionarAmigo(){
   //Variavel que recebe os nomes 
    let input = document.querySelector('#nomeAmigos');
    let nome = input.value.trim();
    if(nome){
        //Adiciona o nome no array amigos
       amigos.push(nome); 
       //Limpa o input
       input.value = '';
       console.log(amigos);
       alert("Adcionado com sucesso!");
    }else{
        alert("Por favor, digite um nome válido.");
    }
    
    
}
