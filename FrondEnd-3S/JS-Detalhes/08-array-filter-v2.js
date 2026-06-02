const produtos = [
    {
    descricao: "Camisa Pollo",
    cor: "verde",
    preco:49.00,
    perfil: "M",
    quantidade:100,
    promocao: true 
},
    {
    descricao: "Camisa Pollo",
    cor: "vermelho",
    preco:69.00,
    perfil: "F",
    quantidade:10,
    promocao:false
},
    {
    descricao: "Camisa Pollo",
    cor: "amarelo",
    preco:69.00,
    perfil: "M",
    quantidade:15 ,
    promocao: false
},
    {
    descricao: "Camisa Pollo",
    cor: "roxo",
    preco:49.00,
    perfil: "F",
    quantidade:5,
    promocao: true 
},
]
// const nomesFiltrados = produtos.filter((F)=>{
//     return F.perfil == "F" 
// });

let qtdPromocao = 0;
const produtosPromocao = produtos.filter((p)=>{
    if(p.promocao == true){
        qtdPromocao+= p.quantidade;
    }
    return p.promocao == true;
});
// const nomesFiltrados = produtos.filter((produto)=>{
//     return produto.promocao == true;
// });
console.log(qtdPromocao);