# **Linux - BASH**

## **Indice**

<ul class="indice">
  <li><a href="#ls">Comando ls</a></li>
  <li><a href="#ls-a">Comando ls -a</a></li>
  <li><a href="#ls-la">Comando ls -la</a></li>
  <li><a href="#mv">Comando mv</a></li>
  <li><a href="#cp">Comando cp</a></li>
  <li><a href="#cat">Comando cat</a></li>
  <li><a href="#cat-copy">Comando cat para sobre-escribir</a></li>
  <li><a href="#pwd">Comando pwd</a></li>
  <li><a href="#touch">Comando touch</a></li>
  <li><a href="#mkdir">Comando mkdir</a></li>
  <li><a href="#rm">Comando rm</a></li>
  <li><a href="#rmdir">Comando rmdir</a></li>
  <li><a href="#rm-rf">Comando rm -rf</a></li>
  <li><a href="#ls-alh">Comando ls -alh</a></li>
  <li><a href="#create-file">Comando > name_file</a></li>
  <li><a href="#du">Comando du</a></li>
</ul>

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

> Este comando nos permite copiar un archivo o carpeta **a otra ruta**, este comando recibe dos parametros, el primero es el archivo o carpeta a mover y el segundo parametro es la ruta donde se movera.

> Vamos a mover el archivo README.md al Escritorio (Desktop).

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ ls
data  gulp.js   package.json       README.md
docs  node_modules  package-lock.json  src
```

> Movemos el README.md al Escritorio (Desktop)

```bash
estiven@estiven:~/Desktop/Ruta-FullStack$ mv README.md ../
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

- **du nombre_directorio:** Muestra el peso de los archivos en el disco
- **du -s nombre_directorio:** Muestra la suma total de los arhivos que esten en un directorio y cuanto ocupa en el disco
- **du -sh nombre_directorio:** El flag **_h muestra el peso en un formato humano KB_**
- **(du -sh nombre_directorio/\*)** Una forma pro de saber cuanto en espacio un directorio nos ocupa en disco
- **stat nombre_archivo:** Nos permite tener mas informacion de un archivo por ejemplo: tamaña, nombre, fecha de modificaci´no y creacion

## **Comprimir y Descompirmir archivos .zip**

- **zip nombreArchivo.zip carpeta[ruta]** Permite comprimir un archivo cual sea en un paquete .zip
- **unzip nombreArchivo.zip** Descomprime un arhivo con extension .zip

## **Compirimir y Descomprimir Archivos .tar**

- **tar -xzvf empaquetado.tar**: permite descomprimir un archivo
- **tar -czvf compirmir.tar terminal2.md**: permite comprimir arhivos

## **Ruta absoluta de un archivo/carpeta**

- **readlink -f "nombre_archivo"** Muestra la ruta absoluta del directorio u archivo.

## **Abrir un archivo Chrome**

- **start chrome [ruta archivo | link de un sitio web]** permite abrir un pagina web desde un archivo o desde una URL de un sitio en particular.

## REFERENCIA

1. [Comandos Bash Basicos](https://es.wikipedia.org/wiki/Comandos_Bash#Comandos_de_ayuda)
2. [Comandos Linux para server](https://www.youtube.com/watch?v=0BA4k3jweaE)
3. [Comprimir y Descomprimir Archivos tar, gz, zip](https://gist.github.com/jcaromiq/87319ea132135700a23305c82ee38899)
