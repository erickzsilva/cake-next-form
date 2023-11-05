import { ReadonlyURLSearchParams } from "next/navigation"

import { seachParams } from "../utils/utils"
import { Cakes, NewCakes } from "../sharedTypes/types"

export const buildNewCakes = (searchParams: ReadonlyURLSearchParams, cakes: Cakes[]) => {
    const mountCakes = cakes.map(({ name, alt, srcImage, value }): NewCakes => {
      const valParam = seachParams(name, searchParams)
      const newCakes: NewCakes = {
        name: name,
        alt: alt,
        srcImage: srcImage,
        value: value,
        paramValue: valParam
      }
      return newCakes
    })
    return mountCakes
  }

export const  updateCheck = (paramName: string, newCakesList: NewCakes[]) => {
    const list = newCakesList.map(
      ({ name, alt, srcImage, value, paramValue }): NewCakes => {
        if (paramName === name) {
          const newCakes: NewCakes = {
            name: name,
            alt: alt,
            srcImage: srcImage,
            value: value,
            paramValue: !paramValue
          }
          return newCakes
        }
        return {
          name,
          alt,
          srcImage,
          value,
          paramValue
        }
      }
    )
    return list
  }