# CSS3

## **Indice**

- [CSS3](#css3)
  - [**Indice**](#indice)
  - [**¿Que es CSS3?**](#que-es-css3)
  - [**Basic Selectors**](#basic-selectors)
  - [**Combinators**](#combinators)
  - [**Pseudo Classes**](#pseudo-classes)
  - [**Linguistic pseudo-classes**](#linguistic-pseudo-classes)
  - [**Location pseudo-classes**](#location-pseudo-classes)
  - [**Pseudo Elements**](#pseudo-elements)
  - [**Media Features (prefers-color-scheme)**](#media-features-prefers-color-scheme)
  - [**Property color-scheme**](#property-color-scheme)
  - [**Bibliografia**](#bibliografia)

<a id="id1"></a>

## **¿Que es CSS3?**

**(Cascading Style Sheets)** es un lenguaje de estilos para otorgar diseños a nuestras websites.

<a id="id2"></a>

## **Basic Selectors**

1. Universal Selector (*)
2. Type Selector (tag)
3. Class Selector
4. ID Selector
5. Attribute Selector

<a id="id3"></a>

## **Combinators**

1. Child Combinators (>)
2. General Sibling Combinators (p ~ span)
3. Adjacent Sibling Combinators (span + p)

<a id="id4"></a>

## **Pseudo Classes**

Su simbolo es **":"**, una pseudo-classe es una **palabra clave** añadida a un selector.

<a id="id5"></a>

## **Linguistic pseudo-classes**

- **:dir** Selecciona los elementos segun la direccion de su contenido si es **rtl (rigth to left)** o **ltr (left to rigth)** y **auto = ltr**

```HTMLs
  <span dir="auto">Hola</span>
  <p lang="ltr">Hi</p>
  <p lang="rtl">Ola</p>
```

- **:lang** Puedo otorgar estilos segun el tipo de lenguaje que se este usando Ejemplo:

```HTML
  <p lang="es">Hola</p>
  <p lang="en">Hi</p>
```

<a id="id6"></a>

## **Location pseudo-classes**

- **:any-link || :-webkit-any-link** Permite otorgar estilos a todos los tags que tengan el atributo **href**

```HTML
  <a>Codepen</a>
  <a href="https://ed.team/">EDTeam</a>
  <a href="https://barba.js.org/">Barba.js</a>
  <a href="https://www.crehana.com/home/">Crehana</a>
```

```CSS
  a:any-link{
    color: blue; 
  } 
  a:-webkit-any-link{ 
    color: blue;
  }
```

- **:link, :visited, :hover, :active** Utilizadas en ese orden para los enlaces
- **:target** Utilizada para resaltar una parte de la pagina a la que se ha vinculado

```HTML
  <ul>
    <a href="#p1">Parrafo 1</a>
    <a href="#p2">Parrafo 2</a>
  </ul>

  <section>
    <p id="p1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </p>
    <p id="p2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </p>
  </section>
```

```CSS
  p{
    font-size: 14px;
  }

  p:target{
    color: rgba(50, 80, 250, 1);
    background: gold;
    font-size: 18px;
  }

  p:target::before{
    content: ' ► ';
    color: blue;
    font-size: 16px;
  }
```

- **:last-child, :first-child, :nth-last-child(), :nth-child()**

<a id="id7"></a>

## **Pseudo Elements**

- **attr** Permite recuperar el valor de un atributo de un determinado elemento, se puede usar con pseudoelementos.

```HTML
    <button class="btn-pen" data-name="Editar el Articulo">Editar</button>
```

```CSS
    .btn-pen{
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
      transition: .4s ease-in;
    }
    
    .btn-pen:hover::after{
      content: attr(data-name);
      position: absolute;
      top: 110%;
      left: 15%;
      width: 200px;
      line-height: 1.6rem;
      background: #ea4080;
    }
```

- **::after** Permite agregar un contenido despues de un elemento en particular

<a id="id8"></a>

## **Media Features (prefers-color-scheme)**

Es una media feature de css que permite detectar que **tema** esta configurado por el usuario ya sea un tema **(dark o light)**.

```HTML
  <body>
    <h1>Hi Estiven</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quod reiciendis eligendi quos.</p>
  </body>
```

```CSS
  body {
    --color-primary: #480506;
    --bg-primary: #fbfbfb;
  }

  // for dark theme
  @media (prefers-color-scheme: dark) {
    body {
      --color-primary: #EEEEEE;
      --bg-primary: #404040;
    }
  }

  body {
    background: var(--bg-primary);
  }

  h1, p {
    color: var(--color-primary);
    text-align: center;
  }
```

<a id="id9"></a>

## **Property color-scheme**

Es una propiedad css que permite indicar a la pagina en que **esquemas de colores se puede renderizar**

Los valores que tiene la property **color-scheme** son:

- light
- dark
- normal

```CSS
  :root {
    color-scheme: light dark;
  }
```

## **Bibliografia**

- [Selectores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [Pseudo Clases](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [Valores del Cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
- [Media Feature Dark Mode CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [Dark Mode HTML, CSS & JS](https://bluuweb.github.io/practicas/02-dark-mode/#detectar-configuracion)
