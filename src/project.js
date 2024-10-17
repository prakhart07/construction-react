import img1 from '../src/images/project-1.jpg';
import img2 from '../src/images/project-2.jpg';
import img3 from '../src/images/project-3.jpg';
import img4 from '../src/images/project-4.jpg';
import img5 from '../src/images/project-5.jpg';
import img6 from '../src/images/project-6.jpg';


function Project(){
  const obj=[{image:img1,title:"dream home",description:"construction, design"},
  {image:img2,title:"dream home",description:"construction, design"},
  {image:img3,title:"dream home",description:"construction, design"},
  {image:img4,title:"dream home",description:"construction, design"},
  {image:img5,title:"dream home",description:"construction, design"},
  {image:img6,title:"dream home",description:"construction, design"},]

    return(
        <section className="projects" id="projects">
  <h1 className="heading"> our projects </h1>
  <div className="box-container">
    {obj?.length>0 ? obj.map(project =>{
      return(
        <a href={project?.image} className="box">
      <div className="image">
        <img src={project?.image} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <h3>{project?.title}</h3>
          <p>{project?.description}</p>
        </div>
        <i className="fas fa-plus" />
      </div>
    </a>
      )
    }): "No Data Available"}
    
  </div>
</section>
    )
};
export default Project;

