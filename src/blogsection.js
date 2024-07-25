import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import img1 from '../src/images/blog-1.jpg';
import img2 from '../src/images/blog-2.jpg';
import img3 from '../src/images/blog-3.jpg';
import img4 from '../src/images/blog-4.jpg';
import img5 from '../src/images/blog-5.jpg';
import img6 from '../src/images/blog-6.jpg';


function BlogSection(){

    return(
//         <section className="blogs" id="blogs">
//   <h1 className="heading"> our blogs </h1>
//   <div className="swiper blogs-slider">
//     <div className="swiper-wrapper">
//       <div className="swiper-slide slide">
//         <div className="image">
//           <img src={img1} alt="" />
//         </div>
//         <div className="content">
//           <h3>blog title goes here</h3>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
//             nobis!
//           </p>
//           <a href="#" className="btn">
//             read more
//           </a>
//         </div>
//       </div>
//       <div className="swiper-slide slide">
//         <div className="image">
//           <img src={img2} alt="" />
//         </div>
//         <div className="content">
//           <h3>blog title goes here</h3>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
//             nobis!
//           </p>
//           <a href="#" className="btn">
//             read more
//           </a>
//         </div>
//       </div>
//       <div className="swiper-slide slide">
//         <div className="image">
//           <img src={img3} alt="" />
//         </div>
//         <div className="content">
//           <h3>blog title goes here</h3>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
//             nobis!
//           </p>
//           <a href="#" className="btn">
//             read more
//           </a>
//         </div>
//       </div>
//       <div className="swiper-slide slide">
//         <div className="image">
//           <img src={img4} alt="" />
//         </div>
//         <div className="content">
//           <h3>blog title goes here</h3>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
//             nobis!
//           </p>
//           <a href="#" className="btn">
//             read more
//           </a>
//         </div>
//       </div>
//       <div className="swiper-slide slide">
//         <div className="image">
//           <img src={img5} alt="" />
//         </div>
//         <div className="content">
//           <h3>blog title goes here</h3>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
//             nobis!
//           </p>
//           <a href="#" className="btn">
//             read more
//           </a>
//         </div>
//       </div>
//       <div className="swiper-slide slide">
//         <div className="image">
//           <img src={img6} alt="" />
//         </div>
//         <div className="content">
//           <h3>blog title goes here</h3>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
//             nobis!
//           </p>
//           <a href="#" className="btn">
//             read more
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
<section className="blogs" id="blogs">
      <Swiper
        className="blogs-slider"
        loop={true}
        grabCursor={true}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        }}
      >
         <SwiperSlide>
         <div className="swiper-slide slide">
        <div className="image">
           <img src={img2} alt="" />
         </div>
         <div className="content">
           <h3>blog title goes here</h3>
           <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
             nobis!
           </p>
           <a href="#" className="btn">
             read more
           </a>
         </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide slide">
        <div className="image">
           <img src={img2} alt="" />
         </div>
         <div className="content">
           <h3>blog title goes here</h3>
           <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
             nobis!
           </p>
           <a href="#" className="btn">
             read more
           </a>
         </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide slide">
        <div className="image">
           <img src={img2} alt="" />
         </div>
         <div className="content">
           <h3>blog title goes here</h3>
           <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
             nobis!
           </p>
           <a href="#" className="btn">
             read more
           </a>
         </div>
       </div>
        </SwiperSlide>
      </Swiper>
      </section>
    )
};
export default BlogSection;