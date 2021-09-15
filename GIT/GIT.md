# **GIT**

## **Indice**

- [¿Que es Git?](#id1)
- [Caracteristicas de GIT](#id2)
- [Comando "git init"](#id3)
- [Comando "git status"](#id4)
- [Comando "git add"](#id5)
- [Comando "git add -A"](#id6)
- [Comando "git rm --cached"](#id7)
- [Comando "git commit"](#id8)
- [Comando "git log"](#id9)
- [Mas sobre "git log"](#id10)
  - [git log -p -1](#id10-1)
  - [git log --stat](#id10-2)
  - [git log --pretty=oneline](#id10-3)
  - [git log --pretty=format](#id10-4)
- [git diff](#id11)
- [git branch newBranch](#id12)
- [git branch](#id13)
- [git checkout test](#id14)
- [git pull origin main](#id15)
- [git push -u origin main](#id16)
- [git branch -a](#id17)
- [git merge test](#id18)
- [git push origin --delete test](#id19)
- [git branch -d test](#id20)
- [git checkout index.html](#id21)
- [git rm -r --cached index.html](#id22)
- [git add index.html --patch](#id23)
- [git diff main.css](#id24)
- [git log --oneline](#id25)
- [Alias en git](#id26)
- [git diff --staged](#id27)
- [git commit --amend -m](#id28)
- [git reset HEAD](#id29)
- [git mv](#id30)
- [git rm](#id31)

<a id="id1"></a>

## **¿Que es GIT?**

Es una herramienta de control de versiones de codigo distribuida. Diseñada por Linus Torvalds.

<a id="id2"></a>

## **Caracteristicas de GIT**

- **Integridad de GIT:** Todo en GIT es verificado mediante un **Checksum (Suma de Comprobacion)**, el cual es un mecanismmo conocido como **hash SHA-1**, es una cadena de **40 caracteres hexadecimales**.

- **Los 3 Estados:** Los archivos en GIT tienes 3 estados fundamentales: **"(Committed) Confirmado"**, **"(Modified) Modificado"** y **"(Staged) Preprado"**.

- **Committed:** Implica que los archivos estan almacenados de manera segura en tu base de datos local.

- **Modified:** Implica que existen archivos modificados, pero que aun no estan confirmados a mi base de datos local.

- **Staged:** Implica que he marcado un archivo modificado en su version actual, para la proxima confirmacion.

- **3 Secciones Principales de un Proyecto GIT:** Se encuentra el **git directory**, **working directory** y **staging area**.

- **GIT directory:** Almacena los metadatos y la base de datos de objetos del un proyecto. Es lo que se copia cuando se clona un repositorio desde otra computadora.

- **working directory:** Es una copia de una version del proyecto. Los archivos se sacan de la base de datos comprimida en el git directory.

- **staging area:** Es un archivo contenido en el git directory, almacena informacion acerca de lo que ira en la proxima confirmacion.

<a id="id3"></a>

## **Comando "git init"**

Este comando me permite inicializar un proyecto en git en la cual cuando se ejecuta el comando. Automaticamente se crea una carpeta oculta llamada **.git/**.

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

Este comando tiene muchas funcionalidades entre las mas utilizadas esta el poder **tracked (rastrear)** un archivo que esta **untracked (no rastreado)**.

```git
git add index.html

```

<a id="id6"></a>

## **Comando "git add -A"**

Permite agregar todos los archivos archivos al **staging area** de forma rapida

```git
git add -A

```

Otra forma de pode agregar o rastrear nuestros archivos de forma rapida es el siguiente comando.

```git
git add .
```

<a id="id7"></a>

## **Comando "git rm --cached [file_name]"**

Este comando permite ignorar un archivo que no queremos que valla en nuestro proximo commit o fue un error. Ademas, permite que un archivo ya no sea **rastreado**

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

Este comando me muestra el historial completos de los commits realizados a lo largo de mi proyecto. Muestra informacion como: **Date, author, commiter, Message, HASH (Check Sum)**.

```git
git log

commit 7c3fc6fac278a4e971858051501c623a95823eda (HEAD -> main, origin/main, origin/HEAD)
Author: Estiven Mayhuay <developerwebhairton@gmail.com>
Date:   Tue Aug 24 08:54:53 2021 -0500

añadiendo el comando git log --oneline
```

<a id="id10"></a>

## **Mas sobre "git log"**

**git log** es un comando poderoso que nos permite ver cuales fueron los cambios realizados sobre un proyecto y quien los realizo.

<a id="id10-1"></a>

### **git log -p -count**

Este comando es muy util para revisiones de codigo cuando el proyecto es extenso. el **flag -p**  me indica que veras los commits y el **flag -2** es la cantidad de commit que pueden ser: **1, 2, 3, ..** dependiendo la cantidad de commits realizados.

```git
git log -p -2
```

<a id="id10-2"></a>

### **git log --stat**

Me permite visualizar las estadisticas en cada commit es decir, las inserciones y eliminaciones en un archivo.

```git
git log --stat

```

<a id="id10-3"></a>

### **git log --pretty=oneline**

Imprime cada confirmacion en una sola linea.

```git
git log pretty=oneline

```

<a id="id10-4"></a>

### **git log --pretty=format**

Este comando me permite **personalizar la salida de los datos de cada commit**

**Muestra el hash de confirmacion abreviados**

```git
git log --pretty=format:%h

```

**Muestra las confirmaciones padres abreviados**

```git
git log --pretty=format:%p

```

**Muestra el nombre del autor**

```git
git log --pretty=format:%an

```

**Muestra la direccion de correo del autor**

```git
git log --pretty=format:%ae

```

**Muestra la fecha de autoria**

```git
git log --pretty=format:%ae

```

**Muestra el nombre del confirmador**

```git
git log --pretty=format:%cn

```

**Muestra el correo del confirmador**

```git
git log --pretty=format:%ce

```

**Muestra el fecha de confirmacion**

```git
git log --pretty=format:%cd

```

**Muestra el asunto o mensaje del commit**

```git
git log --pretty=format:%s

```

**Otros comandos**

| Opcion | Descripccion |
| --- | --- |
| -p | Muestra el parche introducido en cada confirmacion|
| --name-only | Muestra la lista de archivos afectados |
| --relative-date | Muestra la fecha en un formato relativo ejemplo: (2 weeks ago)|

> **"Con la union de estos comandos puedo hacer lo siguiente"**

```git
git log --pretty=format:"%h %cd %cn %ce %s" --relative-date

e73f8d0 2 minutes ago Estiven Mayhuay developerwebhairton@gmail.com Definiendo los flags de git log
ae8398b 15 minutes ago Estiven Mayhuay developerwebhairton@gmail.com New information about the commands of git
7c3fc6f 8 days ago Estiven Mayhuay developerwebhairton@gmail.com añadiendo el comando git log --oneline
f52b41b 8 days ago Estiven Mayhuay developerwebhairton@gmail.com modificando el ejemplo de git add --patch
988edc9 8 days ago Estiven Mayhuay developerwebhairton@gmail.com Subiendo el curso de git
286d78b 9 days ago Estiven Mayhuay developerwebhairton@gmail.com Añadiendo mis proyectos personales
10772a1 12 days ago Estiven Mayhuay developerwebhairton@gmail.com Corrigiendo el indice de js
7894e8d 12 days ago Estiven Mayhuay developerwebhairton@gmail.com Iterators & Generators
ce789c9 13 days ago Estiven Mayhuay developerwebhairton@gmail.com corrigiendo los titulos
bc19964 13 days ago Estiven Mayhuay developerwebhairton@gmail.com Curso de terminal
2e2d68b 2 weeks ago Estiven Mayhuay developerwebhairton@gmail.com iteratos js
f010afb 2 weeks ago Estiven Mayhuay developerwebhairton@gmail.com Añadiendo el curso de HTML5
e6e2878 3 weeks ago Estiven Mayhuay developerwebhairton@gmail.com Nuevos features de CSS3 para dark mode
404b2d3 3 weeks ago Estiven Mayhuay developerwebhairton@gmail.com Ruta de aprendizaje frontend
```

<a id="id11"></a>

## **git diff**

Muestra cuales fueron los cambios que hubieron en el repositorio principal y el que esta en mi base de datos local.

```git
  git diff index.html
```

<a id="id12"></a>

## **git branch [name_branch]**

Permite crear una nueva rama aparte de la **main**, permitiendo tener una rama aparte donde puedan hacerse **pruebas**.

<a id="id13"></a>

## **git branch**

Muestra las ramas existentes.

<a id="id14"></a>

## **git checkout [name_branch]**

Permite moverse entre ramas.

<a id="id15"></a>

## **git pull origin [name_branch]**

Este comando me permite tener la utlima version del repositorio.

```git
  git pull origin main
```

<a id="id16"></a>

## **git push -u origin [name_branch]**

Este comando permite subir los cambios del repositiorio local a nuestro repositorio en **GitHub**, se puede enviar una vez hecho el **commit**.

```git
  git push -u origin main
```

> Dato: Se tienes el repositorio ya creado y realizado el commit puedes usar.

```git
  git push origin main
```

<a id="id17"></a>

## **git branch -a**

Muestra las branch's que existen de manera local y remota.

<a id="id18"></a>

## **git merge [name_branch]**

Permite unir ramas. Por ejemplo, me posiciono en la rama main y mediante el comando merge convino o uno la rama test a main.

```git
  git merge main test
```

<a id="id19"></a>

## **git push origin --delete [name_branch]**

Elimina una rama creada en github un repositorio remoto.

<a id="id20"></a>

## **git branch -d [name_branch]**

Permite borrar una rama de forma local.

<a id="id21"></a>

## **git checkout [name_file]**

Comando nos permite **reiniciar** el archivo como estaba en el repositorio inicial.

<a id="id22"></a>

## **git rm -r --cached [name_files]**

Permite borrar la carpeta y archivos del repositorio remoto.

<a id="id23"></a>

## **git add [name_file] --patch**

Permite añadir a mi commit cierta parte de codigo, es decir añadir informacion por pedacitos. las banderas **flag**. El flag **?**, me muestra mas opciones.

```git
  git add namefile.md --patch
```

<a id="id24"></a>

## **git diff [file_name]**

permite ver cuales son los cambios realizados en un archivo.

<a id="id25"></a>

## **git log --oneline**

Pemite mostrar el historial de commits simplificando lo que muestra el comando **git log**.

<a id="id26"></a>

## **Alias en git**

En git podemos crear **alias** es decir nombres cortos que nos permitan hacer llamdas a un comando que puede ser extenso.

> Creando un Alias

```git
  git config --global alias.logline "log --oneline"
```

> Llamando al Alias

```git
  git logline
```

> Listando los Alias

```git
  git config --global --list
```

> Eliminando un Alias por su nombre

```git
  git config --global --unset alias.logline
```

> Elimina todos los alias

```git
  git config --global --unset-all
```

<a id="id27"></a>

## **git diff --staged [file]**

Este comando a diferenci de **git diff [file]**, el cual solo me permite ver las diferencias de los archivos solo si estan en el working directory.

En cambio el comando **git diff --staged [file]** me permite mostrar los archivos que ya estan listos para el siguiente commit es decir que estan en el **staying area**

```git
  git diff --staged main.css
```

<a id="id27"></a>

## **git commit --amend -m**

Este comando me permite corregir el mensaje del ultimo commit

```git
  git diff --amend -m "new message"
```

<a id="id28"></a>

## **git reset HEAD**

Este comando me permite retirar los archivos de mi ultimo commit del staying area al working directory.

> Retirar todos los archivos del staying area

```git
  git reset HEAD . // first format
  git reset HEAD^  // second format
```

> Sacar un archivo en particular de staying area

```git
  git reset HEAD main.css
```

## **BIBLIOGRAFIA**

- [GIT Principiantes](https://www.youtube.com/watch?v=kEPF-MWGq1w)
- [Comandos VIM basico](https://victorhckinthefreeworld.com/2017/06/14/como-salir-del-editor-vim/)
- [Crear archivo .gitignore](https://desarrolloweb.com/articulos/archivo-gitignore.html)
