# **COMANDOS DE LA TERMINAL (Linux Ubuntu - BASH)**

- **ls:** Este comando te permite listar los **archivos y directorios**
- **ls -a:** Permite listar los **archivos y directorios ocultos**, así como también los **archivos y directorios ya existentes**
- **ls -la:** Muestra no solo los arhivos y directorios ocultos sino también los **permisos** que tienen.
- **mv:** Permite **mover** de 1 a más **archivos y directorios**
- **cp:** Permite **copiar** archivos y directorios
- **cat:** Muestra el contenido dentro de un archivo
- **cat (archivo1.extensión) > (archivo2.extensión):** Copia y **sobre-escribe** el contenido de un archivo1 al archivo 2
- **cat (archivo1.extensión) >> (archivo2.extensión):** Copia **sin sobre-escribir** el contenido de un archivo a otro, es decir lo **agrega al final**
- **pwd:** Muestra la ruta actual **path**
- **touch:** Crear un nuevo archivo
- **mkdir:** Permite crear directorios
- **rm (archivo.extensión):** Permite eliminar archivos
- **rm -rf:** Elimina todos los archivos dentro de un carpeta y la carpeta misma de forma forzada sin preguntar.
- **ls -alh:** ls me lista los archivos y el flag ***a (muestra los archivos ocultos) - l (los pone en formato lista) - h (muestra el peso de los archivos en KB)***
- **> nombre_archivo:** Es otra forma pro de crear archivos

## **Muestra datos relavantes de archivos**

- **du nombre_directorio:** Muestra el peso de los archivos en el disco
- **du -s nombre_directorio:** Muestra la suma total de los arhivos que estén en un directorio y cuanto ocupa en el disco
- **du -sh nombre_directorio:** El flag ***h muestra el peso en un formato humano KB***
- **(du -sh nombre_directorio/*)** Una forma pro de saber cuanto en espacio un directorio nos ocupa en disco
- **stat nombre_archivo:** Nos permite tener más información de un archivo por ejemplo: tamaña, nombre, fecha de modificaci´no y creación

## **Comprimir y Descompirmir archivos .zip**

- **zip nombreArchivo.zip carpeta[ruta]** Permite comprimir un archivo cual sea en un paquete .zip
- **unzip nombreArchivo.zip** Descomprime un arhivo con extensión .zip

## **Compirimir y Descomprimir Archivos  .tar**

- **tar -xzvf empaquetado.tar**: permite descomprimir un archivo
- **tar -czvf compirmir.tar terminal2.md**: permite comprimir arhivos

## **Ruta absoluta de un archivo/carpeta**

- **readlink -f "nombre_archivo"** Muestra la ruta absoluta del directorio u archivo.

## **Abrir un archivo Chrome**

- **start chrome [ruta archivo | link de un sitio web]** permite abrir un página web desde un archivo o desde una URL de un sitio en particular.

## REFERENCIA

1. [Comandos Bash Básicos](https://es.wikipedia.org/wiki/Comandos_Bash#Comandos_de_ayuda)
2. [Comandos Linux para server](https://www.youtube.com/watch?v=0BA4k3jweaE)
3. [Comprimir y Descomprimir Archivos tar, gz, zip](https://gist.github.com/jcaromiq/87319ea132135700a23305c82ee38899)
