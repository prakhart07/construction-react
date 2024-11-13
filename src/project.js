import DataTable from 'react-data-table-component';
import img1 from '../src/images/project-1.jpg';
import img2 from '../src/images/project-2.jpg';
import img3 from '../src/images/project-3.jpg';
import img4 from '../src/images/project-4.jpg';
import img5 from '../src/images/project-5.jpg';
import img6 from '../src/images/project-6.jpg';
import imageToBase64 from 'image-to-base64/browser';
import ModalForm from './projectModal';
import { useState } from 'react';



function Project(isPage){
  console.log("isPgae props:",isPage);
  const obj=[{image:img1,title:"dream home",description:"construction, design"},
  {image:img2,title:"dream home",description:"construction, design"},
  {image:img3,title:"dream home",description:"construction, design"},
  {image:img4,title:"dream home",description:"construction, design"},
  {image:img5,title:"dream home",description:"construction, design"},
  {image:img6,title:"dream home",description:"construction, design"},]

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle modal open and close
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form submission
  const handleFormSubmit = (formData) => {
    console.log("Submitted Data:", formData);
    // Handle form data, such as uploading to a server or state management
  };

  const columns = [
    {
        name: 'Project Title',
        selector: row => row.name,
    },
    {
      name: 'Project description',
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

  function handleData(){
    console.log();
  }

  function handleClick(){
    console.log();
  }

    return(
      <>
      {isPage ? <div>
      <button className='btn btn-primary' onClick={openModal}>Add New Project</button>
      <ModalForm isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} />
      <DataTable columns={columns}/>
    </div>:
        <section className="projects" id="projects">
  <h1 className="heading"> our projects </h1>
  <div className="box-container">
    {obj?.length>0 ? obj.map(project =>{
      return(
        <a className="box">
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
</section> }
</>
    )
};
export default Project;

