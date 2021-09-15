# Fundamentos JS

## **Indice**

- [Convert Objejct To Array](#id1)
- [Metodos Importantes](#id2)
- [Map](#id3)
- [Set](#id4)
- [Garbage Collection](#id5)
- [Iteration Protocols](#id6)
- [Iterators](#id7)
- [Generators Functions](#id8)
- [Asincronia](#id9)
- [This](#id10)
  - [bind](#id10-1)
  - [call](#id10-2)
  - [apply](#id10-3)
  - [function borrowing](#id10-4)
- [JSON](#id11)
  - [JSON.parse()](#id11-1)
  - [JSON.stringify()](#id11-2)

<a id='id1'></a>

## **Convert Object To Array**

Si deseo convertir un objeto a un Array tengo la opcion de usar los **metodos (values, keys y entries)** del **objeto OBJECT**

```javascript
const zoo = {
  lion: "🦁",
  panda: "🐼",
};

Object.keys(zoo);
// ['lion', 'panda']

Object.values(zoo);
// ['🦁', '🐼']

Object.entries(zoo);
// [ ['lion', '🦁'], ['panda', '🐼'] ]
```

<a id='id2'></a>

## **Metodos Importantes**

- **replace(patron[RegExp], remplazador)** devuelve una nueva cadena con algunas o todas las coincidencias de un patron reemplazadas por un reemplazo. El patron puede ser una cadena o una expresion regular

```javascript
/* el flag (i) en las expresiones regulares significa que conciderara  tanto mayusculas como minusculas */

let texto = "Twas the night before Xmas...";
let textoNueo = texto.replace(/xmas/i, "Christmas");
console.log(newstr);
// Twas the night before Christmas...
```

<a id='id3'></a>

## **Map**

Es un diccionario de **clave-valor** donde **cualquier tipo de dato (number, null, undefined, etc)** puede ser utilizado como clave.

Los principales metodos usados con **Map** son:

- **set (key, value)** -> permite añadir una pareja de clave-valor
- **get (key)** -> permite obtener un valor dependiendo de la clave (key).
- **delete (key)** -> permite borrar un pareja de clave-valor por medio de una **clave (key)**
- **has (key)** -> permite comprobar la existencia de una clave en el mapa

```javascript
let myMap = new Map();

myMap.set("name", "hairton");
myMap.set("age", "22");

myMap.get("name"); // return hairton

myMap.has("lastName"); // false

myMap.delete("name"); // ['age', '22']

console.log(myMap);
```

Otros metodos utilizados por Map son:

- **size** obtiene el numero de valores en el mapa
- **forEach (value, key, map)** recorre todos los elementos recorridos en el map
- **values()** funcion que devulve un iterable de los valores de un mapa
- **keys()** funcion que devulve un iterable las claves de un mapa
- **entries()** devulve un iterable con matrices **_[key,value]_**
- **clear()** elimina todos los valores del mapa

```javascript
let myMap2 = new Map();

myMap.set("name", "estiven");
myMap.set("age", "25");

log([...myMap.values()]);
log([...myMap.keys()]);
log(myMap.clear());
```

Existen otras formas de crear un objeto **Map**

```javascript
let myMap3 = new Map([
  ["name", "hairton"],
  ["gmail", "developer@gmail.com"],
  ["phone", "920803441"],
]);

log(myMap3);

return; /*
    Map {}
      name: "hairton"
      gmail: "developer@gmail.com"
      phone: "920803441"
  */
```

<a id='id4'></a>

## **Set**

Es un objeto que permite **almacenar valores unicos e irrepetibles de cualquier tipo (lista de valores)**. Existen metodos principales

- **add (value)** permite añadir un nuevo item
- **delete (value)** permite borrar un valor
- **has (value)** permite comprobar si existe un determinado valor

Tiene acceso a metodos como **"add(value), delete(value), has(), clear(), keys(), values(), entries(), forEach(), size"**

```javascript
let mySet = new Set([1, 2, 3, 4, 4]);

/*
    cuando se usa for of automaticamente se convierte 
    el Set en un objeto iterable
  */
for (let value of mySet) {
  log(value);
  /* return
      1
      2
      3
      4
    */
}

// permite obtener los valores del Set en un array
log([...mySet.values()]); // return (4) [1, 2, 3, 4]
```

<a id="id5"></a>

## **Garbage Collection**

Es una tecnica que utiliza el motor de javascript para gestionar la memoria

<a id='id6'></a>

## **Iteration Protocols**

Las nuevas caracteristicas de ECMAScript 6 no solo estan asociadas a cambios de sintaxis o nuevos objetos sino tambien a protocolos.

Estos son: ***El protocolo iterable e Iterador (Iterable & Iterator protocol)***

### **El Protocolo Iterable**

> "Es aquel protocolo que permite a los objetos de JavaScript que  personalizar el comportamiento de iteracion."
>
> Existen objetos iterables que son navitos como: **Array, String, Map, Set, entre otros**, los cuales tienen un comportamiento de iteracion por defecto.
>
> Ahora bien para que un objeto sea iterable debe implementar el metodo **@@iterator**, lo cual significa que el objeto debe tener una propiedad con un identificador
>
> | Propiedad | Valor |
> | --- | --- |
> | [Symbol.iterator] | Es una funcion sin argumentos que retorna un objeto, de acuerdo al **protocolo iterador.**|

### **El Protocolo Iterador**

> "Define una forma estandar de producir una secuencia de valores"
>
> Ahora bien un objeto iterador implementa un metodo **next**
>
> | Propiedad | Valor |
> | --- | --- |
> | next | retorna un objeto con 2 propiedades (done, value) |

```javascript
  // next()
  {
    value: "hairton",
    done: true | false
  }
```

> Si el done es false quiere decir que aun existen elementos por recorrer en el iterable y si es true, quiere decir que ya no hay mas elementos por recorrer
>
> Ejemplo de usar el iterator de un iterable

```javascript
  // iterable nativo
  let names = ["andrea", "shyrle", "valeria"]; 
  // iterador del iterable
  let iterator = names[Symbol.iterator](); 

  console.log(iterator.next();
  log(iterator.next());
  console.log(iterator.next());
  // return true debido a que no hay elementos para mostrar
  console.log(iterator.next());

  // recomendado usar un loop
  let next = iterator.next();

  while (!next.done) {
    console.log(next.value);
    next = iterator.next();
  }
```

---
> Dato Adicional: ***"Los iteradores y Generadores proporcionan un mecanismo para personalizar el comportamiento de los bucles (for...of)"***
---

<a id='id7'></a>

## **Iterators**

***"Es una objeto de JS que define una secuencia y potencialente retorna un valor tras su terminacion"***

Ahora bien un iterador es cualquier objeto que implementa el **iterator protocol"** usando el metodo **next()**, el cual retorna un objeto con 2 propiedades **(value, done)**

<a id='id8'></a>

## **Generator functions**

***"Permite definir un algoritmo iterativo escribiendo una sola funcion cuya ejecucion no es continua"***

Se escriben utilizando la siguiente sintaxis:

```javascript
  const log = console.log;

  function* iterable() {
    yield "hola";
    log("haiton");
    yield "¿Como estas?";
  }

  log(iterable()); // devuelve un tipo especial de generador

  let gen = iterable();

  for(let y of gen) {
    log(y); // return hola hairton ¿Como estas?
  }
```

```javascript
  function* makeRangeIterator(inicio = 0, fin = 5, saltos = 1) {
    let countIterators = 0;

    for (let i = inicio; i < fin; i += saltos) {
      countIterators++;
      yield i;
    }

    return console.log("total: " + countIterators)
  }

  let gen1 = makeRangeIterator(0,5,1);

  for(let y of gen1) {
    console.log(y)
  }
```

<a id='id9'></a>

## **Asincronia**

---

***"Cuando el software se comunica de manera asincrona, un programa puede realizar una solicitud de informacion a otra pieza de software (un servidor, por ejemplo), y continuar haciendo otras tareas mientras espera por la respuesta"***

---

---

***"Refiere al concepto de que mas de una cosa ocurre al mismo tiempo, o multiples cosas relacionadas ocurren sin esperar a que la previa se haya completado"***

---

<a id='id10'></a>

## **This**

**this** nos permite apuntar en memoria a la referencia del objeto contextual actual, y la referencia a donde apunte puede cambiar.

Por ejemplo:

```javascript
  console.log(this) // Window Object
```

Ahora bien, nosotros podemos cambiar la referencia de este this usando los **metodos de una funcion objeto**, estos son: ***"call, bind y apply"***

<a id='id10-1'></a>

### **bind**

Este metodo nos permite hacer una copia de la funcion que referencia a un objeto que esta fuera de su contexto pasandole como parametro al metodo **bind**

Ejemplo:

```javascript
  const person = {
    name: 'hairton',
    lastname: 'mayhuay',
    fullname: function () {
      return this.name + ' ' + this.lastname;
    }
  }

  // El this dentro de la funcion print no hace referencia al objeto person por lo cual saldra un error!

  const print = function(great, adj) {
    console.log(great, this.fullname(), 'you are', adj);
  }

  // Usando bind puedo hacer que this haga referencia al objeto person
  /*
    bind genera una copia de la funcion y recibe como parametro el objeto que se quiere enlazar
  */
  const printBind = print.bind(person);

  // Luego se ejecuta la copia
  printBind('Hi', 'happy');

  // Una forma mas sencilla es hacer lo siguiente
  const print = function(great, adj){
    console.log(great, this.fullname(), 'you are', adj);
  }.bind(person)

```

<a id='id10-2'></a>

### **call**

Call a diferencia de bind si ejecuta la funcion ya que esta no genera una copia, por lo cual se el debe pasar como **1° parametro el objeto a hacer referencia** y luego se pueden colocar los parametros definidos en la funcion.

Ejemplo siguiente con el objeto **person**:

```javascript
  print.call(person, 'hello', 'happy');

  // shortcut
  const print = function(greet, adj) {
    console.log(greet, this.fullname(), 'you are', adj);
  }.call(person, 'hello', 'happy');
```

<a id='id10-3'></a>

### **apply**

Es similar a call con la diferencia en que reciben los argumentos de una funcion en forma de un array y no separado por **(,)**

```javascript
  print.apply(person, ['hello', 'special']);

  // shortcut
  const print = function(greet, adj) {
    console.log(greet, this.fullname(), 'you are', adj);
  }.apply(person, ['hello', 'happy']);
```

<a id='id10-4'></a>

### **Function borrowing**

> Es el prestao de una funcion de un objeto que puede ser utilizado por otro con sus propios argumentos.

```javascript
  const person = {
    name: 'lazy',
    lastname: 'dialico',
    fullname: function(){
      return `${this.name this.lastname}`;
    }
  }

  const actor = {
    name: 'Valeria',
    lastname: 'Hostater'
  }

  const result = person.fullname.apply(person);
  console.log(result);
```

<a id='id11'></a>

## **JSON**

It's a stands for Javascript Object Notation, too is a lightweight format for **storing & transporting data**, is often used when data is sent from server to a web page and the most important it is **self-describing** and easy to understand.

JSON has two powerful method and they are:

<a id='id11-1'></a>

### **JSON.parse()**

This method **parses a JSON string into a Javascript Object**

```javascript
  console.log(JSON.parse('{"name":"lazy","age":5}'));

  /*
  {name: 'lazy', age: 5}
    age: 5
    name: "lazy"
  [[Prototype]]: Object
  */
```

<a id='id11-2'></a>

### **JSON.stringify()**

This method **convert a Javascript Object or value into a JSON string**

```javascript

  const dog = {
    name: 'lazy',
    age: 5
  }

  const doggi = JSON.stringify(dog);

  console.log(doggi); // {"name":"lazy","age":5} JSON string
```

## **Referencias**

- [Convert object to Array ESC2017](https://www.samanthaming.com/tidbits/76-converting-object-to-array/)
- [MDN metodo value Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [JAVASCRIPT.INFO Tutorial](https://es.javascript.info/)
- [Iteration Protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Iterators & Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- [Asincronia Concept](https://developer.mozilla.org/es/docs/Glossary/Asynchronous)
- [methods call, bind & apply](https://medium.com/sngular-devs/comprende-js-call-apply-y-bind-2e27db35b8c2?utm_source=pocket_mylist)
