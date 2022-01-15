# **Fundamentos JS**

**[<- Retroceder](../README.md)**

## **Indice**

- [Diferencias entre var, let y const](#id1)

  - [Que es var?](#id-que-es-var)
  - [Que es let?](#id-que-es-let)
  - [Que es const?](#id-que-es-const)

- [Operadores](#id2)

  - [Operadores de Asignacion](#id-opradores-asignacion)
  - [Operadores de Comparacion](#id-operadores-comparacion)
  - [Operadores Aritmeticos](#id-operadores-aritmeticos)
  - [Operadores de Cadenas](#id-operadores-cadenas)
  - [Operador Ternario](#id-operador-ternario)

- [Sentencia if else](#id2)
- [Operadores Ternarios](#id3)
- [Sentencia for](#id4)

<a id='id1'></a>

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

> Si ejecutamos el siguiente codigo mediante la consola del **devtools de chrome** nos daremos cuenta de que podemos acceder al valor de variable **mensaje**, pero no solo ello sino que dentro de la condicion podemos crear otra variable y la variable en la linea 1 cambiara de valor.

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

> Son variables que mantienen valores constantes respetan al igual que **let** el contexto en le que fueron declardas. Por ejemplo:

```javascript
const PI = 3.14;

if (1 > 0) {
  const PI = 3.1416;
}

console.log(PI); // resultado: "3.14"
```

> Podemos declarar constantes que no necesariamente pueden ser matematicas sino tambien objetos que segun nuestro proyecto **no queremos que cambien**.

### **Dato**

> Esto quiere decir que debemos **empezar a usar let y const** ya que son parte de las nuevas especificiones de ECMAScript 6. Para mayor informacion visita el siguite link: [var, let and const difference](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

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

> Son uno de los operadores mas importantes en javascript, podemos compara datos y de acuerdo a ello tomar desiciones, entre los operadores mas usados se encuentran:

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

> Utiles para poder **concatenar o unir** strings o cadena de caracteres. Por ejemplo:

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

<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
