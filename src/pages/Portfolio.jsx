import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "../pages/portfolio.module.css";
import images, {
  selfProtraitImages,
  FashionAncientImages,
  productBrands,
  weddingPhotos,
} from '../utils/index';
import Spinner from '../components/Spinner'; // Assume you have a Spinner component

const Portfolio = () => {
  const [category, setCategory] = useState("fashion");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    const imageElements = getImagesByCategory().flatMap(group => group.images.map(imageSrc => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = handleLoad;
      return img;
    }));
    return () => {
      imageElements.forEach(img => img.onload = null);
    };
  }, [category]);

  const getImagesByCategory = () => {
    switch (category) {
      case "portraits":
        return selfProtraitImages;
      case "fashion":
        return FashionAncientImages;
      case "product":
        return productBrands;
      case "wedding":
        return weddingPhotos;
      default:
        return [];
    }
  };

  const categoryData = getImagesByCategory();

  const getCategoryTitle = () => {
    switch (category) {
      case "portraits":
        return "Commissioned Portraits";
      case "fashion":
        return "Fashion Photography";
      case "product":
        return "Product Photography";
      case "wedding":
        return "Wedding Photography";
      default:
        return "";
    }
  };

  return (
    <div>
      <h2 className="section__header mt-10">
        ~ My Portfolio ~
      </h2>
      <div className="section__container">
        {loading ? (
          <Spinner />
        ) : (
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'2'}
            coverflowEffect={{
              rotate: 10,
              stretch: 5,
              depth: 300,
              modifier: 2.5,
            }}
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
        )}
      </div>

      {/* Buttons */}
      <div className='flex w-full justify-center items-center gap-5 text-center p-8 flex-wrap md:flex-1 sm:flex-2'>
        <button className="btn btn--primary" onClick={() => setCategory("portraits")}>Commissioned Portraits</button>
        <button className="btn btn--primary" onClick={() => setCategory("fashion")}>Fashion Photography</button>
        <button className="btn btn--primary" onClick={() => setCategory("product")}>Product Photography</button>
        <button className="btn btn--primary" onClick={() => setCategory("wedding")}>Wedding Photography</button>
      </div>

      {/* Category Title */}
      <h3 className="category__title mt-6 text-center">
        {getCategoryTitle()}
      </h3>

      {/* Display Images in a Stylish Way with Separators */}
      <div className="image-gallery mt-6">
        {categoryData.map((group, index) => (
          <div key={index} className="image-group">
            <div className="separator"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {group.images.map((image, idx) => (
                <div key={idx} className="image-container relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt="portfolio"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
