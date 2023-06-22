import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const AboutUs = () => {


  return (
    <div className='o_nas_vnyt'>
    <div class = "Zagolovok_o_nas">
        <span>О нас</span>
    </div>
    <div class = "slogan">
        <span>«Быстро, красиво, с любовью»- это про нас!</span>
    </div>
    <div class = "slogan_t">
        <span>Наш цветочный магазин - это место, где цветы становятся настоящими произведениями искусства. 
            Мы предлагаем широкий выбор свежих и красивых цветов для всех случаев жизни - от романтических свиданий до свадебных церемоний и празднования дней рождений. 
        </span>
    </div>

    <div class={'star'}>
      <img className='star_image' src={'/o_nas1/star.svg'} />
      </div>
      <div class = "star_t1">
        <span>Надежность</span>
      </div>
        <div class = "star_t2">
        <span>Наша компания на рынке уже больше 20 лет.</span>
        </div>

      <div class={'people'}>
      <img className='people_image' src={'/o_nas1/people.svg'} />
      </div>
      <div class = "people_t1">
        <span>Команда</span>
      </div>
        <div class = "people_t2">
        <span>В нашей команде: флористы, декораторы, биологи.</span>
        </div>

      <div class={'galka'}>
      <img className='galka_image' src={'/o_nas1/galka.svg'} />
      </div>
      <div class = "galka_t1">
        <span>Возможности</span>
      </div>
        <div class = "galka_t2">
        <span>Мы можем: оформить свадьбу, интерьер/экстерьер вашего домаили офиса и, конечно, упаковать подарок.</span>
        </div>
    
      <div class={'paket'}>
      <img className='paket_image' src={'/o_nas1/paket.svg'} />
      </div>
      <div class = "paket_t1">
        <span>Лояльные цены</span>
      </div>
        <div class = "paket_t2">
        <span>Мы часто делаем скидки на ассортимент.</span>
        </div>

        <div class="per_kat_o_nas">
        <Link to={'/catalog'}>Каталог</Link>
        </div>

        <div class = "bottom_o_nas">
        </div>
        <div class = "bottom_o_nas_t">
            <span>Каталог Контакты Сотрудничество</span>
        </div>
        <div class="vk_bottom_o_nas">
            <a href="https://vk.com/id263468538">
            <img className='vk_bottom_o_nas_image' src={"/home1/vk.svg"}/>   
        </a>     
        </div>
        <div class="inst_bottom_o_nas">
            <img className='inst_bottom_o_nas_image' src={"/home1/inst.svg"}/>   
        </div>

    </div>
  )
}
export default AboutUs