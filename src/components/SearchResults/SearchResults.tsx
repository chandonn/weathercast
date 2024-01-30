import { useContext } from "react"
import styles from "./SearchResults.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSnowflake } from "@fortawesome/free-regular-svg-icons"
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot"
import { Store } from "@/store/state"
import { useRouter } from "next/navigation"
import { Geolocation } from "@/types/data"

export const SearchResults = () => {
  const router = useRouter()
  const {
    search,
    dispatchUpdateGeolocation
  } = useContext(Store)

  function updateGeolocationAndRedirect(it: Geolocation) {
    dispatchUpdateGeolocation(it)
    router.push("/forecast")
  }

  if (search.query) {
    if (search.loading) {
      return (
        <div className={styles.searchResultsLoading}>
          <FontAwesomeIcon icon={faSnowflake} fade />
          <h3>Loading...</h3>
        </div>
      )
    }

    if (!!search.results.length) {
      return (
        <div className={styles.searchResults}>
          {search.results.map((it, index) => (
            <div key={index} className={styles.searchResult} onClick={() => updateGeolocationAndRedirect(it)}>
              <h3>{`${it.name}, ${it.country_code}`}</h3>
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <div className={styles.searchResultsEmpty}>
          <h3>No places found. Tip: look for rainbows</h3>
        </div>
      )
    }
  } else {
    return (
      <div className={styles.searchResultsEmpty}>
        <FontAwesomeIcon icon={faMapLocationDot} />
      </div>
    )
  }
}
