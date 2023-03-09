import React from "react";
import "../Card/InfoWeather.css";

const InfoWeather = ({ data }) => {
  console.log(data);

  return (
    <> 
    <section className="container__father">
       <h1 className="title">Weather App</h1>
      <div className="container__initial">
        
        <div className="container__img">
          <h2 className="container__temp">
            {Math.floor(data?.main.temp)}°
          </h2>
           <img className="container__img-1" src={`../../../public/img/hot.png`} alt="" />
        </div>
        <div className="container__winds">
          <h3>Winds: {data?.wind.speed} km/h </h3>
          <h3>Clouds: {data?.clouds.all} %</h3>
          <h3>Pressure {data?.main.pressure} hPa</h3>
        </div>
        <div className="container__country">
          <h1>
            {data?.name}, {data?.sys.country}
          </h1>
          <h2 className="container__descr" >{data?.weather[0].description}</h2>
        </div>
      </div>
      </section>
    </>
  );
};

export default InfoWeather;
