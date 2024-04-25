# Aplicacion GifExpertApp en react

Esta es una aplicacin pequea pero muy ilustrativa que explica cmo utilizar React + customHooks para poder resolver necesidades en especfico que podremos re-utilizar despues.
## TEMAS QUE SE VERAN
### ●	Custom Hooks
### ●	Comunicacion entre componentes
### ●	Clases de CSS
### ●	Animaciones
### ●	Enviar mtodos como argumentos
### ●	Crear listados
### ●	keys
### Giphy

![](https://res.cloudinary.com/dv6nijgvd/image/upload/v1713318611/nodeANDreact/qk1jz4e8zwp6vi1wy11a.png)

[LinkeCRUD](https://developers.giphy.com/)
[Reactjs.org-Estructura-de-directorios](https://es.reactjs.org/docs/faq-structure.html)
[Estructura-nombres-de-folders-y-componentes-en-React-Hackernoon.com](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)
[Giphy-Developers-Search-Endpoint](https://developers.giphy.com/docs/api/endpoint#search)
[Animate.css](https://animate.style/)


####COMANDOS para el back y el front

```
PARA CREAR LAS CARPETAS
mkdir client
mkdir server


server  npm install cors
        npm install


client
         npm install react bootstrap
         npm install

MySQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';


 PARA CORRER
CLIENT
npm start


SERVER

node index.js


para volver
control c
```

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
