import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Pricing.module.scss";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";

const dividerStyle = {
  backgroundColor: "red",
  height: "2px", // Set the background color to red
};

const Pricing = () => {
  return (
    <section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper} ${css.footer}`}
    >
      <h1 className={css.heading}>English is Fun with Addy and Molly</h1>
      <div
        className={css.backgroundImage}
        style={{
          backgroundImage: `url('src/assets/Pricing/Pricingbg.png')`,
          backgroundColor: "#d5e598",
        }}
      ></div>
      <div
        variants={footerVariants}
        className={`innerWidth  flexCenter ${css.container}`}
      >
        {/* First Copy */}
        <div className={css.left}>
          <img
            src="src/assets/Pricing/beginner.png"
            alt="AddMolly Logo"
            style={{
              maxWidth: "90%",
              marginTop: "10%", // Adjust the percentage as needed
            }}
          />
        </div>

        {/* Right side content */}
        <div className={`${css.right} ${css.content}`}>
          <p className={css.smallText}>The Beginner Kit – Rs 9,999/-</p>
          <ul className={css.smallFont} style={{ listStyle: "none" }}>
            <li>✔ 6 Hardcover learning books</li>
            <li>✔ 6 Softcover storybooks</li>
            <li>✔ 2 Rewritable practice books</li>
            <li>✔ 1 Reading PEN with USB cable</li>
            <li>✔ 47 Flashcards</li>
            <li>✔ 170 Recordable stickers</li>
            <li>✔ 16 Notebook stickers</li>
          </ul>
          <div className={css.buttonContainer}>
            <button className={`${css.button} ${css.viewButton}`}>
              View Now
            </button>
            <button className={`${css.button} ${css.buyButton}`}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Divider style={dividerStyle} />
      {/* Second Copy */}
      <div
        className={`innerWidth  flexCenter ${css.container}`}
        style={{ padding: "100px !important" }}
      >
        <div className={`${css.left} ${css.content}`}>
          <p className={css.smallText}>The Intermediate Kit – Rs 9,999/-</p>
          <ul className={css.smallFont} style={{ listStyle: "none" }}>
            <li>✔ 6 Hardcover learning books</li>
            <li>✔ 6 Softcover storybooks</li>
            <li>✔ 2 Rewritable practice books</li>
            <li>✔ 1 Reading PEN with USB cable</li>
            <li>✔ 58 Flashcards</li>
            <li>✔ 170 Recordable stickers</li>
            <li>✔ 16 Notebook stickers</li>
          </ul>
          <div className={css.buttonContainer}>
            <button className={`${css.button} ${css.viewButton}`}>
              View Now
            </button>
            <button className={`${css.button} ${css.buyButton}`}>
              Buy Now
            </button>
          </div>
        </div>
        <div className={css}>
          <img
            src="src/assets/Pricing/intermediate.png"
            alt="AddMolly Logo"
            style={{
              maxWidth: "70%",
              marginTop: "10%", // Adjust the percentage as needed
            }}
          />
        </div>
      </div>
      <br />
      <Divider style={dividerStyle} />
      {/* Third Copy */}
      <div className={`innerWidth  flexCenter ${css.container}`}>
        <div className={css.left}>
          <img
            src="src/assets/Pricing/complete.png"
            alt="AddMolly Logo"
            style={{
              maxWidth: "100%",
              marginTop: "10%", // Adjust the percentage as needed
            }}
          />
        </div>

        <div className={`${css.right} ${css.content}`}>
          <p className={css.smallText}>
            The Complete Kit – Rs 13,998/- (Save Rs. 6,000/-)
          </p>
          <ul className={css.smallFont} style={{ listStyle: "none" }}>
            <li>✔ 12 Hardcover learning books</li>
            <li>✔ 12 Softcover storybooks</li>
            <li>✔ 4 Rewritable practice books</li>
            <li>✔ 1 Reading PEN with USB cable</li>
            <li>✔ 95 Flashcards</li>
            <li>✔ 340 Recordable stickers</li>
            <li>✔ 16 Notebook stickers</li>
          </ul>
          <div className={css.buttonContainer}>
            <button className={`${css.button} ${css.viewButton}`}>
              View Now
            </button>
            <button className={`${css.button} ${css.buyButton}`}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
