let products = [
  {
    id: 1,
    title: "Suéter de Hilo",
    price: 15000,
    description:
      "Suéter de Hilo Unisex para Bebé: Elegancia y Comodidad en Miniatura",
    img: "https://res.cloudinary.com/dg9fx8njd/image/upload/v1708367943/ropa-bebe-punto-accesorios-sobre-fondo-azul_xaou6b.jpg",
    stock: 5,
    categories: ["bebas", "bebes"],
  },
  {
    id: 2,
    title: "Body",
    price: 8000,
    stock: 6,
    description:
      "Body de Manga Corta para Bebas: Frescura y Comodidad en Cada Movimiento",
    categories: ["bebas"],
    img: "https://res.cloudinary.com/dg9fx8njd/image/upload/v1708367943/onesie-bebe-rosa-sobre-fondo-rosa_oygfm0.jpg",
  },
  {
    id: 3,
    title: "Botitas de Hilo",
    price: 19000,
    stock: 8,
    description:
      "Botitas de Hilo para Bebas: Estilo y Comodidad para sus Pequeños Pies",
    categories: ["accesorio", "bebas"],
    img: "https://res.cloudinary.com/dg9fx8njd/image/upload/v1708368638/botines-nina-sobre-fondo-rosa-copiar-espacio_xcklzl.jpg",
  },
  {
    id: 4,
    title: "Kit",
    price: 35000,
    stock: 6,
    description:
      "Un kit de 4 productos: mamadera, osito, un par de medias y un chupete ",
    categories: ["accesorio", "bebes", "bebas"],
    img: "https://res.cloudinary.com/dg9fx8njd/image/upload/v1708367942/articulos-bebe-azul-claro_qgtmnq.jpg",
  },
  {
    id: 5,
    title: "Medias",
    price: 6000,
    stock: 8,
    description: "Medias de algodón para Bebas: Suaves y super abrigadas",
    categories: ["accesorio", "bebas"],
    img: "https://res.cloudinary.com/dg9fx8njd/image/upload/v1708367943/lindos-calcetines-lana_hgui1p.jpg",
  },
  {
    id: 6,
    title: "Pijamas",
    price: 17800,
    stock: 5,
    description:
      "Pijama de Algodón de Primera Calidad para Bebés: Suavidad y Confort para un buen Descanso",
    categories: ["bebes"],
    img: "https://res.cloudinary.com/dg9fx8njd/image/upload/v1708367943/concepto-bebe-nino-pizarra_zfnwyn.jpg",
  },
  {
    id: 7,
    title: "Gorra de Algodón",
    price: 9000,
    stock: 3,
    description:
      "Gorrito de Algodón para Bebas: Suavidad y Comodidad para Mantenerlos Abrigados",
    categories: ["accesorio", "bebas"],
    img: "https://res.cloudinary.com/dg9fx8njd/image/upload/v1708367942/bebe-elementson-rosa_eqtmbe.jpg",
  },
  {
    id: 8,
    title: "Suéter + Muñeco",
    price: 25000,
    stock: 5,
    description:
      "Combo Tierno y Cálido para Bebés: Muñeco de Apego y Suéter de Hilo ",
    categories: ["accesorio", "bebas", "bebes"],
    img: "https://res.cloudinary.com/dg9fx8njd/image/upload/v1708367944/ropa-bebe-punto-accesorios-azul_xmkc1p.jpg",
  },
];
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("No hay productos disponibles");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id} `);
        }
      }, 1000);
    } else {
      reject("No hay productos disponibles");
    }
  });
};
