import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Hero.css";

const Hero = () => {
  // Define an array of movie data
  const movieData = [
    {
      id: 1,
      mainImage: "src/assets/slide_1/bg.png",
      raysImage: "src/assets/slide_1/bgraysglow.png",
      cloudsImage: "src/assets/slide_1/clouds.png",
      topLeftImage: "src/assets/slide_1/AddyMollyLogo.png",
      topRightImage: "src/assets/slide_1/addynmolly.png",
      centerLeftImage: "src/assets/slide_1/edutainmenttext.png",
    },
    {
      id: 2,
      mainImage: "src/assets/slide_2/bg.png",
      raysImage: "src/assets/slide_2/bgraysglow.png",
      cloudsImage: "src/assets/slide_2/clouds.png",
      topLeftImage: "src/assets/slide_2/AddyMollyLogo.png",
      topRightImage: "src/assets/slide_2/readinggirl.png",
      centerLeftImage: "src/assets/slide_2/listentext.png",
    },
    {
      id: 3,
      mainImage: "src/assets/slide_3/bg.png",
      raysImage: "src/assets/slide_3/bgraysglow.png",
      cloudsImage: "src/assets/slide_3/clouds.png",
      topLeftImage: "src/assets/slide_3/AddyMollyLogo.png",
      topRightImage: "src/assets/slide_3/readingpic.png",
      centerLeftImage: "src/assets/slide_3/screenfreetext.png",
    },
    {
      id: 4,
      mainImage: "src/assets/slide_4/bg.png",
      raysImage: "src/assets/slide_4/bgraysglow.png",
      cloudsImage: "src/assets/slide_4/clouds.png",
      topLeftImage: "src/assets/slide_4/AddyMollyLogo.png",
      topRightImage: "src/assets/slide_4/bookpen.png",
      centerLeftImage: "src/assets/slide_4/readingpentext.png",
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
            <div className="image-container">
              {/* Main Image */}
              <img
                src={movie.mainImage}
                alt="Main Slider"
                className="main-image"
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
                src={movie.topRightImage}
                alt="Top Right"
                className="top-right-image"
              />

              {/* Center Left Image */}
              <img
                src={movie.centerLeftImage}
                alt="Center Left"
                className="center-left-image"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
