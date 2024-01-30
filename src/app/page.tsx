import styles from "./page.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-regular-svg-icons"
import { Search } from "@/components/Search/Search"

export default function Home() {
  return (
    <main className={styles.main}>
      <FontAwesomeIcon icon={faSun} />
      <h3 className={styles.title}>Mini Weather App</h3>
      <h4>View the 5 day forecast for any city</h4>

      <Search />
    </main>
  )
}
