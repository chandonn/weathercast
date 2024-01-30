import { Data, Geolocation, SearchResults, WeatherCode } from './data'

export type State = {
  search: {
    active: boolean
    query: string
    results: SearchResults
    loading: boolean
  }
  menu: { active: boolean; temperature_unit: 'imperial' | 'metric' }
  geolocation: Geolocation
  config: {
    background?: WeatherCode
  }
  data: Data
  dispatchOpenSearch: () => void
  dispatchCloseSearch: () => void
  dispatchLoading: (it: State['search']['loading']) => void
  dispatchLoadingData: (it: State['data']['loading']) => void
  dispatchMenuActive: (it: State['menu']['active']) => void
  dispatchGeolocationSearchResults: (
    it: State['search']['results'],
    query?: State['search']['query'],
  ) => void
  dispatchWeatherData: (it: State['data']['weather']) => void
  dispatchGeolocation: (it: State['geolocation']) => void
  dispatchUpdateGeolocation: (it: State['geolocation']) => void
  dispatchChangeTemperatureUnit: (it: State['menu']['temperature_unit']) => void
  dispatchUpdateBackgroundConfig: (it: State['config']['background']) => void
}
