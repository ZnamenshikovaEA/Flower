import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Delivery = () => {


  return (
    <div className='dostavka_vnyt'>
        <div className="dost">
            <div className='dost_zad'>
            <div className='dost_zad_t'>
            Доставка
            </div>
            </div>
        </div>

    <YMaps>
          <div className='map_y_d' >
          <Map width='1200px' height='500px' defaultState={{ center: [53.346790, 83.776838], zoom: 12 }} />
          </div>
    </YMaps>

    <div className="freedost">
        <div className='freedost_zad'>
          <div className='freedost_zad_t'>
          БЕСПЛАТНАЯ ДОСТАВКА ОТ 2000 РУБЛЕЙ
          </div>
        </div>
    </div>
<div className='border'>
    <div className={'car_GYO'}>
        <img src={'/home1/car.svg'} />
        <a style={{color: "green"}}>Зеленый район - 250 ₽</a>
        <img src={'/home1/car.svg'} />
        <span style={{color: "yellow"}}>Желтый район - 350 ₽</span>
        <img src={'/home1/car.svg'} />
        <span style={{color: "orange"}}>Оранжевый район - 450 ₽</span>
    </div>
    <div class = "GYO_t">
        <span style={{color: "green"}}>Доставка по г. Барнаул (При заказе от 2000 рублей - доставка бесплатная)</span>
        <span style={{color: "yellow"}}> пос. Ерестной, пос. Плодопитомник, пос. Цветы Алтая, пос. Ильича (в том числе Кораблик, Грузовой причал), ул. Трактовая, ул. Дальняя, ул. Горская, «У Григорича» (гора)</span>
        <span style={{color: "orange"}}>пос. Южный, Куета, Гоньба, Спутник, Авиатор, Власиха, Октябрьский, Казенная Заимка, Борзовая Заимка, Новосиликатный, Затон, Проезд Южный</span>
    </div>
</div>

<div className='border'>
    <div class = "car_RVB">
        <img src={'/home1/car.svg'} />
        <span style={{color: "red"}}>Красный район - 500 ₽</span>
        <img src={'/home1/car.svg'} />
        <span style={{color: "violet"}}>Фиолетовый район - 600 ₽</span>
        <img src={'/home1/car.svg'} />
        <span style={{color: "blue"}}>Синий район - 900 ₽</span>
    </div>
    <div class = "RVB_t">
        <span style={{color: "red"}}>пос. Научный городок, пос. Новый, пос. Солнечный берег, Березовка</span>
        <span style={{color: "violet"}}>Новоалтайск, Белоярск, пос. Лесной, пос. Токарёво, пос. Мохнатушка</span>
        <span style={{color: "blue"}}>с. Шахи, с. Зимари, с. Зудилово, с. Бобровка</span>
    </div>
    </div>




    <div class = "bottom_tekst_big">
        <span>Доставка осуществляется КРУКЛОСУТОЧНО с 7:30 до 22:00 доставка бесплатная при заказе от 2000 рублей, c 22:00 до 7:30 - платная независимо от стоимости букета и осуществляется на такси. Возможность доставки в другую точку города или ранней доставки уточняйте у флористов по телефону: 8 983 606 88 62 Сопутствующие товары без цветов доставляются по согласованию с менеджером. Осуществление срочной доставки зависит от сложности заказа и занятости курьера. Оплата производится курьеру наличными, переводом на Сбербанк или с помощью банковской карты (также действует бесконтактная система оплаты QR). При отмене заказа или оформлении возврата денежные средства возвращаются в течение 3-х дней на банковскую карту, с которой была совершена покупка.</span>
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
export default Delivery