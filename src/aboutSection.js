import videosrc from '../src/images/about-vid.mp4';


function AboutSection(){


    return(
        <section className="about" id="about">
  <h1 className="heading"> about us </h1>
  <div className="row">
    <div className="video">
      <video src={videosrc} loop muted autoPlay />
    </div>
    <div className="content">
      <h3>We will provide you the best work which you dreamt for!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et vero
        mollitia nemo corporis consequatur aspernatur distinctio dignissimos
        velit nam.
      </p>
      <a href="#about" className="btn">
        read more
      </a>
    </div>
  </div>
  <div className="box-container">
    <div className="box">
      <h3>10+</h3>
      <p>years of experience</p>
    </div>
    <div className="box">
      <h3>1500+</h3>
      <p>project completed</p>
    </div>
    <div className="box">
      <h3>790+</h3>
      <p>satiesfied clients</p>
    </div>
    <div className="box">
      <h3>450+</h3>
      <p>active workers</p>
    </div>
  </div>
</section>
    )
};
export default AboutSection;