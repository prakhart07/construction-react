import img1 from '../src/images/project-1.jpg';
import img2 from '../src/images/project-2.jpg';
import img3 from '../src/images/project-3.jpg';
import img4 from '../src/images/project-4.jpg';
import img5 from '../src/images/project-5.jpg';
import img6 from '../src/images/project-6.jpg';


function Project(){

    return(
        <section className="projects" id="projects">
  <h1 className="heading"> our projects </h1>
  <div className="box-container">
    <a href={img1} className="box">
      <div className="image">
        <img src={img1} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h3>dream home</h3>
          <p>construction, design</p>
        </div>
        <i className="fas fa-plus" />
      </div>
    </a>
    <a href={img2} className="box">
      <div className="image">
        <img src={img2} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h3>dream home</h3>
          <p>construction, design</p>
        </div>
        <i className="fas fa-plus" />
      </div>
    </a>
    <a href={img3} className="box">
      <div className="image">
        <img src={img3} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h3>dream home</h3>
          <p>construction, design</p>
        </div>
        <i className="fas fa-plus" />
      </div>
    </a>
    <a href={img4} className="box">
      <div className="image">
        <img src={img4} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h3>dream home</h3>
          <p>construction, design</p>
        </div>
        <i className="fas fa-plus" />
      </div>
    </a>
    <a href={img5} className="box">
      <div className="image">
        <img src={img5} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h3>dream home</h3>
          <p>construction, design</p>
        </div>
        <i className="fas fa-plus" />
      </div>
    </a>
    <a href={img6} className="box">
      <div className="image">
        <img src={img6} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h3>dream home</h3>
          <p>construction, design</p>
        </div>
        <i className="fas fa-plus" />
      </div>
    </a>
  </div>
</section>
    )
};
export default Project;

