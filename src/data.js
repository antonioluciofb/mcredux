import d2l from "./assets/d2l.png";
import d5l from "./assets/d5l.png";
import pg2l from "./assets/pg2l.png";
import pg5l from "./assets/pg5l.png";
import ap2l from "./assets/ap2l.png";
import sc5l from "./assets/sc5l.png";
import t5l from "./assets/t5l.png";
import asc2l from "./assets/asc2l.png";
import asc5l from "./assets/asc5l.png";
import cp5l from "./assets/cp5l.png";
import a5l from "./assets/a5l.png";

const Products = {
  value: [{ max: 1 }],
  home: [
    {
      id: 1,
      chosen: false,
      section: "HOME",
      nome: "Desengordurante",
      image_url: d2l,
      valor: 12,
      tamanho: "2l",
      description: "Tira Gordura",
    },
    {
      id: 2,
      chosen: false,
      section: "HOME",
      nome: "Desinfetante",
      image_url: d5l,
      valor: 17,
      tamanho: "5l",
      description: "Desinfeta Tudo",
    },
    {
      id: 3,
      chosen: false,
      section: "HOME",
      nome: "Pinho Gel",
      image_url: pg2l,
      valor: 12,
      tamanho: "2l",
      description: "Deixa Cheiro Bom",
    },
    {
      id: 4,
      chosen: false,
      section: "HOME",
      nome: "Pinho Gel",
      image_url: pg5l,
      valor: 25,
      tamanho: "5l",
      description: "Deixa Cheiro Bom Maior",
    },
    {
      id: 5,
      chosen: false,
      section: "HOME",
      nome: "Álcool Perfumado",
      image_url: ap2l,
      valor: 12,
      tamanho: "2l",
      description: "Mata Corona Vírus",
    },
    {
      id: 6,
      chosen: false,
      section: "HOME",
      nome: "Brilho Alumínio",
      image_url: d2l,
      valor: 12,
      tamanho: "2l",
      description: "Deixa Todo Aluminio Brilhandinho",
    },
    {
      id: 8,
      chosen: false,
      section: "HOME",
      nome: "Sabonete",
      image_url: ap2l,
      valor: 12,
      tamanho: "1l",
      description: "Lava Você Todo",
    },
  ],
  clothing: [
    {
      id: 9,
      chosen: false,
      nome: "Sabão de Coco",
      section: "CLOTHING",
      image_url: sc5l,
      valor: 22,
      tamanho: "5l",
    },
    {
      id: 10,
      chosen: false,
      section: "CLOTHING",
      nome: "Sabão tipo OMO",
      image_url: t5l,
      valor: 22,
      tamanho: "5l",
    },
    {
      id: 11,
      chosen: false,
      section: "CLOTHING",
      nome: "Alvejante Sem Cloro",
      image_url: asc2l,
      valor: 12,
      tamanho: "2l",
    },
    {
      id: 12,
      chosen: false,
      section: "CLOTHING",
      nome: "Alvejante Sem Cloro",
      image_url: asc5l,
      valor: 25,
      tamanho: "5l",
    },
    {
      id: 13,
      chosen: false,
      section: "CLOTHING",
      nome: "Cloro Puro",
      image_url: cp5l,
      valor: 17,
      tamanho: "5l",
    },
    {
      id: 14,
      chosen: false,
      section: "CLOTHING",
      nome: "Amaciante",
      image_url: a5l,
      valor: 22,
      tamanho: "5l",
    },
  ],
};

export default Products;
