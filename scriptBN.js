//Pega o id do H1 onde deveria ficar o Bom Dia, Boa Tarde ou Boa Noite
const greetingAUTO = document.getElementById('greeting');

// Cria um novo objeto Date, que representa o momento atual
var dataAtual = new Date();

// Obtém a hora atual
var Atualhora = dataAtual.getHours();
console.log(Atualhora);


if (Atualhora >= 5 && Atualhora < 12) {
    var BOMD = "Bom Dia!"
    greetingAUTO.innerHTML = BOMD;
} else if (Atualhora >= 12 && Atualhora < 18) {
    var BOMT = "Boa Tarde!"
    greetingAUTO.innerHTML = BOMT;
} else {
    var BOMN = "Boa Noite!"
    greetingAUTO.innerHTML = BOMN;
}




