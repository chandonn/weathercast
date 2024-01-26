import styles from "./page.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-regular-svg-icons"

export default function Home() {
  return (
    <main className={styles.main}>
      <FontAwesomeIcon icon={faSun} />
      <h1 className={styles.title}>Mini Weather App</h1>
      <h3>View the 5 day forecast for any city</h3>

      <input name="search-field" type="text" className={styles.search} />
    </main>
  )
}
