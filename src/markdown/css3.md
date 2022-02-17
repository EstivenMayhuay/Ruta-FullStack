# **CSS3**

## **Indice**

<ul class="indice">
  <li><a href="#que-es-css3">Que es CSS3?</a></li>
  <li><a href="#basic-Selectors">Basic Selectors</a></li>

  <ul class="indice">
    <li><a href="#universal-selector">Universal Selector *</a></li>
    <li><a href="#tag-selector">Type Selector (tag)</a></li>
    <li><a href="#id-selector">Id Selector</a></li>
    <li><a href="#class-selector">Class Selector</a></li>
    <li><a href="#attribute-selector">Attribute Selector</a></li>
  </ul>

  <li><a href="#combinators">Combinators</a></li>
  <li><a href="#pseudo-classes">Pseudo Classes</a></li>
  <li><a href="#linguistic-pseudo-classes">Linguistic pseudo-classes</a></li>
  <li><a href="#location-pseudo-classes">Location pseudo-classes</a></li>
  <li><a href="#pseudo-elements">Pseudo Elements</a></li>
  <li><a href="#linguistic-pseudo-classes">Linguistic pseudo-classes</a></li>
  <li><a href="#media-color-scheme">Media color-scheme</a></li>
  <li><a href="#property-color-scheme">Property color-scheme</a></li>
  
  <li class="indice__item"><a href="#">Ejercicios con CSS3</a></li>

  <ul class="indice">
    <li><a href="#menu-nav-mobile">Menu de Navegacion Mobile</a></li>
    <li><a href="#menu-nav-desktop">Menu de Navegacion Desktop</a></li>
    <li><a href="#menu-nav-responsive">Menu de Navegacion Responsive</a></li>
  </ul>
</ul>

<a id="que-es-css3"></a>

## **Que es CSS3?**

> **(Cascading Style Sheets)** es un lenguaje de estilos para otorgar diseños y vida a nuestras websites.

## **Basic Selectors**

> En css3 tenemos diferentes formas de hacer referencia a los elementos html desde css.

<a id="universal-selector"></a>

### **Universal Selector \***

> Este selector de css nos permite hacer **referencia a todos los elementos html**, pero pongamos un ejemplo. Supongamos que deseamos colocar un **color rojo a todos los elementos en nuestro body**.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Universal Selector *</title>
  </head>
  <body>
    <h1>Soy un titulo</h1>
    <p>Soy un parrafo</p>
    <span>Soy un span</span>
  </body>
</html>
```

```css
* {
  color: red;
}
```

> Puedes copiar y probar el codigo en <a href="https://codepen.io/pen/" target="_blank">codepen.io</a>

<a id="tag-selector"></a>

### **Tag Selector**

> Sino deseamos seleccionar todos los elementos con el selector universal **(\*)**, podemos seleccionar por **tags o elementos html individuales**. Por ejemplo: Vamos a poner cada elemento en particular con **un color diferente.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Type Selector</title>
  </head>
  <body>
    <h1>Soy un titulo</h1>
    <p>Soy un parrafo</p>
    <span>Soy un span</span>
  </body>
</html>
```

```css
h1 {
  color: red;
}

p {
  color: blue;
}

span {
  color: green;
}
```

<a id="id-selector"></a>

### **Id Selector**

> Este tipo de selector te permite seleccionar un elemento por su **identificador (id)**, pero recuerda que solo debemos dar estilos a un elemento ya que un **id no se puede repetirse.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Id Selector</title>
  </head>
  <body>
    <h1 id="titulo">Soy un titulo</h1>
    <p>Soy un parrafo</p>
    <span>Soy un span</span>
  </body>
</html>
```

```css
#titulo {
  color: pink;
}
```

<a id="class-selector"></a>

### **Class Selector**

> Este tipo de selector te permite seleccionar **mas de un elemento html** mediante las **clases** puedes asignarle a mas de un elemento html una clase.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Class Selector</title>
  </head>
  <body>
    <h1 class="center">Soy un titulo</h1>
    <p class="center">Soy un parrafo</p>
    <span class="center">Soy un span</span>
  </body>
</html>
```

```css
.center {
  display: block; /* elemento en bloque*/
  text-align: center;
}
```

> Un elemento en **bloque**, te permite ocupar el **100%** de la pantalla. Los elementos **en bloque son:** h1, h2, h3, h4, h5, h6, p, div.

<a id="attribute-selector"></a>

### **Attribute Selector**

> Hasta el momento sabemos que podemos seleccionar por **id, class, tag y por el selector universal**. Ahora bien existen elementos html que tienen ciertos atributos a los cuales podemos hacer referencia con **css.**

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

> Es una media feature de css que permite detectar que **tema** esta configurado por el usuario ya sea un tema **(dark o light)**.

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

> Es una propiedad css que permite indicar a la pagina en que **esquemas de colores se puede renderizar**. Los valores que tiene la property **color-scheme** son:

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

## **Ejercicios con CSS3**

<a id="menu-nav-mobile"></a>

### **Menu de Navegacion Mobile**

> Si deseas visulizar el codigo completo y su ejecucion ingresa al siguiente enlace: <a href="https://codepen.io/estivenMayhuay/pen/qBPeOXW?editors=0110" target="_blank">menu de navegacion mobile codepen</a>

> HTML5

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menu Navegacion mobile</title>
  </head>

  <body>
    <header>
      <h1>Soy Henry</h1>
    </header>

    <button class="btnMenu">
      <span class="icon-top"></span>
      <span class="icon-center"></span>
      <span class="icon-bottom"></span>
    </button>

    <nav class="content-menu">
      <ul class="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#jobs">Jobs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <main>
      <section id="home">
        <h1>Home</h1>
      </section>
      <section id="jobs">
        <h1>Jobs</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>
    </main>
  </body>
</html>
```

> CSS3

```css
:root {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  display: block;
  width: 100%;
  min-height: 100vh;
}

header {
  display: block;
  width: 100%;
  background: yellow;
  padding: 16px;
}

header > h1 {
  text-align: center;
  color: black;
  font-weight: 700;
}

/* Navigation */

.btnMenu {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  row-gap: 4px;
  width: 40px;
  height: 40px;
  background: yellow;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 99;
}

.icon-top,
.icon-center,
.icon-bottom {
  display: block;
  width: 60%;
  height: 4px;
  background: #000;
  transform: translate(0, 0);
  transition: transform 0.4s ease;
}

.active-btnMenu .icon-center {
  display: none;
}

.active-btnMenu .icon-top {
  transform: rotate(45deg) translate(4px, 2px);
  transition: transform 0.4s ease;
}

.active-btnMenu .icon-bottom {
  transform: rotate(-45deg) translate(4px, -2px);
  transition: transform 0.4s ease;
}

.content-menu {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translate(0, -100%);
  transition: transform 0.4s ease, opacity 0.4s ease;
  z-index: 98;
}

.menu {
  list-style: none;
  display: flex;
  flex-flow: column;
  row-gap: 1em;
}

.menu li a {
  color: white;
  text-decoration: none;
  font-size: 1.15em;
  font-weight: 600;
}

.active-menu {
  opacity: 1;
  transform: translate(0, 0);
  transition: transform 0.4s ease, opacity 0.4s ease;
}

/* Main */
main {
  display: block;
  width: 100%;
  height: auto;
}

section {
  display: block;
  width: 100%;
  height: 100vh;
}

section h1 {
  display: block;
  text-align: center;
  padding: 1em;
  color: white;
  font-size: 1.5em;
}

#home {
  background: rgba(255, 10, 20, 0.8);
}

#jobs {
  background: rgba(10, 255, 20, 0.8);
}

#contact {
  background: rgba(20, 10, 255, 0.8);
}
```

> Javascript

```javascript
menuHamburger(".content-menu", ".btnMenu", ".menu li a");

// menu hamburger
function menuHamburger(nav, btnMenu, links) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)) {
      d.querySelector(nav).classList.toggle("active-menu");
      d.querySelector(btnMenu).classList.toggle("active-btnMenu");
    }

    if (e.target.matches(links)) {
      d.querySelector(nav).classList.remove("active-menu");
      d.querySelector(btnMenu).classList.remove("active-btnMenu");
    }
  });
}
```

<a id="menu-nav-desktop"></a>

### **Menu de Navegacion Desktop**

> En esta seccion podras visualizar tanto el codigo HTML, CSS y JavaScript con el objetivo de realizar un menu de navegacion para desktop, puedes ver la demo en el siguiente enlace 💁: <a href="https://codepen.io/estivenMayhuay/pen/rNGPrqm?editors=1010" target="_blank">menu de navegacion desktop codepen</a>

> HTML5

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menu de Navegacion desktop</title>
  </head>

  <body>
    <header>
      <h1>Estiven M.</h1>
    </header>

    <nav class="content-menu">
      <ul class="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#jobs">Jobs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <main>
      <section id="home">
        <h1>Home</h1>
      </section>
      <section id="jobs">
        <h1>Jobs</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>
    </main>
  </body>
</html>
```

> CSS3

```css
:root {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: block;
  width: 100%;
  min-height: 100vh;
}

/* Header */

header {
  position: sticky;
  top: 0;
  left: 0;
  display: block;
  background: rgba(255, 20, 40, 1);
  padding: 1.25em 1em;
  z-index: 98;
}

header h1 {
  font-size: 1.25em;
  color: white;
  font-weight: white;
  font-weight: 600;
}

/* Navigation */

.content-menu {
  position: fixed;
  right: 1em;
  top: 1.25em;
  z-index: 99;
}

.menu {
  display: flex;
  flex-flow: row nowrap;
  column-gap: 2em;
  list-style: none;
}

.menu li a {
  color: white;
  font-size: 1.1em;
  text-decoration: none;
}

/* Main */
main {
  display: block;
  width: 100%;
  height: auto;
}

section {
  display: block;
  width: 100%;
  min-height: 100vh;
  padding: 1em 0 0 0;
}

section h1 {
  color: white;
  text-align: center;
  font-size: 1.4em;
  padding: 1em;
}

#home {
  background: rgba(50, 80, 120, 0.8);
}

#jobs {
  background: rgba(50, 255, 120, 0.8);
}

#contact {
  background: rgba(50, 200, 220, 0.8);
}
```

<a id="menu-nav-responsive"></a>

### **Menu de Navegacion Responsive**

> En este ejemplo vamos a poder unir los dos ejercicios anteriores y hacer un menu responsive, es decir que se pueda adaptar tanto a **mobiles and desktop**, puedes ver la demo aqui 👉: <a href="https://codepen.io/estivenMayhuay/pen/abLQEMO?editors=1100" target="_blank">menu de navegacion responsive codepen</a>

> HTML5

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menu de navegacion responsive</title>
  </head>

  <body>
    <header>
      <h1>Estiven M.</h1>
    </header>

    <button class="btnMenu">
      <span class="icon-top"></span>
      <span class="icon-center"></span>
      <span class="icon-bottom"></span>
    </button>

    <nav class="content-nav">
      <menu class="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#job">Job</a></li>
        <li><a href="#contact">Contact</a></li>
      </menu>
    </nav>

    <main>
      <section id="home">
        <h1>Home</h1>
      </section>
      <section id="job">
        <h1>Job</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>
    </main>
  </body>
</html>
```

> CSS3

```css
:root {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  display: block;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  background: #404040;
}

header h1 {
  font-size: 1.25em;
  color: white;
}

/* Navigation */

.btnMenu {
  --hBtnMenu: 48px;

  outline: none;
  border: none;
  position: fixed;
  right: 1em;
  bottom: 1em;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  row-gap: 4px;
  width: var(--hBtnMenu);
  height: var(--hBtnMenu);
  background: #404040;
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transform: translate(0, 0);
  transition: transform 0.5s ease;
  cursor: pointer;
  z-index: 99;
}

.btnMenu .icon-top,
.btnMenu .icon-center,
.btnMenu .icon-bottom {
  display: block;
  width: 70%;
  height: 4px;
  background: white;
}

.content-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: rgba(40, 40, 40, 0.8);
  transform: translate(0, -100%);
  transition: transform 0.5s ease;
  z-index: 98;
}

.menu {
  display: flex;
  flex-flow: column;
  row-gap: 1em;
}

.menu li {
  list-style: none;
}

.menu li a {
  text-decoration: none;
  font-size: 1.1em;
  color: white;
  font-weight: 700;
}

.active-menu {
  transform: translate(0, 0);
}

.active-btnMenu .icon-top {
  display: none;
}

.active-btnMenu .icon-center {
  transform: rotate(45deg) translate(5px, 2px);
  transition: transform 0.5s ease;
}

.active-btnMenu .icon-bottom {
  transform: rotate(-45deg) translate(3px, 0px);
  transition: transform 0.5s ease;
}

/* Main */

main {
  display: block;
  width: 100%;
  height: auto;
}

section {
  display: block;
  width: 100%;
  height: 100vh;
  padding: 1em;
}

section h1 {
  color: #404040;
  text-align: center;
}

#home {
  background: #eee;
}

#job {
  background: #ddd;
}

#contact {
  background: #ccc;
}

/* Desktop */

@media screen and (min-width: 768px) {
  header {
    justify-content: flex-start;
  }

  header h1 {
    margin: 0 0 0 1em;
  }

  /* Navigation */

  .btnMenu {
    display: none;
  }

  .content-nav {
    position: fixed;
    right: 1em;
    top: 1em;
    left: unset;
    bottom: unset;
    display: block;
    width: auto;
    height: auto;
    transform: translate(0px, 0px);
    background: transparent;
    transition: none;
  }

  .menu {
    display: flex;
    flex-flow: row;
    column-gap: 2em;
  }
}
```

> Javascript

```javascript
const d = document;

d.addEventListener("DOMContentLoaded", () => {
  menuHamburger(".content-nav", ".btnMenu", ".menu li a");
});

// function menu hamburger

function menuHamburger(navMenu, btnMenu, links) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)) {
      d.querySelector(navMenu).classList.toggle("active-menu");
      d.querySelector(btnMenu).classList.toggle("active-btnMenu");
    }

    if (e.target.matches(links)) {
      d.querySelector(navMenu).classList.remove("active-menu");
      d.querySelector(btnMenu).classList.remove("active-btnMenu");
    }
  });
}
```

## **Referencias**

<ul class="indice">
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" target="_blank">Selectores CSS</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank">Pseudo Clases</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor" target="_blank">Valores del Cursor</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank">Media Feature Dark Mode CSS3</a></li>
<li><a href="https://bluuweb.github.io/practicas/02-dark-mode/#detectar-configuracion" target="_blank">Dark Mode HTML, CSS & JS</a></li>
</ul>
