# **Fundamentos JS**

**[<- Retroceder](../README.md)**

## **Indice**

- [Tipos de datos en JS](#)

  - [String](#id-data-type-string)
  - [Integer](#id-data-type-integer)
  - [Boolean](#id-data-type-boolean)
  - [Null](#id-data-type-null)
  - [Undefined](#id-data-type-undefined)
  - [Object](#id-data-type-object)
  - [Array](#id-data-type-array)

- [Diferencias entre var, let y const](#)

  - [Que es var?](#id-que-es-var)
  - [Que es let?](#id-que-es-let)
  - [Que es const?](#id-que-es-const)

- [Operadores](#)

  - [Operadores de Asignacion](#id-opradores-asignacion)
  - [Operadores de Comparacion](#id-operadores-comparacion)
  - [Operadores Aritmeticos](#id-operadores-aritmeticos)
  - [Operadores de Cadenas](#id-operadores-cadenas)
  - [Operador Ternario](#id-operador-ternario)

- [Condicional if else](#id-if-else)
- [Condicional if else if](#id-if-else-if)
- [Sentencia switch](#id-switch)
- [Bucle for](#id-bucle-for)
- [Bucle for in](#id-bucle-for-in)
- [Bucle for of](#id-bucle-for-of)
- [Bucle while](#id-bucle-while)
- [Bucle do while](#id-bucle-do-while)

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

> Permite declarar variables con un ambito global, es decir podemos acceder al valor de las variables declaradas con **var** fuera y dentro de un contexto **(scope)**. Por ejemplo:

```javascript
var mensaje = "Hola mundo";

if (1 > 0) {
  var mensaje = "hairton";
}

// el valor de mensaje cambio debido a que var no
// respeto el scope de la condicion por ello cambia el
// valor de la variable "mensaje"
console.log(mensaje); // resultado: "hairton"
```

> Si ejecutamos el siguiente codigo mediante la consola del **devtools de chrome** nos daremos cuenta de que podemos acceder al valor de la variable **mensaje**, pero no solo ello sino que dentro de la condicion podemos crear otra variable y la variable en la linea 1 cambiara de valor.

<a id='id-que-es-let'></a>

### **Que es let?**

> Nos permite declarar variables al igual que **var**, pero con la diferencia que **let** respeta el contexto en el cual fue declarada una variable. Siguiendo con el ejemplo anterior:

```javascript
var mensaje = "Hola mundo";

if (1 > 0) {
  let mensaje = "hairton";
}

//el resultado del console.log sera un Hola mundo debido
// a que no se tien acceso a la variable mensaje declarda
// dentro de la condicion
console.log(mensaje); // resultado: "Hola mundo"
```

<a id='id-que-es-const'></a>

### **Que es const?**

> Son variables que mantienen valores constantes, respetan al igual que **let** el contexto en le que fueron declaradas. Por ejemplo:

```javascript
const PI = 3.14;

if (1 > 0) {
  const PI = 3.1416;
}

console.log(PI); // resultado: "3.14"
```

> Podemos declarar constantes que no necesariamente pueden ser matematicas. sino tambien objetos que segun nuestro proyecto **no queremos que cambien**.

### **Dato**

> Esto quiere decir que debemos **empezar a usar let en lugar de var** ya que son parte de las nuevas especificiones de ECMAScript. Para mayor informacion visita el siguite link: [var, let and const difference](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

<a id='id2'></a>

## **Operadores**

> En javascript existen operadores de asignacion, comparacion, logicos, aritmeticos y algunos mas, pero en este post veremos solo los 4 mencionados.

<a id='id-opradores-asignacion'></a>

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

<a id='id-operadores-aritmeticos'></a>

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

> Utiles para poder **concatenar o unir** strings o cadena de caracteres y variables. Por ejemplo:

```javascript
let nombre = "Estiven";
let apellido = "Mayhuay";

console.log(nombre + apellido); // EstivenMayhuay

console.log(nombre + " " + apellido); // Estiven Mayhuay

console.log("Hola! " + nombre + " " + apellido); // Hola! Estiven Mayhuay
```

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

## **Condicionl if else if**

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

- La **propiedad length** nos muestra la cantidad de elementos dentro del array.

> El bucle for consta de 3 valores principales, el primero es:

- **let i=0**: en el primer parametro se debe inicilizar el contador que permitira recorrer el array estudiantes.
- **i < estudiantes.length**: en el segundo parametro se debe colocar una condicion
- **i++**: en el tercer parametro se debe colocar de cuanto en cuanto aumentara el contador en este caso de **1 en 1**

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

<a id='id1'></a>
