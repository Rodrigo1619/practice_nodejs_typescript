# npm install packages to install
* npm init -y (y es para que sea todo por defecto)
* npm install typescript -D
* npm install express -E (E es la version exacta)

A veces puede dar un error algo raro cuando al principio ponemos
import express from 'express', entonces instalamos este paquete
* npm install @types/express -D

Para que no estemos compilando a cada momento manualmente instalamos esto
* npm install ts-node-dev -D

Pero con eso debemos poner en el package.json, especificamente en los scripts
* "dev": "ts-node-dev src/index.ts",
