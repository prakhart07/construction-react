import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import img1 from './images/home-slide-1.jpg';
import img2 from './images/home-slide-2.jpg';
import img3 from './images/home-slide-3.jpg';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';

// Install Swiper modules


function HomeSection({isPage}){

    // const {isPage}=props;
    useEffect(() => {
      if (!isPage) {
        console.log("isPage is now false. Home content can be displayed.");
        // Perform actions based on isPage being false, like resetting state or updating UI
      }
    }, [isPage]);
    const [data,setData]=useState('');
    console.log("props:",isPage);


    const divStyle = {
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
      };
      const divStyle2 = {
        backgroundImage: `url(${img2})`,
        backgroundRepeat: 'no-repeat',
      };
      const divStyle3 = {
        backgroundImage: `url(${img3})`,
        backgroundRepeat: 'no-repeat',
      };
    
      const columns = [
        {
            name: 'Project Name',
            selector: row => row.name,
        },
        {
          name: 'Project Image',
          selector: row => row.image,
      },
        {
            name: 'Action',
            cell: row => (
                <button className="btn-custom btn-primary" onClick={() => handleClick(row)}>
                    Edit
                </button>
            ),
        },
    ];

    function handleClick(row){
      console.log(row);
    }

    return(
      <>
      {isPage ? 
      <DataTable data={data} columns={columns}/>
      : <section className="home" id="home">
            <div className="swiper home-slider">
    {/* <div className="swiper-wrapper"> */}
            <Swiper
        className="home-slider"
        loop={true}
        grabCursor={true}
        Navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        Autoplay={{
            delay: 2000,  // Slide change interval in milliseconds
            disableOnInteraction: false,  // Continue autoplay after interaction
          }}
      >      
        <SwiperSlide>
        <section
        className="swiper-slide slide"
        style={divStyle}
      >
        <div className="content">
          <h3>we provide best service</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            beatae iusto pariatur laborum magnam eos!
          </p>
          <a href="#about" className="btn">
            get started
          </a>
        </div>
      </section>
        </SwiperSlide>
        <SwiperSlide>
        <section
        className="swiper-slide slide"
        style={divStyle2}
      >
        <div className="content">
          <h3>making dream come to life</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            beatae iusto pariatur laborum magnam eos!
          </p>
          <a href="#about" className="btn">
            get started
          </a>
        </div>
      </section>
        </SwiperSlide>
        <SwiperSlide>
        <section
        className="swiper-slide slide"
        style={divStyle3}
      >
        <div className="content">
          <h3>from concept to creation</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            beatae iusto pariatur laborum magnam eos!
          </p>
          <a href="#about" className="btn">
            get started
          </a>
        </div>
      </section>
        </SwiperSlide>
      
      
    {/* </div> */}
    </Swiper>
  {/* <div className="swiper-button-next" />
        <div className="swiper-button-prev" /> */}
  </div>
  
</section>}
</>
    )
};
export default HomeSection;