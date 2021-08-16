# CURSO HTML5

## **Indicé**

- [¿Qué es HTML?](#html1)
- [¿Qué es HTML5?](#html2)
- [Tags HTML5?](#html3)

<a id="html1"></A>

## ¿Qué es HTML?

Lenguaje de marcado de información para estructurar páginas web.

<a id="html2"></A>

## ¿Qué es HTML5?

Son un conjunto de mejoras para el lenguaje de Marcado HTML, creado por Tim Berners-Lee en 1991, en donde solo poseía 20 etiquetas y fue desarrollado para compartir información.

Entre las mejoras que trae consigo están:

- Las API'S (LocalStorage, Drag & Drop, Geo-localización, entre otras).
- Etiquetas para formularios y validación.
- Etiquetas estructurales de semántica (section, header, nav, main, footer, article).
**Si deseas saber si tú navegador es totalmente compatible con HTML5 o que carácteristicas son compatibles** visita el enlace [Test de Support HTML5](https://html5test.com/)

<a id="html3"></A>

## Tags HTML5

### Text Content (Etiquetas para el contenido del texto):

- **Figcaption:** Permite mostrar la leyenda que describe a la imágen.

- **figure:** Representa el contenedor de las imágenes

### Inline Text Semantic

- **abbr:** Representa la abreviación de una palabra Ejemplos: 

```HTML
  <abbr title="Cascading Styles Sheets">CSS</abbr>
```

- **kbd:**  Es el Keyboard input Element permite dar indicaciones sobre lo que el usuario debe presionar desde el teclado.
- **var:** Representa a las variables en una expresión matemática.
- **time:** Representa un periodo de tiempo especfifico.

### Image & Multimedia

- audio
- video
- map & area

### Embedded Content

- iframe
- picture
- source
- embed

### SVG

### MathML

### Table Content

- **caption** es un tag que permite otorgarle un titulo a la tabla
- **caption-side** permite colocar el **tag caption** en una posición **top** o **bottom**.
- **thead, tbody, tfoot** estructura básica para una tabla

### Form

- **meter** Es un etiqueta para representar un valor escalar como un level
- **optgroup** crea una agrupación de opciones dentro de un elemento ***select***
- **progress** muestra una barra de progreso

### Interactive Elements

- **details** es un tag el cual crea un widget de divulgación que tiene 2 estados ***open y close***, es decir muestra más detalle de cierta información, trabaja con la etiqueta ***summary***
- **dialog** es un elemento que representa una cuadro de diálogo o componente interactivo como una alerta, inspector o una subventana descartable.

```HTML
  <div id="boxDialog" class="dialog">
    <form method="dialog">
      <span>Elija una opción</span>
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

  let dialogBox = document.querySelector('#boxDialog'),
      btnConfirm = document.querySelector('#confirmBtn'),
      btnCancel = document.querySelector('#cancelBtn'),
      btnShowDialog = document.querySelector('#showDialogBtn');

  function onOpen(){
    dialogBox.classList.add('showModal');
  }

  function onClose(){
    if(dialogBox.classList.contains('showModal')){
      dialogBox.classList.remove('showModal');
    }
  }

  btnShowDialog.addEventListener('click', onOpen);

  btnCancel.addEventListener('click', onClose);
```
  
- **menu** Es un tag experimental, representa un grupo de comandos que un usuario puede realizar o activar ***(Experimental)***

### Web Components

- **slot** elemento HTML, que es parte de la suite de ***componentes web***, es un ***marcador de posición*** dentro de un Web Component
- **template** es la forma como se trabaja para mantener un HTML que no se debe mostrar cuando se carga una página, pero se puede ***instanciar usando javascript***, es la forma de tener un subarbol DOM dentro de un DOM inicial

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
  if ('content' in document.createElement('template')) {

    var tbody = document.querySelector("tbody");
    var template = document.querySelector('#productrow');

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

#### Bibliografía

- [HTML vs HTML5](https://kinsta.com/blog/html-vs-html5/#what-is-html)
- [TAGS HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
