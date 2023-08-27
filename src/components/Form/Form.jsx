import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Form.module.scss";
import { motion } from "framer-motion";

const Form = () => {
  return (
    <section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper} ${css.footer}`}
      style={{
        backgroundImage: `url('src/assets/Form/Formbg.png')`,
        backgroundColor: "#a4d5ab",
        height: "auto",
      }}
    >
      <div className={css.backgroundImage}></div>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div>
          <h2 className={css.title}>
            Book a demo of ‘English is Fun with Addy & Molly!’
          </h2>
          <form className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor="name" className={css.label}>
                Name:
              </label>
              <input type="text" id="name" name="name" className={css.input} />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="age" className={css.label}>
                Age:
              </label>
              <input type="number" id="age" name="age" className={css.input} />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="mobile" className={css.label}>
                Mobile:
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className={css.input}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="childName" className={css.label}>
                Child’s Name:
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                className={css.input}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="age" className={css.label}>
                Age:
              </label>
              <input type="number" id="age" name="age" className={css.input} />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="kitOption" className={css.label}>
                Kit Option:
              </label>
              {/* <select id="kitOption" name="kitOption" className={css.select}>
                <option value="standard">Standard Kit</option>
                <option value="premium">Premium Kit</option>
              </select> */}
              <input
                type="text"
                id="kitOption"
                name="kitOption"
                className={css.input}
              />
            </div>

            {/* Other form elements here */}

            <div className={css.buttons}>
              <button type="submit" className={css.submitButton}>
                Submit
              </button>
              <button type="button" className={css.cancelButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Form;
