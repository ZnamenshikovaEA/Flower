import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export const HeaderPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <React.Fragment>
    <div className={'header'}>
      <div className={'header__menu'}>
        <div>
        <Link to={'/'}>La Rose</Link>
        </div>
        <div>
          <Link to={'/o_nas'}>О нас</Link>
        </div>
        <div>
          <Link to={'/catalog'}>Каталог</Link>
        </div>
        <div>
          <Link to={'/dostavka'}>Доставка и оплата</Link>
        </div>
        <div>
          <Link to={'/contacts'}>Контакты</Link>
        </div>
          <div>
            <span>8 983 606 88 62</span>
          </div>
          <div>
            <img src={'/header1/phone.svg'} />
          </div>
    </div>
    </div>

    <div className={'header-mobile'}>
        <div className={'header-mobile__menu'}>
        <div class="tekst_logo">
        <Link to={'/'}>La Rose</Link>
        </div>
          <div class = 'phone_m'>
            <img src={'/header_mobile/phone.svg'} />
          </div>
          <div class = 'lupa'>
            <img src={'/header_mobile/lupa.svg'} />
          </div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <img src={'/header_mobile/burger.svg'} />
          </div>
        </div>
        <div
          className={classNames('header-mobile__block', {
            'header-mobile__block-open': isOpen,
          })}
        >
          {isOpen && (
            <>
              <div>
                <Link to={'/o_nas'}>О нас</Link>
              </div>
              <div>
                <Link to={'/catalog'}>Каталог</Link>
              </div>
              <div>
                <Link to={'/dostavka'}>Доставка и оплата</Link>
              </div>
              <div>
                <Link to={'/contacts'}>Контакты</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
