# **Fundamentos JS**

**[<- Retroceder](../README.md)**

## **Indice**

- [Diferencias entre var, let y const](#id1)
- [Operadores](#id1)
- [Sentencia if else](#id2)
- [Operadores Ternarios](#id3)
- [Sentencia for](#id4)

<a id='id1'></a>

## **Diferencias entre var, let y const**

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

### **Operadores de Asignacion**

> Un operador de asignacion tiene como principal funcion colocar a una variable un determinado valor. Por ejemplo:

```javascript
// variable sin asignacion
let nombre;

// variable con el operador de asignacion
let apellido = "Mayhuay";
```

> esto quiere decir que todo lo que este a la derecha del **=** sera el asignado a todo lo que este a la izquierda. Asi que si les preguntan cual es el valor de apellido la respuesta es: **Mayhuay** 👀.

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

<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
<a id='id1'></a>
