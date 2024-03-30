import React from "react";
let Icon;
const IconsA = ({ Data }) => {
  if (Data.weather[0].icon) {
    switch (true) {
      case "01n": // CLEAR NIGHT
        Icon = <img src="./src/weater-icons/Moon.svg" />;
        break;
      case "10n": //Night Rain
        Icon = <img src="./src/weater-icons/Night-rain.svg" />;
        break;
      case "02n": // Drizzle Atmoshper
        Icon = <img src="./src/weater-icons/Night-clouds.svg" />;
        break;
    }
  } else if (Data.weather[0].main) {
    switch (true) {
      case "Clear": //CLEAR-SKY
        Icon = <img src="./src/weater-icons/Clear.svg" />;
        break;
      case "Haze": //Haze Atmoshpehr
        Icon = <img src="./src/weater-icons/Sunny.svg" />;
        break;
      case "Rain": // Day Rain
        Icon = <img src="./src/weater-icons/Rainy.svg" />;
        break;
      case "Drizzle": // Drizzle Atmoshper
        Icon = <img src="./src/weater-icons/Clouds-rain.svg" />;
        break;
      case "Clouds": // Drizzle Atmoshper
        Icon = <img src="./src/weater-icons/Cloudy.svg" />;
        break;
      case "Thunderstrom": // Drizzle Atmoshper
        Icon = <img src="./src/weater-icons/Heavyrain-strom.svg" />;
        break;
    }
  }


  // {case "01n": // CLEAR NIGHT
    //   Icon = <img src="./src/weater-icons/Moon.svg" />;
    //   break;
    // case "10n": //Night Rain
    //   Icon = <img src="./src/weater-icons/Night-rain.svg" />;
    //   break;
    // case "02n": // Drizzle Atmoshper
    //   Icon = <img src="./src/weater-icons/Night-clouds.svg" />;
    //   break;}
};

export default IconsA;
