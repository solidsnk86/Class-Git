# Clase de Git Bash UTN Facultad Regional San Rafael (Mendoza)

**Profesor Ariel Betancud**

Este repositorio se creó con fines educativos para aprender Git Bash y sus comandos aprendidos en la clase de programación I con el profe [Ariel](https://github.com/ArielBetancud22).

Tiene un lector de archivos `.txt` con Javascript Vanilla utilizando la función `FileReader` y luego se
hace un fetch del archivo al _root_ del HTML.
Contiene estilado en CSS.

Vista del sitio: [https://solidsnk86.github.io/class-git/](https://solidsnk86.github.io/class-git/)

Aquí algunos comandos:

```bash
# Clonar un repositorio remoto en tu máquina local
git clone <url_del_repositorio>

# Iniciar un nuevo repositorio en un directorio local
git init

# Agregar archivos al área de preparación (staging area) para el próximo commit
git add <nombre_del_archivo>

# Agregar todos los archivos modificados y eliminados al área de preparación
git add .

# Confirmar los cambios con un mensaje descriptivo
git commit -m "Mensaje del commit"

# Ver el estado de los archivos en el repositorio
git status

# Ver el historial de commits
git log

# Crear una nueva rama
git branch <nombre_de_la_rama>

# Cambiar a una rama específica
git checkout <nombre_de_la_rama>

# Crear una nueva rama y cambiar a ella en un solo comando
git checkout -b <nombre_de_la_rama>

# Fusionar una rama específica en la rama actual
git merge <nombre_de_la_rama>

# Descargar los cambios del repositorio remoto al repositorio local
git pull

# Subir cambios locales al repositorio remoto
git push

# Ver la diferencia entre el archivo local y el estado en el repositorio
git diff <nombre_del_archivo>

# Deshacer los cambios en un archivo y restaurarlo al último commit
git checkout -- <nombre_del_archivo>

```
