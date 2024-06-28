import React from "react";
import { FlipWords } from "./ui/FlipWords";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { profile } from "console";

const Contact = () => {
  const words = ["better", "intractive", "beautiful", "modern"];

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="h-[20rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal ">
          <h1 className="heading">
            Ready for building a
            <FlipWords words={words} className="text-purple" /> <br />
            websites with me?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center text-lg">
            Reach out to me today and let&apos;s discuss how can I can help to
            achieve your goals.
          </p>
          <div className="flex flex-col items-center">
            <a href="mailto:dev.naman555@gmail.com">
              <MagicButton
                title="Let's get in Touch"
                icon={<FaLocationArrow />}
                position="left"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Naman Goel
        </p>
        <div className="flex items-center md:gap-3 gap-6 py-2">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex 
              justify-center items-center backdrop-filter
               backdrop-blur-lg saturate-180 bg-opacity-75
                bg-black-200 rounded-lg border
                 border-black-300"
            >
              <img src={profile.img} alt="img" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
