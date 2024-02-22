import React from 'react'

import './companies.css'

const Companies = () => {
  return (
    <section>
        <div className="container">
            <h1 className="heading">our companies</h1>
         </div>
         <div className='companies__bg'>
        <div className="container companies__container">
            <div>
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" alt="" />
            </div>
            <div>
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" alt="" />
            </div>
            <div>
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" alt="" />
            </div>
            <div>
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" alt="" />
            </div>
            <div>
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" alt="" />
            </div>
        </div>
       
        </div>
    </section>
  )
}

export default Companies