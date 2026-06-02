const numeros = [
    67, 
    42, 
    69, 
    13, 
    22,
    90,
    45,
    88
];
//rodar o map gerando um novo array com o dobro dos numeros do original
console.log(`Array original: ${numeros}`);
const numerosDobro = numeros.map((num)=>{
    return num * 2;
});
console.log('Array modificado');
console.log(numerosDobro);


//exiba os valores do array dobro no console utilizando o forEach
let textoResultado = "";
numerosDobro.forEach( (num)=>{
    textoResultado += `${num} |`;
});

textoResultado= textoResultado.substring(0, textoResultado.length -2);
console.log(textoResultado);