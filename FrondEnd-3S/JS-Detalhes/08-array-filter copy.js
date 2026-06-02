const numeros = [1, 2, 3, 4, 5,20, 30, 40, 50];
const numeroEncontrado = numeros.filter((n)=>{
    return n == 20;
});

const nomes = [
    "Walyson", 
    "Davi", 
    "Edu", 
    "Gabriel", 
    "Eloysa", 
    "James", 
    "Pedro",
    "Nathan",
    "Matheus",
    "Livia",
    "Amy"
]
// pessoasLegais = nomes.filter((nome)=>{
//     return nome.length <= 3 || nome.length >= 6;
// });

pessoasLetraA = nomes.filter((nome)=>{
    const primeiraLetra = nome.substring(0,1);
    return nome.length == "E" || primeiraLetra == "A";
});
console.log(pessoasLetraA);