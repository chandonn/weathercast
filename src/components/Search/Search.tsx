"use client"

import { ChangeEvent, useContext } from "react"
import styles from "./Search.module.css"
import { Store } from "@/store/state"
import { getGeolocationSearchResults } from "@/services"
import { SearchResults } from "../SearchResults/SearchResults"

export function Search() {
  const { dispatchGeolocationSearchResults, dispatchLoading } = useContext(Store)

  function debounceGetSearchResults(e: ChangeEvent<HTMLInputElement>) {
    dispatchLoading(true)

    if (e.target.value.length > 2) {
      getGeolocationSearchResults(e.target.value).then(it => {
        dispatchGeolocationSearchResults(it, e.target.value)
      })
    }
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        onChange={e => debounceGetSearchResults(e)}
      />
      <SearchResults />
    </div>
  )
}
