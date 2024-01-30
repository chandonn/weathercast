import { faSnowflake } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./page.module.css"

export default function Loading() {
  return (
    <div className={styles.loading}>
      <FontAwesomeIcon icon={faSnowflake} size="2xl" fade />
      <h3>Loading...</h3>
    </div>
  )
}
