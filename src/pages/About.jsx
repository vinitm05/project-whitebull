import React from 'react'
import { Link } from "react-router";
import ImageCollage from '../components/ImageCollage'

const About = () => {
  return (
    <>
      {/* image */}
      <div
        className="mb-14 flex h-[300px] flex-col items-center justify-center gap-3 bg-[url(assets/about-landing.jpg)] bg-cover bg-center bg-no-repeat text-white shadow-2xl"
        style={{
          backgroundAttachment: "fixed",
        }}
      >
        <p className="w-5/6 text-center text-4xl font-bold">
          Get in Touch with White Bull - Let's talk Business!
        </p>
        <p className="">
          <Link to="/">Home</Link> / Contact Us
        </p>
      </div>
      <ImageCollage />
    </>
  );
}

export default About