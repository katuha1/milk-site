import { useState } from 'react'
import './index.css'
import logon from '/src/assets/images/logo.png'
import nav from '/src/assets/images/menu.png'
import Header from './Header'

function Appindex() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header/>
      <div className="body-content">
        <h1 className="text1">СОВРЕМЕННОЕ ПРОИЗВОДСТВО</h1>
        <h2 className="text2">ТРАДИЦИОННЫЕ ТЕХНОЛОГИИ</h2>
      </div>

      <div class="container_about">
        <h4 class="zag_about">О НАС</h4>
        <div class="text">
          <div class="text_1">
            <p>
              Комбинат выпускает весь ассортимент продукции из молока, а это более 250 наименований, которые
              производятся
              в соответствии с ГОСТ:
              <li>цельномолочная продукция: молоко питьевое разной степени жирности, в том числе топленое молоко и
                сливки;</li>
              <li>кисломолочная продукция: кефир, ряженка, варенец, снежок, йогурты, сметана, творог и творожная
                масса;</li>
              <li>сливочное масло различной жирности (соленое и несоленое) и более 50 видов сыров.</li>
            </p>
          </div>
          <div class="text_2">
            <p>
              Главной задачей является сохранение высоких требований к качеству выпускаемой продукции, а также ее
              доступности для потребителя, его нужно провести через специальный фильтр и очистить от каких-либо мелких
              объектов, после этого оно охлаждается в емкости хранения до температуры 4 градуса.
            </p>
          </div>
        </div>
      </div>

      <div className='window_container'>
        <p className='win_title'>
          ПРОИЗВОДСТВО
        </p>
        <div className='win_row_content'>
          <img src="./src/assets/images/circle_1.png" alt="" className='circle' />
          <div className='win_row_text'>
            <p className='win_row_text_title'>Оборудование и технологии</p>
            <p className='win_text'>
              Мы используем оборудование известных европейских производителей: Tetra Pak, Elopak, Reda, Obram, Multivac и др., которое позволяет сохранять свойства и вкус натурального молока. Вся продукция АО «Молоко» содержит биологически ценные белки и минералы, которые есть в обычном домашнем молоке. Короткий срок годности — главное подтверждение качества и натуральности наших продуктов.</p>
          </div>
        </div>
        <div className='win_row_content'>
          <div className='win_row_text'>
            <p className='win_row_text_title'>Качество</p>
            <p className='win_text'>
              Выпуск продукции всегда самого высокого качества — это приоритет компании. Молоко закупается на территории Калининградской области у сельскохозяйственных производителей, фермеров и в личных подсобных хозяйствах. Короткий путь молока от коровы до прилавка магазина – залог свежести и стабильного качества!
            </p>
          </div>
          <img src="./src/assets/images/circle_2.png" alt="" class="circle" />
        </div>
      </div>

      <p class="text_zag">НОВОСТИ</p>
      <div class="container_new">
        <div class="container_wrraper_new">
          <div class="wrraper_new">
            <img src="src/assets/images/one.png" alt="one" />
            <p class="text_zag_new">Поздравляем победителей в конкурсе Молоко здоровье </p>
            <p class="text_podzag_new">Лучшей по профессии в номинации «Производство молочной продукции» признана маслодел Ольга Ряжева.</p>
          </div>
        </div>
        <div class="container_wrraper_new">
          <div class="wrraper_new">
            <img src="src/assets/images/two.png" alt="one" />
            <p class="text_zag_new">Продукция «Молочная сказка» лучшая!  </p>
            <p class="text_podzag_new">В Красноярске завершился 26-й ежегодный конкурс «Лучший продовольственный товар». </p>
          </div>
        </div>
        <div class="container_wrraper_new">
          <div class="wrraper_new">
            <img src="src/assets/images/three.png" alt="one" />
            <p class="text_zag_new">Конкурс рисунков «Молочные истории» </p>
            <p class="text_podzag_new">Юным художникам предстоит придумать и изобразить свои молочные истории. В роли главных героев должны выступить: молоко, сметана, кефир, сыр, масло, творог и другие молочные продукты.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Appindex
