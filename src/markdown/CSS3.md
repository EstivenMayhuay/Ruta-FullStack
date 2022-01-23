# **CSS3**

## **Indice**

<ul class="indice">
  <li><a href="#que-es-css3">Que es CSS3?</a></li>
  <li><a href="#basic-Selectors">Basic Selectors</a></li>
  <li><a href="#combinators">Combinators</a></li>
  <li><a href="#pseudo-classes">Pseudo Classes</a></li>
  <li><a href="#linguistic-pseudo-classes">Linguistic pseudo-classes</a></li>
  <li><a href="#location-pseudo-classes">Location pseudo-classes</a></li>
  <li><a href="#pseudo-elements">Pseudo Elements</a></li>
  <li><a href="#linguistic-pseudo-classes">Linguistic pseudo-classes</a></li>
  <li><a href="#media-color-scheme">Media color-scheme</a></li>
  <li><a href="#media-color-scheme">Media color-scheme</a></li>
  <li><a href="#">Ejercicios con CSS3</a></li>

  <ul class="indice">
    <li><a href="#menu-nav-mobile">Menu de Navegacion Mobile</a></li>
    <li><a href="#menu-nav-desktop">Menu de Navegacion Desktop</a></li>
    <li><a href="#menu-nav-responsive">Menu de Navegacion Responsive</a></li>
  </ul>
</ul>

<a id="que-es-css3"></a>

## **Que es CSS3?**

> **(Cascading Style Sheets)** es un lenguaje de estilos para otorgar diseños y vida a nuestras websites.

<a id="basic-Selectors"></a>

## **Basic Selectors**

<ul class="lista">
  <li>Universal Selector (\*)</li>
  <li>Type Selector (tag)</li>
  <li>Class Selector</li>
  <li>ID Selector</li>
  <li>Attribute Selector</li>
</ul>

<a id="combinators"></a>

## **Combinators**

<ul class="lista">
  <li>Child Combinators (>)</li>
  <li>General Sibling Combinators (p ~ span)</li>
  <li>Adjacent Sibling Combinators (span + p)</li>
</ul>

<a id="pseudo-classes"></a>

## **Pseudo Classes**

> Su simbolo es **":"**, una pseudo-classe es una **palabra clave** añadida a un selector.

<a id="linguistic-pseudo-classes"></a>

## **Linguistic pseudo-classes**

<ul class="lista">
  <li><strong>:dir</strong> Selecciona los elementos segun la direccion de su contenido si es <strong>rtl (rigth to left)</strong> o <strong>ltr (left to rigth)</strong> y <strong>auto = ltr</strong></li>

```html
<span dir="auto">Hola</span>
<p lang="ltr">Hi</p>
<p lang="rtl">Ola</p>
```

  <li><strong>:lang</strong> Puedo otorgar estilos segun el tipo de lenguaje que se este usando Ejemplo:</li>

```html
<p lang="es">Hola</p>
<p lang="en">Hi</p>
```

</ul>

<a id="location-pseudo-classes"></a>

## **Location pseudo-classes**

<ul class="lista">
  <li><strong>:any-link || :-webkit-any-link</strong> Permite otorgar estilos a todos los tags que tengan el atributo <strong>href</strong></li>

> HTML5

```html
<a>Codepen</a>
<a href="https://ed.team/">EDTeam</a>
<a href="https://barba.js.org/">Barba.js</a>
<a href="https://www.crehana.com/home/">Crehana</a>
```

> CSS3

```css
a:any-link {
  color: blue;
}
a:-webkit-any-link {
  color: blue;
}
```

  <li><strong>:link, :visited, :hover, :active</strong> Utilizadas en ese orden para los enlaces.</li>
  <li><strong>:target</strong> Utilizada para resaltar una parte de la pagina a la que se ha vinculado.</li>

> HTML5

```html
<ul>
  <a href="#p1">Parrafo 1</a>
  <a href="#p2">Parrafo 2</a>
</ul>

<section>
  <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
  <p id="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
</section>
```

> CSS3

```css
p {
  font-size: 14px;
}

p:target {
  color: rgba(50, 80, 250, 1);
  background: gold;
  font-size: 18px;
}

p:target::before {
  content: " ► ";
  color: blue;
  font-size: 16px;
}
```

  <li><strong>:last-child, :first-child, :nth-last-child(), :nth-child()</strong></li>
</ul>

<a id="pseudo-elements"></a>

## **Pseudo Elements**

<ul class="lista">
  <li><strong>attr</strong> permite recuperar el valor de un atributo de un determinado elemento, se puede usar con pseudoelementos.</li>

> HTML5

```html
<button class="btn-pen" data-name="Editar el Articulo">Editar</button>
```

> CSS3

```css
.btn-pen {
  position: relative;
  display: block;
  background: #8040ea;
  color: white;
  outline: none;
  border: none;
  padding: 10px 20px;
  margin: 2rem auto;
  box-shadow: 0 4px 4px rgba(64, 64, 64, 0.25);
  cursor: help;
  transition: 0.4s ease-in;
}

.btn-pen:hover::after {
  content: attr(data-name);
  position: absolute;
  top: 110%;
  left: 15%;
  width: 200px;
  line-height: 1.6rem;
  background: #ea4080;
}
```

  <li><strong>::after</strong> Permite agregar un contenido despues de un elemento en particular.</li>
</ul>

<a id="media-color-scheme"></a>

## **Media Features (prefers-color-scheme)**

Es una media feature de css que permite detectar que **tema** esta configurado por el usuario ya sea un tema **(dark o light)**.

> HTML5

```html
<body>
  <h1>Hi Estiven</h1>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quod
    reiciendis eligendi quos.
  </p>
</body>
```

> CSS3

```css
body {
  --color-primary: #480506;
  --bg-primary: #fbfbfb;
}

/* for dark theme */
@media (prefers-color-scheme: dark) {
  body {
    --color-primary: #eeeeee;
    --bg-primary: #404040;
  }
}

body {
  background: var(--bg-primary);
}

h1,
p {
  color: var(--color-primary);
  text-align: center;
}
```

<a id="property-color-scheme"></a>

## **Property color-scheme**

Es una propiedad css que permite indicar a la pagina en que **esquemas de colores se puede renderizar**

Los valores que tiene la property **color-scheme** son:

<ul class="lista">
  <li>light</li>
  <li>dark</li>
  <li>normal</li>
</ul>

> CSS3

```css
:root {
  color-scheme: light dark;
}
```

<a id="menu-nav-mobile"></a>

## **Ejercicios con CSS3**

### **Menu de Navegacion Desktop**

> Si deseas visulizar el codigo completo y su ejecucion ingresa al siguiente enlace: [menu de navegacion mobile codepen](https://codepen.io/estivenMayhuay/pen/qBPeOXW?editors=0110)

> HTML5

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Navegacion Mobile</title>
  </head>
  <body>
    <h1>Hola Mundo</h1>
  </body>
</html>
```

> CSS3

### **Menu de Navegacion Responsive**

## **Referencias**

<ul class="indice">
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors">Selectores CSS</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">Pseudo Clases</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor">Valores del Cursor</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme">Media Feature Dark Mode CSS3</a></li>
<li><a href="https://bluuweb.github.io/practicas/02-dark-mode/#detectar-configuracion">Dark Mode HTML, CSS & JS</a></li>
</ul>
