import React from 'react'
import SelectOption from '../component/SelectOption'
import { useTranslation } from 'react-i18next'

const About = () => {

  const { t } = useTranslation()

  return (
    <span>
      <SelectOption />
      <div className="container d-flex w-100 flex-wrap">
        <div class="text-section ">
          <span>
            <h1>{t(`Spend Control`)}</h1>
            <h2>
            {t(`Never go overboard with your spending. Set up budgets, enforce policies, and configure purchase approvals to ensure no money is wasted on unauthorized expenses or purchases. Not just that: Create budgets and compare with actual spending. Set up different rules to restrict overspending by employees. Streamline spending with purchase requests.`)}
            </h2>
          </span>
        </div>
        <div class="img-section">
          <iframe className='video' src="https://www.zoho.com/expense/index/features/travel-management.webm?v=1" frameborder="0"></iframe>
        </div>
      </div>
    </span>
  )
}

export default About