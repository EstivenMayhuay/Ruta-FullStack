# **HTML5**

**[<- Retroceder](../README.md)**

## **Indice**

- [Que es HTML?](#id-html)
- [Que es HTML5?](#id-html5)
- [Que es una pagina web?](#id-pagina-web)
- [Que es un sitio web?](#id-sitio-web)
- [Tags HTML5](#id-tags-html5)

<a id="id-html"></a>

## **¿Que es HTML?**

Lenguaje de marcado de informacion para estructurar paginas web.

<a id="id-html5"></a>

## **¿Que es HTML5?**

Son un conjunto de mejoras para el lenguaje de Marcado HTML, creado por Tim Berners-Lee en 1991, en donde solo poseia 20 etiquetas y fue desarrollado para compartir informacion.

Entre las mejoras que trae consigo estan:

- Las API'S (LocalStorage, Drag & Drop, Geo-localizacion, entre otras).
- Etiquetas para formularios y validacion.
- Etiquetas estructurales de semantica (section, header, nav, main, footer, article).
  **Si deseas saber si tu navegador es totalmente compatible con HTML5 o que caracteristicas son compatibles** visita el enlace [Test de Support HTML5](https://html5test.com/)

<a id="id-pagina-web"></a>

## **Que es una pagina web?**

> Una pagina web es un **documento html**, que es parte de un contenido mucho mas ampliio. Por ejemplo: La intro del sitio web de soyheny es una **web page**

<a id="id-sitio-web"></a>

## **Que es un sitio web?**

> Son un conjunto de paginas web **documentos html**, conectados entre si. Por ejemplo: Toda la plataforma de https://www.soyhenry.com/

<a id="id-tags-html5"></a>

## **Tags HTML5**

### **Text Content (Etiquetas para el contenido del texto)**

- **Figcaption:** Permite mostrar la leyenda que describe a la imagen.

- **figure:** Representa el contenedor de las imagenes

### **Inline Text Semantic**

- **abbr:** Representa la abreviacion de una palabra Ejemplos:

```HTML
  <abbr title="Cascading Styles Sheets">CSS</abbr>
```

- **kbd:** Es el Keyboard input Element permite dar indicaciones sobre lo que el usuario debe presionar desde el teclado.
- **var:** Representa a las variables en una expresion matematica.
- **time:** Representa un periodo de tiempo especfifico.

## **Image & Multimedia**

- audio
- video
- map & area

## **Embedded Content**

- iframe
- picture
- source
- embed

## **SVG**

## **MathML**

## **Table Content**

- **caption** es un tag que permite otorgarle un titulo a la tabla
- **caption-side** permite colocar el **tag caption** en una posicion **top** o **bottom**.
- **thead, tbody, tfoot** estructura basica para una tabla

## **Form**

- **meter** Es un etiqueta para representar un valor escalar como un level
- **optgroup** crea una agrupacion de opciones dentro de un elemento **_select_**
- **progress** muestra una barra de progreso

## **Interactive Elements**

- **details** es un tag el cual crea un widget de divulgacion que tiene 2 estados **_open y close_**, es decir muestra mas detalle de cierta informacion, trabaja con la etiqueta **_summary_**
- **dialog** es un elemento que representa una cuadro de dialogo o componente interactivo como una alerta, inspector o una subventana descartable.

```HTML
  <div id="boxDialog" class="dialog">
    <form method="dialog">
      <span>Elija una opcion</span>
      <div class="buttons">
        <button value="cancel" id="cancelBtn">Cancelar</button>
        <button value="aceptar" id="confirmBtn">Aceptar</button>
      </div>
    </form>
  </div>

  <section class="home">
    <button value="mostrar Modal" id="showDialogBtn">Mostrar</button>
  </section>
```

```CSS
  body{
    position: relative;
    display: block;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 50px 0 0 0;
  }

  .dialog{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    width: 50%;
    height: 60px;
    margin: auto;
    background: #ddd;
  }

  .showModal{
    display: block;
  }
```

```javascript
const log = console.log;

let dialogBox = document.querySelector("#boxDialog"),
  btnConfirm = document.querySelector("#confirmBtn"),
  btnCancel = document.querySelector("#cancelBtn"),
  btnShowDialog = document.querySelector("#showDialogBtn");

function onOpen() {
  dialogBox.classList.add("showModal");
}

function onClose() {
  if (dialogBox.classList.contains("showModal")) {
    dialogBox.classList.remove("showModal");
  }
}

btnShowDialog.addEventListener("click", onOpen);

btnCancel.addEventListener("click", onClose);
```

- **menu** Es un tag experimental, representa un grupo de comandos que un usuario puede realizar o activar **_(Experimental)_**

## **Web Components**

- **slot** elemento HTML, que es parte de la suite de **_componentes web_**, es un **_marcador de posicion_** dentro de un Web Component
- **template** es la forma como se trabaja para mantener un HTML que no se debe mostrar cuando se carga una pagina, pero se puede **_instanciar usando javascript_**, es la forma de tener un subarbol DOM dentro de un DOM inicial

```HTML
  <table id="producttable">
    <thead>
      <tr>
        <th>UPC_Code</th>
        <th>Product_Name</th>
      </tr>
    </thead>
    <tbody>
      <!-- existing data could optionally be included here -->
    </tbody>

  <template id="productrow">
    <tr>
      <td class="record"></td>
      <td></td>
    </tr>
  </template>
```

```javascript
if ("content" in document.createElement("template")) {
  var tbody = document.querySelector("tbody");
  var template = document.querySelector("#productrow");

  var clone = template.content.cloneNode(true);
  var td = clone.querySelectorAll("td");
  td[0].textContent = "hairton";
  td[1].textContent = "shyrle";

  tbody.appendChild(clone);

  tbody.appendChild(clone);

  var clone2 = template.content.cloneNode(true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "valeria";
  td[1].textContent = "andrea";

  tbody.appendChild(clone2);
}
```

### **Bibliografia**

- [HTML vs HTML5](https://kinsta.com/blog/html-vs-html5/#what-is-html)
- [TAGS HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
