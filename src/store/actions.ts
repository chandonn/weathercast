import { Weather } from '../types/data'
import { State } from '../types/state'

export function openSearchAction(state: State): State {
  return { ...state, search: { ...state.search, active: true } }
}

export function loadingAction(
  state: State,
  payload: State['search']['loading'],
): State {
  return { ...state, search: { ...state.search, loading: payload } }
}

export function loadingActionData(
  state: State,
  payload: State['data']['loading'],
): State {
  return { ...state, data: { ...state.data, loading: payload } }
}

export function closeSearchAction(state: State): State {
  return {
    ...state,
    search: {
      ...state.search,
      active: false,
      results: [],
      query: '',
      loading: false,
    },
  }
}

export function geolocationSearchResultsAction(
  state: State,
  payload: State['search']['results'],
  query: State['search']['query'] = '',
): State {
  return {
    ...state,
    search: { ...state.search, results: payload, query, loading: false },
  }
}

export function weatherDataResultsAction(
  state: State,
  payload: State['data']['weather'],
): State {
  return {
    ...state,
    data: { ...state.data, weather: payload, loading: false },
    config: {
      ...state.config,
      background: payload?.description,
    },
  }
}

export function geolocationAction(
  state: State,
  payload: State['geolocation'],
): State {
  return { ...state, geolocation: payload }
}

export function updateGeolocationAction(
  state: State,
  payload: State['geolocation'],
): State {
  return {
    ...state,
    data: {
      ...state.data,
      loading: true,
    },
    geolocation: payload,
    search: {
      ...state.search,
      results: [],
      active: false,
      query: '',
    },
  }
}

export function updateChangeTemperatureUnitAction(
  state: State,
  payload: State['menu']['temperature_unit'],
): State {
  return {
    ...state,
    data: {
      ...state.data,
      loading: true,
    },
    menu: {
      active: false,
      temperature_unit: payload,
    },
  }
}

export function menuActiveAction(
  state: State,
  payload: State['menu']['active'],
): State {
  return { ...state, menu: { ...state.menu, active: payload } }
}

export function updateBackgroundConfigAction(
  state: State,
  payload?: Weather['description'],
): State {
  return {
    ...state,
    config: {
      ...state.config,
      background: payload,
    },
  }
}
