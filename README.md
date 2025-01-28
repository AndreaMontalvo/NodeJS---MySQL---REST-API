# Rest API con NodeJS - MySQL - Express

## Instalacion
1. Abre la carpeta del proyecto en la terminal y ejecuta "npm install" para asegurar que todas las dependencias esten instaladas
2. Es necesario crear la base de datos en MySQL. Para ello, importa la base de datos del directorio db > libreria.sql en tu version de MySQL, sin cambiar los nombres de las tablas.
3. Configura las variables de entorno en el archivo ".env" con los datos de tu conexion. Para ello debes colocar tu numero de puerto, host de base de datos, numero de puerto de base de datos, tu usuario de base de datos, tu contraseña y el nombre de la base de datos.
4. Verifica tu conexion con tu base de datos con la ruta "/ping". Si te devuelve una respuesta json con "result: 2", la aplicacion esta conectada exitosamente

## Rutas 
- GET "/": Homepage con teoria de la materia
- GET "/ping": Una ruta simple que ejecuta un query para verificar la conexion de la base de datos
- GET "/api/libros": Devuelve todas las filas de la tabla "libros"
- GET "/api/libros/:id": Devuelve una fila en especifico de la tabla "libros" por id
- POST "/api/libros":Inserta un registro nuevo en la tabla "libros"
- PATCH "/api/libros/:id": Modifica un registro en la tabla "libros" por id
- DELETE "/api/libros/:id": Elimina un registro por en la tabla "libros" por id