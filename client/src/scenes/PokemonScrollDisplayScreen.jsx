import React, { useEffect, useState } from "react";
import axios from "utils/axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PokemonScrollDisplayScreen = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let array = [];

      for (let i = 1; i < 151; i++) {
        const request = await axios.get(`/pokemon/${i}`);
        array.push([request.data.name]);
      }
      setPokemonData(array);
    }

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div>
      <Slider {...settings}>
        {pokemonData.map((x, index) => (
          <div key={index}>
            <h1>{x}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PokemonScrollDisplayScreen;
