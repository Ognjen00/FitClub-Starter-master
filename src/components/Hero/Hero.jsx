import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"

import {motion} from 'framer-motion'
const Hero = () => {

    const transtion = {type: 'spring', duration : 3}
    const mobile = window.innerWidth<=768 ? true:false;
  return (
   <div className="hero" id='home'>
    <div className="blur hero-blur"></div>
    <div className="left-h">

      <Header/>
      {/* the best add */}
      <div className="the-best-add">
        <motion.div
            initial= {{left: mobile? "178px":'238px'}}
            whileInView={{left:'8px'}}
            transition={{...transtion, type:'tween'}}
        ></motion.div>
        <span>The best Fitnes club in the town</span>
      </div>
      {/* Hero Heading*/}
      <div className="hero-text">
          <div><span className='stroke-text'>Shape </span>
             <span>Your</span>
           </div>
        <div>
          <span>Ideal Body</span>
        </div>
        <div className="span">
          <span>
          in here we will help you to shape and build your ideal body and live up your life to fullest
          </span>
          
        </div>
      </div>
      {/*figures*/}
      <div className="figures">
          <div>
              <span>+140</span>
               <span>expert coachs</span>
          </div>
          <div>
             <span>+978</span>
             <span>members joined</span>
        
          </div>
          <div>
             <span>+50</span>
             <span>fitness programs</span>
          </div>
      </div>
      {/* hero buttons */}
       <div className="hero-buttons">
       <buttons className="btn">Get Started</buttons>
       <buttons className="btn">Learn More</buttons>
       </div>
        
       
    </div>
     <div className="right-h">
       <button className="btn">Join Now</button>
       
        <motion.div 
           initial={{ right:"-1rem" }}
          whileInView={{ right:"4rem" }}
          transition={ transtion }

        
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero img*/}

        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        {/*calories*/}
       
        < div className="calories">
               <img src={Calories} alt="" />
               
               <div>
               <span>Calories Burne</span>
              <span>220 kcal</span>
             
               </div>
               
             
        </div>
     </div>
   </div>
  )
}

export default Hero