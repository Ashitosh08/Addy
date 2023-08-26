import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Adventure.module.scss";
import { motion } from "framer-motion";

const Adventure = () => {
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
          backgroundImage: `url('src/assets/Adventure/Adventurebg.png')`,
        }}
      ></div>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        {/* Left side content */}
        <div className={css.left}>
          <img
            src="src/assets/Adventure/Adventure.png"
            alt="AddMolly Logo"
            className={css.blendImage}
            style={{
              maxWidth: "70%",
              marginTop: "10%", // Adjust the percentage as needed
            }}
          />
        </div>

        {/* Right side content */}
        <div className={css.right}>
          <div className={`innerWidth flexCenter ${css.overlay}`}>
            <div className={`flexCenter ${css.content}`}>
              <div>
                <div>
                  <h1
                    className="primaryText"
                    style={{
                      marginTop: "10px",
                      fontSize: "25px",
                      letterSpacing: 3,
                      textAlign: "left",
                      color: "#124576", // Green color
                      display: "inline-block",
                      paddingBottom: "10px",
                    }}
                  >
                    The habit of reading and the love for learning is developed
                    at home!
                  </h1>
                </div>
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
                      fontSize: "14px",
                      color: "#513507",
                      textAlign: "left",
                      whiteSpace: "pre-line",
                    }}
                  >
                    'English is Fun with Addy & Molly!' is the realization of a
                    dream held by edutainment enthusiast Hemendrasinh Chauhan.
                    As the father of Addy & Molly, he envisioned a creative
                    learning journey. Designed and developed in alignment with
                    pedagogical and cognitive learning principles and crafted by
                    a world-class team of domestic & international artists and
                    English language consultants at Lion Cub Studios OPC Pvt.
                    Ltd.
                  </div>

                  <div>
                    <br />
                    <p
                      style={{
                        color: "#513507",
                        fontSize: "14px",
                        textAlign: "left",
                        letterSpacing: 1,
                      }}
                    >
                      With dedication and expertise, he aims to make learning a
                      joyful adventure for children everywhere.
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

export default Adventure;
