import adidasModel1 from '../assets/adidas/Superstar_standard.webp'
import adidasModel2 from '../assets/adidas/PostMove_standard.webp'
import adidasModel3 from '../assets/adidas/AdiFOM_standard.webp'
import pumaModel1 from '../assets/puma/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg'
import pumaModel2 from '../assets/puma/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg'
import pumaModel3 from '../assets/puma/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg'

export type storeItem = {
  model: string;
  collection: string;
  price: string;
  picture: string;
  id: string;
}

export const store = {
  adidas: [
    {
      model: 'ADIDAS ADIFOM TRXN',
      collection: 'new collection1',
      price: '1000$',
      picture: adidasModel1,
      id: '1'
    },
    {
      model: 'ADIDAS ADIFOM SUPER',
      collection: 'new collection22',
      price: '2000$',
      picture: adidasModel2,
      id: '2'
    },
    {
      model: 'ADIDAS SUPER SUPERSKI',
      collection: 'new collection333',
      price: '3000$',
      picture: adidasModel3,
      id: '3'
    },
  ] as storeItem[],
  puma: [
    {
      model: 'PUMA ADIFOM TRXN',
      collection: 'new collection1',
      price: '800$',
      picture: pumaModel1,
      id: '1'
    },
    {
      model: 'PUMA ADIFOM SUPER',
      collection: 'new collection22',
      price: '1500$',
      picture: pumaModel2,
      id: '2'
    },
    {
      model: 'PUMA SUPER SUPERSKI',
      collection: 'new collection333',
      price: '2500$',
      picture: pumaModel3,
      id: '3'
    },
  ] as storeItem[],
}

export type storeType = {
  [key: string]: storeItem[]
}
// export type storeType = typeof store