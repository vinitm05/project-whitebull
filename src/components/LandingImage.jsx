import { Link } from "react-router";
import React from "react";

const LandingImage = ({ title, link }) => {
  return (
    <div
      className="mb-14 flex h-60 flex-col items-center justify-center gap-3 bg-[url(assets/about-landing.jpg)] bg-cover bg-center bg-no-repeat text-white shadow-2xl"
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <p className="w-5/6 text-center text-4xl font-bold">{title}</p>
      <p className="">
        <Link to="/">Home </Link> / {link}
      </p>
    </div>
  );
};

export default LandingImage;
