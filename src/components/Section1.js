import slide1 from './img/section1/slide1.jpg';
import slide2 from './img/section1/slide2.jpg';
import slide3 from './img/section1/slide3.jpg';
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import './css/section1.css';

import { useNavigate } from 'react-router-dom';

function Section1() {
  const navigate = useNavigate()
  return (<>
      <div className="px flex flex-col items-center py-14">
        <h1 className="py-5">Jasa foto pernikahan dan event</h1>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true, backgroundColor: '#000' }}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <img src={slide1} className="xl:h-[400px] rounded-3xl mx-auto" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} className="xl:h-[400px] rounded-3xl mx-auto" alt="slide2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} className="xl:h-[400px] rounded-3xl mx-auto" alt="slide3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} className="xl:h-[400px] rounded-3xl mx-auto" alt="slide4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} className="xl:h-[400px] rounded-3xl mx-auto" alt="slide5" />
          </SwiperSlide>
        </Swiper>
        <button className="text-center my-5 px-3 py-2 bg-bg text-text rounded-lg hover:text-white" onClick={() => navigate("register")}>Daftar Member</button>
      </div>
    </>
  );
}

export default Section1;
