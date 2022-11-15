import { useState } from 'react';
import { Form } from './Form';
import { Card } from './Card';

export const WeatherPanel = () => {

  let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=f2151ad3700d892f6400d2d4363e7a0e&lang=es";
  let cityUrl = "&q=";

  let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=f2151ad3700d892f6400d2d4363e7a0e&lang=es";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    // weather
    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather).then((response) => {
      if (!response.ok) throw response
      return response.json();
    }).then((weatherData) => {
      console.log(weatherData);
      setWeather(weatherData);
    }).catch(err => {
      console.log(err);
      setLoading(false);
      setShow(false);
    });

    // forecast

    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast).then((response) => {
      if (!response.ok) throw response
      return response.json();
    }).then((forecastData) => {
      console.log(forecastData);
      setForecast(forecastData);

      setLoading(false)
      setShow(true);

    }).catch(err => {
      console.log(err);
      setLoading(false);
      setShow(false);
    });

  }

  return (
    <>
      <Form
        newLocation={getLocation}
      />
      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      />
    </>
  );

};
