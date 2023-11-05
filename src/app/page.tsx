'use client'

import CakeForm from '@/components/CakeForm'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import { CakeResponse } from '@/sharedTypes/types'
import { requestDate } from '@/services/service'
import { mock, mockHead } from '../mock'

export default function Home() {
  const [cakeResponse, setCakeResponse] = useState<CakeResponse>()

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const response = await requestDate()
    setCakeResponse(response)
  }

  return (
    <main>
      <Header title={mockHead.title} description={mockHead.description} />

      <CakeForm {...(cakeResponse || { ...mock })} />
    </main>
  )
}
