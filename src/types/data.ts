export type Weather = {
  temperature: string
  windSpeed: string
  humidity: string
  description: WeatherCode
  date: string
  icon: WeatherIcon
  info?: string
}

export type Data = {
  weather?: Weather & {
    forecast?: Weather[]
  }
  loading: boolean
}

export type Geolocation = {
  name: string
  latitude: string
  longitude: string
  country_code: string
  country: string
}

export type SearchResults = Geolocation[]

export type WeatherCode =
  | 'Clear'
  | 'Clouds'
  | 'Rain'
  | 'Snow'
  | 'Drizzle'
  | 'Thunderstorm'
  | 'Mist'
  | 'Smoke'
  | 'Haze'
  | 'Dust'
  | 'Fog'
  | 'Sand'
  | 'Dust'
  | 'Ash'
  | 'Squall'
  | 'Tornado'

export type WeatherIcon =
  | '01d'
  | '01n'
  | '02d'
  | '02n'
  | '03d'
  | '03n'
  | '04d'
  | '04n'
  | '09d'
  | '09n'
  | '10d'
  | '10n'
  | '11d'
  | '11n'
  | '13d'
  | '13n'
  | '50d'
  | '50n'
