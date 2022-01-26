# **HTML5**

## **Indice**

<ul class="indice">
  <li><a href="#id-html">Que es HTML?</a></li>
  <li><a href="#id-html5">Que es HTML5?</a></li>
  <li><a href="#id-pagina-web">Que es una pagina web?</a></li>
  <li><a href="#id-sitio-web">Que es una sitio web?</a></li>
  <li><a href="#id-tags-html5">Tags HTML5</a></li>
</ul>

<a id="id-html"></a>

## **Que es HTML?**

> Lenguaje de marcado de informacion para estructurar paginas web.

<a id="id-html5"></a>

## **Que es HTML5?**

> Son un conjunto de mejoras para el lenguaje de Marcado HTML, creado por Tim Berners-Lee en 1991, en donde solo poseia 20 etiquetas y fue desarrollado para compartir informacion.

> Entre las mejoras que trae consigo estan:

<ul class="lista">
  <li>Las API'S (LocalStorage, Drag & Drop, Geo-localizacion, entre otras).</li>
  <li>Etiquetas para formularios y validacion.</li>
  <li>
    Etiquetas estructurales de semantica (section, header, nav, main, footer, article). <strong>Si deseas saber si tu navegador es totalmente compatible con HTML5 o que caracteristicas son compatibles</strong>visita el enlace <a href="https://html5test.com/" target="_blank">Test de Support HTML5</a>
  </li>
</ul>

<a id="id-pagina-web"></a>

## **Que es una pagina web?**

> Una pagina web es un **documento html**, que es parte de un contenido mucho mas ampliio. Por ejemplo: La intro del sitio web de soyheny es una **web page**

<a id="id-sitio-web"></a>

## **Que es un sitio web?**

> Son un conjunto de paginas web **documentos html**, conectados entre si. Por ejemplo: Toda la plataforma de https://www.soyhenry.com/

<a id="id-tags-html5"></a>

## **Tags HTML5**

### **Text Content (Etiquetas para el contenido del texto)**

<ul class="lista">
  <li><strong>Figcaption</strong>: Permite mostrar la leyenda que describe a la imagen.</li>
  <li><strong>figure</strong>: Representa el contenedor de las imagenes</li>
</ul>

### **Inline Text Semantic**

<ul class="lista">
  <li><strong>abbr:</strong> Representa la abreviacion de una palabra Ejemplos:</li>
  <li><strong>kbd:</strong> Es el Keyboard input Element permite dar indicaciones sobre lo que el usuario debe presionar desde el teclado.</li>
  <li><strong>var:</strong> Representa a las variables en una expresion matematica.</li>
  <li><strong>time:</strong> Representa un periodo de tiempo especfifico.</li>
</ul>

## **Image & Multimedia**

<ul class="lista">
  <li>audio</li>
  <li>video</li>
  <li>map & area</li>
</ul>

## **Embedded Content**

<ul class="lista">
  <li>iframe</li>
  <li>picture</li>
  <li>source</li>
  <li>embed</li>
</ul>

## **Table Content**

<ul class="lista">
  <li><strong>caption</strong> es un tag que permite otorgarle un titulo a la tabla.</li>
  <li><strong>caption-side</strong> permite colocar el <strong>tag caption</strong> en una posicion <strong>top</strong> o <strong>bottom</strong>.</li>
  <li><strong>thead, tbody, tfoot</strong> estructura basica para una tabla.</li>
</ul>

## **Form**

<ul class="lista">
  <li><strong>meter</strong> es un etiqueta para representar un valor escalar como un level.</li>
  <li><strong>optgroup</strong> crea una agrupacion de opciones dentro de un elemento <strong>select.</strong></li>
  <li><strong>progress</strong> muestra una barra de progreso.</li>
</ul>

## **Interactive Elements**

<ul class="lista">
  <li><strong>details</strong> es un tag el cual crea un widget de divulgacion que tiene 2 estados <strong>open y close</strong>, es decir muestra mas detalle de cierta informacion, trabaja con la etiqueta <strong>summary</strong></li>
  <li><strong>dialog</strong> es un elemento que representa una cuadro de dialogo o componente interactivo como una alerta, inspector o una subventana descartable.</li>

> HTML5

```html
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

> CSS3

```css
body {
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 50px 0 0 0;
}

.dialog {
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

.showModal {
  display: block;
}
```

> Javascript

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

<li><strong>menu</strong> Es un tag experimental, representa un grupo de comandos que un usuario puede realizar o activar <strong>(Experimental)</strong>

</ul>

## **Web Components**

<ul class="lista">
  <li><strong>slot</strong> elemento HTML, que es parte de la suite de <strong>componentes web</strong>, es un <strong>marcador de posicion</strong> dentro de un Web Component.</li>
  <li><strong>template</strong> es la forma como se trabaja para mantener un HTML que no se debe mostrar cuando se carga una pagina, pero se puede <strong>instanciar usando javascript</strong>, es la forma de tener un subarbol DOM dentro de un DOM inicial.</li>

> HTML5

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

> Javascript

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

</ul>

## **Referencias**

<ul class="indice">
  <li><a href="https://kinsta.com/blog/html-vs-html5/#what-is-html" target="_blank">HTML vs HTML5</a>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank">Tags HTML5</a></li>
</ul>
