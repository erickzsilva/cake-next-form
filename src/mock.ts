import { CakeResponse } from './sharedTypes/types'

export const mock: CakeResponse = {
  title: 'Cake Order Form',
  description: `Order your freshly baked cakes using only the finest quality natural ingredientes.`,
  textChooseYourCake:
    'Please choose your favorite cake from among the following',
  subTitle: 'Order Information',
  cakes: [
    {
      value: 'Red Fruit Cake',
      name: 'redFruitCake',
      alt: 'Red Fruit Cake',
      srcImage: 'img/redFruitCake.jpg'
    },
    {
      value: 'Strawberry Sponge Cake',
      name: 'strawberrySpongeCake',
      alt: 'Strawberry Sponge Cake',
      srcImage: 'img/strawberrySpongeCake.jpg'
    },
    {
      value: 'Hazelnut Pie',
      name: 'hazelnutPie',
      alt: 'Hazelnut Pie',
      srcImage: 'img/hazelnutPie.jpg'
    },
    {
      value: 'MM Cake',
      name: 'mmCake',
      alt: 'MM Cake',
      srcImage: 'img/mmCake.jpg'
    }
  ],
  country: ['Argentina', 'Brasil', 'França', 'Mexico', 'Paraguai', 'Portugal']
}

export const mockHead = {
  title: 'Cake Order Form',
  description: `Order your freshly baked cakes using only the finest quality natural ingredientes.`
}
