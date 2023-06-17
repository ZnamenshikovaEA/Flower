import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Contacts = () => {


  return (
    <div className='contacts_vnyt'>
        <div class = 'zagolovok_contacts'>
            <span>Контакты</span>
        </div>
        <div class = 'sred_svyaz'>
            <span>Доступные средства связи:</span>
        </div>

        <div className={'phone_img'}>
            <img src={'/contacts1/phone.svg'} />
        </div>
        <div class = 'phone_tekst_img'>
            <span>Телефон</span>
        </div>
        <div class = 'phone_tekst_img_1'>
            <span>8 983 606 88 62</span>
        </div>

        <div className={'skype_img'}>
            <img src={'/contacts1/skype.svg'} />
        </div>
        <div class = 'skype_tekst_img'>
            <span>Skype</span>
        </div>
        <div class = 'skype_tekst_img_1'>
            <span>flowers</span>
        </div>
        <div className={'poqta_img'}>
            <img src={'/contacts1/poqta.svg'} />
        </div>
        <div class = 'poqta_tekst_img'>
            <span>E-mail</span>
        </div>
        <div class = 'poqta_tekst_img_1'>
            <span>Katechka106@gmail.com</span>
        </div>
        <div className={'marker_img'}>
            <img src={'/contacts1/marker.svg'} />
        </div>
        <div class = 'marker_tekst_img'>
            <span>Адрес</span>
        </div>
        <div class = 'marker_tekst_img_1'>
            <span>г. Барнаул, ул. Лазурная 40</span>
        </div>

        <YMaps>
          <div className='map_y' >
          <Map  width='900px' height='400px' defaultState={{ center: [53.331634, 83.682075], zoom: 17 }} />
          </div>
        </YMaps>

        <div class = 'forma_C'>
            <span>Вы можете воспользоваться контактной формой для связи. 
                Заполните форму, отправте информацию и с Вами свяжется опытный флорист, который поможет вам с выбором.</span>
        </div>

        <div class="form_С">
            <form>
            <div>
                <label htmlFor="Ваше имя">Ваше имя</label>
                <input id="Ваше имя" type="text" />
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <input id="Email" type="email" />
            </div>
            <div>
                <label htmlFor="message">Введите ваше сообщение</label>
                <textarea id="message" />
            </div>
            <button type="submit">Отправить</button>
            </form>
        </div>

        <div class = 'otziv'>
            <span>Отзывы</span>
        </div>
        <div className={'bottom_flow_img'}>
            <img src={'/contacts1/bottom_flow.svg'} />
        </div>


        <div class="vwrap"><div class="vmove">
  <div class="vslide">
    <h3>Юлия Сергеевна</h3>
    <p>Красивый и свежий букет! Мне очень понравилось сочетание цветов и их аранжировка. Отличный подарок для любого случая. Спасибо!</p>
  </div>
  <div class="vslide">
    <h3>Екатерина Знаменщикова</h3>
    <p>Лучший магазин цветов!</p>
  </div>
  <div class="vslide">
    <h3>Алексей Плешков</h3>
    <p>Все прошло на высоте, сюрприз удался! Букет шикарный! Спасибо. Все пожелания учли, всегда на связи.</p>
  </div>
</div>
</div>

<div class = "bottom_C">
    </div>
    <div class = "bottom_C_t">
        <span>Каталог Контакты Сотрудничество</span>
    </div>
    <div class="vk_bottom_C">
        <a href="https://vk.com/id263468538">
        <img src={"/home1/vk.svg"}/>   
        </a>     
    </div>
    <div class="inst_bottom_C">
        <img src={"/home1/inst.svg"}/>   
    </div>
    </div>

  )
}
export default Contacts