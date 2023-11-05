type MaskType = 'zipCode' | 'onlyLetters' | 'onlyNumbers' | 'phone'

export const sendToFormatter = (value: string, maskType: MaskType) => {
  return objMasks[maskType](value)
}

const maskZipCode = (value: string) => {
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
}

const maskOnlyLetters = (value: string) => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '')
}

const maskOnlyNumbers = (value: string) => {
  return value.replace(/\D/g, '')
}

const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
}

type ObjMasksProps = {
  zipCode: (value: string) => string
  onlyLetters: (value: string) => string
  onlyNumbers: (value: string) => string
  phone: (value: string) => string
}

const objMasks: ObjMasksProps = {
  zipCode: maskZipCode,
  onlyLetters: maskOnlyLetters,
  onlyNumbers: maskOnlyNumbers,
  phone: maskPhone
}
