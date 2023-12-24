import React, { useEffect } from 'react';
import "../CSS/Banner.css";
import { Link } from 'react-router-dom';

function Banner() {

  return (
    <div className="banner_container">
        <div className="banner-background">
          <img src="https://cdn.discordapp.com/attachments/1167783457628368956/1188428778993619044/image_76.png?ex=659a7d8c&is=6588088c&hm=c3f516b05c33bf7cf11dce9d714d16427187860db95427db81b116b1aa8add96&" alt="Meat avatar banner" />
          <div className="banner_info">

          </div>
        </div>
    </div>
  )
}

export default Banner;
