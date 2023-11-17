import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Card from '../Card/Card'
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className='services'>
        {/* left side */}
        <div className='awesome'>
          
          <span>My Awesome</span>
          <span>Services</span>
          <button className='button s-button'>Download Cv</button> 
         
        </div>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        {/* right side */}
        <motion.div className='cards'
         initial={{ left: "2rem" }}
         whileInView={{ left: "5rem" }}
         transition={transition}
        >
           <div style={{top:"1rem" , left:"35rem"}}>
             <Card
              emoji={HeartEmoji}
              heading={'Developer'}
              detail={'Html5,Css3,Bootstrap5,React,Redux'}
             />

           </div>
           <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        </motion.div>

    </div>
  )
}

export default Services