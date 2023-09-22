import dotenv from "dotenv";

dotenv.config();

export const getWeather = async (query) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${query}`
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
