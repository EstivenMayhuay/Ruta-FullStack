# Fundamentos JS

## **Índice**

- [Convert Objejct To Array](#id1)
- [Métodos Importantes](#id2)
- [Map](#id3)
- [Set](#id4)
- [Garbage Collection](#id5)
- [Iterators](#id6)

<a id='id1'></a>

## **Convert Object To Array**

Si deseo convertir un objeto a un Array tengo la opción de usar los **métodos (values, keys y entries)** del **objeto OBJECT**

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

## **Métodos Importantes**

- **replace(patron[RegExp], remplazador)** devuelve una nueva cadena con algunas o todas las coincidencias de un patrón reemplazadas por un reemplazo. El patrón puede ser una cadena o una expresión regular

```javascript
/* el flag (i) en las expresiones regulares significa que conciderará  tanto mayúsculas como minúsculas */

let texto = "Twas the night before Xmas...";
let textoNueo = texto.replace(/xmas/i, "Christmas");
console.log(newstr);
// Twas the night before Christmas...
```

<a id='id3'></a>

## **Map**

Es un diccionario de **clave-valor** donde **cualquier tipo de dato (number, null, undefined, etc)** puede ser utilizado como clave.

Los principales métodos usados con **Map** son:

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

Otros métodos utilizados por Map son:

- **size** obtiene el número de valores en el mapa
- **forEach (value, key, map)** recorré todos los elementos recorridos en el map
- **values()** función que devulve un iterable de los valores de un mapa
- **keys()** función que devulve un iterable las claves de un mapa
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

Es un objeto que permite **almacenar valores únicos e irrepetibles de cualquier tipo (lista de valores)**. Existen métodos principales

- **add (value)** permite añadir un nuevo item
- **delete (value)** permite borrar un valor
- **has (value)** permite comprobar si existe un determinado valor

Tiene acceso a métodos como **"add(value), delete(value), has(), clear(), keys(), values(), entries(), forEach(), size"**

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

Es una técnica que utiliza el motor de javascript para gestionar la memoria

<a id='id6'></a>

## **Iterators**

Las nuevas carácteristicas de ECMAScript 6 no solo están asociadas a cambios de sintáxis o nuevos objetos sino también a protocolos.

Estos son: ***El protocolo iterable e Iterador (Iterable & Iterator protocol)***

### **El Protocolo Iterable**

> "Es aquel protocolo que permite a los objetos de JavaScript que  personalizar el comportamiento de iteración."
>
> Existen objetos iterables que son navitos como: **Array, String, Map, Set, entre otros**, los cuales tienen un comportamiento de iteración por defecto.
>
> Ahora bien para que un objeto sea iterable debe implementar el método **@@iterator**, lo cual significa que el objeto debe tener una propiedad con un identificador
>
> | Propiedad | Valor |
> | --- | --- |
> | [Symbol.iterator] | Es una función sin argumentos que retorna un objeto, de acuerdo al **protocolo iterador.**|

### **El Protocolo Iterador**

> "Define una forma estándar de producir una secuencia de valores"
>
> Ahora bien un objeto iterador implementa un método **next**
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

> Si el done es false quiere decir que los existen elementos por recorrer objeto iterable y si es true, quiere decir que ya no hay más elementos por recorrer
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

- - -

## **Referencias**

- [Convert object to Array ESC2017](https://www.samanthaming.com/tidbits/76-converting-object-to-array/)

- [MDN método value Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

- [JAVASCRIPT.INFO Tutorial](https://es.javascript.info/)

- [Iteration Protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

- [Iterators & Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
