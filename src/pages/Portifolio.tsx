import "../App.css"
import { Swiper, SwiperSlide, } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

// Importando Estilo do Swiper
//import 'swiper/css';

import 'swiper/swiper-bundle.css'; // Estilos principais do Swiper

function Portifolio() {
  return (
    <div className="w-screen h-screen md:w-auto bg-secondary font-poppins text-primary p-5 max-phone:h-100 max-phone:rounded-t-3xl max-phone:shadow-phone">
        <p className="p-10 font-black text-2xl max-mobile:text-xl max-phone:text-lg mb-8 max-phone:px-0.5">Projetos:</p>
      <div className="px-20 max-lg:p0 max-laptop:p-12 max-tablet:px-5 max-mobile:py-0 max-mobile:px-8">
        <Swiper
          freeMode={true}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            200: {  // Em telas maiores que 1024px
              slidesPerView: 1,
              spaceBetween: 10,
            },
            320: {  // Em telas maiores que 1024px
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {  // Em telas entre 768px e 1023px
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {  // Em telas menores que 640px
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {  // Em telas menores que 320px
              slidesPerView: 3,
              spaceBetween: 50,
            }
          }}
          modules={[FreeMode]}
        >
          <SwiperSlide><img className="max-lg:w-56" src="Rectangle 4.svg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="max-lg:w-56" src="Rectangle 4.svg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="max-lg:w-56" src="Rectangle 4.svg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="max-lg:w-56" src="Rectangle 4.svg" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </div>

  )
}

export default Portifolio