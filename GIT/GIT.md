# GIT

## ¿Qué es GIT?

Es una herramienta de control de versiones de código distribuida. Diseñada por Linus Torvalds.

### Carácteristicas de GIT

- **Integridad de GIT:** Todo en GIT es verificado mediante un **Checksum (Suma de Comprobación)**, el cual es un mecanismmo conocido como **hash SHA-1**, es una cadena de **40 carácteres hexadecimales**.

- **Los 3 Estados:** Los archivos en GIT tienes 3 estados fundamentales: **"(Committed) Confirmado"**, **"(Modified) Modificado"** y **"(Staged) Preprado"**.

- **Committed:** Implica que los archivos están almacenados de manera segura en tú base de datos local.

- **Modified:** Implica que existen archivos modificados, pero que aún no están confirmados a mi base de datos local.

- **Staged:** Implica que he marcado un archivo modificado en su versión actual, para la próxima confirmación.

- **3 Secciones Principales de un Proyecto GIT:** Se encuentra el **git directory**, **working directory** y **staging area**.

- **GIT directory:** Almacena los metadatos y la base de datos de objetos del un proyecto. Es lo que se copia cuando se clona un repositorio desde otra computadora.

- **working directory:** Es una copia de una versión del proyecto. Los archivos se sacan de la base de datos comprimida en el git directory. 

- **staging area:** Es un archivo contenido en el git directory, almacena información acerca de lo que irá en la próxima confirmación.

### COMANDOS BÁSICOS de GIT

1. **git init:** Permite inicializar un proyecto en git se crea un carpeta ocutla llamada ***".git/"***
2. **git status:** Permite mostrar el estado de nuestros archivos ***"(Committed, Modified, Staged)"***
3. **git add:** Permite agregar archivos al **staging area** que no están siendo rastreados
4. **git add -A:** Permite agregar todos los archivos archivos al **staging area** de forma rápida
5. **git rm --cached (nombre archivo.extensión):** Este comando permite ignorar un archivo que no queremos que valla en nuestro próximo commit o fue un error. Además, permite que un archivo ya no sea **rastreado**
6. **git commit -m mensaje:** Permite guardar en la base de datos local el estado de nuestro proyecto, es decir los cambios que han habido, es adecuado **agregar un mensaje** a nuestro **commit**
7. **git log:** Permite mostrar el ***"historial de los commits"***
8. **git diff:** Muestra cuales fueron los cambios que hubierón en el repositorio principal y el que esta en mi base de datos local
9. **git branch nombre_rama:** Permite crear una nueva rama aparte de la **main**, permitiendo tener una rama aparte donde puedan hacerse **pruebas**
10. **git branch:** Me muestra las **ramas existentes**
11. **git checkout nombre__rama:** Permite moverme de una rama a otra
12. **git pull origin (nombre de la rama -> main || test)** Este comando me permite tener la utlima versión del repositorio

```git
  git pull origin main
```

13. **git push -u origin (nombre de la rama -> main || test)** Este comando permite subir los cambios que tenemos en el local a nuestro repositorio en ***GitHub**, se puede enviar una vez hecho el ***commit***
14. **git branch -a** Me muestra todas las branch's ***ramas** que hay de manera ***local y remota***
15. **git merge [rama a absorber]** permite unir una rama creada con la rama ***main o master***
  
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
20. **git log --stat** me permite mostrar los archivos que fuerón modificados en cada commit 
21. **git reflog** muestra el historial completo de nuestra branch incluido los amends y los commits
22. **git diff codigoCommit1 codigoCommit2** el comando diff también permite comparar los cambios que hubo en los archivos en diferentes commits
23. **git rm -r --cached node_modules** permite borrar la carpeta node_modules que estaban en mi repositorio

## git add [name_file] --patch

Este comando me permite añadir a mi commit cierta parte de código, es decir añadir información por pedacitos.

```git
  git add git.md --patch
```

#### BIBLIOGRAFIA

- [GIT Principiantes](https://www.youtube.com/watch?v=kEPF-MWGq1w)
- [Comandos VIM básico](https://victorhckinthefreeworld.com/2017/06/14/como-salir-del-editor-vim/)
- [Crear archivo .gitignore](https://desarrolloweb.com/articulos/archivo-gitignore.html)
