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
      },
    )
    const response = await apiRequest
    const json = await response.json()
    return apiToWeather(json, menu.temperature_unit)
  } catch (e) {
    throw e
  }
}

function buildGeolocationQueryString(query: string) {
  const baseURL = 'https://api.openweathermap.org/geo/1.0/direct'
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
