'use client'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import GlobalStyles from '@/styles/global'
import { store } from '@/redux/store'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>{children}</Provider>
    </>
  )
}
