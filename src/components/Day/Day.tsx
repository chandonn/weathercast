"use client"

import styles from "./Day.module.css"
import { useContext } from "react"
import { Store } from "@/store/state"
import { WeatherIcon } from "../Icon/Icon"

export function Day() {
  const { data } = useContext(Store)

  return (
    <div className={styles.forecast}>
      {data.weather?.forecast?.map((it, index) => (
        <div key={index} className={styles.forecastDay}>
          <div>
            <h4>{it.date}</h4>
            <WeatherIcon description={it.icon} />
          </div>
          <div>
            <h5>{it.temperature}</h5>
            <h5>{it.description}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}