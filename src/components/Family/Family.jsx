import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Family.module.scss";
import { motion } from "framer-motion";

const Family = () => {
  return (
    <motion.section
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
          backgroundImage: `url('src/assets/Family/Familybg.png')`,
        }}
      ></div>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        {/* Left side content */}
        <div className={css.left}>
          <img
            src="src/assets/Family/Family.png"
            alt="AddMolly Logo"
            className={css.blendImage}
            style={{
              maxWidth: "70%",
              marginTop: "5%", // Adjust the percentage as needed
            }}
          />
        </div>

        {/* Right side content */}
        <div className={css.right}>
          <div className={`innerWidth flexCenter ${css.overlay}`}>
            <div className={`flexCenter ${css.content}`}>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column", // Display in a row
                  }}
                >
                  <div
                    style={{
                      listSstyle: "none",
                      flex: "1",
                      letterSpacing: 1,
                      fontSize: "25px",
                      color: "#d28d20",
                      fontWeight: 700,
                      whiteSpace: "pre-line",
                    }}
                  >
                    “Highly effective English learning kit!
                    <br /> My 4-year-old is loving it. A must-have, especially
                    for kids from non English speaking families.”
                  </div>

                  <div>
                    <br />
                    <p
                      style={{
                        color: "#513507",
                        fontSize: "14px",
                        textAlign: "right",
                        letterSpacing: 1,
                      }}
                    >
                      – Ashvin P.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Family;
