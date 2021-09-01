# **GIT**

## **Indice**

- [¿Qué es Git?](#id1)
- [Carácteristicas de GIT](#id2)
- [Comando "git init"](#id3)
- [Comando "git status"](#id4)
- [Comando "git add"](#id5)
- [Comando "git add -A"](#id6)
- [Comando "git rm --cached"](#id7)
- [Comando "git commit"](#id8)
- [Comando "git log"](#id9)
- [Más sobre "git log"](#id10)
  - [git log -p -1](#id10-1)
  - [git log --stat](#id10-2)
  - [git log --pretty=oneline](#id10-3)
  - [git log --pretty=format](#id10-4)

## **¿Qué es GIT?**

Es una herramienta de control de versiones de código distribuida. Diseñada por Linus Torvalds.

## **Carácteristicas de GIT**

- **Integridad de GIT:** Todo en GIT es verificado mediante un **Checksum (Suma de Comprobación)**, el cual es un mecanismmo conocido como **hash SHA-1**, es una cadena de **40 carácteres hexadecimales**.

- **Los 3 Estados:** Los archivos en GIT tienes 3 estados fundamentales: **"(Committed) Confirmado"**, **"(Modified) Modificado"** y **"(Staged) Preprado"**.

- **Committed:** Implica que los archivos están almacenados de manera segura en tú base de datos local.

- **Modified:** Implica que existen archivos modificados, pero que aún no están confirmados a mi base de datos local.

- **Staged:** Implica que he marcado un archivo modificado en su versión actual, para la próxima confirmación.

- **3 Secciones Principales de un Proyecto GIT:** Se encuentra el **git directory**, **working directory** y **staging area**.

- **GIT directory:** Almacena los metadatos y la base de datos de objetos del un proyecto. Es lo que se copia cuando se clona un repositorio desde otra computadora.

- **working directory:** Es una copia de una versión del proyecto. Los archivos se sacan de la base de datos comprimida en el git directory.

- **staging area:** Es un archivo contenido en el git directory, almacena información acerca de lo que irá en la próxima confirmación.

<a id="id3"></a>

## **Comando "git init"**

Este comando me permite inicializar un proyecto en git en la cual cuando se ejecuta el comando. Automaticaente se crea una carpeta oculta llamada **.git/**.

```git
git init

```

<a id="id4"></a>

## **Comando "git status"**

El comando me muestra el estado de mis archivos como por ejemplo: archivos sin rastrear, archivos eliminados, archivos en el working directory, staying area y listos para el siguiente commit.

```git
git status

On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   GIT/GIT.md

no changes added to commit (use "git add" and/or "git commit -a")
```

<a id="id5"></a>

## **Comando "git add [name_file]"**

Este comando tiene muchas funcionalidades entre las más utilizadas esta el poder **tracked (rastrear)** un archivo que esta **untracked (no rastreado)**.

```git
git add index.html

```

<a id="id6"></a>

## **Comando "git add -A"**

Permite agregar todos los archivos archivos al **staging area** de forma rápida

```git
git add -A

```

Otra forma de pode agregar o rastrear nuestros archivos de forma rápida es el siguiente comando.

```git
git add .
```

<a id="id7"></a>

## **Comando "git rm --cached [file_name]"**

Este comando permite ignorar un archivo que no queremos que valla en nuestro próximo commit o fue un error. Además, permite que un archivo ya no sea **rastreado**

```git
git rm --cached main.css
```

<a id="id8"></a>

## **Comando "git commit -m message[string]"**

Permite guardar en la base de datos local el estado de nuestro proyecto, es decir los cambios que han habido, es adecuado **agregar un mensaje** a nuestro **commit**.

```git
git commit -m "my first project"
```

<a id="id9"></a>

## **Comando "git log"**

Este comando me muestra el historial completos de los commits realizados a lo largo de mi proyecto. Muestra información como: **Date, author, commiter, Message, HASH (Check Sum)**.

```git
git log

commit 7c3fc6fac278a4e971858051501c623a95823eda (HEAD -> main, origin/main, origin/HEAD)
Author: Estiven Mayhuay <developerwebhairton@gmail.com>
Date:   Tue Aug 24 08:54:53 2021 -0500

añadiendo el comando git log --oneline
```

<a id="id10"></a>

## **Más sobre "git log"**

**git log** es un comando poderoso que nos permite ver cuales fueron los cambios realizados sobre un proyecto y quién los realizó.

<a id="id10-1"></a>

### **git log -p -count**

Este comando es muy útil para revisiones de código cuando el proyecto es extenso. el **flag -p**  me indica que veré los commits y el **flag -2** es la cantidad de commit que pueden ser: **1, 2, 3, ..** dependiendo la cantidad de commits realizados.

```git
git log -p -2
```

<a id="id10-2"></a>

### **git log --stat**

Me permite visualizar las estádisticas en cada commit es decir, las inserciones y eliminaciones en un archivo.

```git
git log --stat

```

<a id="id10-3"></a>

### **git log --pretty=oneline**

Imprime cada confirmación en una sola linea.

```git
git log pretty=oneline

```

<a id="id10-4"></a>

### **git log --pretty=format**

Este comando me permite **personalizar la salida de los datos de cada commit**

**Muestra el hash de confirmación abreviados**

```git
git log pretty=format: %h

```

**Muestra las confirmaciones padres abreviados**

```git
git log pretty=format: %p

```

**Muestra el nombre del autor**

```git
git log pretty=format: %an

```

**Muestra la dirección de correo del autor**

```git
git log pretty=format: %ae

```

**Muestra la fecha de autoria**

```git
git log pretty=format: %ae

```

**Muestra el nombre del confirmador**

```git
git log pretty=format: %cn

```

**Muestra el correo del confirmador**

```git
git log pretty=format: %ce

```

**Muestra el fecha de confirmación**

```git
git log pretty=format: %cd

```

**Muestra el asunto o mensaje del commit**

```git
git log pretty=format: %s

```

**Otros comandos**

| Opción | Descripccion |
| --- | --- |
| -p | Muestra el parche introducido en cada confirmación|
| --name-only | Muestra la lista de archivos afectados |
| --relative-date | Muestra la fecha en un formato relativo ejemplo: (2 weeks ago)|

1. **git diff:** Muestra cuales fueron los cambios que hubierón en el repositorio principal y el que esta en mi base de datos local
2. **git branch nombre_rama:** Permite crear una nueva rama aparte de la **main**, permitiendo tener una rama aparte donde puedan hacerse **pruebas**
3. **git branch:** Me muestra las **ramas existentes**
4. **git checkout nombre__rama:** Permite moverme de una rama a otra
5. **git pull origin (nombre de la rama -> main || test)** Este comando me permite tener la utlima versión del repositorio

```git
  git pull origin main
```

<a id="id4"></a>
13. **git push -u origin (nombre de la rama -> main || test)** Este comando permite subir los cambios que tenemos en el local a nuestro repositorio en ***GitHub**, se puede enviar una vez hecho el ***commit***.
14. **git branch -a** Me muestra todas las branch's ***ramas** que hay de manera ***local y remota***.
15. **git merge [rama a absorber]** permite unir una rama creada con la rama ***main o master***.

```git
  C:\users\estiv\desktop\prueba01 (main)
  git merge test
```

16. **git push origin --delete [name branch]** permite eliminar una rama de forma remota, mas no local

```git
  C:\users\estiv\desktop\prueba01 (main)
  git push origin --delete test
```

17. **git branch -d [name branch]** permite borrar una rama de forma local

```git
  C:\users\estiv\desktop\prueba01 (main)
  git branch -d test
```

18. **git checkout [nombre del archivo]**  este comando nos permite ***reiniciar*** el archivo como estaba en el repositorio inicial

```git
  C:\users\estiv\desktop\prueba01 (main)
  git checkout index.html
```

19. **git commit --amend**
20. **git log --stat** me permite mostrar los archivos que fuerón modificados en cada commit y sus estádisticas.
21. **git reflog** muestra el historial completo de nuestra branch incluido los amends y los commits
22. **git diff codigoCommit1 codigoCommit2** el comando diff también permite comparar los cambios que hubo en los archivos en diferentes commits
23. **git rm -r --cached node_modules** permite borrar la carpeta node_modules que estaban en mi repositorio

## git add [name_file] --patch

Permite añadir a mi commit cierta parte de código, es decir añadir información por pedacitos. las banderas **flag**. El flag **?**, me muestra más opciones.

```git
  git add namefile.md --patch
```

## git diff [file_name]

permite ver cuales son los cambios realizados en un archivo.

## git log --oneline

Pemite mostrar el historial de commits simplificando lo que muestra el comando **git log**

### BIBLIOGRAFIA

- [GIT Principiantes](https://www.youtube.com/watch?v=kEPF-MWGq1w)
- [Comandos VIM básico](https://victorhckinthefreeworld.com/2017/06/14/como-salir-del-editor-vim/)
- [Crear archivo .gitignore](https://desarrolloweb.com/articulos/archivo-gitignore.html)
