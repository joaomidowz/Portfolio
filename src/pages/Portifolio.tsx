import "../App.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Importando Estilo do Swiper
import 'swiper/css';

import 'swiper/swiper-bundle.css'; // Estilos principais do Swiper

function Portifolio() {
    return (
        <div className="w-screen h-screen md:w-auto bg-secondary font-poppins text-primary p-5">
            <div className="p-20 max-laptop:p-12 max-tablet:py-60 max-tablet:px-5">
            <p className="text-2xl mb-5">Projetos:</p>
            <Swiper
                spaceBetween={55}
                slidesPerView={3}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src="Rectangle 3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="Rectangle 3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="Rectangle 3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="Rectangle 3.png" alt="" /></SwiperSlide>
            </Swiper>
            </div>
        </div>

    )
}

export default Portifolio