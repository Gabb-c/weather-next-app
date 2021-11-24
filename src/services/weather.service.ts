import { CurrentWeatherInfo } from 'src/models/current-weather';
import api from '../config/axios';

export const getCurrentInfo = async (value: string): Promise<CurrentWeatherInfo> => {
  return new Promise((resolve, reject) => {
    api
      .get<CurrentWeatherInfo>(
        `/weather?q=${value}&units=metric&APPID=${
          process.env.NEXT_PUBLIC_WEATHER_API_KEY as string
        }`
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
