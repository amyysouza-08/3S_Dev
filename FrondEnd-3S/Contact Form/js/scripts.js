 async function cadastrarContato(objetoContato) {
    console.log(objetoContato);
    const resposta =  await fetch ("http://localhost:3000/contatos",{
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    } );
    return false;
}



//Função para buscar o endereço 
 async function buscarEndereco(cep) {

    // if (cep.trim().length < 8) {
    //     alert("O CEP deve ter 8 numeros");
    //     return false;
    // }
    try {
        aguardandoCampos();
        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();
        
        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.estado;

         }catch(error){
        console.log(error);
    }
    }


    function aguardandoCampos(){
    document.getElementById("rua").value = "Aguarde...";
    document.getElementById("bairro").value = "Aguarde...";
    document.getElementById("cidade").value = "Aguarde...";
    document.getElementById("estado").value = "Aguarde...";
}

    
   


//Validação do formulário
function validaForm() {

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let numero = document.getElementById("numero").value;
    let ddd = document.getElementById("ddd").value;
    let telefone = document.getElementById("telefone").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let numeroC = document.getElementById("numeroC").value;
    let apto = document.getElementById("apto").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let anotacoes = document.getElementById("anotacoes").value;

    let quantidadeErros = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Nome
    if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
         }
         else{
        reiniciaBorda("nome");
    }

    //Sobrenome 
    if(sobrenome.trim().length == 0){
        formError("sobrenome");
          quantidadeErros++;
        }else{
        reiniciaBorda("sobrenome");
    }


    //Email
    if(email.trim().length == 0){
        formError("email");
        quantidadeErros++;
    }else{
        reiniciaBorda("email");
    }

    //numero
    if(numero.trim().length == 0){
        formError("numero");
        quantidadeErros++;
    }else{
        reiniciaBorda("numero");
    }

    //ddd
    if(ddd.trim().length == 0){
        formError("ddd");
        quantidadeErros++;
     }else{
        reiniciaBorda("ddd");
    }

    //telefone
    if(telefone.trim().length == 0){
        formError("telefone");
        quantidadeErros++;
     }else{
        reiniciaBorda("telefone");
    }
     
    //cep
    if(cep.trim().length == 0){
        formError("cep");
        quantidadeErros++;
    }else{
        reiniciaBorda("cep");
    }

    //rua
    if(rua.trim().length == 0){
        formError("rua");
        quantidadeErros++;
    }else{
        reiniciaBorda("rua");
    }

    //numeroC
    if(numeroC.trim().length == 0){
        formError("numeroC");
        quantidadeErros++;
    }else{
        reiniciaBorda("numeroC");
    }

    //apto
    if(apto.trim().length == 0){
        formError("apto");
        quantidadeErros++;
    }else{
        reiniciaBorda("apto");
    }

    //bairro
    if(bairro.trim().length == 0){
        formError("bairro");
        quantidadeErros++;
    }else{
        reiniciaBorda("bairro");
    }

    //cidade
    if(cidade.trim().length == 0){
        formError("cidade");
        quantidadeErros++;
    }else{
        reiniciaBorda("cidade");
    }

    //estado
    if(estado.trim().length == 0){
        formError("estado");
        quantidadeErros++;
    }else{
        reiniciaBorda("estado");
    }

    //anotacoes
    if(anotacoes.trim().length == 0){
        formError("anotacoes");
        quantidadeErros++;
    }else{
        reiniciaBorda("anotacoes");
    }
    let objetoContato = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        numero: numero,
        ddd: ddd,   
        telefone: telefone,
        cep: cep,
        rua: rua,   
        numeroC: numeroC,
        apto: apto,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        anotacoes: anotacoes
    }

    let cadastro = cadastrarContato(objetoContato);
    reiniciaTodasBordas();

/////////////////////////////////////////////////////////////////////////////////////////
        
    if(quantidadeErros > 0){
        alert("Existem " + quantidadeErros + " erros no formulário!");
        quantidadeErros = 0;
    }else
    alert("Formulário enviado com sucesso!");
    reiniciaTodasBordas();

function formError(idCampo){
    document.getElementById(idCampo).style.borderColor = "2px solid red";
}
function reiniciaBorda(idCampo){
    document.getElementById(idCampo).style.borderColor = "transparent";
}
}
 
