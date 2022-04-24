# npm install packages to install
* npm init -y (y es para que sea todo por defecto)
* npm install typescript -D
* npm install express -E (E es la version exacta)
para que se nos cree el tsconfig.json automaticamente es con esto:
* npm run tsc -- --init
A veces puede dar un error algo raro cuando al principio ponemos
import express from 'express', entonces instalamos este paquete
* npm install @types/express -D

Para que no estemos compilando a cada momento manualmente instalamos esto
* npm install ts-node-dev -D

Pero con eso debemos poner en el package.json, especificamente en los scripts
* "dev": "ts-node-dev src/index.ts",

Para no estar compilando a cada momento usamos en la terminal
* npm run dev

si para hacer pruebas con un archivo JSON nos da un error, en el tsconfig ponemos este comando
* "resolveJsonModule": true

Otra instalación 
* npm install ts-standard -D
