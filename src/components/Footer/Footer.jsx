import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper} ${css.footer}`}
    >
      {/* Add the 'footer' class here */}
      <div
        className={css.backgroundImage}
        style={{
          backgroundImage: `url('src/assets/Footer/footer.png')`,
          backgroundColor: "#9cc3e8",
        }}
      ></div>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        {/* Left side content */}
        <div className={css.left}>
          <p className={css.smallText}>Developed & Published by:</p>
          <img
            src="src/assets/Footer/lioncub.png"
            alt="hello"
            style={{ width: "20%", height: "20%", margin: 0, padding: "8px" }}
          />
          <p className={css.redText}>Lion Cub Studios OPC Pvt. Ltd.</p>
          <p className={css.smallFont}>
            Mira road East, Thane, Maharashtra 401 107
          </p>
          {/* Use the Divider component as a vertical line */}
          <Divider orientation="vertical" flexItem /> {/* Add this line */}
          <div className={css.contactEmail}>
            <div className={css.contact}>
              <p className={`${css.bigFont} `}>Contact:</p>
              <p className={css.blackText}>+91 98 197 25885</p>
              <p className={css.blackText}>+91 96 998 15087</p>
            </div>
            <div className={css.email}>
              <p className={`${css.bigFont}`}>Email:</p>
              <p className={css.blackText}>
                <a
                  href="mailto:connect@addyandmolly.com"
                  className={css.blackText}
                >
                  connect@addyandmolly.com
                </a>
              </p>
              <p className={css.blackText}>
                <a href="mailto:connect@lioncub.in" className={css.blackText}>
                  connect@lioncub.in
                </a>
              </p>
            </div>
          </div>
          <p className={css.smallText}>
            Copyrights © 2023. All rights reserved.
          </p>
        </div>

        {/* Right side content */}
        <div className={css.right}>
          <img
            src="src/assets/Footer/addy.png"
            alt="AddMolly Logo"
            className={css.blendImage}
          />

          <div className={css.social}>
            <p className={css.smallText}>Join us on</p>
            <div className={`${css.icons} ${css.blackIcon}`}>
              <FaYoutube className={css.blackIcon} size={32} />
              <FaFacebook className={css.blackIcon} size={32} />
              <FaInstagram className={css.blackIcon} size={32} />
              <FaPinterest className={css.blackIcon} size={32} />
              <FaTwitter className={css.blackIcon} size={32} />
            </div>

            <p className={css.hashtag}>We are #addymollyofficial</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
