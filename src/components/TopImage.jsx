import React from "react";

const TopImage = (props) => {
  return (
    <div>
      <img src={props.source1} alt="img1" className="z-0 rounded-2xl hover-lift" />
      <img
        src={props.source2}
        alt="img2"
        className="absolute z-10 rounded-2xl border-8 border-white top-36 left-64 hover-lift"
      />
    </div>
  );
};

export default TopImage;
