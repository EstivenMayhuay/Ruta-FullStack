# **GIT**

## **Indice**

<ul class="indice">
  <li><a href="#que-es-git">Que es Git?</a></li>
  <li><a href="#caracteristicas-git">Caracteristicas de Git</a></li>
  <li><a href="#git-init">git init</a></li>
  <li><a href="#git-status">git status</a></li>
  <li><a href="#git-add">git add</a></li>
  <li><a href="#git-add-A">git add -A</a></li>
  <li><a href="#git-rm-cached">git rm --cached</a></li>
  <li><a href="#git-commit">git commit</a></li>
  <li><a href="#git-log">git log</a></li>
  <li><a href="#git-log-more">Mas sobre git log</a></li>

  <ul class="indice">
    <li><a href="#git-log-p-1">git log -p -1</a></li>
    <li><a href="#git-log-stat">git log --stat</a></li>
    <li><a href="#git-log-pretty-oneline">git log --pretty=oneline</a></li>
    <li><a href="#git-log-pretty-format">git log --pretty=format</a></li>
  </ul>

  <li><a href="#git-diff">git diff</a></li>
  <li><a href="#git-branch-newBranch">git branch newBranch</a></li>
  <li><a href="#git-branch">git branch</a></li>
  <li><a href="#git-checkout-test">git checkout test</a></li>
  <li><a href="#git-pull-origin-main">git pull origin main</a></li>
  <li><a href="#git-push-u-origin-main">git push -u origin main</a></li>
  <li><a href="#git-branch-a">git branch -a</a></li>
</ul>

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
- [git checkout -b [name_branch]](#id30)
- [Union de ramas en git](#id31)
  - [git merge](#id31-1)
  - [git rebase](#id31-2)
  - [git merge VS git rebase](#id31-3)
- [git fetch](#id32)
- [git pull vs git fetch](#id33)

<a id="#que-es-git"></a>

## **¿Que es GIT?**

> Es una herramienta de control de versiones de codigo distribuida. Diseñada por Linus Torvalds.

<a id="caracteristicas-git"></a>

## **Caracteristicas de GIT**

<ul class="lista">
  <li><strong>Integridad de GIT:</strong> Todo en GIT es verificado mediante un <strong>Checksum (Suma de Comprobacion)</strong>, el cual es un mecanismmo conocido como <strong>hash SHA-1</strong>, es una cadena de <strong>40 caracteres hexadecimales</strong>.</li>
  <li><strong>Los 3 Estados:</strong> Los archivos en GIT tienes 3 estados fundamentales: <strong>"(Committed) Confirmado"</strong>, <strong>"(Modified) Modificado"</strong> y <strong>"(Staged) Preprado"</strong>.</li>
  <li><strong>Committed:</strong> Implica que los archivos estan almacenados de manera segura en tu base de datos local.</li>
  <li><strong>Modified:</strong> Implica que existen archivos modificados, pero que aun no estan confirmados a mi base de datos local.</li>
  <li><strong>Staged:</strong> Implica que he marcado un archivo modificado en su version actual, para la proxima confirmacion.</li>
  <li><strong>3 Secciones Principales de un Proyecto GIT:</strong> Se encuentra el <strong>git directory</strong>, <strong>working directory</strong> y <strong>staging area</strong>.</li>
  <li><strong>GIT directory:</strong> Almacena los metadatos y la base de datos de objetos del un proyecto. Es lo que se copia cuando se clona un repositorio desde otra computadora.</li>
  <li><strong>working directory:</strong> Es una copia de una version del proyecto. Los archivos se sacan de la base de datos comprimida en el git directory.</li>
  <li><strong>staging area:</strong> Es un archivo contenido en el git directory, almacena informacion acerca de lo que ira en la proxima confirmacion.</li>
</ul>

<a id="git-init"></a>

## **Comando "git init"**

> Este comando me permite inicializar un proyecto en git en la cual cuando se ejecuta el comando. Automaticamente se crea una carpeta oculta llamada **.git/**.

```bash
$ git init
```

<a id="git-status"></a>

## **Comando "git status"**

> El comando me muestra el estado de mis archivos como por ejemplo: archivos sin rastrear, archivos eliminados, archivos en el working directory, staying area y listos para el siguiente commit.

```bash
$ git status

On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   GIT/GIT.md

no changes added to commit (use "git add" and/or "git commit -a")
```

<a id="git-add"></a>

## **Comando "git add [name_file]"**

> Este comando tiene muchas funcionalidades entre las mas utilizadas esta el poder **tracked (rastrear)** un archivo que esta **untracked (no rastreado)**.

```bash
$ git add index.html
```

<a id="git-add-A"></a>

## **Comando "git add -A"**

> Permite agregar todos los archivos archivos al **staging area** de forma rapida

```bash
$ git add -A
```

> Otra forma de pode agregar o rastrear nuestros archivos de forma rapida es el siguiente comando.

```bash
git add .
```

<a id="git-rm-cached"></a>

## **Comando "git rm --cached [file_name]"**

> Este comando permite ignorar un archivo que no queremos que valla en nuestro proximo commit o fue un error. Ademas, permite que un archivo ya no sea **rastreado**

```bash
$ git rm --cached main.css
```

<a id="git-commit"></a>

## **Comando "git commit -m message[string]"**

> Permite guardar en la base de datos local el estado de nuestro proyecto, es decir los cambios que han habido, es adecuado **agregar un mensaje** a nuestro **commit**.

```bash
$ git commit -m "my first project"
```

<a id="git-log"></a>

## **Comando "git log"**

> Este comando me muestra el historial completos de los commits realizados a lo largo de mi proyecto. Muestra informacion como: **Date, author, commiter, Message, HASH (Check Sum)**.

```bash
$ git log

commit 7c3fc6fac278a4e971858051501c623a95823eda (HEAD -> main, origin/main, origin/HEAD)
Author: Estiven Mayhuay <developerwebhairton@gmail.com>
Date:   Tue Aug 24 08:54:53 2021 -0500

añadiendo el comando git log --oneline
```

<a id="git-log-more"></a>

## **Mas sobre "git log"**

> **git log** es un comando poderoso que nos permite ver cuales fueron los cambios realizados sobre un proyecto y quien los realizo.

<a id="git-log-p-1"></a>

### **git log -p -count**

> Este comando es muy util para revisiones de codigo cuando el proyecto es extenso. el **flag -p** me indica que veras los commits y el **flag -2** es la cantidad de commit que pueden ser: **1, 2, 3, ..** dependiendo la cantidad de commits realizados.

```bash
$ git log -p -2
```

<a id="git-log-stat"></a>

### **git log --stat**

> Me permite visualizar las estadisticas en cada commit es decir, las inserciones y eliminaciones en un archivo.

```bash
$ git log --stat
```

<a id="git-log-pretty-oneline"></a>

### **git log --pretty=oneline**

> Imprime cada confirmacion en una sola linea.

```bash
$ git log pretty=oneline
```

<a id="git-log-pretty-format"></a>

### **git log --pretty=format**

> Este comando me permite **personalizar la salida de los datos de cada commit**

> **Muestra el hash de confirmacion abreviados**

```bash
$ git log --pretty=format:%h
```

> **Muestra las confirmaciones padres abreviados**

```bash
$ git log --pretty=format:%p
```

> **Muestra el nombre del autor**

```bash
$ git log --pretty=format:%an
```

> **Muestra la direccion de correo del autor**

```bash
$ git log --pretty=format:%ae
```

> **Muestra la fecha de autoria**

```bash
$ git log --pretty=format:%ae
```

> **Muestra el nombre del confirmador**

```bash
$ git log --pretty=format:%cn
```

> **Muestra el correo del confirmador**

```bash
$ git log --pretty=format:%ce
```

> **Muestra el fecha de confirmacion**

```bash
$ git log --pretty=format:%cd
```

> **Muestra el asunto o mensaje del commit**

```bash
$ git log --pretty=format:%s
```

> **Otros comandos**

| Opcion          | Descripccion                                                   |
| --------------- | -------------------------------------------------------------- |
| -p              | Muestra el parche introducido en cada confirmacion             |
| --name-only     | Muestra la lista de archivos afectados                         |
| --relative-date | Muestra la fecha en un formato relativo ejemplo: (2 weeks ago) |

> **"Con la union de estos comandos puedo hacer lo siguiente"**

```bash
$ git log --pretty=format:"%h %cd %cn %ce %s" --relative-date

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

<a id="git-diff"></a>

## **git diff**

> Muestra cuales fueron los cambios que hubieron en el repositorio principal y el que esta en mi base de datos local.

```bash
$ git diff index.html
```

<a id="id12"></a>

## **git branch [name_branch]**

> Permite crear una nueva rama aparte de la **main**, permitiendo tener una rama aparte donde puedan hacerse **pruebas**.

<a id="id13"></a>

## **git branch**

> Muestra las ramas existentes.

<a id="id14"></a>

## **git checkout [name_branch]**

> Permite moverse entre ramas.

<a id="id15"></a>

## **git pull origin [name_branch]**

> Este comando me permite tener la utlima version del repositorio.

```bash
$ git pull origin main
```

<a id="id16"></a>

## **git push -u origin [name_branch]**

> Este comando permite subir los cambios del repositiorio local a nuestro repositorio en **GitHub**, se puede enviar una vez hecho el **commit**.

```bash
$ git push -u origin main
```

> Dato: Se tienes el repositorio ya creado y realizado el commit puedes usar.

```bash
$ git push origin main
```

<a id="id17"></a>

## **git branch -a**

> Muestra las branch's que existen de manera local y remota.

<a id="id18"></a>

## **git merge [name_branch]**

> Permite unir ramas. Por ejemplo, me posiciono en la rama main y mediante el comando merge convino o uno la rama test a main.

```bash
$ git merge main test
```

<a id="id19"></a>

## **git push origin --delete [name_branch]**

> Elimina una rama creada en github un repositorio remoto.

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

```bash
$ git add namefile.md --patch
```

<a id="id24"></a>

## **git diff [file_name]**

permite ver cuales son los cambios realizados en un archivo.

<a id="id25"></a>

## **git log --oneline**

Pemite mostrar el historial de commits simplificando lo que muestra el comando **git log**.

<a id="id26"></a>

## **Alias en git**

En git podemos crear un **alias**, es decir nombres cortos que nos permitan hacer llamdas a un comando que puede ser extenso.

> Creando un Alias

```bash
$ git config --global alias.logline "log --oneline"
```

> Llamando al Alias

```bash
$ git logline
```

> Listando los Alias

```bash
$ git config --global --list
```

> Eliminando un Alias por su nombre

```bash
$ git config --global --unset alias.logline
```

> Elimina todos los alias

```bash
$ git config --global --unset-all
```

<a id="id27"></a>

## **git diff --staged [file]**

Este comando a diferenci de **git diff [file]**, el cual solo me permite ver las diferencias de los archivos solo si estan en el working directory.

En cambio el comando **git diff --staged [file]** me permite mostrar los archivos que ya estan listos para el siguiente commit es decir que estan en el **staying area**

```bash
$ git diff --staged main.css
```

<a id="id28"></a>

## **git commit --amend -m**

Este comando me permite corregir el mensaje del ultimo commit

```bash
$ git diff --amend -m "new message"
```

<a id="id29"></a>

## **git reset HEAD**

Este comando me permite retirar los archivos de mi ultimo commit del staying area al working directory.

> Retirar todos los archivos del staying area

```bash
$ git reset HEAD . // first format
$ git reset HEAD^  // second format
```

> Sacar un archivo en particular de staying area

```bash
$ git reset HEAD main.css
```

<a id="id30"></a>

## **git checkout -b [name_branch]**

Este comando me permite crear una rama y entrar en ella

```bash
$ git checkout -b test
```

<a id="id31"></a>

## **Union de ramas en git**

> Exiten dos formas de poder fusionar o unir ramas en git estos comandos son: **git merge y git rebase**

<a id="id31-1"></a>

### **git merge**

> Permite Unir una rama por ejemplo **test** con la rama **master**, para ello se requiere que ambas ramas tengan los commits listo y no haiga nada pendiente, y para su fusion se requiere de un commit.

<p class="image">
  <img src="./img/git_merge.jpg" alt="git merge"/ >
</p>

<a id="id31-2"></a>

### **git rebase**

> Sobrescribe una rama sobre la otra perdiendo el historial de commits, no genera **commits basura** como lo hace **git merge**, se recomienda usar en local, mas no en **ambientes productivos**

<p class="image">
  <img src="./img/git_rebase.png" alt="git rebase"/ >
</p>

<a id="id31-3"></a>

### **Diferencias git merget & git rebase**

<p class="image">
  <img src="./img/git_merge_rebase.png" alt="git difference merge and rebase"/ >
</p>

<a id="id32"></a>

## **git fetch**

> Este comando me permite traer la ultima version de un respositorio remoto y traerlo a mi local pero sin combinarlos

```bash
$ git fetch
```

<a id="id33"></a>

## **git pull vs git fetch**

La principal diferencia radica en que uno combina **\*merge** de los cambios del remoto al local y el otro mantiene los cambios tanto en **local como remoto**

## **BIBLIOGRAFIA**

- [GIT Principiantes](https://www.youtube.com/watch?v=kEPF-MWGq1w)
- [Comandos VIM basico](https://victorhckinthefreeworld.com/2017/06/14/como-salir-del-editor-vim/)
- [Crear archivo .gitignore](https://desarrolloweb.com/articulos/archivo-gitignore.html)
- [Ramas en Git](https://desarrolloweb.com/articulos/trabajar-ramas-git.html)
- [Git rebase vs Git merge](https://www.solucionex.com/blog/git-merge-o-git-rebase)
- [Git rebase](https://www.atlassian.com/es/git/tutorials/rewriting-history/git-rebase)
