import { useState } from 'react';
import img1 from '../src/images/service-1.png';
import img2 from '../src/images/service-2.png';
import img3 from '../src/images/service-3.png';
import img4 from '../src/images/service-4.png';
import img5 from '../src/images/service-5.png';
import img6 from '../src/images/service-6.png';
import img7 from '../src/images/service-7.png';
import img8 from '../src/images/service-8.png';
function Service(){
  const obj=[{imageid:img1,title:"building construction",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,necessitatibus"},
  {imageid:img2,title:"house renovation",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,necessitatibus"},
  {imageid:img3,title:"architechture design",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,necessitatibus"},
  {imageid:img4,title:"material supply",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,necessitatibus"},
  {imageid:img5,title:"construction consultant",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,necessitatibus"},
  {imageid:img6,title:"interior design",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,necessitatibus"},
  {imageid:img7,title:"building maintenance",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,necessitatibus"},
  {imageid:img8,title:"building renovation",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,necessitatibus"},]

    return(
        <section className="services" id="services">
  <h1 className="heading"> our services </h1>
  <div className="box-container">
    { obj?.length > 0 ? obj?.map(service => {
      return (
        <div className="box">
      <img src={service?.imageid} alt="" />
      <h3>{service?.title}</h3>
      <p>
        {service?.description}
      </p>
    </div>
      )
    }) : "No data avialable"}
    
  </div>
</section>
    )
};

export default Service;