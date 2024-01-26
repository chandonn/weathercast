import styles from "./page.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-regular-svg-icons"
import {
  faWind,
  faDroplet
} from "@fortawesome/free-solid-svg-icons"

export default function Forecast() {
  return (
    <div className={styles.main}>
      <div className={styles.current}>
        <div className={styles.header}>
          <h3>5 day forecast</h3>
          <h4>Seattle, Washington</h4>
        </div>

        <div className={styles.temperature}>
          <div className={styles.info}>
            <div className={styles.center}>
              <FontAwesomeIcon icon={faWind} />
              <h5>10mkh</h5>
            </div>
            <div className={styles.center}>
              <FontAwesomeIcon icon={faDroplet} />
              <h5>20%</h5>
            </div>
          </div>
          <div className={styles.today}>
            <div>
              <h3>Today</h3>
              <h2>10°C</h2>
            </div>
            <div>
              <FontAwesomeIcon icon={faSun} />
            </div>
          </div>
        </div>
        <h3 className={styles.description}>Sunny</h3>
      </div>

      <div className={styles.forecast}>
        <div className={styles.forecastDay}>
          <div>
            <h4>Mon</h4>
            <FontAwesomeIcon icon={faWind} />
          </div>
          <div>
            <h5>70°C</h5>
            <h5>Sunny</h5>
          </div>
        </div>
        <div className={styles.forecastDay}>
          <div>
            <h4>Mon</h4>
            <FontAwesomeIcon icon={faWind} />
          </div>
          <div>
            <h5>70°C</h5>
            <h5>Sunny</h5>
          </div>
        </div>
        <div className={styles.forecastDay}>
          <div>
            <h4>Mon</h4>
            <FontAwesomeIcon icon={faWind} />
          </div>
          <div>
            <h5>70°C</h5>
            <h5>Sunny</h5>
          </div>
        </div>
        <div className={styles.forecastDay}>
          <div>
            <h4>Mon</h4>
            <FontAwesomeIcon icon={faWind} />
          </div>
          <div>
            <h5>70°C</h5>
            <h5>Sunny</h5>
          </div>
        </div>
        <div className={styles.forecastDay}>
          <div>
            <h4>Mon</h4>
            <FontAwesomeIcon icon={faWind} />
          </div>
          <div>
            <h5>70°C</h5>
            <h5>Sunny</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
