import img1 from '../src/images/pic-1.png';
import img2 from '../src/images/pic-2.png';
import img3 from '../src/images/pic-3.png';
import img4 from '../src/images/pic-4.png';
import img5 from '../src/images/pic-5.png';
import img6 from '../src/images/pic-6.png';

function Review(){

    return(
        <section className="reviews">
  <h1 className="heading"> clients reviews </h1>
  <div className="swiper reviews-slider">
    <div className="swiper-wrapper">
      <div className="swiper-slide slide">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
          suscipit quis consequuntur, tempora corporis ex molestias dignissimos
          in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel
          modi?
        </p>
        <div className="user">
          <img src={img1} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
          suscipit quis consequuntur, tempora corporis ex molestias dignissimos
          in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel
          modi?
        </p>
        <div className="user">
          <img src={img2} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
          suscipit quis consequuntur, tempora corporis ex molestias dignissimos
          in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel
          modi?
        </p>
        <div className="user">
          <img src={img3} alt="" />
          <div className="info">
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
          suscipit quis consequuntur, tempora corporis ex molestias dignissimos
          in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel
          modi?
        </p>
        <div className="user">
          <img src="images/pic-1.png" alt="" />
          <div className="info">
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
          suscipit quis consequuntur, tempora corporis ex molestias dignissimos
          in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel
          modi?
        </p>
        <div className="user">
          <img src="images/pic-1.png" alt="" />
          <div className="info">
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis unde
          suscipit quis consequuntur, tempora corporis ex molestias dignissimos
          in cumque sunt ducimus voluptate inventore harum earum rem aperiam vel
          modi?
        </p>
        <div className="user">
          <img src="images/pic-6.png" alt="" />
          <div className="info">
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
};
export default Review;