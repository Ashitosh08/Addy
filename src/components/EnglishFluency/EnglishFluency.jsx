import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./EnglishFluency.module.scss";
import { motion } from "framer-motion";

const EnglishFluency = () => {
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
          backgroundImage: `url('src/assets/EnglishFluency/EnglishFluencybg.png')`,
        }}
      ></div>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        {/* Left side content */}
        <div className={css.left}>
          <div className={`innerWidth flexCenter ${css.overlay}`}>
            <div className={`flexCenter ${css.content}`}>
              <div>
                <div>
                  <h1
                    className="primaryText"
                    style={{
                      marginTop: "10px",
                      fontSize: "25px",
                      color: "green", // Green color
                      display: "inline-block",
                      paddingBottom: "10px",
                    }}
                  >
                    Go beyond teaching a few English words: Enable your child to
                    speak in English fluently!
                  </h1>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column", // Display in a row
                  }}
                >
                  <ul style={{ listStyle: "none", flex: "1" }}>
                    <li style={{ fontSize: "14px", color: "black" }}>
                      • Develop their English communication skills at an early
                      age.
                    </li>
                    <li style={{ fontSize: "14px", color: "black" }}>
                      • Encourage them to speak, read and write in English on
                      their own.
                    </li>
                    <li style={{ fontSize: "14px", color: "black" }}>
                      • Improve their pronunciation and teach them grammar,
                      phonetics, and new vocabulary.
                    </li>
                    <li style={{ fontSize: "14px", color: "black" }}>
                      • Enhance their listening and speaking skills.
                    </li>
                    <li style={{ fontSize: "14px", color: "black" }}>
                      • Reduce their mobile/TV screen time and utilize their
                      home time more constructively.
                    </li>
                    <li style={{ fontSize: "14px", color: "black" }}>
                      • Increase their attention span and patience.
                    </li>
                    <li style={{ fontSize: "14px", color: "black" }}>
                      • Foster their imagination and critical thinking.
                    </li>
                    <li style={{ fontSize: "14px", color: "black" }}>
                      • Cultivate a lifelong reading and learning habit.
                    </li>
                    <li style={{ fontSize: "14px", color: "black" }}>
                      • Make the most of their formative years.
                    </li>
                  </ul>
                  <div>
                    <br />
                    <p
                      style={{
                        color: "green",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      Children can read it anywhere, anytime and develop
                      communication skills at their own pace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className={css.right}>
          <img
            src="src/assets/EnglishFluency/EnglishFluencychild.png"
            alt="AddMolly Logo"
            className={css.blendImage}
            style={{
              maxWidth: "70%", // Adjust the percentage as needed
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default EnglishFluency;
