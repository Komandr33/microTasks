import adidasModel1 from '../../assets/Superstar_standard.webp'
import adidasModel2 from '../../assets/PostMove_standard.webp'
import adidasModel3 from '../../assets/AdiFOM_standard.webp'
import {v1} from 'uuid';


export type AdidasItem = {
  model: string;
  collection: string;
  price: string;
  picture: string;
  id: number;
}

export const adidasArr: AdidasItem[] = [
  {
    model: 'ADIDAS ADIFOM TRXN',
    collection: 'new collection1',
    price: '1000$',
    picture: adidasModel1,
    id: 1
  },
  {
    model: 'ADIDAS ADIFOM SUPER',
    collection: 'new collection22',
    price: '2000$',
    picture: adidasModel2,
    id: 2
  },
  {
    model: 'ADIDAS SUPER SUPERSKI',
    collection: 'new collection333',
    price: '3000$',
    picture: adidasModel3,
    id: 3
  },
]