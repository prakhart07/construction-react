

function PriceSection(){

  const obj=[{plan:"basic plan",price:250,duration:"/month",work:["interior design","refurbishment","material supply","maintenance","24x7 support"],btn:"choose plan"},
  {plan:"ultimate plan",price:650,duration:"/month",work:["interior design","refurbishment","material supply","maintenance","24x7 support"],btn:"choose plan"},
  {plan:"premium plan",price:1250,duration:"/month",work:["interior design","refurbishment","material supply","maintenance","24x7 support"],btn:"choose plan"}]

  
    return(
        <section className="pricing" id="pricing">
  <h1 className="heading"> our pricing </h1>
  <div className="box-container">
    {obj?.length>0?obj?.map(plan=>{
      return(
        <div className="box">
        <i className="fas fa-home" />
        <h3>{plan?.plan}</h3>
        <div className="price">
          <span>$</span>{plan?.price}<span>{plan?.duration}</span>
        </div>
        <div className="list">
          {plan?.work?.length>0?plan?.work?.map(work=>{
            return(
              <p>{work}</p>
            )
          }):"No data available"}
          
        </div>
        <a href="#" className="btn">
          choose plan
        </a>
      </div>
      )
    }):"Data not Available"}
    {/* <div className="box">
      <i className="fas fa-city" />
      <h3>ultimate plan</h3>
      <div className="price">
        <span>$</span>1250<span>/mo</span>
      </div>
      <div className="list">
        <p>interior design</p>
        <p>refurbishment</p>
        <p>material supply</p>
        <p>maintenance</p>
        <p>24/7 support</p>
      </div>
      <a href="#" className="btn">
        choose plan
      </a>
    </div> */}
  </div>
</section>
    )
};
export default PriceSection;