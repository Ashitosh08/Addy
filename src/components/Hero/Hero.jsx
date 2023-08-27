import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Hero.css";

const Hero = () => {
  // Define an array of movie data
  const movieData = [
    {
      id: 1,
      mainImage: "src/components/assets/slide_1/bg.png",
      raysImage: "src/components/assets/slide_1/bgraysglow.png",
      cloudsImage: "src/components/assets/slide_1/clouds.png",
      topLeftImage: "src/components/assets/slide_1/AddyMollyLogo.png",
      topRightImage: {
        src: "src/components/assets/slide_1/addynmolly.png",
        maxWidth: "100%",
        maxHeight: "70%",
        top: "20%",
        right: "10%",
      },
      centerLeftImage: (
        <>
          A Comprehensive English Learning{" "}
          <span style={{ color: "#fcbf49", fontSize: "40px" }}>
            <br />
            Edutainment Kit
          </span>{" "}
          <br />
          For Your Child.
        </>
      ),
    },
    {
      id: 2,
      mainImage: "src/components/assets/slide_2/bg.png",
      raysImage: "src/components/assets/slide_2/bgraysglow.png",
      cloudsImage: "src/components/assets/slide_2/clouds.png",
      topLeftImage: "src/components/assets/slide_2/AddyMollyLogo.png",
      topRightImage: {
        src: "src/components/assets/slide_2/readinggirl.png",
        maxWidth: "400px", // Set the maximum width as needed for this object
        maxHeight: "70%",
        top: "20%",
        right: "15%",
      },
      centerLeftImage: (
        <>
          <span
            style={{ color: "#fcbf49", fontSize: "50px", letterSpacing: 1 }}
          >
            Listen. Learn. Grow:
            <br />
          </span>{" "}
          English Communication Skills <br />
          at Your Child's Own Pace.
        </>
      ),
    },
    {
      id: 3,
      mainImage: "src/components/assets/slide_3/bg.png",
      raysImage: "src/components/assets/slide_3/bgraysglow.png",
      cloudsImage: "src/components/assets/slide_3/clouds.png",
      topLeftImage: "src/components/assets/slide_3/AddyMollyLogo.png",

      topRightImage: {
        src: "src/components/assets/slide_3/readingpic.png",
        maxWidth: "100%",
        maxHeight: "100%",
        top: "7%",
        right: "10%",
      },
      centerLeftImage: (
        <>
          <span
            style={{ color: "#fcbf49", fontSize: "35px", letterSpacing: 1 }}
          >
            Screen-Free Fun & Learning
          </span>{" "}
          <br /> for Your Child at Home!
        </>
      ),
    },
    {
      id: 4,
      mainImage: "src/components/assets/slide_4/bg.png",
      raysImage: "src/components/assets/slide_4/bgraysglow.png",
      cloudsImage: "src/components/assets/slide_4/clouds.png",
      topLeftImage: "src/components/assets/slide_4/AddyMollyLogo.png",
      topRightImage: {
        src: "src/components/assets/slide_4/bookpen.png",
        maxWidth: "100%",
        maxHeight: "90%",
        top: "2%",
        right: "10%",
      },
      centerLeftImage: (
        <>
          <span
            style={{ color: "#fcbf49", fontSize: "35px", letterSpacing: 1 }}
          >
            {" "}
            The Reading PEN:
          </span>
          <br /> Read, Sing, Play, Learn <br /> – All in a fun & engaging way!
        </>
      ),
    },
    // Add more movie data objects as needed
  ];

  return (
    <div className="banner">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {movieData.map((movie) => (
          <div key={movie.id} className="poster">
            <div
              className="image-container"
              style={{ width: "100%", height: "400px !important" }}
            >
              {/* Main Image */}
              <img
                src={movie.mainImage}
                alt="Main Slider"
                className="main-image"
                style={{ width: "100%", height: "400px !important" }}
              />

              {/* Rays Image */}
              <img src={movie.raysImage} alt="Rays" className="rays-image" />

              {/* Clouds Image */}
              <img
                src={movie.cloudsImage}
                alt="Clouds"
                className="clouds-image"
              />

              {/* Top Left Image */}
              <img
                src={movie.topLeftImage}
                alt="Top Left"
                className="top-left-image"
              />

              {/* Top Right Image */}
              <img
                src={movie.topRightImage.src}
                alt="Top Right"
                className="top-right-image"
                style={{
                  width: movie.topRightImage.maxWidth,
                  height: movie.topRightImage.maxHeight,
                  top: movie.topRightImage.top,
                  right: movie.topRightImage.right,
                }}
              />

              {/* Center Left Text */}
              <div className="center-left-text">
                <div className="centered-text">{movie.centerLeftImage}</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
