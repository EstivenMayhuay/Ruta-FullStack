# **Linux - BASH**

<details class="contentIndice">
  <summary class="contentIndice__title main">Indice</summary>

  <ul class="indice">
    <li class="indice__item"><a href="#ls">Comando ls</a></li>
    <li class="indice__item"><a href="#ls-a">Comando ls -a</a></li>
    <li class="indice__item"><a href="#ls-la">Comando ls -la</a></li>
    <li class="indice__item"><a href="#mv">Comando mv</a></li>
    <li class="indice__item"><a href="#cp">Comando cp</a></li>
    <li class="indice__item"><a href="#cat">Comando cat</a></li>
    <li class="indice__item"><a href="#cat-copy">Comando cat para sobre-escribir</a></li>
    <li class="indice__item"><a href="#pwd">Comando pwd</a></li>
    <li class="indice__item"><a href="#touch">Comando touch</a></li>
    <li class="indice__item"><a href="#mkdir">Comando mkdir</a></li>
    <li class="indice__item"><a href="#rm">Comando rm</a></li>
    <li class="indice__item"><a href="#rmdir">Comando rmdir</a></li>
    <li class="indice__item"><a href="#rm-rf">Comando rm -rf</a></li>
    <li class="indice__item"><a href="#ls-alh">Comando ls -alh</a></li>
    <li class="indice__item"><a href="#create-file">Comando > name_file</a></li>
    <li class="indice__item"><a href="#du">Comando du</a></li>
    <li class="indice__item"><a href="#du-s">Comando du -s</a></li>
    <li class="indice__item"><a href="#du-sh">Comando du -sh</a></li>
    <li class="indice__item"><a href="#du-sh-file">Comando du -sh file</a></li>
    <li class="indice__item"><a href="#stat">Comando stat</a></li>
    <li class="indice__item"><a href="#zip">Comando zip</a></li>
    <li class="indice__item"><a href="#unzip">Comando unzip</a></li>
    <li class="indice__item"><a href="#tar-cvf">Comando tar -cvf</a></li>
    <li class="indice__item"><a href="#tar-xvf">Comando tar -xvf</a></li>
    <li class="indice__item"><a href="#readlink">Comando readlink</a></li>
    <li class="indice__item"><a href="#google-chrome">Comando google -chrome</a></li>
  </ul>

</details>

<a id="ls"></a>

## **Comando ls**

> Este comando nos permite listar los archivos y carpetas dentro de una determinada ruta. Por ejemplo:

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulpfile.js   package.json       README.md
docs  node_modules  package-lock.json  src
```

<a id="ls-a"></a>

## **Comando ls -a**

> Este comando nos permite hacer lo mismo que el comando anterior con la diferencia que **muestra los archivos ocultos**, algunos ejemplos de archivos ocultos pueden ser **.git/**, el cual es un archivo oculto del sistema que no lo puedes ver de forma grafica, pero con este comando si. Por ejemplo:

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls -a
.   data  .git        gulpfile.js   package.json       README.md
..  docs  .gitignore  node_modules  package-lock.json  src
```

> El **.** hace referencia a la **carpeta actual** y **..** hace referencia a una carpeta anterior.

<a id="ls-la"></a>

## **Comando ls -la**

> Este comando junta lo mejor de los anteriores comandos, ademas nos permite ver **los permisos que puede tener una carpeta o archivo**, tambien puees ver los **archivos ocultos**

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls -la
total 360
drwxrwxr-x   7 estiven estiven   4096 Jan 25 12:15 .
drwxr-xr-x   4 estiven estiven   4096 Jan 25 11:10 ..
drwxrwxr-x   3 estiven estiven   4096 Jan 25 12:11 data
drwxrwxr-x   5 estiven estiven   4096 Jan 25 12:15 docs
drwxrwxr-x   8 estiven estiven   4096 Jan 25 12:12 .git
-rw-rw-r--   1 estiven estiven     32 Jan 22 15:12 .gitignore
-rw-rw-r--   1 estiven estiven    356 Jan 22 15:05 gulpfile.js
drwxrwxr-x 322 estiven estiven  20480 Jan 22 20:25 node_modules
-rw-rw-r--   1 estiven estiven    993 Jan 22 20:25 package.json
-rw-rw-r--   1 estiven estiven 305005 Jan 22 20:25 package-lock.json
-rw-rw-r--   1 estiven estiven   1748 Jan 22 18:09 README.md
drwxrwxr-x   4 estiven estiven   4096 Jan 22 15:36 src
```

> aquellos que tiene la letra **d** son **directorios**, las letras que se pueden visualizar despues de la letra **d** significan

<ul class="lista">
  <li><strong>w:</strong> write</li>
  <li><strong>r:</strong> read</li>
  <li><strong>x:</strong> executable</li>
</ul>

<a id="mv"></a>

## **Comando mv**

> Este comando es muy versatil nos permite no solo **mover archivos y directorios de una ruta a otra**, sino tambien **cambiar el nombre de un archivo o carpeta**. Veamos un ejemplo: 👀

> Primero listamos los archivos y carpetas

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulpfile.js   package.json       README.md
docs  node_modules  package-lock.json  src
```

> Luego cambiamos el nombre de gulpfile.js a gulp.js, el primer parametro que recibe este comando es el nombre actual del archivo o carpeta actual y el segundo parametro es el nombre que tendra.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ mv gulpfile.js gulp.js
```

> volvemos a listar

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulp.js   package.json       README.md
docs  node_modules  package-lock.json  src
```

<a id="cp"></a>

## **Comando cp**

> Este comando nos permite copiar un archivo o carpeta **a otra ruta**, este comando recibe dos parametros, el primero es el archivo o carpeta a copiar y el segundo parametro es la ruta en donde se copiara.

> Vamos a copiar el archivo README.md al Escritorio (Desktop).

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulp.js   package.json       README.md
docs  node_modules  package-lock.json  src
```

> Copiamos el README.md al Escritorio (Desktop)

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ cp README.md ../
```

> Retrocedemos al Escritorio (Desktop) para ver la copia

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ cd ..

estiven@estiven:~/Desktop$ ls
README.md  Ruta-FullStack  UTP-CENTER
```

<a id="cat"></a>

## **Comando cat**

> Nos muestra el contenido de un archivo.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ cat README.md
# **Ruta Fullstack Developer**

Hola!!! ✋ y Bienvenido soy Estiven, el proposito de este repositorio en especifico del archivo README.md, es poder Ayudarte a consolidar mediante conceptos y ejemplos aquellos temas relacionados a las tecnologias que puedes apreciar alli abajo ↓.

Por lo tanto, Que esperas? dale click a cualquiera de las tecnologias y a seguir aprendiendo

Ustedes pueden, Ustedes son los mejores, cada uno se pone sus propios limites
```

<a id="cat-copy"></a>

## **Comando cat para sobre-escribir**

> Con el comando **cat** podemos sobre-escibir los datos de un archivo hacia otro, pero tambien podemos unir dos archivos y mantener el contenido de ambos. El primer parametro de este comando es el archivo que tiene el contenido a copiar y el segundo parametro es el archivo en el que se copiara el contenido. Veamos cada uno de ellos.

### **cat file1 > file2**

> Primero crearemos un archivo llamado texto.txt

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ >> texto.txt

estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulpfile.js   package.json       README.md  texto.txt
docs  node_modules  package-lock.json  src

estiven@estiven:~/Desktop/Ruta-FullStack$ cat README.md
# Texto de prueba
```

> Luego copiamos el contenido del archivo README.md a texto.txt

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ cat README.md > texto.txt

estiven@estiven:~/Desktop/Ruta-FullStack$ cat texto.txt
# Texto de prueba
```

> Pero, esta forma de copiar **va a sobre-escibir la informacion que teng el archivo en el que se copiara el contenido**.

### **cat file1 >> file2**

> Este forma de copiar el contenido de un archivo hacia otro va a **mantener el contenido de ambos archivos**, es decir se sumaran los contenidos de ambos.

> Mostramos los archivos

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulpfile.js   package.json       README.md  texto.txt
docs  node_modules  package-lock.json  src
```

> Copiamos el contenido de README.md a texto.txt

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ cat README.md >> texto.txt


estiven@estiven:~/Desktop/Ruta-FullStack$ cat texto.txt
# Texto de prueba
# Texto de prueba

hello everybody
```

<a id="pwd"></a>

## **Comando pwd**

> Este comando nos muestra la ruta en la que nos encontramos.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ pwd
/home/estiven/Desktop/Ruta-FullStack
```

<a id="touch"></a>

## **Comando touch**

> Este comando nos permite crear archivos.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ touch index.html
```

> Puedes crear mas de un archivo.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ touch index.html main.css app.js data.txt
```

<a id="mkdir"></a>

## **Comando mkdir**

> Permite crear directorios y al igual que el comando touch podemos crear mas de un directorio en una sola linea.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ mkdir estilos/

estiven@estiven:~/Desktop/Ruta-FullStack$ mkdir public/ source/ html/
```

<a id="rm"></a>

## **Comando rm**

> Este comando nos permite eliminar archivos y puedes eliminar mas de 1.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ rm index.html

estiven@estiven:~/Desktop/Ruta-FullStack$ rm index.html app.js estilos.css
```

<a id="rmdir"></a>

## **Comando rmdir**

> Permite eliminar directorios o carpetas, pero deben estar vacios sin ningun otro archivo y/o carpeta dentro del mismo, ya que de lo contrario te lanzara un error.

> En el caso de que el directorio **data/** no este vacio.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ rmdir data/
rmdir: failed to remove 'data/': Directory not empty
```

> Y si esta vacia no habra ningun error.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ rmdir data/
```

<a id="rm-rf"></a>

## **Comando rm -rf**

> El comando **rm -rf**, es una forma forzada de eliminar los archivos y carpetas contenidas dentro de un directorio.

> En el caso que el directorio **data/** tenga archivos.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ rm -rf data/
```

<a id="ls-alh"></a>

## **Comando ls -alh**

> El comando **ls** como ya sabemos nos lista los archivos y directorios, pero con el **flag (bandera)** **-a muestra archivos ocultos**, **-l los coloca en forma lista** y el **-h muestra el peso de los archivos en KB**

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls -alh
total 360K
drwxrwxr-x   7 estiven estiven 4.0K Jan 25 18:29 .
drwxr-xr-x   4 estiven estiven 4.0K Jan 25 12:47 ..
drwxrwxr-x   3 estiven estiven 4.0K Jan 25 12:11 data
drwxrwxr-x   5 estiven estiven 4.0K Jan 25 12:15 docs
drwxrwxr-x   8 estiven estiven 4.0K Jan 25 18:29 .git
-rw-rw-r--   1 estiven estiven   32 Jan 22 15:12 .gitignore
-rw-rw-r--   1 estiven estiven  356 Jan 22 15:05 gulpfile.js
drwxrwxr-x 322 estiven estiven  20K Jan 22 20:25 node_modules
-rw-rw-r--   1 estiven estiven  993 Jan 22 20:25 package.json
-rw-rw-r--   1 estiven estiven 298K Jan 22 20:25 package-lock.json
-rw-rw-r--   1 estiven estiven   35 Jan 25 18:10 README.md
drwxrwxr-x   4 estiven estiven 4.0K Jan 22 15:36 src
```

<a id="create-file"></a>

## **Comando > name_file**

> Este comando es otro forma de crear archivos, es decir otra alternativa a **touch**.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ > estilo.css
```

<a id="du"></a>

## **Comando du**

> Este comando muestra el peso de un archivo o de todo un directorio.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ du README.md
4       README.md
```

<a id="du-s"></a>

## **Comando du -s**

> Este comando muestra la suma total del peso de los archivos que se encuentren en un directorio, es decir **el peso que ocupan en disco**

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ du -s
81740   .
```

<a id="du-sh"></a>

## **Comando du -sh**

> Realiza la misma funcion que el comando anterior con la diferencia de que muestra la suma total en **KB, MB Y GB**

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ du -sh
80M     .
```

<a id="du-sh-file"></a>

## **Comando du -sh file**

> Ademas con el comando **du -sh**, podemos ver el peso de un archivo en particular.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ du -sh README.md
4.0K    README.md
```

<a id="stat"></a>

## **Comando stat**

> El comando stat es muy potente ya que no solo muestra la informacion contenida en el archivo sino tambien: **size, name, date modified and date created**

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ stat README.md
  File: README.md
  Size: 35              Blocks: 8          IO Block: 4096   regular file
Device: 10302h/66306d   Inode: 28184629    Links: 1
Access: (0664/-rw-rw-r--)  Uid: ( 1000/ estiven)   Gid: ( 1000/ estiven)
Access: 2022-01-25 18:10:24.355995450 -0500
Modify: 2022-01-25 18:10:24.351994711 -0500
Change: 2022-01-25 18:10:24.351994711 -0500
 Birth: 2022-01-21 14:58:48.266087831 -0500
```

<a id="zip"></a>

## **Comando zip**

> Este comando nos permite **comprimir archivos** en un formato **.zip**. La estructura es la siguiente:

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ zip archivo.zip carpeta(ruta)
```

> El comando recibe 2 parametros el primero es el nombre que le daras a tu archivo coprimido con la extension **.zip** y el segundo parametro es la ruta, carpeta o archivo al que se va a comprimir. Veamos un ejemplo

> Primero vamos a crear un directorio llamada **prueba/** y luego ejecutamos el comando zip.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ mkdir prueba/

estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulpfile.js   package.json       prueba     src
docs  node_modules  package-lock.json  README.md
```

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ zip prueba.zip prueba/
adding: prueba/ (stored 0%)
```

<a id="unzip"></a>

## **Comando unzip**

> Este comando nos permite descomprimir mi archivo que tengan la extension **.zip**

> Siguiendo con el directorio **prueba/** vamos a descomprimir

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ zip prueba.zip
Archive:  prueba.zip
   creating: prueba/
```

<a id="tar-cvf"></a>

## **Comando tar -cvf**

> Este comando nos permite **empaquetar** nuestro archivos y directorios en un formato **.tar**.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ mkdir prueba02/

estiven@estiven:~/Desktop/Ruta-FullStack$ tar -cvf prueba02.tar prueba02/
prueba02/
```

> Los **flags o banderas** tienen un significado. El **flag c**, creara un nuevo archivo .tar, el **flag v** muestra un descripccion del progreso de compresion y el **flag f** muestra el nombre del archivo.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulpfile.js   package.json       prueba02      README.md
docs  node_modules  package-lock.json  prueba02.tar  src
```

<a id="tar-xvf"></a>

## **Comando tar -xvf**

> Este comando nos permite **descomprimir** un archivo en un formato **.tar**.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulpfile.js   package.json       prueba02      README.md
docs  node_modules  package-lock.json  prueba02.tar  src
```

> Para poder seguir con el ejemplo vamos a eliminar el directorio **prueba02/**

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ rmdir prueba02/
```

> Luego de ello procedemos a descomprimir.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ tar -xvf prueba02.tar
prueba02/
```

> Visualizando el archivo descomprimido.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulpfile.js   package.json       prueba02      README.md
docs  node_modules  package-lock.json  prueba02.tar  src
```

> Ahora bien, cuando se descomprime el archivo se guarda en la ruta en donde se encuentra el archivo y/o directorio **.tar**, pero tambien podemos **elegir en que ruta deseamos que se guarde** todo ello con el **flag -C** seguido con la **ruta**.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ tar -xvf prueba02.tar -C ../
```

> Con el comando anterior estoy descomprimiendo el archivo en el **Desktop (Escritorio)**, ya que los **..** implica que retrocedo un ruta hacia atras. Por ello veamos el escritorio.

```bash
estiven@estiven:~/Desktop$ ls
prueba02  Ruta-FullStack  UTP-CENTER
```

<a id="readlink"></a>

## **Comando readlink -f**

> Este comando nos permite ver la ruta absoluta de un directorio y/ archivos.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ readlink -f README.md
/home/estiven/Desktop/Ruta-FullStack/README.md
```

<a id="google-chrome"></a>

## **Comando google-chrome**

> Este comando nos permite abrir un archivo en el navegador chrome. Por ejemplo podemos abrir un sitio web o pagina web colocando la ruta desde nuestra carpeta o sino la URL.

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ google-chrome docs/index.html
```

> Abriendo una pagina web

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ google-chrome https://www.jw.org/pt/
```
