# Little Bunny

Little Bunny es una aplicación web para comprar ropa de bebé de forma fácil y rápida. Permite a los usuarios explorar una variedad de productos y agregarlos al carrito de compras de manera intuitiva.

![](https://res.cloudinary.com/dg9fx8njd/image/upload/v1706976810/WhatsApp_Image_2024-02-03_at_13.05.08_g7j98f.jpg)![]

## Tecnologías Utilizadas

- React
- Vite
- Firebase (para la base de datos)

## Instalación

1. Clona este repositorio: `https://github.com/adridavalos/proyectoConReact.git`
2. Instala las dependencias: `npm install`

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


Asegúrate de reemplazar `TU_API_KEY`, `TU_AUTH_DOMAIN`, `TU_PROJECT_ID`, etc., con los valores correctos de tu proyecto Firebase.

```
