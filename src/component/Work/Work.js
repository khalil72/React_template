import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
const Work = () => {
  return (
    <div className='work'>
        <div className='w-left'>
          <div className='awesome'>
          <span >
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
          </div>
        </div>
        <div className='w-right'>
            <div className='w-mainCircle'>
                    <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>{" "}
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
                

            </div>
            <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
         
        </div>
    </div>
  )
}

export default Work