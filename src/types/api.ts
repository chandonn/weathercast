export type GeolocationSearchResultsResponse = {
  name: string
  local_names?: { [key: string]: string }
  lat: number
  lon: number
  country: string
  state: string
}[]

export type WeatherResultsResponseDaily = {
  dt: number
  sunrise?: number
  sunset?: number
  moonrise?: number
  moonset?: number
  moon_phase?: number
  summary?: string
  visibility?: number
  temp:
    | {
        day: number
        min: number
        max: number
        night: number
        eve: number
        morn: number
      }
    | number
  feels_like:
    | number
    | {
        day: number
        night: number
        eve: number
        morn: number
      }
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust?: number
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  clouds: number
  pop?: number
  rain?: number
  uvi?: number
}

export type WeatherResultsResponse = {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: WeatherResultsResponseDaily
  daily: WeatherResultsResponseDaily[]
}
