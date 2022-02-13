# **JavaScript**

## **Indice**

<ul class="indice">
  <li><a href="#">Tipos de datos en JS</a></li>

  <ul class="indice">
    <li><a href="#id-data-type-string">String</a></li>
    <li><a href="#id-data-type-integer">Integer</a></li>
    <li><a href="#id-data-type-boolean">Boolean</a></li>
    <li><a href="#id-data-type-null">Null</a></li>
    <li><a href="#id-data-type-undefined">Undefined</a></li>
    <li><a href="#id-data-type-object">Object</a></li>
    <li><a href="#id-data-type-array">Array</a></li>
  </ul>

  <li><a href="#">Diferencias entre var, let y const</a></li>

  <ul class="indice">
    <li><a href="#id-que-es-var">Que es var?</a></li>
    <li><a href="#id-que-es-let">Que es let?</a></li>
    <li><a href="#id-que-es-const">Que es const?</a></li>
  </ul>

  <li><a href="#">Operadores</a></li>

  <ul class="indice">
    <li><a href="#id-operadores-asignacion">Operadores de Asignacion</a></li>
    <li><a href="#id-operadores-comparacion">Operadores de Comparacion</a></li>
    <li><a href="#id-operadores-arimeticos">Operadores Aritmeticos</a></li>
    <li><a href="#id-operadores-cadenas">Operadores de Cadenas</a></li>
    <li><a href="#id-operador-ternario">Operador Ternario</a></li>
  </ul>

  <li><a href="#id-if-else">Condicional if else</a></li>
  <li><a href="#id-if-else-if">Condicional if else if</a></li>
  <li><a href="#id-switch">Sentencia switch</a></li>
  <li><a href="#id-bucle-for">Bucle for</a></li>
  <li><a href="#id-bucle-for-in">Bucle for in</a></li>
  <li><a href="#id-bucle-for-of">Bucle for of</a></li>
  <li><a href="#id-bucle-while">Bucle while</a></li>
  <li><a href="#id-bucle-do-while">Bucle do while</a></li>

  <li><a href="#">Herramientas para programador</a></li>

  <ul class="indice">
    <li><a href="#codepen-tool">Codepen</a></li>
    <li><a href="#chrome-dev-tool">devTools Chrome</a></li>
  </ul>

  <li><a href="#">Metodos Array</a></li>

  <ul class="indice">
    <li><a href="#array-reverse">Reverse</a>
    <li><a href="#array-join">Join</a>
    <li><a href="#array-filter">Filter</a>
  </ul>

  <li><a href="#">Ejercicios JavaScript</a></li>

  <ul class="indice">
    <li><a href="#exercise-js-01">Ejercicio 01</a></li>
    <li><a href="#exercise-js-02">Ejercicio 02</a></li>
    <li><a href="#exercise-js-03">Ejercicio 03</a></li>
    <li><a href="#exercise-js-04">Ejercicio 04</a></li>
  </ul>
</ul>

## **Tipos de datos JS**

<a id="id-data-type-string"></a>

### **String**

> Representa datos de texto, es decir conjunto de caracteres.

```javascript
let nombre = "Hairton";
let apellido = "Mayhuay";
let email = "hairton@gmail.com";
```

<a id="id-data-type-integer"></a>

### **Integer**

> Este tipo de dato nos permite guardar enteros y numeros con punto decimal.

```javascript
let edad = 20;
let peso = 60.5;
let estatura = 1.72;
```

<a id="id-data-type-boolean"></a>

### **Boolean**

> Este tipo de dato consta de dos estados **1 true** y **0 false**.

```javascript
let activo = true;
let offline = false;
```

<a id="id-data-type-null"></a>

### **Null**

> Este tipo especial de dato en javascript significa que es un dato que ha sido declarado explicitmente como vacio o nulo.

```javascript
let numero = null;

console.log(numero + 1); // 1
```

<a id="id-data-type-undefined"></a>

### **Undefined**

> Este tipo de dato implica que una variable no ha sido inicializada, es decir que no se le ha asignado un valor.

```javascript
let numero = undefined;

console.log(numero + 1); // NaN (Not a Number)
```

<a id="id-data-type-object"></a>

### **Object**

> Este tipo de dato complejo que consta de **key & value (clave - valor)**, podemos decir que un objeto puede ser una **persona, animal, cosa, etc**

```javascript
// Ojbeto Persona
let persona = {
  name: "Hairton",
  phone: 948255841,
  email: "hairton@gmail.com",
  online: true,
};

// key - value
// name - hairton
// phone - 948255841
// ... - ...

// para acceder a los valores del objeto Persona
// debemos usar "la clave value"
console.log(persona.name); // Hairton
console.log(persona.phone); // 948255841
console.log(persona.email); // hairton@gmail.com
console.log(persona.online); // true
```

<a id="id-data-type-array"></a>

### **Array**

> Es un dato de tipo object, en el cual podemos guardar un conjunto de elementos variados, todo ello almacenado en una variable. Por ejemplo:

```javascript
let carros = [
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Lexus",
  "Renault",
  "Ford",
  "Opel",
  "Seat",
];

console.log(carros); // (8) ['BMW', 'Mercedes-Benz', 'Audi', 'Lexus', 'Renault', 'Ford', 'Opel', 'Seat']
```

> Ahora bien veamos como podemos crear un array

```javascript
// foma 1
let nombres = new Array();

// forma 2
let animales = [];

// forma 3
let edades = new Array(15, 20, 40, 80, 07);

// forma 4
let peso = new Array(5); // este array podra tener 5 elemntos
```

> Pero solo hemos inicializado el array nos falta **colocar elementos dentro del array**. Sigamos con el ejemplo anterior

```javascript
nombres.push("hairton");
nombres.push("andrea");
nombres.push("carlos");

console.log(nombres); // (3) ['hairton', 'andrea', 'carlos']
```

> El metodo **push** nos permite colocar elementos dentro de un array.

## **Diferencias entre var, let y const**

<a id='id-que-es-var'></a>

### **Que es var?**

> Permite declarar variables en javascript. Sin embargo, presenta inconvenientes con el **hoisting**, el cual es la forma en que javascript interpreta tu codigo. Veamos algunas casuisticas.

> **1)** Si declaras var en el **contexto global (window)**, esta variable estara disponible para todas las funciones o el documento **javascript entero**.

> En este caso la **variable name**, se encuentra en el contexto global y puede ser accedido no solo por el console.log, sino que tambien por otras funciones. Esto no es malo, pero veamos la siguiente casuistica.

```javascript
var name = "Estiven";

function sayHello() {
  return "Hello " + name;
}

console.log(name); // Estiven
console.log(window.name); // Estiven
console.log(sayHello()); // "Hello Estiven"
```

> **2)** **var** nos permite redeclarar una variable y asignarle otro valor, lo cual es un poco peligroso ya que podemos generar errores a futuro en nuestra logica y codigo.

> La **variable age** se encuentra dentro del contexto global por ello en el primer y segundo console.log, muestra 22, luego que se ejecuta la funcion **sayAge**, este **age** es redeclarado dentro del **contexto de la funcion sayAge**, y por ello en el tercer console.log muestra 20. Si no queda claro vamos por otro ejemplo.

```javascript
var age = 22;

function sayAge() {
  var age = 20;
  return "I'm " + age;
}

console.log(age); // 22
console.log(window.age); // 22
console.log(sayAge()); // "I'm 20"
```

> En este caso estamos redeclarando la misma variable **age**, pero asignandole una nueva edad, esta variable **age**, ya no se encuentra en el contexto global, sino en el **contexto de la funcion sayAge**.

```javascript
function sayAge() {
  var age = 22;
  var age = 20;
  return "I'm " + age;
}

console.log(age); // age is not defined in the context global
console.log(window.age); // undefined
console.log(sayAge()); // "I'm 20"
```

> **3)** Haciendo referencia un poco mas al **hoisting**, veamos que sucede cuando se quiere **mostrar el valor de una variable con var antes de ser declarada**

> En esta oportunidad quiero mostrar el valor de la variable **lastName**, pero esta me devuelve **undefined**, debido a que **javascript mediante el hoisting**, lleva todas las **declaraciones de variables, funciones, clases, etc al inicio del script**.

> En el caso de var lleva **la declaracion de la variable lastName, pero no su valor**, por lo cual javascript coloca **undefined**

```javascript
console.log(lastName); // undefined
var lastName = "Mayhuay";
console.log(lastName); // Mayhuay
```

> Desde **ES6 (ECMAScript 2015)** se recomienda el uso de let y const, debido a que no presenta inconvenientes con el **hoisting** como es el caso de **var**.

<a id='id-que-es-let'></a>

### **Que es let?**

> Permite declarar variables al igual que **var** y es una mejora al mismo. Con let puedes declarar variables que viviran dentro del **scope de una funcion, class, etc**, es decir no podra ser accedido desde afuera de su **scope (contexto)**.

> el primer console.log, no muestra nada debido a que no existe name en el **contexto global**, solo en el **contexto de sayHello**

```javascript
function sayHello() {
  let name = "Estiven";
  return "Hello, " + name;
}

console.log(name); //
console.log(sayHello()); // Hello Estiven
```

> **1)** Con let podemos evitar guardar las variables declaradas como parte del **contexto global (window)**

```javascript
let age = 20;

console.log(age); // 20;
console.log(window.age); // undefined
```

> **2)** Si deseas redeclarar una variable como haciamos con **var**, con el let no es posible, esto es de gran ayuda ya que evita errores.

```javascript
let age = 20;

let age = 22;

// Error 'age' has already been declared
// Ya fue declarado
console.log(age);
```

> Pero si podemos crear variables con el mismo nombre en diferentes scopes.

```javascript
let age = 20;

function sayAge() {
  let age = 22;
  return age;
}

console.log(age); // 20
console.log(sayAge()); // 22
```

> **3)** En el caso del **hoisting** con let no podemos acceder al valor de una variable si no fue previamente definida.

```javascript
console.log(lastName); // Error lastName is not defined
let lastName = "Mayhuay";
```

<a id='id-que-es-const'></a>

### **Que es const?**

> Son variables que mantienen valores constantes, tienen las mismas caracteristicas de **let** con la diferencia de que no puedes actulizarla.

> Una variable **const** si o si debe ser inicializada.

```javascript
const name; // Error Missing initializer in const declaration
const PI = 3.14;

console.log(PI); // 3.14
```

> Podemos declarar constantes que no necesariamente pueden ser matematicas. sino tambien objetos que segun nuestro proyecto **no queremos que cambien**.

> Por ejemplo, un objeto persona

```javascript
const person = {
  name: "Estiven",
  lastName: "Mayhuay",
  age: 22,
  address: {
    city: "Lima",
    country: "Peru",
  },
};

console.log(person);
/*
{name: 'Estiven', lastName: 'Mayhuay', age: 22, address: {…}}
address: {city: 'Lima', country: 'Peru'}
age: 22
lastName: "Mayhuay"
name: "Estiven"
[[Prototype]]: Object
*/
```

> Pero, esto no quiere decir que no podamos cambiar sus valores, en el caso de objetos podemos cambiar la edad.

```javascript
const person = {
  name: "Estiven",
  lastName: "Mayhuay",
  age: 22,
  address: {
    city: "Lima",
    country: "Peru",
  },
};

console.log(person);
/*
{name: 'Estiven', lastName: 'Mayhuay', age: 22, address: {…}}
address: {city: 'Lima', country: 'Peru'}
age: 22
lastName: "Mayhuay"
name: "Estiven"
[[Prototype]]: Object
*/
person.age = 24;
console.log(person);
/*
{name: 'Estiven', lastName: 'Mayhuay', age: 22, address: {…}}
address: {city: 'Lima', country: 'Peru'}
age: 24
lastName: "Mayhuay"
name: "Estiven"
[[Prototype]]: Object
*/
```

### **Dato**

> Esto quiere decir que debemos **empezar a usar let en lugar de var** ya que son parte de las nuevas especificiones de ECMAScript. Para mayor informacion visita el siguite link: [var, let and const difference](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

<a id='id2'></a>

## **Operadores**

> En javascript existen operadores de asignacion, comparacion, logicos, aritmeticos y algunos mas, pero en este post veremos solo los 4 mencionados.

<a id='id-operadores-asignacion'></a>

### **Operadores de Asignacion**

> Un operador de asignacion tiene como principal funcion colocar a una variable un determinado valor. Por ejemplo:

```javascript
// variable sin asignacion
let nombre;

// variable con el operador de asignacion
let apellido = "Mayhuay";
```

> esto quiere decir que todo lo que este a la derecha del **=** sera el asignado a todo lo que este a la izquierda. Asi que si les preguntan cual es el valor de apellido la respuesta es: **Mayhuay** 👀.

<a id='id-operadores-comparacion'></a>

### **Operadores de comparacion**

> Son uno de los operadores mas importantes en javascript, podemos comparar datos y de acuerdo a ello tomar decisiones, entre los operadores mas usados se encuentran:

| Operador | Descripccion                                                                   | Ejemplo   |
| -------- | ------------------------------------------------------------------------------ | --------- |
| ==       | retorna true si es igual                                                       | 4 == "4"  |
| !=       | retorna true si no es igual                                                    | 4 != "5"  |
| ===      | retorna true si es igual y del mismo tipo de dato                              | 4 !== 4   |
| !==      | retorna true si son del mismo tipo de dato pero no son iguales                 | 4 !== "5" |
| >        | retorna true si el valor de la izquierda es mayor que el de la derecha         | 4 > 2     |
| >=       | retorna true si el valor de la izquierda es mayor o igual que el de la derecha | 4 >= 2    |
| <        | retorna true si el valor de la izquierda es menor que el de la derecha         | 4 < 2     |
| <=       | retorna true si el valor de la izquierda es menor o igual que el de la derecha | 4 <= 2    |

> Pero como que no se entiende mucho cierto? Asi que pongamos algunos ejemplos: 😁

```javascript
console.log(4 > 5); // false
console.log(40 > 5); // true

console.log(10 >= 5); // true
console.log(5 >= 5); // true
console.log(4 >= 5); // false

console.log(4 < 5); // true
console.log(4 < 2); // false

console.log(4 <= 5); // true
console.log(40 <= 5); // false

/*
  El operador de doble igual solo compara los valores mas no los tipos de datos por lo cual, en javascript esto sale true a pesar de que nosotros sabemos que un entero no es igual a un string
*/

console.log(4 == "4"); // true

/*
Pero cuando usamos el operador de triple igual no solo compara el valor sino tambien el tipo de dato y como no son iguales devuelve false
*/

console.log(4 === "4"); // false

// Devuelve false porque para javascript cuando se usa el operdor !=  el 4 de tipo entero es igual al 4 de tipo string
console.log(4 != "4"); // false

// Pero para el opeardor !== estos son distintos por ello devulve true
console.log(4 !== "4"); // true
```

<a id='id-operadores-arimeticos'></a>

### **Operadores Aritmeticos**

> Se encuentran: la suma, resta, multiplicacion, division, etc.

| Operador | Descripccion                                       | Ejemplo              |
| -------- | -------------------------------------------------- | -------------------- |
| %        | Obtiene el residuo de una division                 | 25 % 7 = 4           |
| ++       | Incrementa el valor de una variable en 1           | ++x o x++            |
| --       | Decrementa el valor de una variable en 1           | --x o x--            |
| -        | Operador unario retorna la negacion de un operador | x = 3, -x retorna -3 |
| \*\*     | Operador exponencial (base \*\* exponente)         | 2 \*\* 4, retorna 16 |

> Pero como siempre veamos algunos ejemplos:

```javascript
console.log(8 % 5); // residuo 3

console.log(8 / 5); // resultado: 1

console.log(4 * 3); // resultado: 12

console.log(14 - 3); // resultado: 11

console.log(2 ** 3); // resultado: 8

let numero = 1;
let numero2 = 4;
let posNum = 20;

console.log(++numero); // resultado: 2

// Te devuelve el numero que tenia antes pero por dentro ya le aumento en uno
console.log(numero2++); // 4
console.log(numero2); // 5

console.log(-posNum); // -20
```

<a id='id-operadores-cadenas'></a>

### **Operadores de Cadenas**

> Utiles para poder **concatenar o unir** strings o cadena de caracteres y variables. **Tambien llamadas template strings**. Por ejemplo:

```javascript
let nombre = "Estiven";
let apellido = "Mayhuay";

console.log(nombre + apellido); // EstivenMayhuay

console.log(nombre + " " + apellido); // Estiven Mayhuay

console.log("Hola! " + nombre + " " + apellido); // Hola! Estiven Mayhuay
```

> Ahora bien esa es la forma mas sencilla, pero tambien tediosa de unir cadenas de texto. Existe otra forma mas sencilla y escalable de unir cadenas y es **la interpolacion de cadenas**.

> **La interpolacion de cadenas** consiste en poder unir tanto variables como cadenas de texto dentro de **comillas invertidas (``)** y usando el simbolo de **$ dolar** y colocar entre llaves la **variable**.

> Veamos como queda el ejemplo anterior usando interpolacion

```javascript
let nombre = "Estiven";
let apellido = "Mayhuay";

console.log(`${nombre}${apellido}`); // EstivenMayhuay

console.log(`${nombre} ${apellido}`); // Estiven Mayhuay

console.log(`Hola! ${nombre} ${apellido}`); // Hola! Estiven Mayhuay
```

> Ya podras ver lo facil y escalable que puede ser, asi que empieza desde ya a **usarlo**.

<a id='id-operador-ternario'></a>

### **Operador Ternario**

> Es otra forma de poder realizar condiciones con un codigo mucho mas limpio y es parte del javascript moderno, este tipo de operador permite que tenga 1 de dos valores posibles:

> **Estructura:** **(condicion) ? val1 : val2**

> el signo **"?" indica si la condicion que se cumple es verdadera** y sino se ejcuta lo que este en el signo **":" de los dos puntos**

```javascript
let valor = 40 > 5 ? true : false;
let valor2 = 2 > 5 ? true : false;

// Esto quiere decir si 40 es mayor a 5 devuelve true o sino false, como en este caso 40 si es mayor a 5 devuelve true y se guarda en la variable valor

console.log(valor); // true
console.log(valor2); // false
```

> Pero nos solo podemos devolver valores booleans sino tambien otro tipo de datos

```javascript
let edad = 17;
let result = edad > 18 ? "Mayor de edad" : "Menor de edad";

console.log(result); // Menor de edad
```

<a id='id-if-else'></a>

## **Condicional if else**

> if else nos permite validar cierta condicion como por ejemplo: validar la edad y determinar si es mayor de edad o no, validar el estado de un usuario si esta active o sino offline

```javascript
// Si la edad es mayor o igual a 18 imprimi "mayor de edad", sino se cumple la primera condicion entra en juego el else y se imprimie "menor de edad"

let edad = 20;

if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}
```

> Cuando se utilice la condicion if else es importante respetar las **llaves {}**.

> Ademas, tambien podemos colocar nuestro codigo en una linea de codigo, siempre y cuando solo se ejecute un sentencia. Por ejemplo:

```javascript
let edad = 20;

if (edad >= 18) return console.log("Mayor de edad");
else return console.log("Menor de edad");
```

<a id='id-if-else-if'></a>

## **Condicional if else if**

> Permite ejecutar una serie de condiciones que de no cumplirse con una pasa a la siguiente.

```javascript
let edad = 15;

if (edad > 0 && edad <= 5) {
  console.log("Primera Infancia");
} else if (edad >= 6 && edad <= 11) {
  console.log("Infancia");
} else if (edad >= 12 && edad <= 18) {
  console.log("Adolescencia");
} else if (edad >= 14 && edad <= 26) {
  console.log("Juventud");
} else if (edad >= 27 && edad <= 59) {
  console.log("Adultez");
} else if (edad >= 60) {
  console.log("Persona Mayor");
} else {
  console.log("Edad incorrecta");
}
```

> El codigo anterior devolvera: **Adolescencia** debido a que recorrera las condicionales hasta que alguna de ellas se cumpla si no se cumple ninguna devolvera **Edad incorrecta**

<a id='id-switch'></a>

## **Sentencia switch**

> swicth es una sentencia que evalua si un valor conincide con alguno de los casos propuestos, sino existe ninguna coincidencia se ejecuta la sentencia default. Por ejemplo:

```javascript
let covid = "Alpha";
let resultado = "";

switch (covid) {
  case "Beta":
    resultado = "La variante es " + covid;
    break;
  case "Delta":
    resultado = "La variante es " + covid;
    break;
  case "Alpha":
    resultado = "La variante es " + covid;
    break;
  case "Omicron":
    resultado = "La variante es " + covid;
    break;
  case "Gamma":
    resultado = "La variante es " + covid;
    break;
  default:
    resultado = "Variante " + covid + " no encontrada";
    break;
}

console.log(resultado);
```

> la palabra reservada **break** permite salir del case y pasar al siguiente caso pero tambien salir de la sentencia swtich una vez se haya encontrado una coincidencia.

<a id='id-bucle-for'></a>

## **Bucle for**

> Primero entendamos cual es el proposito de un bucle. Porque lo necesitamos? Bueno supongamos que queremos relizar **una tarea n veces tendriamos que relizar n acciones.** pero de forma procedimental. No me deje entender cierto 😁

> Si queremos mostrar los nombres mediante la consola sin usar un bucle tendriamos que hacer 4 console.log, no parece tan dificil cierto, pero que tal si tenemos 100 nombres seria tedioso y no muy practico hacer 100 console.log cierto?

```javascript
let estudiantes = ["hairton", "valeria", "andrea", "jessica"];

//  Sin usar un bucle for
console.log(estudiantes[0]);
console.log(estudiantes[1]);
console.log(estudiantes[2]);
console.log(estudiantes[3]);
```

> Ahora usando un bucle for seria mucho mejor ya que vamos a poder **automatizar el recorrido** y el resultado seria el mismo.

```javascript
let estudiantes = ["hairton", "valeria", "andrea", "jessica"];

//  Usando el bucle for
for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i]);
}
```

<ul class="lista">
  <li>La <strong>propiedad length</strong> nos muestra la cantidad de elementos dentro del array.</li>
</ul>

> El bucle for consta de 3 valores principales, el primero es:

<ul class="lista">
  <li><strong>let i=0</strong>: en el primer parametro se debe inicilizar el contador que permitira recorrer el array estudiantes.</li>
  <li><strong>i < estudiantes.length</strong>: en el segundo parametro se debe colocar una condicion. </li>
  <li><strong>i++</strong>: en el tercer parametro se debe colocar de cuanto en cuanto aumentara el contador en este caso de <strong>1 en 1</strong>
</ul>

> Veamos otros ejemplos:

```javascript
// mostrar tabla del 6
for (let i = 0; i <= 12; i++) {
  console.log("6 x " + i + " = " + 6 * i);
}

/* resultado
6 x 0 = 0
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60
6 x 11 = 66
*/
```

<a id='id-bucle-for-in'></a>

## **Bucle for in**

> Este bucle nos permite recorrer **las propiedades de un objeto**.

```javascript
let estudiante = {
  nombre: "Hairton",
  edad: 20,
  grado: 5,
  nivel: "primaria",
};

for (let prop in estudiante) {
  console.log(prop);
}

/* 
resultado del for in mostrado por el console.log

nombre
edad
grado
nivel
*/
```

<a id='id-bucle-for-of'></a>

## **Bucle for of**

> Este bucle nos permite recorrer los elementos sobre aquellos objetos que son iterables. Ahora bien, los objetos interables son: String, Maps, Arrays y otros mas.

```javascript
let paises = ["Peru", "Argentina", "Brasil"];

for (let i of paises) {
  console.log(i); // Peru, Argentina, Brasil
}
```

<a id='id-bucle-while'></a>

## **Bucle while**

> Esta sentencia nos permite crear un bucle que ejectura ciertos **procedimientos** siempre y cuando la condicion a evaluar **sea verdadera**. Ademas, la condicion es evaluada en primer lugar antes de su ejecucion.

> Ahora bien veamos la estructura de la sentencia while:

```javascript
while (condicion) {
  // tu codigo
}
```

> **Ejemplo practico:** Mostrar los numeros mientras que n sea menor a 4

```javascript
let n = 0;

while (n < 4) {
  console.log(n);
  n++;
}

/* Respuesta del console.log
0
1
2
3
*/
```

<a id='id-bucle-do-while'></a>

## **Bucle do while**

> Esta sentencia es un derivado de la sentencia while, **do while** valida la condicion despues de haber ejecutado los procedimientos dentro de sus llaves, se sigue ejecutando **mientras la condicion sea verdadera**

> **Ejemplo practico:** Sumar todos los numeros mientras que **cont sea menor a 5**

```javascript
let cont = 0;
let sumNum = 0;

do {
  sumNum = sumNum + cont;
  cont++;
} while (cont < 5);

console.log(sumNum); // 10
```

## **Herramientas para programador**

<a id='codepen-tool'></a>

### **Codepen**

> Es una plataforma que te permite utilizar las tecnologias de desarrollo web como: html5, css3, js y mas, permitiendote realizar proyectos de tu interes. Visita el siguiente enlace: <a href="https://codepen.io/your-work" target="_blank">Codepen</a>

<p class="image">
  <img src="./img/codepen-intro.png" alt="intro codepen">
</p>

> Ahora bien veamos como podemos ejecutar nuestro codigo javascript en codepen, algo que debes tener en cuenta que cuando usas **console.log**, codepen cuenta con una seccion de **Console** para mostrar lo que retorna una funcion.

<p class="image">
  <img src="./img/codepen-js.png" alt="javascript codepen">
</p>

<a id='chrome-dev-tool'></a>

### **devTool Chrome**

> Esta es otra forma mas rapida de poder ejecutar tus funciones consta de poder usar tu mismo navegador elegir cualquier ventana y colocar **click derecho luego dirigirte a Inspeccionar** y aparecera algo asi:

<p class="image">
  <img src="./img/dev-tool.jpeg" alt="chrome dev tool">
</p>

> Una vez alli debes dirigirte a la seccion de **Console** y colocar tu funcion para luego ejecutarla.

<p class="image">
  <img src="./img/js-chrome-dev-tool.jpeg" alt="javascript chrome dev tool">
</p>

## **Metodos Array**

<a id='array-reverse'></a>

### **Reverse**

> El metodo **reverse**, es un metodo de los objetos array. Dicho metodo devuelve un nuevo array que permite revertir el orden de los elementos. Por ejemplo: tenemos un array con numeros del **1 al 5** y queremos tener un array a la inversa de forma descendente, es decir **5 al 1**.

```javascript
let numeros = [1, 2, 3, 4, 5];

console.log(numeros.reverse()); // [5, 4, 3, 2, 1]
```

> Pero no solo numeros sino tambien otros tipos de datos.

```javascript
let vocales = ["a", "e", "i", "o", "u"];

console.log(vocales.reverse()); // ["u", "o", "i", "e", "a"];
```

> Debes tener en cuenta que cambia el orden de los elementos, pero el **indice se mantiene**.

```javascript
let vocales = ["a", "e", "i", "o", "u"];
let vocalesAlreves = vocales.reverse(); // ["u", "o", "i", "e", "a"];

console.log(vocalesAlreves[0]); // u
console.log(vocalesAlreves[1]); // o
console.log(vocalesAlreves[2]); // i
console.log(vocalesAlreves[3]); // e
console.log(vocalesAlreves[4]); // a
```

> Ahora bien, podemos tambien revertir los valores de un objeto.

> Este ejemplo usa el metodo de Array reverse usando el **metodo de las funciones llamada call**, el cual hace referencia al objeto ages, el cual se invertira.

```javascript
let ages = {
  0: 1,
  1: 2,
  3: 3
};

console.log(ages); // {0: 1, 1: 2, 2: 3}
Array.prototype.reverse.call(ages);
console.log(obj); // {0: 3, 1: 2, 2: 1, length: 3}
```

## **Ejercicios JavaScript**

<a id='exercise-js-01'></a>

### **Ejercicios 01**

> En este ejercicio debemos crear una funcion que **reciba un nombre que es una cadena de texto** y nos devuelva **la misma cadena**, pero aumentandole un **Hola** al inicio y un **Como estas?** al final. Vamos al codigo 👓

> Para resolver este ejercicio debemos saber como concatenar strings **(cadenas de texto)** para ello da click aqui: [Operadores de Cadenas](#id-operadores-cadenas)

> Una vez ya entiendas como concatenar los strings, debemos saber como crear una funcion o llamada en ingles **function** y estan simple como el siguiente codigo:

```javascript
function nombreFunction() {
  // codigo
}
```

> Una funcion tiene la palabra reservada **function**, seguido del nombre que queramos ponerle a la funcion, luego se coloca parentesis de apertura y cierre y luego las llaves, dentro de las cuales va nuestro codigo.

> Ya sabiendo ello vayamos a resolverlo

```javascript
function devolverSaludo(nombre) {
  let saludo = `Hola ${nombre} Como estas?`;
  console.log(saludo);
}
```

> Hasta el momento creamos nuestra funcion ahora solo falta ejecutarla. Ahora bien para probar tu codigo te dare dos opciones una es usar **codepen** o **devTools de chrome**. Si quieres saber mas sobre cada una de ellas dirigite a los siguientes links:

<ul class="lista">
 <li><a href="#codepen-tool">Codepen</a></li>
 <li><a href="#chrome-dev-tool">devTools Chrome</a></li>
</ul>

> En este ejercicio vamos a optar por usar codepen. Por lo cual, copiamos la funcion creada en la seccion de javascript y luego procedemos a ejecutarla de la siguiente manera:

```javascript
function devolverSaludo(nombre) {
  let saludo = `Hola ${nombre} Como estas?`;
  console.log(saludo);
}

/*
ejecutando la function llamada devolverSaludo
la cual recibe como parametro el nombre hairton
*/

devolverSaludo("hairton"); // Hola hairton Como estas?
```

> Lo cual me devolvera **Hola hairton Como estas?**

<a id='exercise-js-02'></a>

### **Ejercicios 02**

> Realizar una funcion que **reciba dos numeros** y que te permita devolver el resultado de las **operaciones basicas aritmeticas** como: suma, resta, multiplicacion, division, residuo de una division y potencia

> Para ello primero vamos a definir cuales seran los parametros que vamos a recibir:

<ul class="lista">
  <li><strong>numero1:</strong> sera un integer</li>
  <li><strong>numero2:</strong> sera un integer</li>
  <li><strong>operacion:</strong> sera un string</li>
</ul>

> Vamos ahora a crear la funcion: ✋

```javascript
function operacionesAritmeticas(numero1 = 2, numero2 = 1, operacion = "+") {
  let resultado = "";

  if (operacion == "+") {
    let suma = numero1 + numero2;
    resultado = `La suma es: ${suma}`;
  } else if (operacion == "-") {
    let resta = numero1 - numero2;
    resultado = `La resta es: ${resta}`;
  } else if (operacion == "*") {
    let multiplicacion = numero1 * numero2;
    resultado = `La multiplicacion es: ${multiplicacion}`;
  } else if (operacion == "/") {
    let division = numero1 / numero2;
    resultado = `La division es: ${division}`;
  } else if (operacion == "%") {
    let residuo = numero1 % numero2;
    resultado = `El residuo de la division es: ${residuo}`;
  } else if (operacion == "^") {
    let potencia = Math.pow(numero1, numero2);
    resultado = `La potencia es: ${potencia}`;
  } else {
    resultado = "La operacion no existe";
  }

  console.log(resultado);
}
```

> Una vez ya declaramos nuestra funcion con las operaciones basicas procedemos a ejecutarla.

```javascript
operacionesAritmeticas(4, 2, "+"); // resultado: 6
operacionesAritmeticas(4, 4, "-"); // resultado: 0
operacionesAritmeticas(4, 4, "*"); // resultado: 16
operacionesAritmeticas(4, 2, "/"); // resultado: 2
operacionesAritmeticas(5, 2, "%"); // resultado: 1
operacionesAritmeticas(3, 2, "^"); // resultado: 9
```

> Como habras podido notar hemos resuelto este ejercicio con la sentencia **if else if**, para saber mas de esta sentencia da click aqui: [Condicional if else if](javascript.html#id-if-else-if). Pero, tambien podemos resolverlo con la **sentencia switch**.

```javascript
function operacionesAritmeticas(numero1 = 2, numero2 = 1, operacion = "+") {
  let resultado = "";

  switch (operacion) {
    case "+":
      let suma = numero1 + numero2;
      resultado = `La suma es: ${suma}`;
      break;
    case "-":
      let resta = numero1 - numero2;
      resultado = `La resta es: ${resta}`;
      break;
    case "*":
      let multiplicacion = numero1 * numero2;
      resultado = `La multiplicacion es: ${multiplicacion}`;
      break;
    case "/":
      let division = numero1 / numero2;
      resultado = `La division es: ${division}`;
      break;
    case "%":
      let residuo = numero1 % numero2;
      resultado = `El residuo de la division es: ${residuo}`;
      break;
    case "^":
      let potencia = Math.pow(numero1, numero2);
      resultado = `La potencia es: ${potencia}`;
      break;
    default:
      resultado = "La operacion no existe";
      break;
  }

  console.log(resultado);
}

// ejecutando la funcion
operacionesAritmeticas(2, 20, "w"); // resultado: La operacion no existe
operacionesAritmeticas(4, 2, "^"); // resultado: 16
```

<a id='exercise-js-03'></a>

### **Ejercicios 03**

> Crear una funcion que convierta un numero **binario a decimal**, teniendo en cuenta que un numero binario solo esta definido por **0 y 1**. Por ejemplo: **1001**

> Link de ayuda: <a href="https://www.rapidtables.com/convert/number/binary-to-decimal.html" target="_blank">https://www.rapidtables.com/convert/number/binary-to-decimal.html</a>

> Primero debemos entender cual es la logica matematica para convertir de binario a decimal, por lo cual, visita el siguiente link: <a href="https://www.udb.edu.sv/udb_files/recursos_guias/informatica-tecnologico/redes-de-comunicacion/2020/i/guia-1.pdf" target="_blank">Sistema numerico</a>

> Vayamos a declarar la funcion:

```javascript
function convertBinaryToDecimal(numBinario) {
  /* 
    transformamos el numero a string e invertimos su posicion para poder
    usarlo 2^0 + 2^1 + 2^2
  */

  let arrNum = Array.from(String(numBinario)).reverse();
  let decimal = 0;

  // recorremos el array y multplicamos el elemento por 2^index(0, 1, n)
  arrNum.forEach((elem, index) => {
    let num = Number.parseInt(elem);

    decimal = Math.pow(2, index) * num;
  });

  return decimal;
}
```

> Ahora vamos a ejecutar la funcion:

```javascript
convertBinaryToDecimal(100); // 4
convertBinaryToDecimal(1000); // 8
```
