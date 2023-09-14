import React from 'react'
import SelectOption from '../component/SelectOption'
 import { useTranslation } from 'react-i18next'



const Home = () => {
    const {t} = useTranslation()
  
    return (
        <>
        <SelectOption />
            <div className="container d-flex w-100 flex-wrap">


                <div class="text-section ">
                    <span>
                        <h1>{t(`Take back Control of your money`)}</h1>
                        <h2>
                            {t(`Expense manager is a personal finance application that makes money managment easy. The app is Designed to streamline expense tracking and help you save money`)}
                        </h2>
                    </span>
                </div>
                <div class="img-section">
                    <img src="./img/expanse 1.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Home