// var message = 'Uso de var não é recomendado, porque pode ser acedido fora de corpo de uma função.'

// if (1===1) {
//     message = 'Nova mensagem.'
// }
//alert(message)

const firstName = 'Diogo';
const lastName = 'Camargo';
const lista = "Laranja, Fole, Morango, Banana, Torranja, Jaca, Manga";

console.log(firstName, lastName);
console.log('O meu nome: ' + firstName + ' ' + lastName );
console.log(`O nome é: ${firstName} e o apelido é: ${lastName}`);
console.log('O meu nome: ' + firstName.toUpperCase() + ' ' + lastName.toUpperCase() );
console.log(`O nome é: ${firstName.toLowerCase()} e o apelido é: ${lastName.toLowerCase()}`);
console.log(`Tamanho de String: ${firstName.length}`);
console.log(lista.split(","));

const nunmber = 5;

console.log(nunmber);
console.log(typeof nunmber);

if(!2){
    alert('Dois')
}
console.log(1+1 === 2);

const list = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(list);

const laptop = {
    brand: 'DELL',
    model: 'XPS 17',
    processor: 'Intel cor i9',
    screen: '13.4 inc',
    price: 2873.99
}

console.log(`Marca: ${laptop.brand} 
            \nModelo: ${laptop.model} 
            \nProcessador: ${laptop.processor} 
            \nEcrã: ${laptop.screen} 
            \nPreço: ${laptop.price}`);


if (0 === '0'){
    console.log(true);
}
else {
    console.log(false);
}

//--- [3]: LISTAS
console.log("AULA 3: LISTAS");
const names = ['Mona', 'Rui', 'Ana', 'Telmo', 'Paula', 12, false];

const n1 = names[0];
console.log(n1);

names.push('Amílcar');
names.push("Zeferino");
names.push(6);
names.push("Fernandes");
names.unshift('Fernandes');
//names.shift(6);
//names.unshift(12);
console.log(names)
console.log("UNSHIFT")
names.unshift("Amílcar");
console.log(names)
console.log("SPLICE - 1")
names.splice(11)
console.log(names)
console.log("SPLICE - 2")
names.splice(7, 2)
console.log(names)
console.log(names[1].concat(" ", names[4], " ", names[2]));

names[7] = "Domingos"


const nameIndexOff = names.indexOf("Domingos")
const sortedNames = names.sort()

console.log(nameIndexOff)
console.log(sortedNames)

console.log(names);
console.log("Comprimento de Array: "+ names.length)

//- Copiar um Array
const namesCopy = names.slice()

console.log('Esta é a cópia de array names:')
console.log(namesCopy)


//--- [4]: MAPS, FILTER, REDUCE
console.log("AULA 4: FUNÇÕES - MAPS, FILTER, REDUCE");

// Map
const numbers = [1, 2, 3, 4, 5];

const getMultipliedByTwo = numbers.map((n) => {
    return n * 2;
});

console.log("Aula 4: Map");
console.log(getMultipliedByTwo);

// Filter
const ages = [8, 12, 20, 11, 33, 44, 55, 7, 3];

const evenAges = ages.filter((a) => {
    return a % 2 === 0;
});

console.log("Aula 4: Filter");
console.log(evenAges);


// Reduce
/* const sumAge = ages.reduce((a, accumulator) => {
    return accumulator + a;
}, 0); */

const sumAge = ages.reduce((a, accumulator) => {
    return accumulator + a;
}, 100);

console.log("Aula 4: Reduce");
console.log(sumAge);
console.log(typeof numbers);


//--- [5]: Objects
console.log("AULA 5: OBJECTS");

const person = {
    firstName: "Egas",
    lastName: "Messias",
    age: 23,
    hobbies: ["Fórmula 1", "Futebol", "Livros", "Natação"],
    dog: {
        name: 'Max',
        age: 3,
        vacine: 'Sim'
    }
};

const name = person.firstName;
const last = person.lastName;
const age = person.age;
const hobbies = person.hobbies;

console.log(name);
console.log(last);
console.log(age);
console.log(hobbies);
console.log(hobbies[3]);

// Destructuring de objectos
// - E possivel redeclarar variaveis de objectos caso nao queira usar as mesmas
const { 
    firstName: primeiroNome, 
    lastName: segundoNome, 
    age: ano, 
    hobbies: hobe,
    phone,
    dog: { name: dogName, age: dogAge, vacine }
 } = person;

console.log("Destructuring de Objectos");
console.log(primeiroNome);
console.log(segundoNome);
console.log(ano);
console.log(hobe);

// Adicionar uma nova variavel ao objecto
console.log("Adicionar uma nova variavel ao objecto");
person.phone = '00351963337712';
console.log(person)

// Aceder a um objecto dentro de objeto por via de navegação this
console.log("Dados do objecto Dog - Acesso po via This")
console.log("Nome: ", person.dog.name);
console.log("Ano: ", person.dog.age);
console.log("Vacina: ", person.dog.vacine);

// Aceder a um objecto dentro de objeto por via de destructuring
console.log("Dados do objecto Dog - Acesso po via Destructuring")
console.log(dogName)
console.log(dogAge)
console.log(vacine)

console.log(person);
console.log(person['lastName']);
console.log(person['hobbies'][0]);

// Array de Dicionarios

const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: true,
    },
];

console.log(todos[2].description);

//--- [6]: JSON
console.log("AULA 6: JSON");
//- JSON.stringify(lista): converte uma lista em JSON (converte dados para enviar ao servidor)
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//- JSON.parse(json): converte formato JSON em lista
const totosList = JSON.parse(todosJSON);
console.log(totosList)


//--- [7]: LOOP

//- A forma antiga e mais extensa
console.log("AULA 7: LOOPS");

console.log("#A forma antiga e mais extensa");
for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("#LOOP com of");
//- Loop com of
const frutas = ["Papaia", "Jaka", "Maracuja", "Tâmara", "Manga", "Banana", "Fole", "Coco", "Pinha", "Fruta-Pão"];

for (let index of frutas) {
    console.log(index);
}

console.log("#LOOP com forEach()");
frutas.forEach((fruta, index) => {
    console.log(index+1 + ": " + fruta);
});

//- Loop com while()
console.log("#Ciclo while()");
let n = 0;

while(n < 5) {
    console.log(`Index printing: ${n}`);
    n++;
}

console.log("#Loop com in: Loop devolve chave")

const personX = {
    name: "Jhon Due",
    age: 23,
    email: "jhondue@personx.com",
};

for (let index in personX) {
    console.log(index + ': ' + personX[index]);
}


//--- AULA [8]: CONDICAO IF() E SWITCH()
console.log("AULA [8]: CONDICAO IF() E SWITCH()");

//- #CONDICAO IF
console.log("#CONDIÇÃO IF: com == (compara o valor)");
if (true == '1') {
    console.log("Condição é: " + true);
}
else {
    console.log("Condição é: " + false)
}

console.log("#CONDIÇÃO IF: com === (compara o valor e o tipo)");
if (true === '1') {
    console.log("Condição é: " + true);
}
else {
    console.log("Condição é: " + false)
}

//--- CONDICAO SWITCH()
console.log("#CONDIÇÃO SWITCH()")

const car = "Ferrari";

switch (car) {
    case "BMW":
        console.log("The Brand is: " + car);
        break;
    case "Ferrari":
        console.log("The Brand is: " + car);
        break;
    case "Mercedes":
        console.log("The Brand is: " + car);
        break;
    case "Volvo":
        console.log("The Brand is: " + car);
        break;
    default:
        console.log("The Brand no exist.");
}

//--- AULA [9]: CONCEITO DE TRUTHY & FALSY

//- FALSY
const x = ''; /** string vazia e false*/
console.log(!!x);

const y = 0; /** zero e false */
console.log(!!y);

const a = null; /** null e false */
console.log(!!a);

const b = undefined; /** undefined e false */
console.log(!!b);

//- TRUTHY
const listaTrue = []; /** lista vazia e true */
if (!listaTrue) {
    console.log(listaTrue);
}

const obj = {}; /** objecto vazio e true */
if (obj) {
    console.log(obj);
}


//--- AULA [10]: FUNCTION E ARROW FUNCTION

//- Declaracao convencional da funcao
console.log("Declaracao convencional da funcao");
function soma(a, b=10) {
    return a + b;
}

const s1 = soma(2);
console.log(s1);

console.log("Declaracao da funcao com Arrow Function");
//- Declaracao da funcao com Arrow Function
const somaArrow = (a, b=10) => {
    console.log(`Soma: ${a} + ${b}`)
    return a + b;
}

const s2 = somaArrow(2);
console.log(s2)

//- Arrow Function pode ser declarado numa linha unica quando tem apenas um retorno
console.log("Declaracao da funcao com Arrow Function numa unica linha");
const somaArrow2 = (a, b=10) => a + b;

const s3 = somaArrow2(2);
console.log(s3)


//--- AULA [11]: POO
class Animal {
    constructor(name, color, age, vacine, numberID) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.vacine = vacine;
        this.numberID = numberID;
    }

    getName() {
        console.log(`${this.name}`);
    }

    setName(name) {
        this.name = name;
    }

    getColor() {
        console.log(`${this.color}`);
    }

    setColor(color) {
        this.color = color;
    }

    getAge() {
        console.log(`${this.age}`);
    }

    setAge(age) {
        this.age = age;
    }

    getVacine() {
        console.log(`${this.vacine}`);
    }

    setVacine(vacine) {
        this.vacine = vacine;
    }

    getNumber() {
        console.log(`${this.numberID}`);
    }

    setNumber(number) {
        this.numberID = number;
    }

    getString() {
        console.log(`#- Animal Data -# \n${this.name}\n${this.color}\n${this.age}\n${this.vacine}\n${this.numberID}`);
    }
}

const animal = new Animal("Leão", "Verde", 33, "Sim", "2333");
animal.getName();
animal.getColor();
animal.getVacine();
animal.getNumber();
animal.getString();

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

const dog1 = new Dog("Gaspar");
dog1.getName();
dog1.setName("Perusa");
dog1.getName();
dog1.setColor("Preto");
dog1.getColor();
dog1.setVacine("Não tem vacina em dia.");
dog1.setNumber("7881");
dog1.setAge(3);
dog1.getString();

console.log(dog1);


//--- AULA [12]: ELEMENTOS DOM
console.log("AULA [12]: ELEMENTOS DOM");

//- MODIFICAR CONTEUDO

document.getElementById("demo").innerHTML = "Aparece na Tag H1 definida no ficheiro HTML.";

document.getElementById("title").innerHTML = "VERSÍCULOS SATÁNICOS";

const setContent = document.getElementById('title').textContent = 'Novo Conteúdo.'; /** Faz o mesmo que innerHTML */


//- MODIFICAR ATRIBUTOS

//- MUDAR ESTILO


//- CAPTURAR EVENTOS DE BUTTON
//-- ALTERACAO INLINE
// <button id="clickButton" onclick="alert('Carregou no Botão!!')">Click Me!!</button> # No ficheiro HTML

/* const button = document.getElementById('clickButton');
button.onclick = function() {
    alert('Carregou no botão!!');
} */

const inputField = document.getElementById('inputField');
inputField.addEventListener('focus', function() {
    console.log('Input está em foco!!');
});

inputField.addEventListener('blur', function() {
    console.log('Input perdeu o foco!!');
});


//-- TIPOS DE EVENTOS:

//- Eventos de mouse: click, dblclick, mouseover, mouseout.
document.getElementById('clickButton').addEventListener('click', function() {
    console.log('Evento de Click do Botão capturado.');
});

document.getElementById('clickButton').addEventListener('dblclick', function() {
    console.log('Evento double click capturado!!');
});

document.getElementById('clickButton').addEventListener('mouseover', function() {
    console.log('Evento Mouseover capturado!!');
});

document.getElementById('clickButton').addEventListener('mouseout', function() {
    console.log('Evento Mouseout capturado!!');
});

//- Eventos de teclado: keydown, keyup.
document.getElementById('inputField').addEventListener('keypress', function() {
    console.log('Pressionou uma tecla!!');
});

document.getElementById('inputField').addEventListener('keydown', function() {
    console.log('Evento Keydown capturado.');
});

document.getElementById('inputField').addEventListener('keyup', function() {
    console.log('Evento Keyup capturado.');
});

//- Eventos de formulário: como submit, change, focus, blur.


//- JAVASCRIPT ASSIINCRONO: CALLBACKS, PROMISES, ASSYNC/AWAIT.

function searchData(url, callback) {
    setTimeout(() => {
        console.log(`[SearchData] Procura dados de: ${url}`);
        callback('[SearchData] Dados recebidos com sucesso!!');
    }, 2000);
}

searchData("https://agrolandia.pt", function(resultado) {
    console.log(resultado);
});


//- JAVASCRIPT ASSINCRONO: PROMISES.
function searchDataPromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`[PROMISE] A procurar dados de URL: ${url}`);
            resolve('[PROMISE] Dados Recebidos com Sucesso!!')
        }, 2000);
    });
}

searchDataPromise("https://www.klasdev.pt")
.then(dados => console.log(dados))
.catch(erro => console.log(erro));


//- JAVASCRIPT ASSIINCRONO: ASSYNC/AWAIT.
async function getData(url) {
    try {
        console.log(`A iniciar a procura de dados: ${url}`);
        const dados = await searchDataPromise(url); //-- aguarda a resolucao da Promise.
        console.log(dados);
    } catch (erro) {
        console.log(`Erro a procurar dados: ${erro}`);
    }
}

getData("https://www.dirox.com");


//- REQUISICAO NA REDE COM FETCH API (JSONPlaceholder)

//- Solicitacao GET com Fetch
document.getElementById('buttonSearchData').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(result => {
        if (!result.ok) {
            throw new Error('Falha na resposta da rede');
        }
        return result.json();
    }).then(data => {
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    }).catch(erro => {
        console.error('Houve problema com a operação fetch:', erro);
    });
});

//- Solicitacao POST com Fetch
const dataPost = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Solitações POST com Fetch',
        body: 'Uma solicitação POST é utilizada para enviar dados para serem processados porum servidor',
        userId: 1
    })
};

fetch('https://jsonplaceholder.typicode.com/posts', dataPost).then(responses => {
    if (!responses.ok) {
        throw new Error('Falha na resposta da rede.');
    }
    return responses.json();
}).then(data => {
    console.log('Post criado com sucesso:', data);
}).catch(erro => {
    console.log('Erro:', erro);
});
