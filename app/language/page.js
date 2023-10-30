import Image from 'next/image'
import React from 'react'
import logo from '@public/mitiLogo.png'
import './styles.css'

const Language = () => {
    return (
        <div className='chooseLanguage'>
            <div className='logo'>
                <Image
                    src={logo}
                    width={137}
                    height={137}
                    alt='logo'
                />
            </div>
            <h1 className='language-header'>Выбрать язык</h1>
            <button className='russian-button'>Русcкий</button>
            <br />
            <button className='english-button'>English</button>
            <br />
            <button className='submit-button'>Далее</button>
        </div>
    )
}

export default Language