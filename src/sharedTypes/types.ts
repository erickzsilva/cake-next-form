export type FormInputs = {
  firstname: string
  lastName?: string
  deliveryDate?: Date
  deliveryTime?: Date
  phone: number
  email: string
  address1: string
  address2: string
  city: string
  region: string
  zipCode: string
  country: string
  redFruitCake: string
  strawberrySpongeCake: string
  hazelnutPie: string
  mmCake: string
}

export type CakeResponse = {
  title?: string
  description?: string
  textChooseYourCake: string
  subTitle: string
  cakes: Cakes[]
  country: string[]
}

export type Cakes = {
  value: string
  name: CakesFlavors
  alt: string
  srcImage: string
}

export interface NewCakes extends Cakes {
  paramValue: boolean
}

export type CakesFlavors =
  | 'redFruitCake'
  | 'strawberrySpongeCake'
  | 'hazelnutPie'
  | 'mmCake'