import React from "react";
import Icon1 from "../assets/about-icon1.png";
import Icon2 from "../assets/about-icon2.png";
import Image1 from "../assets/about-img1.png";
import Image2 from "../assets/about-img2.jpg";

const ImageCollage = () => {
  return (
    <>
      <div className="flex w-fit gap-4 rounded-xl border bg-white p-3">
        <img src={Icon1} alt="icon1" />
        <div>
          <p>35+</p>
          <p className="text-gray-400">Years of experience</p>
        </div>
      </div>
      <div className="flex h-fit w-fit flex-col items-start gap-4 rounded-xl border bg-white p-3">
        <img src={Icon2} alt="icon2" className="w-12" />
        <div>
          <p>97%</p>
          <p className="text-gray-400">Customer Satisfaction</p>
        </div>
          </div>
          {/* 364 238 */}
          {/* 171 285 */}
      <img src={Image1} alt="" width={364}/>
      <img src={Image2} alt=""  width={238}/>
    </>
  );
};

export default ImageCollage;
