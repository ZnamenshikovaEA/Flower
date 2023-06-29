import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const AboutUs = () => {


  return (
  <div className='o_nas'>
    <div class = "o_nas_Zagolovok">
        <span>О нас</span>
        <span>«Быстро, красиво, с любовью»- это про нас!</span>
        <span>Наш цветочный магазин - это место, где цветы становятся настоящими произведениями искусства. 
            Мы предлагаем широкий выбор свежих и красивых цветов для всех случаев жизни - от романтических свиданий до свадебных церемоний и празднования дней рождений. 
        </span>
    </div>

<div className='starpeople'>
      <img src={'/o_nas1/star.svg'} />
      <img src={'/o_nas1/people.svg'} />
      </div>

      <div class={'starpeople_t1'}>
      <span>Надежность</span>
        <span>Команда</span>
        </div>
        

        <div class={'starpeople_t2'}>
        <span>Наша компания на рынке уже больше 20 лет.</span>
        <span>В нашей команде: флористы, декораторы, биологи.</span>
        </div>



        <div className='galkapaket'>
      <img src={'/o_nas1/galka.svg'} />
      <img src={'/o_nas1/paket.svg'} />
      </div>

      <div class={'galkapaket_t1'}>
      <span>Возможности</span>
        <span>Команда</span>
        </div>
        

        <div class={'galkapaket_t2'}>
        <span>Oформить свадьбу, интерьер/экстерьер вашего домаили офиса и, конечно, упаковать подарок.</span>
        <span>Мы часто делаем скидки на ассортимент.</span>
        </div>


        <div class="per_kat_o_nas">
        <Link to={'/catalog'}>Перейти в каталог</Link>
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
export default AboutUs