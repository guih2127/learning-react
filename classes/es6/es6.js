/* 
VARIÁVEIS

Com javascript, é possivel declara variáveis de 3 maneiras; 
const, let e var. Com relação ao uso, a prática mais normal é utilizar
const o máximo possível, let no caso de loopings e de reatribuição de variáveis.
Normalmente, var não é utilizado.

LET: variáveis block-scoped que não podem ser redeclaradas.
CONST: variáveis block-scoped que não podem ser redeclaradas ou
reatribuídas, mas são mutáveis.
*/

let x = 0;
const IDENTIFIER = 0;

/*
ARROW FUNCTIONS

Arrow Functions são metódos mais curtos de escrever uma função javascript, além
de não possuírem seu próprio this. Arrow Functions são sempre anônimas. Elas não
podem ser utilizadas como construtores e não devem ser utilizadas como metódos 
de objetos.
Em uma Arrow Function, o return pode ser omitido se não estivermos em um bloco.
*/

// Função normal:
var func = func(a, b, c) {};

//Arrow Function:
let func = (a, b, c) => {};

/*
CONCATENAÇÃO

Expressões podem ser embutidas em template literal strings.
No ES6, também podem ser escritas strings em multiplas linhas.
*/

let str = `Release Date: ${date}`;

let str = `This text
           is on
           multiple lines`; 

/*
Ao definir metódos dentro de um objeto, podemos omitir a palavra function.
*/

// ES5

var obj = {
    a: function(c, d) {},
    b: function(e, f) {}
};

// ES6

let obj = {
    a(c, d) {},
    b(e, f) {}
};

/*
DESESTRUTURAÇÃO

Podemos utilizar {} para atribuir propriedades de um objeto para suas próprias variáveis.
*/

var obj = { a: 1, b: 2, c: 3 };

// ES5
var a = obj.a;
var b = obj.b;
var c = obj.c;

// ES6
let {a, b, c} = obj;

/* 
ITERAÇÃO EM ARRAYS (LOOPING)

Foi introduzido uma sintaxe mais concisa para objetos iteráveis.
*/

var arr = ['a', 'b', 'c'];

// ES5
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// ES6
for (let i of arr) {
    console.log(i);
}

/*
PARAMETROS DEFAULT

Funções podem ser definidas com parametros padrão, que serão utilizados apenas
se a função nao receber o parâmetro.
*/

// ES5
var func = function(a, b) {
    b = (b === undefined) ? 2 : b;
    return a + b;
} // Tinhamos que fazer um ternário, se b for undefined, ele receberá 2.

// ES6
let func = (a, b = 2) => {
    return a + b;
}

func(10); // retorna 12
func(10, 5) // retorna 15

/*
SINTAXE SPREAD

Podemos usar o spread (...) para expandir uma array.
Além disso, spread também podem ser usados para argumentos em uma função.
*/

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let arr3 = [...arr1, ...arr2];

console.log(arr3); // [1, 2, 3, "a", "b", "c"]

let func = (a, b, c) => a + b + c;

console.log(func(...arr1)); // 6 -> Passamos os 3 elementos de arr1 como os 3 argumentos necessários.

/*
CLASSES E FUNÇÕES CONSTRUTORAS

ES6 introduz a sintaxe class, invés da função construtora baseada em prototype.
*/

// ES5
function Func(a, b) {
    this.a = a;
    this.b = b;
}

Func.prototype.getSum = function() {
    return this.a + this.b;
}

var x = new Func(3, 4);

//ES6
class Func {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    getSum() {
        return this.a + this.b;
    }
}

let x = new Func(3, 4);

/*
HERANÇA

A sintaxe extends cria uma subclasse.
*/

// ES5
function Inheritance(a, b, c) {
    Func.call(this, a, b);

    this.c = c;
}

Inheritance.prototype = Object.create(Func.prototype);
Inheritance.prototype.getProduct = function() {
    return this.a * this.b * this.c;
}

var y = new Inheritance(3, 4, 5);

// ES6
class Inheritance extends Func {
    constructor(a, b, c) {
        super(a, b);

        this.c = c;
    }

    getProduct() {
        return this.a * this.b * this.c;
    }
}

let y = new Inheritance(3, 4, 5);

/*
PROMISES AND CALLBACKS

Promises representam a finalização de uma função assíncrona, podem ser utilizados
como uma alternativa para encandear funções.
*/

// ES5 Callback
function doSecond() {
    console.log('Do second.');
}

function doFirst(callback) {
    setTimeout(function() {
        console.log('Do first.');

        callback();
    }, 500);
}

doFirst(doSecond);

//ES6 Promise
let doSecond = () => {
    console.log('Do second.');
}

let doFirst = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Do first.');

        resolve();
    }, 500);
});

doFirst.then(doSecond);



















