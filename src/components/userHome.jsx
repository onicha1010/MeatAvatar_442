import React, { Component, useEffect, useState } from "react";
import Menubra from './Menubra'
import Banner from './Banner'
import Footer from './Footers'
import Journey from './Journey'
import IntroProduct from './IntroProduct'
import Partner from './Partner'
import "../CSS/Userhome.css";



export default function UserHome() {

  return (
    <div className="wrapper">
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Menubra/>
        <Banner/>
        <div className="journey-header">
                <p>FOLLOW  OUR  JOURNEYS</p>
            </div>
        <Journey/>
        <div className="menuinfos_container">
    
    <div className="menuinfos">
        <div className="infos">
        <p><b>Meat Avatar</b> นำเสนอผลิตภัณฑ์จากพืชที่มีรสชาติเหมือนเนื้อสัตว์แท้ </p>
        <p>ผลิตภัณฑ์ของ Meat Avatar ได้รับการคัดเลือกอย่างพิถีพิถันเพื่อรักษาคุณภาพสูงสุดและคงไว้ซึ่งกลิ่น เนื้อสัมผัส โภชนาการ </p>
        <p>และรสชาติของผลิตภัณฑ์เหมือนกับเนื้อสัตว์จริง!</p>
        <p><b>ผักที่ใช้ทำผลิตภัณฑ์ของ Meat Avatar  </b></p>
        <p>ได้แก่ พืชตระกูลถั่ว เช่น ถั่วลันเตา ถั่วเหลือง บีทรูท แครอท และผักชนิดอื่นๆ</p>
        <div className="ingredients">
            <div className="img_ingredients">
                <div className="ingredientname"><img src="https://media.discordapp.net/attachments/445928139021877259/1184528007684161616/image_60-1.png?ex=658c4cac&is=6579d7ac&hm=6309ccf63d6ef8bbff5bfe6c89d201f832ba38547efdd1bea28fd8f8017b25fd&=&format=webp&quality=lossless" alt="ถั่วเหลือง"/><p>ถั่วเหลือง</p></div>
                <div className="ingredientname"><img src="https://media.discordapp.net/attachments/445928139021877259/1184528008242012240/image_62-2.png?ex=658c4cac&is=6579d7ac&hm=cb18048de4459975566f605c8f2c69ffa7307971b8a6581d3c9bb2a1d5a2e9d8&=&format=webp&quality=lossless" alt="เห็ด"/><p>เห็ด</p></div>
                <div className="ingredientname"><img src="https://media.discordapp.net/attachments/445928139021877259/1184528007960989696/image_61-1.png?ex=658c4cac&is=6579d7ac&hm=8e8806fc10f08c3765657b7e1260455598e468a1ba96daf0e29a129da51aa1a8&=&format=webp&quality=lossless" alt="ถั่วลันเตา" /><p>ถั่วลันเตา</p></div>
                <div className="ingredientname"><img src="https://media.discordapp.net/attachments/445928139021877259/1184528008497856632/image_63-1.png?ex=658c4cac&is=6579d7ac&hm=88f5a5a84bbc2aa3b977a5048f9f9781b056d99e77e4e45c3ebd1b4a6f9c8ead&=&format=webp&quality=lossless" alt="บีทรูท"/><p>บีทรูท</p></div>
                <div className="ingredientname"><img src="https://media.discordapp.net/attachments/445928139021877259/1184528007398957116/image_64-4.png?ex=658c4cac&is=6579d7ac&hm=06cd13b2a84752698ed6156929076b36da64ce5a55ada956c55fc5a2ab3c2754&=&format=webp&quality=lossless" alt="แครอท"/><p>แครอท</p></div>
            </div>
            <div>
            <b>ข้อควรระวังเกี่ยวกับผลิตภัณฑ์</b>
            </div>
        </div>
        <br />
        <p>สารก่อภูมิแพ้: ถั่วเหลือง</p>
        <p>สารเติมแต่ง: E407 – คาราจีแนน</p>
        </div>
    </div>
   </div>

        <IntroProduct/>
        <Partner/>
      </div>
    <Footer/>
    </div>
    </div>
  );
}
