import img1 from './images/home-slide-1.jpg';
import img2 from './images/home-slide-2.jpg';
import img3 from './images/home-slide-3.jpg';

function HomeSection(){


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

    return(
        <section className="home" id="home">
  <div className="swiper home-slider">
    <div className="swiper-wrapper">
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
    </div>
    <div className="swiper-button-next" />
    <div className="swiper-button-prev" />
  </div>
</section>
    )
};
export default HomeSection;