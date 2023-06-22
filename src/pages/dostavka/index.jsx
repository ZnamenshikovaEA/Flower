import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Delivery = () => {


  return (
    <div className='dostavka_vnyt'>
    <div class = "dostav_name">
        <span>Доставка</span>
    </div>

    <YMaps>
        <div className='ramka_m'>
            <a class = "karta" href='https://yandex.ru/maps/197/barnaul/?from=api-maps&ll=83.777319%2C53.342763&origin=jsapi_2_1_79&z=12'>На карте</a>
          <div className='map_y_d' >
          <Map width='1200px' height='500px' defaultState={{ center: [53.346790, 83.776838], zoom: 12 }} />
          </div>
          </div>
    </YMaps>

    <div class = "zad_free"></div>
    <div class = "free_t">
        <span>БЕСПЛАТНАЯ ДОСТАВКА ОТ 2000 РУБЛЕЙ</span>
    </div>

    <div className={'car_green'}>
        <img className={'car_green_m'} src={'/home1/car.svg'} />
    </div>
    <div class = "green_t">
        <span>Зеленый район - 250 ₽</span>
    </div>
    <div class = "green_t_v">
        <span>Доставка по г. Барнаул (При заказе от 2000 рублей - доставка бесплатная)</span>
    </div>
    <div class = "ramka_g"></div>


    <div className={'car_yellow'}>
        <img className={'car_yellow_m'} src={'/home1/car.svg'} />
    </div>
    <div class = "yellow_t">
        <span>Желтый район - 350 ₽</span>
    </div>
    <div class = "yellow_t_v">
        <span> пос. Ерестной, пос. Плодопитомник, пос. Цветы Алтая, пос. Ильича (в том числе Кораблик, Грузовой причал), ул. Трактовая, ул. Дальняя, ул. Горская, «У Григорича» (гора)</span>
    </div>
    <div class = "ramka_y"></div>


    <div className={'car_orange'}>
        <img className={'car_orange_m'} src={'/home1/car.svg'} />
    </div>
    <div class = "orange_t">
        <span>Оранжевый район - 450 ₽</span>
    </div>
    <div class = "orange_t_v">
        <span>пос. Южный, Куета, Гоньба, Спутник, Авиатор, Власиха, Октябрьский, Казенная Заимка, Борзовая Заимка, Новосиликатный, Затон, Проезд Южный</span>
    </div>
    <div class = "ramka_o"></div>


    <div className={'car_red'}>
        <img className={'car_red_m'} src={'/home1/car.svg'} />
    </div>
    <div class = "red_t">
        <span>Красный район - 500 ₽</span>
    </div>
    <div class = "red_t_v">
        <span>Фирсова Слобода 1, 2, 3, пос. Научный городок, пос. Бельмесево, Лебяжье, пос. Центральный, Сибирская Долина, пос. Новомихайловка, пос. Санниково, пос. Новый, пос. Солнечный берег, Березовка</span>
    </div>
    <div class = "ramka_r"></div>


    <div className={'car_violet'}>
        <img className={'car_violet_m'} src={'/home1/car.svg'} />
    </div>
    <div class = "violet_t">
        <span>Фиолетовый район - 600 ₽</span>
    </div>
    <div class = "violet_t_v">
        <span>Новоалтайск, Белоярск, пос. Лесной, пос. Токарёво, пос. Мохнатушка</span>
    </div>
    <div class = "ramka_v"></div>


    <div className={'car_blue'}>
        <img className={'car_blue_m'} src={'/home1/car.svg'} />
    </div>
    <div class = "blue_t">
        <span>Синий район - 900 ₽</span>
    </div>
    <div class = "blue_t_v">
        <span>с. Шахи, с. Зимари, с. Зудилово, с. Бобровка</span>
    </div>
    <div class = "ramka_b"></div>


    <div class = "bottom_tekst_big">
        <span>Доставка осуществляется КРУКЛОСУТОЧНО с 7:30 до 22:00 доставка бесплатная при заказе от 2000 рублей, c 22:00 до 7:30 - платная независимо от стоимости букета и осуществляется на такси. Возможность доставки в другую точку города или ранней доставки уточняйте у флористов по телефону: 8 983 606 88 62 Сопутствующие товары без цветов доставляются по согласованию с менеджером. Осуществление срочной доставки зависит от сложности заказа и занятости курьера. Оплата производится курьеру наличными, переводом на Сбербанк или с помощью банковской карты (также действует бесконтактная система оплаты QR). При отмене заказа или оформлении возврата денежные средства возвращаются в течение 3-х дней на банковскую карту, с которой была совершена покупка.</span>
    </div>

    <div class = "bottom_D">
    </div>
    <div class = "bottom_t_D">
        <span>Каталог Контакты Сотрудничество</span>
    </div>
    <div class="vk_bottom_D">
        <a href="https://vk.com/id263468538">
        <img className={'vk_bottom_D_m'} src={"/home1/vk.svg"}/>   
        </a>     
    </div>
    <div class="inst_bottom_D">
        <img className={'inst_bottom_D_m'} src={"/home1/inst.svg"}/>   
    </div>
    </div>

  )
}
export default Delivery