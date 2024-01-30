import { GeolocationSearchResultsResponse } from '../types/api'
import { SearchResults } from '../types/data'

export function apiToLocation(
  response: GeolocationSearchResultsResponse,
): SearchResults {
  try {
    const searchResults = response.map((it) => {
      const { name, lat, lon, country, state } = it

      return {
        name,
        latitude: lat.toString(),
        longitude: lon.toString(),
        country_code: country,
        country: state,
      }
    })

    return searchResults
  } catch (e) {
    return []
  }
}
