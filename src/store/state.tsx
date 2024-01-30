"use client";

import { PropsWithChildren, createContext, useState } from "react"
import { closeSearchAction, geolocationAction, geolocationSearchResultsAction, loadingAction, loadingActionData, menuActiveAction, openSearchAction, updateBackgroundConfigAction, updateChangeTemperatureUnitAction, updateGeolocationAction, weatherDataResultsAction } from "./actions"
import { State } from "../types/state"

const initialState: State = {
  search: { active: false, query: "", results: [], loading: false },
  menu: { active: false, temperature_unit: "metric" },
  data: {
    loading: false
  },
  config: {},
  geolocation: {
    name: "Rio de Janeiro",
    latitude: "-22.90642",
    longitude: "-43.18223",
    country_code: "BR",
    country: "Brazil",
  },
  dispatchOpenSearch: () => {},
  dispatchCloseSearch: () => {},
  dispatchGeolocationSearchResults: (it, query) => {},
  dispatchWeatherData: (it) => {},
  dispatchGeolocation: (it) => {},
  dispatchUpdateGeolocation: (it) => {},
  dispatchChangeTemperatureUnit: (it) => {},
  dispatchMenuActive: (it) => {},
  dispatchLoading: (it) => {},
  dispatchLoadingData: (it) => {},
  dispatchUpdateBackgroundConfig: (it) => {},
}

export const Store = createContext(initialState)

export const Context = ({ children }: PropsWithChildren) => {
  const [applicationState, setApplicationState] = useState(initialState)

  const dispatchOpenSearch =() => {
    setApplicationState(openSearchAction(applicationState))
  }

  const dispatchCloseSearch =() => {
    setApplicationState(closeSearchAction(applicationState))
  }

  const dispatchGeolocationSearchResults = (it: State["search"]["results"], query?: State["search"]["query"]) => {
    setApplicationState(geolocationSearchResultsAction(applicationState, it, query))
  }

  const dispatchWeatherData = (it: State["data"]["weather"]) => {
    setApplicationState(weatherDataResultsAction(applicationState, it))
  }

  const dispatchGeolocation = (it: State["geolocation"]) => {
    setApplicationState(geolocationAction(applicationState, it))
  }

  const dispatchUpdateGeolocation = (it: State["geolocation"]) => {
    setApplicationState(updateGeolocationAction(applicationState, it))
  }

  const dispatchChangeTemperatureUnit = (it: State["menu"]["temperature_unit"]) => {
    if (it === applicationState["menu"]["temperature_unit"]) {
      dispatchMenuActive(false)
    } else {
      setApplicationState(updateChangeTemperatureUnitAction(applicationState, it))
    }
  }

  const dispatchMenuActive = (it: State["menu"]["active"]) => {
    setApplicationState(menuActiveAction(applicationState, it))
  }

  const dispatchLoading = (it: State["search"]["loading"]) => {
    setApplicationState(loadingAction(applicationState, it))
  }

  const dispatchLoadingData = (it: State["data"]["loading"]) => {
    setApplicationState(loadingActionData(applicationState, it))
  }

  const dispatchUpdateBackgroundConfig = (it: State["config"]["background"]) => {
    setApplicationState(updateBackgroundConfigAction(applicationState, it))
  }

  return (
    <Store.Provider value={Object.freeze({
      ...applicationState,
      dispatchOpenSearch,
      dispatchCloseSearch,
      dispatchGeolocationSearchResults,
      dispatchWeatherData,
      dispatchGeolocation,
      dispatchUpdateGeolocation,
      dispatchChangeTemperatureUnit,
      dispatchMenuActive,
      dispatchLoading,
      dispatchLoadingData,
      dispatchUpdateBackgroundConfig,
    })}>
      {children}
    </Store.Provider>
  )
}
