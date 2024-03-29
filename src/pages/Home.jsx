import React from 'react'
import image from "../img/2-barbers2.jpg"

export default function Home() {
  return (
    <div>
        <section id='landing__page'>
            {/* <nav>
                <img src="https://i.pinimg.com/originals/20/68/c2/2068c2da7f7b30576c33b1105a968375.png" alt="" />
                <ul>
                    <li><a href="">Schedule Now!</a></li>
                    <li><a href="">Browse Products!</a></li>
                </ul>
            </nav> */}
            <header className='header__wrapper'>
                <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain",  height: 1000, width: 2000}}></div>
            </header>
        </section>
    </div>
  )
}
 