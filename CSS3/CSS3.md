# CSS3

## ¿Qué es CSS3?

**(Cascading Style Sheets)** es un lenguaje de estilos para otorgar diseños a nuestras websites.

## Selectores CSS

### Basic Selectors

1. Universal Selector (*)
2. Type Selector (tag)
3. Class Selector
4. ID Selector
5. Attribute Selector

### Combinators

1. Child Combinators (>)
2. General Sibling Combinators (p ~ span)
3. Adjacent Sibling Combinators (span + p)

### Pseduo Classes

Su simbolo es **":"**, una pseudo-classe es una **palabra clave** añadida a un selector.

#### Linguistic pseudo-classes
  
- **:dir** Selecciona los elementos según la dirección de su contenido si es **rtl (rigth to left)** o **ltr (left to rigth)** y **auto = ltr**

```HTML
  <span dir="auto">Hola</span>
  <p lang="ltr">Hi</p>
  <p lang="rtl">Óla</p>
```

- **:lang** Puedo otorgar estilos según el tipo de lenguaje que se este usando Ejemplo:

```HTML
  <p lang="es">Hola</p>
  <p lang="en">Hi</p>
```

#### Location pseudo-classes

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
- **:target** Utilizada para resaltar una parte de la página a la que se ha vínculado

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

### Pseduo Elements

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

- **::after** Permite agregar un contenido después de un elemento en particular

## Bibliografia

- [Selectores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [Pseudo Clases](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [Valores del Cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)