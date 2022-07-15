// Variáveis 

let idade = 32;
let nome = "Rafael";
let estaAprovado = true;
let sobrenome = undefined;

// Objeto

let pessoa = {
// key: value,
   idade: 32,
   nome: "Rafael",
   estaAprovado: true,
   sobrenome: undefined,
}

// Arrays

let familiaIdades = [69, 58, 33, 32, 29];

console.log(familiaIdades.length);
console.log(familiaIdades[2]);

// Functions
// Nomeia-se seguindo o padrão verbo + substantivo, informando o que faz a função

let corSite = "azul";
function resetaCor(cor, tonalidade) {
   corSite = cor + " " + tonalidade;
};

console.log(corSite);
resetaCor("vermelho", "escuro" );
console.log(corSite);

// Tipos de funções
// Realiza uma tarefa e não devolve nada
function dizeNome() {
   console.log("Rafael");
};

dizeNome();

// Realiza uma tarefa e devolve um resultado
function multiplicarPorDois(valor) {
   return valor * 2;
};

console.log(multiplicarPorDois(12));

// Atribuir função dentro de uma variável
let resultado = multiplicarPorDois(14);
console.log(resultado);

// Operadores
// - Aritméticos
// - de Atribuição
// - de Comparação
// - Lógicos
// - Bitwise

// Operadores Aritméticos

// +, -, *, /, **

let valor1 = 36;
let valor2 = 57;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);
console.log(valor1 ** valor2);
 
// exibe primeiro o valor no console e depois realiza o incremento. 
console.log(valor1++);
// exibe valor incrementado acima;
console.log(valor1);
// primeiro realiza o incremento e depois o exibe o valor no console. 
console.log(++valor1);

// Operadores de atribuição
let valorTeclado = 300;
// mesmo que fazer valorTeclado = valorTeclado + valorTeclado;
valorTeclado += valorTeclado;
console.log(valorTeclado);

// Operadores de igualdade

// Igualdade de escrita
console.log(1 === 1);
console.log('1' === 1);

// Igualdade de solta - Não recomendado (pode causar erros na aplicação)
console.log(1 == 1);
console.log('1' == 1);

// Operador ternário
let pontos = 101;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// Operadores lógicos
// Operador e - &&
   // Retorna TRUE se ambos forem true
   let maiorDeIdade = true;
   let carteiraDeTrabalho = true;
   let podeAplicar = maiorDeIdade && carteiraDeTrabalho;
   console.log('pode aplicar: ', podeAplicar);

// Operador ou - ||
   // Retorna TRUE se ao menos um valor for true.
   let maiorDeIdade1 = true;
   let carteiraDeTrabalho1 = false;
   let podeAplicar1 = maiorDeIdade || carteiraDeTrabalho;
   console.log('pode aplicar: ', podeAplicar1);
// Operador negação - ! 
   // Retorna TRUE se o candidato for recusado
   let maiorDeIdade2 = false;
   let carteiraDeTrabalho2 = false;
   let podeAplicar2 = maiorDeIdade || carteiraDeTrabalho;
   let candidatoRecusado = !podeAplicar2
   console.log('candidato recusado: ', candidatoRecusado);

// Comparação entre valores não booleanos
// Utiliza-se o conecito de Falsy & Truthy

// Valores falsy
// undefined, null, 0, '', false, NaN
// Valores Truhty
// Qualquer um que não seja um dos valores Falsy

// As comparações de valores, sempre buscam um valor Truthy para retornar.
// Ex.:
console.log(undefined && true);
console.log(undefined && null); // Como ambos são falsy e utilizamos o operador &&, retorna o primeiro valor
console.log(undefined || null); // Como ambos são falsy e utilizamos o operador ||, retorna o último valor
console.log(0 || 1 || 3); // Nesta caso retorna o primeiro valor Truthy localizado
console.log(null || "string não vazia");
console.log(0 || 12);
console.log("" || true);
console.log(NaN || []);

// Mini Projeto - Trocando valores de variáveis
let a = 'vermelho';
let b = 'azul';

console.log(a); // imprimi 'vermelho'
console.log(b); // imprimi 'azul'

let c = a;
a = b;
b = c;

console.log(a); // imprimi 'azul'
console.log(b); // imprimi 'vermelho'

// If..Else
// Se a hora estiver entre 05:00 e 11:59, exibe 'Bom dia'
// Se a hora estiver entre 12:00 e 17:59, exibe 'Boa tarde'
// Caso contrário exibe 'Boa noite'
let hora = 22;

if (hora > 5 && hora < 12) {
   console.log('Bom dia!');
}else if(hora >= 12 && hora < 18) {
   console.log('Boa tarde!');
} else {
   console.log('Boa noite!');
}

// Switch..case
let permissao; // comum, gerente, diretor
permissao = 'diretor1';

switch (permissao) {
   case 'comum':
      console.log('Usuário comum');
      break;

   case 'gerente':
      console.log('Usuário gerente');
      break;
   
   case 'diretor':
      console.log('Usuário diretor');
      break;
   
   default: 
      console.log('Usuário não reconhecido');
}

// Laços de repetição
// 1. For
for(i = 0; i <= 5; i++) {
   if(i % 2 !== 0) {
      console.log(i);
   }
}

// 2. While (Verifica primeiro e executa depois)
let w = 5;

while(w >= 1) {
   if(w % 2 !== 0) {
      console.log(w);
   }

   w--;
}

// 3. Do..while (Executa primeiro uma vez, antes iniciar o ciclo de verificar e executar)
let a1 = 0;

do {
   console.log(`digitando ${a1} vezes`);
   a1++;
} while (a1 < 10);

// 4. For..in (Feito para operar sobre propriedade de um objeto ou elementos de um array)
const dadosPessoa = {
   nome: 'Rafael',
   sobrenome: 'G. Santana',
   idade: 32,
   profissao: ''
}

for(let item in dadosPessoa) {
   console.log(`${item}: ${dadosPessoa[item]}`)
}

const cores = ['azul', 'verde', 'amarelo', 'vermelho'];
for(let cor in cores) {
   console.log(`${cor}: ${cores[cor]}`)
}

// 5. For..of (Feito para operar sobre propriedade de um objeto ou,principlamente, elementos de um array)
for(let cor of cores) {
   console.log(cor);
}

// Escreva uma função que use 2 números e retorna o maior entre ele

let maiorValor = max(20, 30);
console.log(maiorValor);

function max(num1, num2) {
   if (num1 > num2) {
      console.log('O maior número é o ',num1);
      return num1;
   } else if (num1 < num2) {
      console.log('O maior número é o ',num2);
      return num2;
   } else {
      console.log('Os dois números são iguais.');
      return num1 && num2;
   }
}

// Retornar Fizz, caso tenha um valor de entrada divisível por 3,
// retornar Buzz caso o valor de entrada seja divisivel por 5,
// retornar fizzBuzz se o valor de entrada for divisível por 3 e por 5,
// retornar "entrada" se o valor de entrada não for divisível por 3 e por 5,
// retornar "Não é um número" se o valor de entrada não for número.
const resultado1 = fizzBuzz(15);
console.log(resultado1);

function fizzBuzz(entrada) {
   if (typeof entrada !== 'number')
      return 'Não é um número';
   if (entrada % 3 === 0 && entrada % 5 === 0)
      return 'fizzBuzz';
   if (entrada % 3 === 0)
      return 'Fizz';
   if (entrada % 5 === 0)
      return 'Buzz';
         return entrada;
  }

// Funçao que acrescenta 1 ponto na carteira a cada 5km/h acima do limite de velocidade
// Limite de velocidade 70km/h
// Caso atinja 12 pontos, a carteira é suspendida
// Math.floor(), para arredondar os valores decimais

verificaVelocidade(100.5);

function verificaVelocidade(velocidade) {
   const limiteVelocidade = 70;
   const kmPorPonto = 5;
   if (velocidade <= limiteVelocidade) {
      console.log('Velocidade ok');
   } else {
      const pontos = Math.floor((velocidade - limiteVelocidade) / kmPorPonto);

      if (pontos >= 12) {
         console.log('Carteira suspensa');
      } else {
         console.log('Você levou', pontos,'na carteira.');
      }
   }
}

// Funçao que recebe uma quantidade de valores e retorna se cada valor é par ou ímpar
exibirTipo(10)
function exibirTipo(limite) {
   for(i = 0; i <= limite; i++) {
      if(i % 2 === 0) {
         console.log(i,"PAR");
      } else {
         console.log(i,"ÍMPAR");
      }
   }
}

// Funçao que lê as propriedades de um objeto e exibe somente as propriedades do tipo string
const filme = {
   titulo: "Vingadores",
   ano: 2018,
   diretor: "Fulano",
   personagem: "Thor",
   classificacao: 8
}

exibirString(filme);
function exibirString(obj) {
   for(item in obj) {
      if(typeof obj[item] === "string") {
         console.log(`${item}: ${obj[item]}`);
      }
   }
}

// Funçao que recebe uma quantidade de valores e faz a soma dos números múltiplos de 3 e 5
somaMultiplosDeTresECinco(10);
function somaMultiplosDeTresECinco(limiteParaSomar) {
   let multiplosTres = 0;
   let multiplosCinco = 0;
   for(i=0; i<=limiteParaSomar; i++) {
      if(i % 3 === 0) {
         multiplosTres += i;
      }
      if(i % 5 === 0) {
         multiplosCinco += i;
      }
   }
   console.log(multiplosCinco + multiplosTres)
}

// Obter média escolar a partir de um um array de notas e retornar uma nota
const arrayNotas = [80, 90, 95, 90];
console.log(mediaDoAluno(arrayNotas));

// function mediaDoAluno(notas) {
//    let somaNotas = 0;
//    for(nota of arrayNotas) {
//       somaNotas += nota;
//    }

//    const media = somaNotas/arrayNotas.length;

//    if (media < 50) return "F";
//    if (media < 60) return "E";
//    if (media < 70) return "D";
//    if (media < 80) return "C";
//    if (media < 90) return "B";
//    return "A";
// }

// Aplicamos o conceito de responsabilidade única, separando a função acima, em duas funçoes, onde
// cada uma possui sua própria responsabilidade.
function mediaDoAluno(notas) {
   const media = calcularMedia(notas)

   if (media < 50) return "F";
   if (media < 60) return "E";
   if (media < 70) return "D";
   if (media < 80) return "C";
   if (media < 90) return "B";
   return "A";
}

function calcularMedia(arrayNotas) {
   let somaNotas = 0;
   for(nota of arrayNotas) {
      somaNotas += nota;
   }

   return somaNotas/arrayNotas.length;
}

// Função que exibe a quantidade de asterícos de acordo com a linha. Ex.: linha 1, exibe 1 asterisco,
// linha 2 exibe 2 asteriscos e assim sucessivamente.
exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
   // let linhaExibida = "";
   // for(i=1; i<=linhas; i++) {
   //    linhaExibida += "*";
   //    console.log(linhaExibida);
   // }

   // ou

   for(i=1; i<=linhas; i++) {
      let linhaExibida = "";

      for(linha=0; linha<=i; linha++) {
         linhaExibida += "*";
      }
      console.log(linhaExibida);
   }
}

// Funçao que recebe um número e retorna os que, entre 0 e o número passado, são primos
// Numeros primos, divisível apenas por 1 ou por ele mesmo.
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limiteNumero) {
   for (let numero = 2; numero <= limiteNumero; numero++) {
     
      if(verificaSeEhPrimo(numero)) console.log(numero);
   }
}

function verificaSeEhPrimo(numero) {
   // Inicia no 2 e termina no numero anterior ao limite, isso pq todo numero sempre sera divisivel por 1
   // e por ele mesmo. E no condicional, verificaremos se algum numero divisivel por qualquer outro, 
   // além de 1 e ele mesmo, existe no intervalo de numeros, assim, identificando os que nao sao primos,
   // setando o ehPrimo como false e, no segundo condicional, exibindo os numero que estao com o ehPrimo = true.
   for (let divisor = 2; divisor < numero; divisor++) {
      if(numero % divisor === 0) {
         return false;
      }
      return true;
   }
}

// Factory functions (funçoes de fabrica)
// nome da funçao está em camelCase
function criaCelular(marcaCelular, tamanhoTela, capacidadeBateria){
   return {
      marcaCelular,
      tamanhoTela,
      capacidadeBateria,
      ligar() {
         console.log('Ligando');
      }
   }
}

const celular1 = criaCelular('Zenphone', 5.5, 5000);
console.log(celular1);

// Constructor Functions
// nome da funçao está em Pascal Case
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
   this.marcaCelular = marcaCelular;
   this.tamanhoTela = tamanhoTela;
   this.capacidadeBateria = capacidadeBateria;
   this.ligar = function () {
      console.log("Ligandoooo");
   }
}

const celular2 = new Celular('samsung', 6.0, 5000);
console.log(celular2);

// Natureza de objetos dinamicos
// Podemos acrescentar e excluir propriedades de um objeto já criado
const mouse = {
   cor: 'red',
   marca: 'dell',
}

mouse.velocidade = 5000;
mouse.trocarDPI = function () {
   console.log('trocando DPI');
};
delete mouse.cor;
console.log(mouse);

// Clonando objetos
const celular3 = {
   marcaCelular: 'ASUS',
   capacidadeBateria: 5000,
   ligar: function() {
      console.log('Ligando');
   }
}

// clonando objeto 'celular3' no 'novoCelular' utilizando o Object.assign
// método assign recebe no primeiro parametro o alvo, que é onde que vai o objeto copiado,
// podemos passar novas propriedade no primeiro parametro,
// já no segundo parametro, o objeto que estamos querendo clonar
const novoCelular = Object.assign({
   tamanhoTela: {
      vertical: 155,
      horizontal: 75
   } 
}, celular3);
console.log(novoCelular)

// clonando objeto 'celular3' no 'novoCelular2' utilizando o spread operator.
// Neste caso tbm podemos passar novas propriedades
const novoCelular2 = {...celular3, 
   novaPropriedade: 'ooiiii'
};
console.log(novoCelular2);

// MATH

console.log(Math.random());
console.log(Math.max(1, 2, 3, 4, 5, 6, 7));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7));

// STRING
// Tipo primitivo
const mensagem = " string normal.  ";
// Tipo objeto
const novaMensagem = new String("string do tipo objeto");

console.log('string tipo primitivo: ', typeof mensagem, mensagem);
console.log('string tipo objeto: ', typeof novaMensagem, novaMensagem);
console.log(novaMensagem.length); // retorna quantidades de caracteres da string
console.log(novaMensagem[3]); // retorna o caracter que está localizado na posiçao indicada [3]
console.log(novaMensagem.includes('que')); // retorna true ou false se a string no parametro existe na string analisada
console.log(novaMensagem.includes('não')); // retorna true ou false se a string no parametro existe na string analisada
console.log(novaMensagem.startsWith('string')); // retorna true ou false se a string analisada se inicia com a string passada no parametro
console.log(novaMensagem.startsWith('String')); // retorna true ou false se a string analisada se inicia com a string passada no parametro
console.log(novaMensagem.endsWith('novaMensagem')); // retorna true ou false se a string analisada termina com a string passada no parametro
console.log(novaMensagem.endsWith('')); // retorna true ou false se a string analisada termina com a string passada no parametro
console.log(novaMensagem.endsWith('.')); // retorna true ou false se a string analisada termina com a string passada no parametro
console.log(novaMensagem.indexOf('podemos')); // retorna a posicao em que a string passada no parametro se inicia na string analizada, caso não exista, retorna -1
console.log(novaMensagem.replace('string', 'STRING')); // substitui a string passada no primeiro parametro, pela segunda. Caso a string passada no primeiro parametro não exista na string analisada, a substituiçao não é feita.
console.log(mensagem.trim()); // remove os espaços excedentes no inicio e final da string
console.log(mensagem.split(' ')); // divide a string a partir da informacao passada no parametro 
console.log(mensagem.trim().split(' ')); // remove os espaços e divide a string a partir dos espaços


// TEMPLATE LITERALS

const mensagemString = 
   'Olá Fulano, obrigado por se increver no canal!\n\nPara acompanhar os vídeos, ' +
   'não se esqueça de ativar o \'sino\' de notificação.\n\nAbraço!'
console.log(mensagemString)

const nome1 = 'Rafael';

const mensagemTemplateLiteral = `Olá, ${nome} obrigado por se increver no canal!

Para acompanhar os vídeos, não se esqueça de ativar o 'sino' de notificação.

Abraço!

   ps.: Identar o documento no VScode refletirá no formato da msg.`
console.log(mensagemTemplateLiteral)

// DATE

const date = new Date();
const date1 = new Date('April 19 2022');
// No caso do mês a contagem se inicia no zero, portanto devemos colocar o mês diminuindo um, ex.: abril, mês 4, definimos como 3
const date2 = new Date(2022, 03, 19, 13, 30);
console.log(date);
console.log(date1);
console.log(date2);

console.log('toDateString --> ', date.toDateString());
console.log('toTimeString --> ', date1.toTimeString());
console.log('toISOString --> ', date2.toISOString());

// Montador de endereço - Mini Projeto
// Criar um objeto endereço que contém rua, numero, cidade, uf e cep e monte uma funçao que retorne
// o endereço por escrito, ex.: Rua xxxxx, numero, cidade-uf - cep

// Usa let para garantir que o objeto possa ser alterado
let endereco = {
   rua: 'Alexandre de Gusmão',
   numero: 110,
   cidade: 'Cotia',
   uf: 'SP',
   cep: '06706-160'
}

function exibeEndereco(endereco) {
   const resposta = `Rua ${endereco.rua}, ${endereco.numero}, ${endereco.cidade}-${endereco.uf} - ${endereco.cep}`;

   return resposta;
}

console.log(exibeEndereco(endereco));

// Correcao do professor
let endereco1 = {
   rua: 'a',
   cidade: 'b',
   cep: 'c',
}

function exibeEndereco1(endereco1) {
   for (let chave in endereco1) {
      console.log(chave, endereco1[chave]);
   }
}
exibeEndereco1(endereco1);

// Igualdade de objetos - Exercicio
function  Endereco(rua, cidade, cep) {
   this.rua = rua;
   this.cidade = cidade;
   this.cep = cep;
}

const endereco2 = new Endereco('a', 'b', 'c');
const endereco3 = new Endereco('a', 'b', 'c');

function saoIguais(endereco2, endereco3) {
   // comparar se as propriedade sao iguais
   return endereco2.rua === endereco3.rua &&
      endereco2.cidade === endereco3.cidade &&
      endereco2.cep === endereco3.cep
}

function temEnderecoNaMemoriaIguais(endereco2, endereco3) {
   // comparar se a referencia do objeto aponta para o mesmo local na memoria
   return endereco2 === endereco3;
}

console.log(saoIguais(endereco2, endereco3)); // true, pois as propriedades são tem o mesmo valor
console.log(temEnderecoNaMemoriaIguais(endereco2, endereco3)); // false pois ocupam locais diferentes na memória

// Objeto Postagem de Blog - Exercicio
// Criar o objeto postagem com as seguintes informaçoes:
// titulo, mensagem, autor, visualizacoes, comentarios: [ {autor, mensagem}, {autor, mensagem} ], estaAoVivo
let postagem = {
   titulo: 'titulo',
   mensagem: 'mensagem',
   autor: 'author',
   visualizacoes: 10,
   comentarios: [
      {
         autor: 'autor1',
         mensagem: 'mensagem1'
      },
      {
         autor: 'autor2',
         mensagem: 'mensagem2'
      }
   ],
   estaAoVivo: true
};

console.log(postagem);

// Constructor Function - Exercicio
// Criar um objeto postagem semelhante ao objeto acima a partir de um constructor function
// As ppdades visualizacoes, comentarios e estaAoVivo não serão incluídas nos parametros, pois no
// mundo real, esse tipo de informacao é dinamico, tendo seu valor alterado constantemente, portanto
// serao incluídas apenas dentro da funçao.
function Postagem(
   titulo,
   mensagem,
   autor,
) {
   this.titulo = titulo;
   this.mensagem = mensagem;
   this.autor = autor;
   this.visualizacoes = 0;
   this.comentarios = [];
   this.estaAoVivo = false;
}

let postagem1 = new Postagem(
   'titulo',
   'mensagem',
   'autor',
   // 10,
   // [
   //    {
   //       autor: 'autor',
   //       comentario: 'comentario'
   //    },
   //    {
   //       autor: 'autor',
   //       comentario: 'comentario'
   //    }
   // ],
   // false 
);

console.log(postagem1);

// Exercicio Faixa de preço
// Criar um array de objetos de faixa de preço, para que essa faixa  de preço possa ser usada 
// em um site, igual o mercado livre
// o array deve conter objetos com as seguintes propriedades:
// tooltip, minimo, maximo

// Primeira Opçao - cria array na mao
let faixas = [
   {
      tooltip: 'Até R$700,00',
      minimo: 0,
      maximo: 700
   },
   {
      tooltip: 'R$701,00 até 1400,00',
      minimo: 701,
      maximo: 1400
   },
   {
      tooltip: 'R$1401 ou mais',
      minimo: 1401,
      maximo: 999999
   },
]

// Segunda Opçao - cria array utilizando uma factory function
function criaFaixaPreco(tooltip, minimo, maximo) {
   return {
      tooltip,
      minimo,
      maximo
   }
}

let faixas1 = [
   criaFaixaPreco('Até R$700,00', 0, 700),
   criaFaixaPreco('R$701,00 até 1400,00', 701, 1400),
   criaFaixaPreco('R$1401 ou mais', 1401, 999999)
]

console.log(faixas);
console.log(faixas1);

// Terceira Opçao - cria array utilizando o constructor function
function FaixaPreco(tooltip, minimo, maximo) {
   this.tooltip = tooltip;
   this.minimo = minimo;
   this.maximo = maximo;
}

let faixa2 = [
   new FaixaPreco('Até R$700,00', 0, 700),
   new FaixaPreco('R$701,00 até 1400,00', 701, 1400),
   new FaixaPreco('R$1401 ou mais', 1401, 999999)
]

console.log(faixa2);


// INTRODUCAO A ARRAYS
console.log('');
// Adicionando elementos num array
const numeros = [1, 2, 3];
console.log(numeros);

// Adc. elemento no inicio do array
numeros.unshift(0);
console.log(numeros);

// Adc. elemento no meio do array
// splice(
   // primeiro parametro: posiçao de  referencia para deletar ou inserir algo(nosso caso)
   // segundo parametro: quantos elementos, a partir do primeiro parametro queremos deletar,
   // se não for deletar, utiliza-se zero
   // terceiro parametro: novo elemento a ser inserido no array. Opcional, utiliza-se apenas se 
   // quisermos inserir um novo elemento, a partir do método splice.
//)
numeros.splice(2,0,'b');
console.log(numeros);

// Adc. elemento no final do array
numeros.push(5); // podemos inserir mais de um valor, ex.: numeros.push(5,10,13);
console.log(numeros);

// ENCONTRANDO ELEMENTOS PRIMITIVOS NO ARRAY
const numeros1 = [1, 2, 3, 4, 3, 5, 6, 7, 3];
// retorna posiçao da primeira incidencia elemento passado no parametro. Se nao encontrar, retorna -1
console.log(numeros1.indexOf(3));
// retorna posiçao da última incidencia elemento passado no parametro. Se nao encontrar, retorna -1
console.log(numeros1.lastIndexOf(3));
console.log('');

// ENCONTRANDO ELEMENTOS DE REFERENCIA NO ARRAY
const objetos = [
   { id: 1, nome:'a' },
   { id: 2, nome:'b' },
   { id: 3, nome:'c' }
]

const objeto = objetos.find(function (objeto) {
   return objeto.nome === 'a';
});

console.log(objeto);

// ARROW FUNCTION

// const objeto1 = objetos.find((objeto) => {
//    return objeto.nome === 'a';
// });

const objeto1 = objetos.find(objeto => objeto.nome === 'a');
console.log('');
// REMOVENDO ELEMENTOS DE UM ARRAY
const numeros2 = [1, 2, 3, 4, 3, 5, 6, 7, 3];
console.log(numeros2);

// remove o último elemento
console.log(numeros2.pop());
console.log(numeros2);

// remove o primeiro elemento
console.log(numeros2.shift());
console.log(numeros2);

// // remove um elemento no meio do array
// splice(
   // primeiro parametro: posiçao de referencia para deletar(nosso caso) ou inserir algo
   // segundo parametro: quantos elementos, a partir do primeiro parametro queremos deletar,
   // se não for deletar, utiliza-se zero
   // (NÃO SE APLICA NO CASO DE DELETAR) terceiro parametro: novo elemento a ser inserido no array.
   // Opcional, utiliza-se apenas se quisermos inserir um novo elemento, a partir do método splice.
//)
console.log(numeros2.splice(3, 2));
console.log(numeros2);
console.log('');
// ESVAZIANDO UM ARRAY
let numeros3 = [1, 2, 3, 4, 3, 5, 6, 7, 3];
let outros = numeros3;
console.log('numeros3: ',numeros3);
console.log('outros: ',outros);

// solucao 1 - Esvazia o array numeros3, porém, não esvazia os outros arrays que possuem o array
// numeros3 como referencia.
numeros3 = [];
console.log('numeros3: ',numeros3);
console.log('outros: ',outros);
console.log('');

// solucao 2 - Apaga todas as referencias do array numeros3.
numeros3 = [1, 2, 3, 4, 3, 5, 6, 7, 3];
outros = numeros3;
console.log('numeros3: ',numeros3);
console.log('outros: ',outros);
numeros3.length = 0;
console.log('numeros3: ',numeros3);
console.log('outros: ',outros);

console.log('');

// solucao 3 - Apaga todas as referencias do array numeros3.

numeros3 = [1, 2, 3, 4, 3, 5, 6, 7, 3];
outros = numeros3;
console.log('numeros3: ',numeros3);
console.log('outros: ',outros);
numeros3.splice(0, numeros3.length)
console.log('numeros3: ',numeros3);
console.log('outros: ',outros);

console.log('');

// COMBINANDO E CORTANDO ARRAYS

const primeiroArray = [1, 2, 3, 4];
const segundoArray = [5, 6, 7, 8];

// solucao para combinar o array
const combinado1 = primeiroArray.concat(segundoArray);
console.log(combinado1);


// solucao para dividir o array
// slice(indexInicial, indexFinal) - no indexFinal, se passarmos o index 4, o slice cortará até o
// index 3. Veja exemplo no console.
const dividido = combinado1.slice(0, 4)
const dividido1 = combinado1.slice(4, combinado1.length);
console.log(dividido); // retorna [1, 2, 3, 4]
console.log(dividido1); // retorna [5, 6, 7, 8]
// se passarmos apenas 1 parametro no slice, ele vai cortar todos os valores do array, a partir do 
// index passado no parametro.
const dividido2 = combinado1.slice(3);
console.log(dividido2); // retorna [4, 5, 6, 7, 8]
console.log('');
// clonando o array com slice()
console.log('clonando o array com slice()')
console.log('primeiroArray', primeiroArray);
const clonePrimeiroArray = primeiroArray.slice();
console.log('clonePrimeiroArray', clonePrimeiroArray);
console.log('');

// OPERADOR SPREAD
// solucao para combinar o array utilizando o spread operator
const combinado2 = [...primeiroArray, ...segundoArray]
console.log(combinado2);
// clonando o array com spread operator
console.log('clonando o array com spread operator')
console.log('primeiroArray', primeiroArray);
const clonePrimeiroArrayComSpreadOperator = [...primeiroArray];
console.log('clonePrimeiroArrayComSpreadOperator', clonePrimeiroArrayComSpreadOperator);

console.log('');

// adicionando elemento com spread operator
const adcElementoComSpreadOperator = [...primeiroArray, 'novo elemento'];
console.log('primeiroArray', primeiroArray);
console.log('adcElementoComSpreadOperator', adcElementoComSpreadOperator);


// FOREACH

const numeros4 = [1, 2, 3, 4, 5];
numeros4.forEach((numero, index) => console.log('index:', index, 'numero:', numero));

console.log('');

// COMBINANDO ARRAYS
console.log('Combinando arrays com .join()');
console.log('array numeros4', numeros4);
const combinandoNumeros4 = numeros4.join('.');
console.log("combinando array numeros4 com .join('.'), resultado =>", combinandoNumeros4, typeof combinandoNumeros4);

console.log('');

const frase = 'olá bem vindo ao curso';
const resultado2 = frase.split(' ');
console.log('frase =>', frase);
console.log("frase.split(' ') =>", resultado2)
console.log("frase.split(' ').join(-) => ", resultado2.join('-'));

console.log('');

// RECEBENDO DADOS DO INPUT via prompt
let corFavorita = prompt('Qual é sua cor favorita?');

if(corFavorita === 'vermelho') {
   alert('Legal, tbm gosto de vermelho!');
}

let idade1 = prompt('Quantos anos você tem?');
if (idade1 >= 18 && idade1 <=24) {
   alert('Já é maior de idade hein! Muita responsabilidade nessa fase!');
} else if(idade1 > 25) {
   alert('Legal, sucesso!');
} else {
   alert('Aproveita bastante e não deixe de pensar no futuro!')
}

