"use client"

import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Store } from "@/store/state"
import { faX } from "@fortawesome/free-solid-svg-icons"
import styles from "./Menu.module.css"

export const Menu = () => {
  const {
    menu,
    dispatchChangeTemperatureUnit,
    dispatchMenuActive,
  } = useContext(Store)

  if (menu.active) {
    return (
      <div className={styles.menu}>
        <div className={styles.close} onClick={() => dispatchMenuActive(false)}>
          <FontAwesomeIcon icon={faX} size="2xl" />
        </div>
        <h2 className={styles.menuTitle}>Temperature unit</h2>
        <div className={styles.menuOptions}>
          <div className={styles.menuOption} onClick={() => dispatchChangeTemperatureUnit("metric")}>
            <h3>Celcius, °C</h3>
          </div>
          <div className={styles.menuOption} onClick={() => dispatchChangeTemperatureUnit("imperial")}>
            <h3>Fahrenheit, °F</h3>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
