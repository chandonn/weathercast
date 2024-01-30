import { Data, SearchResults } from '../types/data'
import { apiToWeather } from '../models/apiToWeather'
import { apiToLocation } from '../models/apiToLocation'
import { State } from '../types/state'
import { WeatherResultsResponse } from '@/types/api'

export const buildWeatherResultsQueryString = (
  geolocation: State['geolocation'],
  menu: State['menu'],
) => {
  const baseURL = 'https://api.openweathermap.org/data/3.0/onecall'
  const { latitude, longitude } = geolocation
  const params = {
    lat: latitude,
    lon: longitude,
    exclude: ['minutely', 'hourly', 'alerts'].join(','),
    appid: String(process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY),
    units: menu.temperature_unit,
  }

  return `${baseURL}?${new URLSearchParams(params)}`
}

export const getWeatherData = async (
  geolocation: State['geolocation'],
  menu: State['menu'],
): Promise<Data['weather']> => {
  try {
    const apiRequest = await fetch(
      buildWeatherResultsQueryString(geolocation, menu),
      {
        headers: {
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
        },
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
      }
    )
    const response = await apiRequest
    const json = await response.json()
    // const json: WeatherResultsResponse = {
    //   lat: -22.911,
    //   lon: -43.2094,
    //   timezone: 'America/Sao_Paulo',
    //   timezone_offset: -10800,
    //   current: {
    //     dt: 1706451314,
    //     sunrise: 1706430574,
    //     sunset: 1706478094,
    //     temp: 26.15,
    //     feels_like: 26.15,
    //     pressure: 1013,
    //     humidity: 81,
    //     dew_point: 22.63,
    //     uvi: 3.48,
    //     clouds: 75,
    //     visibility: 10000,
    //     wind_speed: 2.06,
    //     wind_deg: 40,
    //     weather: [
    //       {
    //         id: 803,
    //         main: 'Clouds',
    //         description: 'broken clouds',
    //         icon: '04d',
    //       },
    //     ],
    //   },
    //   daily: [
    //     {
    //       dt: 1706454000,
    //       sunrise: 1706430574,
    //       sunset: 1706478094,
    //       moonrise: 1706485380,
    //       moonset: 1706438760,
    //       moon_phase: 0.59,
    //       summary: 'Expect a day of partly cloudy with rain',
    //       temp: {
    //         day: 27.1,
    //         min: 22.52,
    //         max: 27.82,
    //         night: 23.43,
    //         eve: 24.93,
    //         morn: 22.78,
    //       },
    //       feels_like: {
    //         day: 29.67,
    //         night: 24.2,
    //         eve: 25.72,
    //         morn: 23.59,
    //       },
    //       pressure: 1013,
    //       humidity: 77,
    //       dew_point: 22.72,
    //       wind_speed: 3.4,
    //       wind_deg: 111,
    //       wind_gust: 3.8,
    //       weather: [
    //         {
    //           id: 501,
    //           main: 'Rain',
    //           description: 'moderate rain',
    //           icon: '10d',
    //         },
    //       ],
    //       clouds: 80,
    //       pop: 0.88,
    //       rain: 4.79,
    //       uvi: 5.8,
    //     },
    //     {
    //       dt: 1706540400,
    //       sunrise: 1706517016,
    //       sunset: 1706564476,
    //       moonrise: 1706573580,
    //       moonset: 1706528160,
    //       moon_phase: 0.62,
    //       summary: 'Expect a day of partly cloudy with rain',
    //       temp: {
    //         day: 33.06,
    //         min: 22.21,
    //         max: 33.93,
    //         night: 24.68,
    //         eve: 28.03,
    //         morn: 22.46,
    //       },
    //       feels_like: {
    //         day: 37.31,
    //         night: 25.68,
    //         eve: 31.87,
    //         morn: 23.16,
    //       },
    //       pressure: 1011,
    //       humidity: 53,
    //       dew_point: 22.16,
    //       wind_speed: 3.72,
    //       wind_deg: 128,
    //       wind_gust: 4.81,
    //       weather: [
    //         {
    //           id: 501,
    //           main: 'Rain',
    //           description: 'moderate rain',
    //           icon: '10d',
    //         },
    //       ],
    //       clouds: 0,
    //       pop: 0.72,
    //       rain: 2.69,
    //       uvi: 15.15,
    //     },
    //     {
    //       dt: 1706626800,
    //       sunrise: 1706603458,
    //       sunset: 1706650856,
    //       moonrise: 1706661720,
    //       moonset: 1706617500,
    //       moon_phase: 0.65,
    //       summary: 'Expect a day of partly cloudy with rain',
    //       temp: {
    //         day: 28.86,
    //         min: 22.47,
    //         max: 34.09,
    //         night: 24.75,
    //         eve: 28.49,
    //         morn: 22.7,
    //       },
    //       feels_like: {
    //         day: 32.79,
    //         night: 25.58,
    //         eve: 32.99,
    //         morn: 23.38,
    //       },
    //       pressure: 1010,
    //       humidity: 72,
    //       dew_point: 23.31,
    //       wind_speed: 2.81,
    //       wind_deg: 111,
    //       wind_gust: 4.44,
    //       weather: [
    //         {
    //           id: 500,
    //           main: 'Rain',
    //           description: 'light rain',
    //           icon: '10d',
    //         },
    //       ],
    //       clouds: 100,
    //       pop: 0.56,
    //       rain: 0.56,
    //       uvi: 15.01,
    //     },
    //     {
    //       dt: 1706713200,
    //       sunrise: 1706689900,
    //       sunset: 1706737235,
    //       moonrise: 1706749860,
    //       moonset: 1706706780,
    //       moon_phase: 0.68,
    //       summary:
    //         'You can expect partly cloudy in the morning, with rain in the afternoon',
    //       temp: {
    //         day: 33.79,
    //         min: 21.22,
    //         max: 34.13,
    //         night: 21.22,
    //         eve: 24.72,
    //         morn: 23.79,
    //       },
    //       feels_like: {
    //         day: 38.27,
    //         night: 21.96,
    //         eve: 25.68,
    //         morn: 24.31,
    //       },
    //       pressure: 1010,
    //       humidity: 51,
    //       dew_point: 22.18,
    //       wind_speed: 3.88,
    //       wind_deg: 122,
    //       wind_gust: 7,
    //       weather: [
    //         {
    //           id: 502,
    //           main: 'Rain',
    //           description: 'heavy intensity rain',
    //           icon: '10d',
    //         },
    //       ],
    //       clouds: 100,
    //       pop: 1,
    //       rain: 40.63,
    //       uvi: 12.61,
    //     },
    //     {
    //       dt: 1706799600,
    //       sunrise: 1706776342,
    //       sunset: 1706823613,
    //       moonrise: 1706838120,
    //       moonset: 1706796240,
    //       moon_phase: 0.71,
    //       summary: 'Expect a day of partly cloudy with rain',
    //       temp: {
    //         day: 29.43,
    //         min: 22.06,
    //         max: 29.43,
    //         night: 24.16,
    //         eve: 25.2,
    //         morn: 22.06,
    //       },
    //       feels_like: {
    //         day: 32.13,
    //         night: 24.88,
    //         eve: 26,
    //         morn: 22.67,
    //       },
    //       pressure: 1015,
    //       humidity: 62,
    //       dew_point: 21.3,
    //       wind_speed: 2.4,
    //       wind_deg: 229,
    //       wind_gust: 4.03,
    //       weather: [
    //         {
    //           id: 500,
    //           main: 'Rain',
    //           description: 'light rain',
    //           icon: '10d',
    //         },
    //       ],
    //       clouds: 100,
    //       pop: 0.6,
    //       rain: 1.88,
    //       uvi: 5.02,
    //     },
    //     {
    //       dt: 1706886000,
    //       sunrise: 1706862783,
    //       sunset: 1706909989,
    //       moonrise: 1706926680,
    //       moonset: 1706885820,
    //       moon_phase: 0.75,
    //       summary: 'There will be partly cloudy until morning, then rain',
    //       temp: {
    //         day: 30.82,
    //         min: 22.29,
    //         max: 30.82,
    //         night: 22.29,
    //         eve: 22.67,
    //         morn: 23.12,
    //       },
    //       feels_like: {
    //         day: 34.47,
    //         night: 23.11,
    //         eve: 23.55,
    //         morn: 23.79,
    //       },
    //       pressure: 1015,
    //       humidity: 60,
    //       dew_point: 21.96,
    //       wind_speed: 2.46,
    //       wind_deg: 137,
    //       wind_gust: 3.9,
    //       weather: [
    //         {
    //           id: 501,
    //           main: 'Rain',
    //           description: 'moderate rain',
    //           icon: '10d',
    //         },
    //       ],
    //       clouds: 100,
    //       pop: 0.96,
    //       rain: 15.83,
    //       uvi: 6,
    //     },
    //     {
    //       dt: 1706972400,
    //       sunrise: 1706949224,
    //       sunset: 1706996365,
    //       moonrise: 1707015420,
    //       moonset: 1706975520,
    //       moon_phase: 0.77,
    //       summary:
    //         'The day will start with partly cloudy through the late morning hours, transitioning to rain',
    //       temp: {
    //         day: 30.37,
    //         min: 21.87,
    //         max: 30.37,
    //         night: 23.38,
    //         eve: 24.71,
    //         morn: 21.87,
    //       },
    //       feels_like: {
    //         day: 34,
    //         night: 24.25,
    //         eve: 25.64,
    //         morn: 22.59,
    //       },
    //       pressure: 1015,
    //       humidity: 62,
    //       dew_point: 22.08,
    //       wind_speed: 2.72,
    //       wind_deg: 104,
    //       wind_gust: 3.21,
    //       weather: [
    //         {
    //           id: 501,
    //           main: 'Rain',
    //           description: 'moderate rain',
    //           icon: '10d',
    //         },
    //       ],
    //       clouds: 100,
    //       pop: 0.8,
    //       rain: 6.83,
    //       uvi: 6,
    //     },
    //     {
    //       dt: 1707058800,
    //       sunrise: 1707035664,
    //       sunset: 1707082739,
    //       moonrise: 0,
    //       moonset: 1707065520,
    //       moon_phase: 0.8,
    //       summary:
    //         'You can expect partly cloudy in the morning, with rain in the afternoon',
    //       temp: {
    //         day: 30.14,
    //         min: 22.38,
    //         max: 30.41,
    //         night: 24.1,
    //         eve: 25.26,
    //         morn: 22.59,
    //       },
    //       feels_like: {
    //         day: 33.52,
    //         night: 24.99,
    //         eve: 26.24,
    //         morn: 23.33,
    //       },
    //       pressure: 1015,
    //       humidity: 62,
    //       dew_point: 22.06,
    //       wind_speed: 2.52,
    //       wind_deg: 129,
    //       wind_gust: 2.91,
    //       weather: [
    //         {
    //           id: 501,
    //           main: 'Rain',
    //           description: 'moderate rain',
    //           icon: '10d',
    //         },
    //       ],
    //       clouds: 99,
    //       pop: 0.76,
    //       rain: 3.88,
    //       uvi: 6,
    //     },
    //   ],
    // }
    return apiToWeather(json, menu.temperature_unit)
  } catch (e) {
    throw e
  }
}

function buildGeolocationQueryString(query: string) {
  const baseURL = 'http://api.openweathermap.org/geo/1.0/direct'
  const params = {
    q: query,
    type: 'like',
    limit: '5',
    appid: String(process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY),
  }

  return `${baseURL}?${new URLSearchParams(params)}`
}

export const getGeolocationSearchResults = async (
  query: string,
): Promise<SearchResults> => {
  try {
    const apiRequest = await fetch(buildGeolocationQueryString(query), {
      headers: {
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
    })
    const response = await apiRequest
    const json = await response.json()

    return apiToLocation(json)
  } catch (e) {
    throw e
  }
}
