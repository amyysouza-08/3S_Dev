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
let totalPreco=0;
let totalEstoque = produtos.reduce((total, produto) => {
    totalPreco += produto.preco * produto.quantidade;
    return total + produto.quantidade;
}, 0);
console.log(`O valor total do seu estoque é R$ ${totalPreco}`);
console.log(`Voce tem o total de ${totalEstoque} itens em estoque.`);

