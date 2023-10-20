import './Stat.css'
import { useState } from 'react';
import logon from '/src/assets/images/logo.png'
import nav from '/src/assets/images/menu.png'
import Header from './Header';


function Stat() {
  const [count, setCount] = useState(0)

  return <>
    <Header/>
      <h1>СТАТИСТИКА</h1>
    <div className="st-container">
      <div className="st-card">
        <h2 className='st-number'>250</h2>
        <p>наименований молочной продукции</p>
      </div>
      <div className='line'></div>
      <div className="st-card">
        <h2 className='st-number'>1500</h2>
        <p>высококлассный сотрудников</p>
      </div>
      <div className='line'></div>
      <div className="st-card">
        <h2 className='st-number'>3</h2>
        <p>производственных комплекса</p>
      </div>
      <div className='line'></div>
      <div className="st-card">
        <h2 className='st-number'>1000</h2>
        <p>тонн в сутки мощность переработки</p>
      </div>
      <div>

      </div>
    </div>
  </>;
}

export default Stat