<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en Desarrollo
1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener Nest CLI installado
```
npm i -g @nest/cli
```
4. Tener creada y levantada la Base de datos Mongo
5. Clonar el archivo __.env.template.__ y renombrar la copia a __.env__
6. Llenar las variables de entorno definidas en __.env__ (si no cuenta con usuario y contraseña en la DB no la ponga)
7. Ejecutar la aplicación en dev:
```
npm run start:dev
```
8. Revisar la documentación en: 
```
localhost:3000/api
```
## Registrar el primer usuario
1. Ingresarlo directamente a la Base de datos
<pre>
{
  "email": "adminUser@gmail.com",
  "password": "$2b$10$PElthnOCIPaZAtBBurEZtua3xg13tjVNSkUUp99ZrXSYUBXZ5P0Mq"
  //password = "contraseña1234"
}
</pre>
2. Borrar el decorar de protección del endpoint de /auth/register en el controllador, usar el endpoint, y volver a ponerlo
```
@Post('register')
@Auth(ValidRoles.admin) //this
register()....
```
