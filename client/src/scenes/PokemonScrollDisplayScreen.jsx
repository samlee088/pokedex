import React, { useEffect, useState } from "react";
import axios from "utils/axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PokemonScrollDisplayScreen.css";
import { Box } from "@mui/material";

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

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   vertical: true,
  //   verticalSwiping: true,
  //   swipeToSlide: true,
  //   beforeChange: function (currentSlide, nextSlide) {
  //     console.log("before change", currentSlide, nextSlide);
  //   },
  //   afterChange: function (currentSlide) {
  //     console.log("after change", currentSlide);
  //   },
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Box
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          margin: "-100px",
          justifyContent: "center",
          marginRight: "auto",
          marginLeft: "auto",
          width: "70%",
          alignItems: "center",
        }}
      >
        <ul style={{ margin: "5px" }}> {dots} </ul>
      </Box>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="pageLayout">
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
