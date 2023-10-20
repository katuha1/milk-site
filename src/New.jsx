import { useState } from 'react'
import Header from './Header'


function New() {

    return (
        <>
            <Header />

            <div class="container_new1">
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
            </div>
        </>
    )
}
export default New;