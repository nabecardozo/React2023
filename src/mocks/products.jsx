import farma from "../../src/imagenes/farma.jpg";
import farma2 from "../../src/imagenes/farma2.png";
import farma3 from "../../src/imagenes/farma3.jpg";
import farma4 from "../../src/imagenes/farma4.jpg";
import Pelo from "../../src/imagenes/pelo.png";
import pelo1 from "../../src/imagenes/pelo1.png";

export default [
    {
      id: 1,
      name: "ACTRON",
      description: "Desinflamatorio rapida accion",
      stock: 5,
      precio: 1000,
      image:   farma,
      category: "farma",
      
    },
    {
      id: 2,
      name: "DERMAGLOS",
      description: "Crema humectante",
      stock: 5,
      precio: 1000,
      image:   farma2,
      category: "farma",
    },
    {
      id: 3,
      name: "CURFLEX",
      description: "Regenerador de cartilago",
      stock: 5,
      precio: 1000,
      image:  farma3,
      category: "farma",
    },
    {
      id: 4,
      name: "TAFIROL",
      description: "Analgesico",
      stock: 5,
      precio: 1000,
      image:  farma4,
      category: "farma",
    },
    {
      id: 5,
      name: "Semi Lino",
      description: "shampoo",
      stock: 5,
      precio: 1000,
      image:   Pelo,
      category: "pelo",
    },
    {
      id: 6,
      name: "Alfaparf",
      description: "shampo",
      stock: 5,
      precio: 1000,
      image:   pelo1,
      category: "pelo",
    },
  ];