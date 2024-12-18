import { useState } from "react";



function Contact(){

  const [reviewData,setReviewData]=useState({name:"",email:"",phone:"",review:""});
  
  function handleOnChange(e){
    console.log(e.target.value);
    setReviewData({...reviewData,[e.target.name]:e.target.value});
  }
  
  function handleSubmit(){
    console.log(reviewData);
    alert(`Data Submitted Successfully ${reviewData.name}`);
  }
    return(
        <section className="contact" id="contact">
  <h1 className="heading"> contact us </h1>
  <div className="row">
    <iframe
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1641716772852!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
    />
    <form action="">
      <h3>get in touch</h3>
      <input type="text" name="name" placeholder="name" className="box" onChange={handleOnChange} />
      <input type="email" name="email" placeholder="email" className="box" onChange={handleOnChange} />
      <input type="number" name="phone" placeholder="phone" className="box" onChange={handleOnChange}/>
      <textarea
        name="review"
        placeholder="message"
        className="box"
        id=""
        cols={30}
        rows={10}
        defaultValue={""}
        onChange={handleOnChange}
      />
      <input type="submit" defaultValue="send message" className="btn" onClick={handleSubmit}/>
    </form>
  </div>
</section>
    )
};
export default Contact;