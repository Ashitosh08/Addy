import React, { useState } from "react";
import css from "./FAQ.module.scss"; // Import your FAQ component CSS here

const FAQ = () => {
  // Initialize state to track the index of the currently open FAQ
  const [openIndex, setOpenIndex] = useState(-1);

  // Function to handle opening and closing of FAQ items
  const handleToggle = (index) => {
    if (openIndex === index) {
      // Clicked FAQ is already open, so close it
      setOpenIndex(-1);
    } else {
      // Clicked FAQ is different, so open it and close the previously open one
      setOpenIndex(index);
    }
  };

  // Define your FAQ data as an array of objects
  const faqData = [
    {
      question: "What sets 'English is Fun with Addy & Molly!' apart?",
      answer:
        "Unlike others, 'English is Fun with Addy & Molly!' is an all-in-one English learning kit for children. It covers grammar, phonetics, and vocabulary, fostering confident and fluent communication in English. Engaging stories, songs, interactive games, Q & As, and a picture dictionary make learning fun and effective.",
    },
    {
      question: "Is parental involvement required?",
      answer:
        "While the Reading PEN supports independent learning at a child's own pace, an adult's involvement is beneficial to familiarize kids with reading processes and feature usage.",
    },
    {
      question: "For what age groups is this available for?",
      answer:
        "Ideally designed for kids aged 2 to 8, 'English is Fun with Addy & Molly!' caters to a broad spectrum – from those starting to speak to older kids facing difficulties while communicating in English.",
    },
    {
      question: "Is There a Warranty for the Reading PEN?",
      answer:
        "Yes, the Reading PEN is backed by a one-year warranty. To enjoy its benefits, simply register at lioncub.in/warranty.",
    },
    {
      question: "Can I use the Reading PEN for other books?",
      answer:
        "Definitely! You can convert any book into your very own personalized audiobook. Simply record the content with the Reading PEN in your voice and store it on provided recordable stickers.",
    },
    {
      question: "Can I Purchase the Reading PEN or Books Separately?",
      answer:
        "Absolutely! If you find yourself in a lost or damaged situation, you have the option to buy individual books or the Reading PEN separately. Simply provide the original purchase details while placing the order.",
    },
  ];

  return (
    <div className={css.faqContainer}>
      <h2 className={css.faqHeading}>FAQ:</h2>
      {faqData.map((faq, index) => (
        <div
          className={css.faqItem}
          key={index}
          style={{
            borderRadius: "10px",
            backgroundColor:
              openIndex === index || openIndex === -1 ? "#1ea784" : "#1ea784",
          }}
        >
          <button
            className={css.faqButton}
            onClick={() => handleToggle(index)}
            style={{
              borderRadius: "10px",
              marginLeft: "10px",
              color: openIndex === index ? "white" : "white",
              backgroundColor:
                openIndex === index || openIndex === -1 ? "#1ea784" : "#1ea784", // Add this line
            }}
          >
            {openIndex === index ? "-" : "+"} {faq.question}
          </button>
          {/* Container for both question and answer */}
          <div
            className={css.faqContentContainer}
            style={{
              display: openIndex === index ? "block" : "none",
              width: "100%", // Set a fixed width for both question and answer
              textAlign: "left", // Align text to the left
            }}
          >
            <div className={css.faqContent}>
              <p className={css.faqAnswer}>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
