import React from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
const SelectOption = () => {
const {t} = useTranslation()
  const handChange = (e) => {
    i18next.changeLanguage(e.target.value)


  }

  return (
    <span className='mt-5 select  px-3 ' >
      <h4>{t(`PLEASE SELECT YOUR LANGUAGE`)}</h4>
      <select class="form-select select1 p-2" onChange={handChange} >

        <option selected value={"en"}>ENGLISH</option>
        <option value={"hi"}>HINDI</option>
        <option value={"ko"}>KOREAN</option>
      </select>
    </span>
  )
}

export default SelectOption