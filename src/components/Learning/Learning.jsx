// import React from "react";
// import { workExp } from "../../utils/data";
// import css from "./Work.module.scss";
// import { motion } from "framer-motion";
// import {
//   draw,
//   fadeIn,
//   slideIn,
//   staggerChildren,
//   textVariant2,
//   zoomIn,
// } from "../../utils/motion";

// const learning = [
//   {
//     title: "Friendly characters ",
//     paragraph: "that your child will love instantly.",
//     image: "url_to_image_1.jpg",
//   },
//   {
//     title: "Captivating comic strip stories ",
//     paragraph:
//       "that build up communication skills and nurture their character from an early age.",
//     image: "url_to_image_2.jpg",
//   },
//   {
//     title: "Original songs ",
//     paragraph: "that entertain and enhance language learning.",
//     image: "url_to_image_3.jpg",
//   },
//   {
//     title: "Search and Find games ",
//     paragraph: "to reinforce learning in an interactive way.",
//      image: "src/assets/Learning/icon1.png",
//   },
//   {
//     title:
//       "Listen, Record & Compare modes to boost pronunciation skills effectively.",
//     paragraph: "Pronunciation practice is made easy with these modes.",
//     image: "url_to_image_5.jpg",
//   },
//   {
//     title: "Q & A ",
//     paragraph:
//       "activities to help children listen to themselves and improve their speaking skills.",
//     image: "url_to_image_6.jpg",
//   },
//   {
//     title: "Storybooks ",
//     paragraph:
//       "with page and word-wise listening, supporting reading skills development.",
//     image: "url_to_image_7.jpg",
//   },
//   {
//     title: "Rewritable practice books ",
//     paragraph:
//       "that enhance writing skills, foster creativity, and encourage critical thinking.",
//     image: "url_to_image_8.jpg",
//   },
//   {
//     title: "Re-recordable stickers ",
//     paragraph: "that transform any book into a personalized audio book.",
//     image: "url_to_image_9.jpg",
//   },
//   {
//     title: "Flashcards ",
//     paragraph:
//       "for phonetic and grammar reinforcement, making learning more engaging and effective.",
//     image: "url_to_image_10.jpg",
//   },
// ];

// const Work = () => {
//   return (
//     <motion.section
//       variants={staggerChildren}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className={`paddings ${css.wrapper}`}
//     >
//       <a className="anchor" id="work"></a>

//       <div className={`innerWidth flexCenter ${css.container}`}>
//         {/* heading */}
//         <span className="primaryText yPaddings">
//           Learning English has become so easy and so much fun!{" "}
//         </span>

//         <div className={`flexCenter ${css.experiences}`}>
//           {workExp.map((exp, i) => {
//             return (
//               <motion.div
//                 variants={textVariant2}
//                 key={i}
//                 className={`flexCenter ${css.exp}`}
//               >
//                 <div className={css.post}>
//                   <h1>{exp.place}</h1>
//                   <p>{exp.tenure}</p>
//                 </div>
//                 <div className={css.role}>
//                   <h1>{exp.role}</h1>
//                   <p>{exp.detail}</p>
//                 </div>
//               </motion.div>
//             );
//           })}

//           <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
//             <motion.div
//               variants={fadeIn("down", "tween", 2, 1.5)}
//               className={css.line}
//             ></motion.div>
//             <div>
//               <div
//                 className={css.circle}
//                 style={{ background: "#286F6C" }}
//               ></div>
//             </div>
//             <div>
//               <div
//                 className={css.circle}
//                 style={{ background: "#F2704E" }}
//               ></div>
//             </div>
//             <div>
//               <div
//                 className={css.circle}
//                 style={{ background: "#EEC048" }}
//               ></div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Work;

import React from "react";
import css from "./Learning.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2, zoomIn } from "../../utils/motion";

const learning = [
  {
    title: "Friendly characters ",
    paragraph: "that your child will love instantly.",
    image: "src/assets/Learning/icon1.png",
  },
  {
    title: "Captivating comic strip stories ",
    paragraph:
      "that build up communication skills and nurture their character from an early age.",
    image: "src/assets/Learning/icon2.png",
  },
  {
    title: "Original songs ",
    paragraph: "that entertain and enhance language learning.",
    image: "src/assets/Learning/icon3.png",
  },
  {
    title: "Search and Find games ",
    paragraph: "to reinforce learning in an interactive way.",
    image: "src/assets/Learning/icon4.png",
  },
  {
    title: "Listen, Record & Compare ",
    paragraph: "modes to boost pronunciation skills effectively.",
    image: "src/assets/Learning/icon5.png",
  },
  {
    title: "Q & A ",
    paragraph:
      "activities to help children listen to themselves and improve their speaking skills.",
    image: "src/assets/Learning/icon6.png",
  },
  {
    title: "Storybooks ",
    paragraph:
      "with page and word-wise listening, supporting reading skills development.",
    image: "src/assets/Learning/icon7.png",
  },
  {
    title: "Rewritable practice books ",
    paragraph:
      "that enhance writing skills, foster creativity, and encourage critical thinking.",
    image: "src/assets/Learning/icon8.png",
  },
  {
    title: "Re-recordable stickers ",
    paragraph: "that transform any book into a personalized audio book.",
    image: "src/assets/Learning/icon9.png",
  },
  {
    title: "Flashcards ",
    paragraph:
      "for phonetic and grammar reinforcement, making learning more engaging and effective.",
    image: "src/assets/Learning/icon10.png",
  },
];

const Learning = () => {
  const leftColumn = learning.slice(0, 5);
  const rightColumn = learning.slice(5);

  return (
    <div
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` ${css.wrapper}`}
      style={{
        backgroundImage: `url('src/assets/Learning/learningbg.png')`,
        backgroundColor: "#f7bd4d",
      }}
    >
      <a className="anchor" id="work"></a>

      {/* Content to the left */}
      <div className={css.contentRow}>
        {/* Content to the left */}
        <div className={css.contentLeft}>
          <div className={css.contentText}>
            <ul style={{ listStyle: "none" }}>
              <li>
                ✔ Extensive research has gone into content development and
                design.
              </li>
              <li>
                ✔ Developed and designed by a team of domestic and international
                <br />
                artists and English language consultants.
              </li>
              <li>
                ✔ Crafted as per pedagogy and cognitive foundations of learning.
              </li>
              <li>
                ✔ Meticulously designed to appeal to kids from all around the
                world.
              </li>
              <li>✔ World-class quality at an affordable price.</li>
            </ul>
          </div>
        </div>

        {/* Image to the right */}
        <div className={css.imageRight}>
          <img
            src="src/assets/Learning/learning.png"
            alt="Addy"
            style={{ width: "50%" }}
          />
        </div>
      </div>

      {/* Heading */}
      <span
        style={{
          textAlign: "left",
          fontSize: "30px",
          padding: "0 90px",
          color: "#a723a5",
        }}
        className="custom-heading"
      >
        Learning English has become so easy and so much fun!{" "}
      </span>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`${css.flexCentering} ${css.experiences}`}>
          <div className={`${css.column} ${css.leftColumn}`}>
            {leftColumn.map((item, i) => {
              return (
                <div
                  variants={textVariant2}
                  key={i}
                  className={`flexCenter ${css.exp}`}
                >
                  <div className={css.image}>
                    <img
                      src={item.image}
                      alt="hello"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div className={css.title}>
                    <h5 style={{ color: "#3a4baa" }}>{item.title}</h5>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`${css.column} ${css.rightColumn}`}>
            {rightColumn.map((item, i) => {
              return (
                <div
                  variants={textVariant2}
                  key={i}
                  className={`flexCenter ${css.exp}`}
                >
                  <div className={css.image}>
                    <img
                      src={item.image}
                      alt="hello"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div className={css.title}>
                    <h5 style={{ color: "#3a4baa" }}>{item.title}</h5>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
