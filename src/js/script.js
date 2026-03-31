// operadores:
// >
// <
// <=
// >=
// *
// =
// ==
// ===
/// !=


//

//function newFunction() {
//    const p = 1000;
 //   const v = 200;
  //  const precoFinal = (p - v);
 //   console.log(`O preço final com desconto é de: ${precoFinal}`);
//
  //  const usuarioLogado = 1;
    //const token = 100;
    //const transacaoAutorizada = usuarioLogado === 1 && token >= 10;
    //console.log("Transaçao autorizada com sucesso", transacaoAutorizada);


    //idade = 18;
    //if (idade == 18) {
      //  console.log("Voce é maior de idade");
    //} else {
      //  console.log("Voce nao é maior de idade");
//
//
  //  }
//}


let times="santos";

switch(times) {
    case "santos":
        console.log("Um time idoso")
        break;
    case "sao paulo":
        console.log("Time Panetone")
        break;
    case "palmeiras":
        console.log("SEM MUNDIAL")
        break; 
    case "corinthians":
        console.log("um time sem idolo")
        break;
    default:
        console.log("tao ruim quanto a seleçao brasileira")      
} 

let salario=100;
let resultado = salario ==100? "Salario Certo":"SalarioErrado"
console.log(resultado)

function verificarParImpar(numero) {
    return numero % 2 === 0 ? "PAR":"IMPAR"
}
console.log(verificarParImpar(4))