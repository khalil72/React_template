import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'
const Intro = () => {
  const transition = {duration: 2, type:'spring'} 
  return (
    <div className='Intro'>
        <div className='i-left'>
          <div className='i-name'>
             <span>Hy! I Am</span>
             <span>Khalil Ahmed</span>
             <span>Frontend Developer with experience in web design and development , producting 
              the Quality work     
            </span> 
            <button className='button i-button'>Hire me</button>
            {/* social icons */}
            <div className='i-icons'>
             <img src={Github} alt=""></img>
             <img src={LinkedIn} alt=""></img>
             <img src={Instagram} alt=""></img>
            </div>

         </div>
        </div>
        <div className='i-right'>
          <img src={Vector1} alt=""></img>
          <img src={Vector2} alt=""></img>
          <img src={boy} alt=""></img>
          <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
          <motion.div style={{top:'-4%' , left:'74%'}}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatingDiv image={crown} text1="Web" text2="developer"/>
          </motion.div>
          <motion.div style={{left: "9rem", top: "18rem"}}
            whileInView={{ left: "0%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatingDiv image={thumbup} text1="Best Design" text2="Award"/>
          </motion.div>
          {/* blur div */}
          <div className='blur'  style={{ background: "rgb(238 210 255)" }}>
         

          </div>
         </div>
    </div>
  )
}

export default Intro