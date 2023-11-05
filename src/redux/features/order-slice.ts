import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FormInputs } from '../../sharedTypes/types'

type InitialState = {
  value: OrderState
}

type OrderState = FormInputs

const initialState = {
  value: {
    firstname: "",
    lastName: "",
    deliveryDate: undefined,
    deliveryTime: undefined,
    phone: 0,
    email: "",
    address1: "",
    address2: "",
    city: "",
    region: "",
    zipCode: "",
    country: "",
    redFruitCake: "",
    strawberrySpongeCake: "",
    hazelnutPie: "",
    mmCake: "",
  } as OrderState
} as InitialState

export const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: () => {
      return initialState
    },
    formAction: (state, action: PayloadAction<FormInputs>) => {
      return {
        value: {
          firstname: action.payload.firstname,
          lastName: action.payload.lastName,
          deliveryDate: action.payload.deliveryDate,
          deliveryTime: action.payload.deliveryTime,
          phone: action.payload.phone,
          email: action.payload.email,
          address1: action.payload.address1,
          address2: action.payload.address2,
          city: action.payload.city,
          region: action.payload.region,
          zipCode: action.payload.zipCode,
          country: action.payload.country,
          redFruitCake: action.payload.redFruitCake,
          strawberrySpongeCake: action.payload.strawberrySpongeCake,
          hazelnutPie: action.payload.hazelnutPie,
          mmCake: action.payload.mmCake,
        }
      }
    }
  }
})

export const { formAction, reset } = order.actions
export default order.reducer