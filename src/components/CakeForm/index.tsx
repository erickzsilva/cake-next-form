'use client'

import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useRouter, useSearchParams } from 'next/navigation'

import * as S from './styles'

import { sendToFormatter } from '../../utils/masks'
import {
  cakesFlavors,
  emailValidation,
  mountParams,
  tomorrowDate
} from '../../utils/utils'

import { CakeResponse, FormInputs, NewCakes } from '../../sharedTypes/types'

import { formAction } from '../../redux/features/order-slice'
import { AppDispatch } from '../../redux/store'

import InputText from '../InputText'
import InputSelect from '../InputSelect'
import InputCheckBox from '../InputCheckBox'

import { buildNewCakes, updateCheck } from '../../factory/cakeFactory'

const CakeForm = ({
  cakes,
  subTitle,
  textChooseYourCake,
  country
}: CakeResponse) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const allParams = searchParams.toString()

  const [tomorrow, setTomorrow] = useState<string>()
  const [newCakesList, setNewCakesList] = useState<NewCakes[]>(
    buildNewCakes(searchParams, cakes)
  )

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    setTomorrow(tomorrowDate())
  }, [])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInputs>()

  const findItemChecked = !watch(cakesFlavors).find((item) => item)

  const onClickForm = (data: FormInputs) => {
    dispatch(formAction(data))
  }

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    onClickForm(data)
    router.push('/congrats')
  }

  return (
    <S.Section>
      <S.TitleForm>
        {textChooseYourCake}
        {findItemChecked && <S.Required>&nbsp;*</S.Required>}
      </S.TitleForm>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Holder className="-gap-check">
          {newCakesList &&
            newCakesList.map(
              ({ alt, srcImage, value, name, paramValue }, index) => (
                <InputCheckBox
                  value={value}
                  key={index}
                  alt={alt}
                  defaultChecked={paramValue}
                  srcImage={srcImage}
                  register={register(name, {
                    required: findItemChecked,
                    onChange() {
                      setNewCakesList(updateCheck(name, newCakesList))
                      mountParams({
                        name: name,
                        paramValue: paramValue,
                        allParams: allParams,
                        router: router
                      })
                    }
                  })}
                />
              )
            )}
        </S.Holder>

        {!findItemChecked && (
          <>
            <S.SubTitleForm>{subTitle}</S.SubTitleForm>

            <S.Holder>
              <S.Wrapper>
                <InputText
                  placeholder="First"
                  register={register('firstname', {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                    onChange(event) {
                      const { value } = event.target
                      event.target.value = sendToFormatter(value, 'onlyLetters')
                    }
                  })}
                  label="Name"
                  type="text"
                  maxLength={20}
                  autoComplete={'given-name'}
                  required={errors.firstname}
                />
              </S.Wrapper>

              <S.Wrapper>
                <InputText
                  placeholder="Last"
                  register={register('lastName', {
                    maxLength: 20,
                    onChange(event) {
                      const { value } = event.target
                      event.target.value = sendToFormatter(value, 'onlyLetters')
                    }
                  })}
                  type="text"
                  maxLength={20}
                  autoComplete={'family-name'}
                />
              </S.Wrapper>

              <S.Wrapper>
                <InputText
                  label="Delivery date"
                  minDate={tomorrow}
                  register={register('deliveryDate')}
                  type="date"
                />
              </S.Wrapper>

              <S.Wrapper>
                <InputText
                  label="Preferred delivery time"
                  register={register('deliveryTime')}
                  type="time"
                />
              </S.Wrapper>

              <S.Wrapper>
                <InputText
                  placeholder="### ### ####"
                  register={register('phone', {
                    required: true,
                    onChange(event) {
                      const { value } = event.target
                      event.target.value = sendToFormatter(value, 'phone')
                    }
                  })}
                  label="Phone"
                  type="tel"
                  required={errors.phone}
                  autoComplete="tel-national"
                />
              </S.Wrapper>

              <S.Wrapper>
                <InputText
                  placeholder=""
                  register={register('email', {
                    required: true,
                    pattern: emailValidation
                  })}
                  label="Email"
                  type="email"
                  required={errors.email}
                  autoComplete="email"
                />
              </S.Wrapper>
            </S.Holder>

            <S.Row>
              <S.AllFields htmlFor="address1">Address</S.AllFields>

              <S.Holder className="-gap">
                <S.Holder className="-gap">
                  <S.Wrapper>
                    <InputText
                      placeholder="Street Address"
                      register={register('address1')}
                      maxLength={80}
                      autoComplete="address-line1"
                      type="text"
                    />
                  </S.Wrapper>

                  <S.Wrapper>
                    <InputText
                      placeholder="Street Address Line 2"
                      register={register('address2')}
                      maxLength={80}
                      autoComplete="address-line2"
                      type="text"
                    />
                  </S.Wrapper>
                </S.Holder>

                <S.Holder>
                  <S.Wrapper>
                    <InputText
                      placeholder="City"
                      register={register('city')}
                      maxLength={20}
                      autoComplete="address-level1"
                      type="text"
                    />
                  </S.Wrapper>
                  <S.Wrapper>
                    <InputText
                      placeholder="Region"
                      register={register('region')}
                      maxLength={20}
                      autoComplete="address-level2"
                      type="text"
                    />
                  </S.Wrapper>
                  <S.Wrapper>
                    <InputText
                      placeholder="Postal / Zip Code"
                      register={register('zipCode', {
                        onChange(event) {
                          const { value } = event.target
                          event.target.value = sendToFormatter(value, 'zipCode')
                        }
                      })}
                      type="tel"
                      autoComplete="postal-code"
                    />
                  </S.Wrapper>
                  <S.Wrapper>
                    <InputSelect
                      id="country"
                      register={register('country')}
                      optionList={country}
                      placeHolder="Country"
                      autoComplete="country-name"
                    />
                  </S.Wrapper>
                </S.Holder>
              </S.Holder>
            </S.Row>

            <S.Submit value="Order" type="submit" />
          </>
        )}
      </S.Form>
    </S.Section>
  )
}

export default CakeForm
