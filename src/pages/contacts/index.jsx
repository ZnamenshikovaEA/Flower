import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Contacts = () => {


  return (
    <div className='contacts_vnyt'>
      <div className="contacts_t">
              <div className='contacts_t_zad'>
                <div className='contacts_t_zad_t'>
                  Контакты
                </div>
              </div>
          </div>
        <div class = 'sred_svyaz'>
            <span>Доступные средства связи</span>
        </div>

        <div className={'phone_img'}>
            <img src={'/contacts1/phone.svg'} />
            <span>Телефон:8 983 606 88 62</span>
            <img src={'/contacts1/skype.svg'} />
            <span>Skype: flowers</span>
            <img src={'/contacts1/poqta.svg'} />
            <span>E-mail: Katechka106@gmail.com</span>
            <img src={'/contacts1/marker.svg'} />
            <span>Адрес: г. Барнаул, ул. Лазурная 40</span>
        </div>






        <YMaps>
          <div className='map_y_k' >
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

        <div className="otziv_t">
              <div className='otziv_t_zad'>
                <div className='otziv_t_zad_t'>
                  Отзывы
                </div>
              </div>
          </div>
<div className={'bottom_flow_img'}>
            <img src={'/contacts1/bottom_flow.svg'} />
        <div class="vwrap"><div class="vmove">
  <div class="vslide">
    <h3>Юлия Сергеевна</h3>
    <p>Отличный подарок для любого случая. Спасибо!</p>
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
</div>


<div class = "bottom">
    <div class = "bottom_t">
        <span>Каталог</span>
        <span>Контакты</span>
        <span>Сотрудничество</span>
    </div>
    <div class="bottom_vkinst">
        <a href="https://vk.com/id263468538">
        <img src={"/home1/vk.svg"}/>   
        </a>     
        <img src={"/home1/inst.svg"}/>
    </div>   
  </div>
    </div>

  )
}
export default Contacts