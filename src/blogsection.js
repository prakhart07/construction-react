import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import SwiperCore, {  Pagination, Scrollbar, A11y } from 'swiper';
import img1 from '../src/images/blog-1.jpg';
import img2 from '../src/images/blog-2.jpg';
import img3 from '../src/images/blog-3.jpg';
import img4 from '../src/images/blog-4.jpg';
import img5 from '../src/images/blog-5.jpg';
import img6 from '../src/images/blog-6.jpg';


function BlogSection(){

  const obj=[{img:img2,title:"blog 1 title goes here",content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,nobis!",btn:"read more"},
  {img:img2,title:"blog 2 title goes here",content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,nobis!",btn:"read more"},
  {img:img2,title:"blog 3 title goes here",content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,nobis!",btn:"read more"},
  {img:img2,title:"blog 4 title goes here",content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,nobis!",btn:"read more"}]
 
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
<h1 className="heading"> our blogs </h1>
      <Swiper
        className="blogs-slider"
        loop={true}
        grabCursor={true}
        spaceBetween={20}
        allowSlideNext
        allowTouchMove
        navigation={true}
        autoplay={true}
        modules={[Navigation]}
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
         {obj?.length>0 ? obj?.map(blog=>{
          return(
            <SwiperSlide>
            <div className="swiper-slide slide">
           <div className="image">
              <img src={blog?.img} alt="" />
            </div>
            <div className="content">
              <h3>{blog?.title}</h3>
              <p>{blog?.content}</p>
              <a href="#" className="btn">
                {blog?.btn}
              </a>
            </div>
          </div>
           </SwiperSlide>
          )
         }):"No data Available"}
      </Swiper>
      </section>
    )
};
export default BlogSection;