import { MenuItem } from './types';

export const CORPORATE_RED = '#b10000';

export const hotDogs: MenuItem[] = [
  {
    name: 'ClassicDog',
    price: '7,50€',
    ingredients: 'Salchicha bockwurst XXL, ketchup, mostaza, relish de pepinillo y cebolla frita en pan brioche.',
    imageUrl: '/classigdog.webp',
  },
  {
    name: 'MacDog',
    price: '7,50€',
    ingredients: 'Salchicha bockwurst XXL, salsa burguer, cebolla troceada, pepinillo y lechuga.',
    imageUrl: '/macdog.webp',
  },
  {
    name: 'BBQDog',
    price: '7,50€',
    ingredients: 'Salchicha bockwurst XXL, salsa barbacoa y cebolla frita.',
    imageUrl: '/bbq.webp',
  },
  {
    name: 'TruffleDog',
    price: '7,50€',
    ingredients: 'Salchicha bockwurst XXL, mayonesa trufada, cebolla caramelizada y queso grana padano.',
    imageUrl: '/trufada.webp',
  },
  {
    name: 'BaconDog',
    price: '8,00€',
    ingredients: 'Salchicha bockwurst XXL, salsa de bacon ahumado, cebolla caramelizada y bacon.',
    imageUrl: '/bacondog.webp',
  },
  {
    name: 'EmmyDog',
    price: '8,00€',
    ingredients: 'Salchicha bockwurst XXL, salsa emmy, jalapeño y cebolla caramelizada.',
    imageUrl: '/emmy.webp',
  },
  {
    name: 'MyDog',
    price: '8,00€',
    ingredients: 'Salchicha bockwurst XXL, mayonesa jalapeño y lima, guacamole, cebolla caramelizada y lechuga.',
    imageUrl: '/mydog.webp',
  },
];

export const drinks: MenuItem[] = [
  { name: 'Refrescos', price: '2,00€', category: 'soda' },
  { name: 'Agua', price: '1,50€', category: 'water' },
  { name: 'Tinto de verano', price: '2,50€', category: 'beer' },
  { name: 'Cervezas', price: '2,00€', category: 'beer' },
  { name: '1906', price: '2,50€', category: 'beer' },
];