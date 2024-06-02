import React from 'react';
import style from './Home.module.css';


import ImageSlider from '../slider/ImageSlider.jsx';
import 'swiper/swiper-bundle.css';
const Home = () => {
  return (
    <div className={style.home_body}>
      <div className={style.img_container}>
        <img className={style.img_home} src="src/assets/title_img.png" alt="Title" />
      </div>
      <div className={style.tagh1_home}>
        <h1>Preserving Happiness Though Our Lens</h1>
      </div>
      <div className={style.img_celebration}>
        <div className={style.img_wrapper}>
          <img src="src/assets/img_wedding.png" alt="Wedding" />
          <div className={style.img_title}>Wedding</div>
        </div>
        <div className={style.img_wrapper}>
          <img src="src/assets/child_welcome.png" alt="Child Welcome" />
          <div className={style.img_title}>Child Welcome</div>
        </div>
        <div className={style.img_wrapper}>
          <img src="src/assets/anniv.png" alt="Anniversary" />
          <div className={style.img_title}>Anniversary</div>
        </div>
        <div className={style.img_wrapper}>
          <img src="src/assets/homewarming.png" alt="Homewarming" />
          <div className={style.img_title}>Homewarming</div>
        </div>
        <div className={style.img_wrapper}>
          <img src="src/assets/birthday.png" alt="Birthday" />
          <div className={style.img_title}>Birthday</div>
        </div>
        <div className={style.img_wrapper}>
          <img src="src/assets/other.png" alt="Other" />
          <div className={style.img_title}>Other</div>
        </div>
        
      </div>
      <div className={style.tagh1_services_home}></div>
      <h1 className={style.tagh1_services}>Our Services</h1>
      <ImageSlider/>
    </div>
  );
};

export default Home;
