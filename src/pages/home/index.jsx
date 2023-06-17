import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (
    <div className='fon'>
    <div class='zad'>
        <img src='/home1/zad.svg'/>
    </div>
    <div class='zad_m'>
        <img src='/home_mobile/zad.svg'/>
    </div>
    <div class="style">
      <span>Стильные букеты в Барнауле</span>
    </div>
    <div class="dostavim">
      <span>Доставим свежайший букет в течение часа в любую точку города</span>
    </div>
    <div class="per_kat">
    <Link to={'/catalog'}>Каталог</Link>
    </div>
    
    <div class="vk">
        <a href="https://vk.com/id263468538">
        <img src={"/home1/vk.svg"}/>   
        </a>     
    </div>
    <div class="inst">
        <img src={"/home1/inst.svg"}/>   
    </div>
    <div class="fon_top">
    </div>
    <div class="vk_m">
        <a href="https://vk.com/id263468538">
        <img src={"/home_mobile/vk.svg"}/>   
        </a>     
    </div>
    <div class="inst_m">
        <img src={"/home_mobile/inst.svg"}/>   
    </div>

    <div class="fon_top">
    </div>
    <div class="fon_top_m">
    </div>

    <div class="flower">
        <img src='/home1/flower.svg'/>
    </div>
    <div class="flower_tekst_1">
      <span>Всегда свежие цветы</span>
    </div>
    <div class="flower_tekst_2">
      <span>Опытные флористы тщательно собирают каждый цветок</span>
    </div>

    <div class="flower_m">
        <img src='/home_mobile/flower.svg'/>
    </div>
    <div class="flower_tekst_1_m">
      <span>Всегда свежие цветы</span>
    </div>


    <div class="car">
        <img src='/home1/car.svg'/>
    </div>
    <div class="car_tekst_1">
      <span>Быстрая доставка</span>
    </div>
    <div class="car_tekst_2">
      <span>Наши курьеры доставят букет в течение часа</span>
    </div>
    <div class="car_m">
        <img src='/home_mobile/car.svg'/>
    </div>
    <div class="car_tekst_1_m">
      <span>Быстрая доставка</span>
    </div>



    <div class="kart">
        <img src='/home1/kart.svg'/>
    </div>
    <div class="kart_tekst_1">
      <span>Фото цветов</span>
    </div>
    <div class="kart_tekst_2">
      <span>Покажем как выглядит именно ваш букет перед доставкой</span>
    </div>
    <div class="kart_m">
        <img src='/home_mobile/kart.svg'/>
    </div>
    <div class="kart_tekst_1_m">
      <span>Фото цветов</span>
    </div>


    <div class="unik">
      <span>Уникальные букеты для вас</span>
    </div>

    <div class="fon_mid">
    </div>
    <div class="img_mid">
        <img src='/home1/mid_flow.svg'/>
    </div>

    <div class="dor">
        <span>
        Дорогие наши покупатели!
        Мы рады предложить уникальные букеты, созданные профессиональными флористами с цветочного магазина.
        Каждый букет – это уникальное творение, сплетенное из самых красивых цветов и зелени, которые мы сами выращиваем и выбираем с огромной любовью
        </span>
    </div>

    <div class="popular">
      <span>Популярные букеты</span>
    </div>

    <div class="flower_mid_1">
        <img src='/home1/flower_k1.svg'/>
    </div>
    <div class = "r_f1">
    </div>
    <div class="kat_f1">
    <Link to={'/catalog'}>Каталог</Link>
    </div>

    <div class="flower_mid_2">
        <img src='/home1/flower_k2.svg'/>
    </div>
    <div class = "r_f2">
    </div>
    <div class="kat_f2">
    <Link to={'/catalog'}>Каталог</Link>
    </div>

    <div class="flower_mid_3">
        <img src='/home1/flower_k3.svg'/>
    </div>
    <div class = "r_f3">
    </div>
    <div class="kat_f3">
    <Link to={'/catalog'}>Каталог</Link>
    </div>

    <div class="dostav">
      <span>Доставка и оплата</span>
    </div>

    <div class="flower_right">
        <img src='/home1/flower_right.svg'/>
    </div>

    <div class="tekst_down_1">
      <span>Оставте заявку на сайте или позвоните нам: 8 983 606 88 62</span>
    </div>
    <div class="tekst_down_2">
      <span>Наш менеджер уточник детали доставки и удобный способ оплаты</span>
    </div>
    <div class="tekst_down_3">
      <span>Мы доставим букет в точно назначенное время</span>
    </div>

    <div class="zakaz">
    <Link to={'/contacts'}>Заказать</Link>
    </div>

    <div class="nash_kon">
      <span>Наши контакты</span>
    </div>
    <div class="me_open">
      <span>Мы всегда открыты новым предложениям, сотрудничеству и конструктивной критики. Пожалуйста, напишите нам.</span>
    </div>

<div class="form">
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

    <div class="rezhim">
      <span>Режим работы</span>
    </div>
    <div class="time">
      <span>8.00-00.00 без выходных</span>
    </div>
    <div class="adress_t">
      <span>Адрес</span>
    </div>
    <div class="adress">
      <span>г. Барнаул, ул.Лазурная 40</span>
    </div>
    <div class="svyaz_s_nami">
      <span>Связаться с нами:</span>
    </div>
    <div class="svyaz_s_nami_number">
      <span>8 983 606 88 62</span>
    </div>

    <div class="vk_svyaz">
        <a href="https://vk.com/id263468538">
        <img src={"/home1/vk.svg"}/>   
        </a>     
    </div>
    <div class="inst_svyaz">
        <img src={"/home1/inst.svg"}/>   
    </div>
    <div class="poqta_t">
      <span>Почта</span>
    </div>
    <div class="poqta">
      <span>Katechka106@gmail.com</span>
    </div>

    <div class = "bottom">
    </div>
    <div class = "bottom_t">
        <span>Каталог Контакты Сотрудничество</span>
    </div>
    <div class="vk_bottom">
        <a href="https://vk.com/id263468538">
        <img src={"/home1/vk.svg"}/>   
        </a>     
    </div>
    <div class="inst_bottom">
        <img src={"/home1/inst.svg"}/>   
    </div>
    </div>
  )
}

export default HomePage