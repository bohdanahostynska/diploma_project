import React from "react";
import Apple from "../assets/menu/all_pic/articles/bitten-apple.svg";
import Cheese from "../assets/menu/all_pic/articles/cheese 1.svg";
import Flame from "../assets/menu/all_pic/articles/flame 2.svg";
import Orange from "../assets/menu/all_pic/articles/orange.svg";
import Burger from "../assets/menu/all_pic/articles/cartoon-burger.svg";

function Arlicles() {
  return (
    <div className="articles_content">
      <div className="articles_header">
        <img className="articles_img_frst" src={Apple} alt="art_image" />
        <img className="articles_img_sec" src={Cheese} alt="art_image" />
        <img className="articles_img_thrd" src={Flame} alt="art_image" />
        <img className="articles_img_fth" src={Orange} alt="art_image" />
        <img className="articles_img_fifth" src={Burger} alt="art_image" />
        <h3 className="articles_discount">-50% Off</h3>
        <p className="articles_text">the full price of burgers</p>
      </div>
      <div className="articles_main">
        <div className="articles_top">
          <h4 className="articles_title">Articles</h4>
        </div>
      </div>
    </div>
  );
}

export default Arlicles;