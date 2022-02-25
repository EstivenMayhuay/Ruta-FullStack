# **HTML5**

<details>
  <summary>Indice</summary>

  <li><a href="#id-html">Que es HTML?</a></li>
  <li><a href="#id-html5">Que es HTML5?</a></li>
  <li><a href="#id-sitio-web">Que es una sitio web?</a></li>
  <li><a href="#id-pagina-web">Que es una pagina web?</a></li>
  <li><a href="#structure-html">Estructura basica html</a></li>

  <details>
    <summary>Tags HTML5</summary>
    <li><a href="#tag-title">Etiquetas para titulos</a></li>
    <li><a href="#tag-parrafo">Etiquetas para parrafos</a></li>
    <li><a href="#tag-img">Etiquetas para imagenes</a></li>
    <li><a href="#other-tags">Otras etiquetas</a></li>
  </details>
</details>

<a id="id-html"></a>

## **Que es HTML?**

> HTML es un lenguaje de marcado de informacion, el cual nos permite estructurar nuestra pagina web, sus siglas significan:

<ul class="lista">
  <li><strong>Hyper Text:</strong> permite la vinculacion entre las diferentes paginas web o tambien llamadas documentos html, asi como agregar imagenes, videos y otros tipos de contenidos embebidos.</li>
  <li><strong>Markup:</strong> permite definir bajo ciertas reglas titulos, parrafos, listas y mas.</li>
  <li><strong>Language:</strong> es un tipo de lenguaje interpretado por el navegador.</li>
</ul>

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

<a id="structure-html"></a>

## **Estructura basica HTML**

> Una pagina web tiene la siguiente estructura basica

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Mi primera pagina web</title>
  </head>
  <body>
    <h1>HTML5</h1>
  </body>
</html>
```

> En html se trabaja con **tags o etiquetas**, las cuales te permiten definir si usaras un titulo, una imagen, un video, parrafos, entre otros. Dichos tags tienen **1 tag de apertura** y **1 tag de cierre**. Por ejemplo:

```html
<p>Hola soy un parrafo</p>
```

> El tag de apertura tiene el siguiente simbolo **<>** y el tag de cierre es el siguiente **</>**, tiene una barra inclinada o llamada barra diagonal o el simbolo de division. Ahora bien, existen algunos tags que no tienen un tag de cierre como el siguiente:

```html
<img src="migato.png" alt="soy una imagen" />
```

## **Tags HTML5**

<a id="tag-title"></a>

### **Etiquetas para Titulos**

> Este tipo de etiquetas nos sirven para representar el tema principal de nuestro sitio web, podemos usarlos para subtitulos y para titulos y van desde el **h1** al **h2**

```html
<h1>Soy un titulo</h1>
<h2>Soy un titulo</h2>
<h3>Soy un titulo</h3>
<h4>Soy un titulo</h4>
<h5>Soy un titulo</h5>
<h6>Soy un titulo</h6>
```

<a id="tag-parrafo"></a>

### **Etiquetas para Parrafos**

> Este tipo de etiqueta nos permite definir parrafos o texto concretamente.

```html
<p>
  Jehovah is the best friend that you need, never forget that jehovah love you.
</p>
```

<a id="tag-img"></a>

### **Etiquetas para Imagenes**

> Este tipo de etiqueta como su nombre lo dice nos permite agregar una imagen a nuestro sitio web, la cual puede tener un formato como **png, jpg, jpeg, gif, etc**.

```html
<img src="img/myimage.png" alt="gatito feliz" />
```

> Esta etiqueta cuenta con **atributos**, los cuales son: **src** y **alt**

<ul class="lista">
  <li><strong>src:</strong> dicho atributo permite colocar la ruta en donde se encuentra nuestra imagen.</li>
  <li><strong>alt:</strong> este atributo permite agregarle un nombre a esa imagen para que sea indexada por los navegadores, ayudando a su posicionamiento.</li>
</ul>

<a id="other-tags"></a>

### **Otras Etiquetas**

> Eso no es todo siguen existiendo otras etiquetas para diferentes propositos. Por ejemplo:

> **Etiquetas contenedoras**

```html
<!-- El contenedor es el tag div -->
<div>
  <h1>Estiven Mayhuay</h1>
  <p>Programador Autodidacta</p>
</div>
```

> **Etiquetas para listas ordenadas**

```html
<ol>
  <li>Limpiar mi cuarto</li>
  <li>Alimentar a mi perro</li>
</ol>
```

> **Etiquetas para listas desordenadas**

```html
<ul>
  <li>Limpiar mi cuarto</li>
  <li>Alimentar a mi perro</li>
</ul>
```

> Para mayor informacion y una lista mas detallada puedes visitar el siguiente enlace <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank">Lista completa de etiquetas html</a>

## **Referencias**

<ul class="indice">
  <li><a href="https://kinsta.com/blog/html-vs-html5/#what-is-html" target="_blank">HTML vs HTML5</a>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank">Tags HTML5</a></li>
</ul>
