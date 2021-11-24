export enum WeatherCondition {
  THUNDERSTORM = 'Thunderstorm',
  DRIZZLE = 'Drizzle',
  RAIN = 'Rain',
  SNOW = 'Snow',
  SMOKE = 'Smoke',
  HAZE = 'Haze',
  DUST = 'Dust',
  FOG = 'Fog',
  SAND = 'Sand',
  ASH = 'Ash',
  SQUALL = 'Squall',
  TORNADO = 'Tornado',
  CLEAR = 'Clear',
  CLOUDS = 'Clouds',
}

export interface Geo {
  lon: number;
  lat: number;
}

export interface IWeather {
  id: number;
  main: WeatherCondition;
  description: string;
  icon: string;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humudity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface IWind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface IClouds {
  all: number;
}

export interface ISys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeatherInfo {
  coord: Geo;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  timezone: number;
  id: string;
  name: string;
  cod: number;
}
