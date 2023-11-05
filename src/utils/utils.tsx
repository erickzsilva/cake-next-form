import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { ReadonlyURLSearchParams } from 'next/navigation'

import { CakesFlavors } from '../sharedTypes/types'

export const emailValidation: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const testString = (value: string | null): boolean => {
  const result = value ? /true/.test(value) : false
  return result
}

export const cakesFlavors: CakesFlavors[] = [
  'redFruitCake',
  'strawberrySpongeCake',
  'hazelnutPie',
  'mmCake'
]

type MountParams = {
  name: string
  paramValue: boolean
  allParams: string
  router: AppRouterInstance
}

export const mountParams = ({
  name,
  paramValue,
  allParams,
  router
}: MountParams) => {
  cakesFlavors.forEach(() => {
    if (allParams) {
      if (allParams.includes(name)) {
        if (allParams.includes(`${name}=${paramValue}`)) {
          const newAllParams = allParams.replace(
            `${name}=${paramValue}`,
            `${name}=${!paramValue}`
          )
          router.replace(`?${newAllParams}`, {
            scroll: false
          })
        }
      } else {
        const newAllParams = allParams.concat(`&${name}=${!paramValue}`)
        router.replace(`?${newAllParams}`, {
          scroll: false
        })
      }
    } else {
      router.replace(`?${name}=${!paramValue}`, {
        scroll: false
      })
    }
  })
}

export const seachParams = (
  value: string,
  searchParams: ReadonlyURLSearchParams
): boolean => {
  const valParam = searchParams.get(value)
  return testString(valParam)
}

export const tomorrowDate = () => {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(today.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)

  return tomorrow
    .toLocaleString('pt', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    })
    .split('/')
    .reverse()
    .join('-')
}
