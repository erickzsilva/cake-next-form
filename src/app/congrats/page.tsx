'use client'

import { useAppSelector } from '@/redux/store'
import { useRouter } from 'next/navigation'
import * as S from './styles'

export default function Index() {
  const router = useRouter()
  const order = useAppSelector((state) => state.orderReducer.value)

  return (
    <>
      <S.Congrats>
        <S.Holder>
          <S.WrapTitle>
            <S.Title>Pedido concluido</S.Title>
          </S.WrapTitle>

          <S.Table>
            {order.firstname && (
              <S.Field>
                <S.TitleField>
                  Name: <S.TextField>{order.firstname}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.lastName && (
              <S.Field>
                <S.TitleField>
                  Last: <S.TextField>{order.lastName}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.phone !== 0 && (
              <S.Field>
                <S.TitleField>
                  Phone: <S.TextField>{order.phone}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.address1 && (
              <S.Field>
                <S.TitleField>
                  Address 1: <S.TextField>{order.address1}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.address2 && (
              <S.Field>
                <S.TitleField>
                  Address 2: <S.TextField>{order.address2}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.zipCode && (
              <S.Field>
                <S.TitleField>
                  Zip Code: <S.TextField>{order.zipCode}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.city && (
              <S.Field>
                <S.TitleField>
                  Region: <S.TextField>{order.region}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.city && (
              <S.Field>
                <S.TitleField>
                  City: <S.TextField>{order.city}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.country && (
              <S.Field>
                <S.TitleField>
                  Country: <S.TextField>{order.country}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.deliveryDate && (
              <S.Field>
                <S.TitleField>
                  Delivery Date:{' '}
                  <S.TextField>{order.deliveryDate.toString()}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.deliveryTime && (
              <S.Field>
                <S.TitleField>
                  Delivery Time:{' '}
                  <S.TextField>{order.deliveryTime.toString()}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.redFruitCake && (
              <S.Field>
                <S.TitleField>
                  Cake Type: <S.TextField>{order.redFruitCake}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.mmCake && (
              <S.Field>
                <S.TitleField>
                  Cake Type: <S.TextField>{order.mmCake}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.hazelnutPie && (
              <S.Field>
                <S.TitleField>
                  Cake Type: <S.TextField>{order.hazelnutPie}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
            {order.strawberrySpongeCake && (
              <S.Field>
                <S.TitleField>
                  Cake Type:{' '}
                  <S.TextField>{order.strawberrySpongeCake}</S.TextField>
                </S.TitleField>
              </S.Field>
            )}
          </S.Table>

          <S.WrapBtn>
            <S.Btn type="button" onClick={() => router.back()}>
              Home
            </S.Btn>
          </S.WrapBtn>
        </S.Holder>
      </S.Congrats>
    </>
  )
}
