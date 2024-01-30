"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Details.module.css"
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-regular-svg-icons"
import { getCurrentDate } from "@/utils"
import { useContext, useEffect } from "react"
import { Store } from "@/store/state"
import { getWeatherData } from "@/services"
import { WeatherIcon } from "../Icon/Icon"

export function Details() {
  const date = getCurrentDate()
  const {
    dispatchWeatherData,
    geolocation,
    menu,
    data,
  } = useContext(Store)

  useEffect(() => {
    getWeatherData(geolocation, menu).then(res => {
      dispatchWeatherData(res)
    })
  }, [geolocation, menu.temperature_unit])

  return (
    <div className={styles.current}>
      <div className={styles.header}>
        <h3>{date}</h3>
        <h4>{geolocation.name}, {geolocation.country_code}</h4>
      </div>

      <div className={styles.temperature}>
        <div className={styles.info}>
          <div className={styles.center}>
            <FontAwesomeIcon icon={faWind} />
            <h5>{data.weather?.windSpeed}</h5>
          </div>
          <div className={styles.center}>
            <FontAwesomeIcon icon={faDroplet} />
            <h5>{data.weather?.humidity}</h5>
          </div>
        </div>
        <div className={styles.today}>
          <div>
            <h3>Today</h3>
            <h2>{data.weather?.temperature}</h2>
          </div>
          <div>
            <WeatherIcon description={data.weather?.icon || "01d"} />
          </div>
        </div>
      </div>
      <div>
        <h3 className={styles.description}>{data.weather?.description}</h3>
        <h4>{data.weather?.info}</h4>
      </div>
    </div>
  )
}
