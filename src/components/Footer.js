import React from "react";
import facebookIcon from "../images/facebook.svg";
import twitterIcon from "../images/twitter.svg";
import instagramIcon from "../images/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-center gap-3">
        <img
          src={facebookIcon}
          alt="facebookIcon"
          className="h-8 w-8 rounded-full border border-pale-blue p-2"
        />
        <img
          src={twitterIcon}
          alt="facebookIcon"
          className="h-8 w-8 rounded-full border border-pale-blue p-2"
        />
        <img
          src={instagramIcon}
          alt="facebookIcon"
          className="h-8 w-8 rounded-full border border-pale-blue p-2"
        />
      </div>

      <p className="flex justify-center py-7 text-[10px] text-gray">
        © Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
