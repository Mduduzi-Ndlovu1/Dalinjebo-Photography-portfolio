import React from 'react'
import images from '../utils/index'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "../pages/portfolio.module.css"


const Portfolio = () => {
  return (
    <div>
      <h2 className="section__header mt-6">
        ~ My Portfolio ~
      </h2>
      <div className="section__container mt-[-20px] overflow-hidden ">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides ={true}
          loop ={true}
          slidesPerView={'2'}
          coverflowEffect={
            {
              rotate: 0,
              stretch: 0,
              depth: 20,
              modifier: 2.5,
            }
          }
          pagination={{
            el: '.swiper-pagination',
            clickable: true
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[
            EffectCoverflow,
            Pagination,
            Navigation
          ]}
          className='swiper_container overflow-hidden object-contain' 
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.src}
                alt={`${image.name} portfolio`}
                className="portfolio__image"
              />
            </SwiperSlide>
          ))}

          <div className='slider-controler'>
            <div className='swiper-button-prev slider-arrow'>
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className='swiper-button-next slider-arrow'>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </Swiper>
      </div>
      
      
    </div>
  )
}

export default Portfolio
