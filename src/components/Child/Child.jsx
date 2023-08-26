import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Child.module.scss";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Child = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper} ${css.footer}`}
      style={{
        height: "600px", // Set the fixed height here
        backgroundImage: `url('src/assets/Child/childbackground.png')`,
        backgroundSize: "cover",
      }}
    >
      {/* Add the 'footer' class here */}
      <div className={`innerWidth yPaddings flexCenter ${css.container}`}>
        {/* Left side content */}
        <div className={css.left}>
          <img
            src="src/assets/Child/childsleeping.png"
            alt="Your Image"
            style={{
              maxWidth: "60%",
            }}
          />
        </div>

        {/* Right side content */}
        <div className={css.right}>
          <div className={`innerWidth flexCenter ${css.overlay}`}>
            <div className={`flexCenter ${css.content}`}>
              <div>
                <span
                  className="primaryText"
                  style={{
                    marginTop: "10px",
                    fontSize: "33px",
                    color: "white",
                    display: "inline-block",
                    paddingBottom: "10px",
                  }}
                >
                  Do you worry about your child’s{" "}
                </span>
                <span
                  style={{
                    fontSize: "20px",
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  TV / mobile screen time?
                </span>

                <p
                  style={{
                    marginTop: "10px",
                    marginBottom: "100px",
                    fontSize: "14px",
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  • Children spend more time at home compared to school that
                  often gets consumed by TV or mobile screen.
                  <br /> <br />
                  • Lack of English speaking practice at home affects their
                  English communication skills.
                  <br /> <br />• Busy parents struggle with kids' learning time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Child;
