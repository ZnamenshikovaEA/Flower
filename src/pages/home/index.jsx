import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (
    <div className='fon'>
      <div className='fon_zad'>
      </div>
        <div class="fon_zad_style">
          <div class="fon_zad_style_tekst">
          Стильные букеты в Барнауле
          </div>
          <div class="fon_zad_style_dostavim">
          <span>Доставим свежайший букет в течение часа в любую точку города</span>
          </div>
          <div class="fon_zad_style_perexodkat">
          <Link to={'/catalog'}>Каталог</Link>
          </div>
          <div className="fon_zad_style_vkinst">
          <a href="https://vk.com/id263468538">
          <img src={"/home1/vk.svg"}/>   
          </a>     
          <div>
              <img src={"/home1/inst.svg"}/>   
          </div>
          </div>
        </div>
  
    <div className="top">
      <div className='top_img'>
        <div class="top_img_flower">
            <img src='/home1/flower.svg'/>
        </div>
        <div class="top_img_flower_tekst">
          <span>Всегда свежие цветы</span>
          <span>Опытные флористы тщательно собирают каждый цветок</span>
        </div>


        <div class="top_img_top_car">
            <img src='/home1/car.svg'/>
        </div>
        <div class="top_img_car_tekst">
          <span>Быстрая доставка</span>
          <span>Наши курьеры доставят букет в течение часа</span>
        </div>



        <div class="top_img_kart">
            <img src='/home1/kart.svg'/>
        </div>
        <div class="top_img_kart_tekst">
          <span>Фото цветов</span>
          <span>Покажем как выглядит именно ваш букет перед доставкой</span>
        </div>
    </div>
    </div>


    <div className="unik">
        <div className='unik_zad'>
          <div className='unik_zad_t'>
          Уникальные букеты для вас
          </div>
        </div>
    </div>

    <div className="tekstqvetok">
       <div className='tekstqvetok_tek'>
         Дорогие наши покупатели!
         Мы рады предложить уникальные букеты, созданные профессиональными флористами с цветочного магазина.
         Каждый букет – это уникальное творение, сплетенное из самых красивых цветов и зелени, которые мы сами выращиваем и выбираем с огромной любовью
        </div>
        <div class="tekstqvetok_flow">
          <img src='/home1/mid_flow.svg'/>
        </div>
    </div>

    <div className="popular">
        <div className='popular_zad'>
          <div className='popular_zad_t'>
          Популярные букеты
          </div>
        </div>
    </div>

<div className='card_3'>
    <div className='card_3_card'>
          <div class="card_3_card_flower_mid_1">
            <img src='/home1/flower_k1.svg'/>
          </div>
          <div class="card_3_card_flower_mid_2">
            <img src='/home1/flower_k2.svg'/>
          </div>
          <div class="card_3_card_flower_mid_3">
            <img className="flower_mid_3_m" src='/home1/flower_k3.svg'/>
          </div>
    </div>
</div>

    <div className='buy'>
      <div class="buy_kat_f1">
          <Link to={'/catalog'}>Каталог</Link>
      </div>
      <div class="buy_kat_f2">
          <Link to={'/catalog'}>Каталог</Link>
      </div>
      <div class="buy_kat_f3">
          <Link to={'/catalog'}>Каталог</Link>
      </div>
    </div>

    <div className="dostav">
        <div className='dostav_zad'>
          <div className='dostav_zad_t'>
          Доставка и оплата
          </div>
        </div>
    </div>


<div className="dostavkaoplata">
    <div class="dostavkaoplata_flower_right">
        <img src='/home1/flower_right.svg'/>
    </div>
    <div class="dostavkaoplata_tekst_down_1">
      Оставте заявку на сайте или позвоните нам: 8 983 606 88 62
      Наш менеджер уточнит детали доставки и удобный способ оплаты.
      Мы доставим букет в точно назначенное время.

    <div class="dostavkaoplata_tekst_down_1_zakaz">
    <Link to={'/contacts'}>Заказать</Link>
    </div>
    </div>
</div>


<div className="nash_kon">
        <div className='nash_kon_zad'>
          <div className='nash_kon_zad_t'>
          Наши контакты
          </div>
        </div>
</div>


<div className='top_bottoma'>
  <div class="top_bottoma_me_open">
      <span>Мы всегда открыты новым предложениям, сотрудничеству и конструктивной критики.<br></br> Пожалуйста, напишите нам.</span>
  </div>

  <div class="top_bottoma_form">
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
    </div>

<div className='contakt'>
    <div class="contakt_rezhim">
      <span>Режим работы</span>
      <span>8.00-00.00 без выходных</span>
    </div>
    <div class="contakt_adress_t">
      <span>Адрес</span>
      <span>г. Барнаул, ул.Лазурная 40</span>
    </div>
    <div class="contakt_svyaz_s_nami">
      <span>Связаться с нами:</span>
      <span>8 983 606 88 62</span>
    </div>
    <div class="contakt_adress_t_poqta">
        <span>Почта</span>
        <span>Katechka106@gmail.com</span>
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

export default HomePage