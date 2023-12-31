
import Header from './Header'
import logon from '/src/assets/images/logo.png'
import nav from '/src/assets/images/menu.png'
function About( ) {
 return (
    <>
     <Header/>
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

      
    </>
 )
    }
export default About
