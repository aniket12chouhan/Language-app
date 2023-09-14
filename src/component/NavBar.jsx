import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
  const {t} = useTranslation()
  return (
    <nav class="navbar bg-primary bg-opacity-25 ">
        <div class="container-fluid">
          <span className='d-flex  w-100'>
            <span class="navbar-brand mb-0 h1 fs-1 text-dark fw-bold lg:w-25 md:50">{t(`My language`)}</span>
            <span className='mx-5 mt-2 lg:w-25 md:50'>
              <Link to={'/'} class="btn text-dark fw-semibold fs-4">{t(`HOME`)}</Link>
              <Link to={'/About'} class="btn text-dark fw-semibold fs-4">{t(`ABOUT`)}</Link>
            </span>

          </span>
        </div>
      </nav>
  )
}

export default NavBar