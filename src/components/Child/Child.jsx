import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Child.module.scss";
import { motion } from "framer-motion";

const Child = () => {
  return (
    <section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper} ${css.footer}`}
      style={{
        height: "400px", // Set the fixed height here

        backgroundImage: `url('src/assets/Child/childbackground.png')`,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "#3eb2cf",
      }}
    >
      {/* Add the 'footer' class here */}
      <div className={`innerWidth  flexCenter ${css.container}`}>
        {/* Left side content */}
        <div className={css.left} style={{ backgroundBlendMode: "multiply" }}>
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
                    // marginTop: "10px",
                    fontSize: "33px",
                    color: "white",
                    display: "inline-block",
                    paddingBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  <b> Do you worry about your child’s</b> <br />
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
    </section>
  );
};

export default Child;
