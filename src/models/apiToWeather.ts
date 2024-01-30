import { Data } from '../types/data'
import {
  WeatherResultsResponse,
  WeatherResultsResponseDaily,
} from '@/types/api'
import { State } from '@/types/state'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const unitsBase = {
  metric: {
    temp: '°C',
    wind_speed: ' m/s',
    humidity: ' %',
  },
  imperial: {
    temp: '°F',
    wind_speed: ' miles/h',
    humidity: ' %',
  },
}

export function apiToWeather(
  response: WeatherResultsResponse,
  units: State['menu']['temperature_unit'],
): Data['weather'] {
  const { current, daily } = response

  const transformed = {
    temperature: current.temp + unitsBase[units]['temp'],
    windSpeed: current.wind_speed + unitsBase[units]['wind_speed'],
    humidity: current.humidity + unitsBase[units]['humidity'],
    date: 'Today',
    description: current.weather[0]['main'],
    forecast: buildForecast(daily, units),
    icon: current.weather[0]['icon'] || '01d',
    info: current.weather[0]['description'],
  } as Data['weather']

  return transformed
}

function buildForecast(
  daily: WeatherResultsResponseDaily[],
  units: State['menu']['temperature_unit'],
): Data['weather'][] {
  const transformed = daily.slice(2, 7).map((it, index) => {
    const { temp, weather, dt } = it
    if (typeof temp !== 'number') {
      return {
        temperature: `${temp['min']}${unitsBase[units]['temp']} / ${temp['max']}${unitsBase[units]['temp']}`,
        date: days[new Date((dt + 10800) * 1000).getDay()],
        description: weather[0]['main'],
        icon: weather[0]['icon'],
        info: weather[0]['description'],
      }
    } else {
      return {}
    }
  }) as Data['weather'][]

  return transformed
}
