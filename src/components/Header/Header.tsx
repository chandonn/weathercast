"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { Store } from "@/store/state"
import styles from  "./Header.module.css"

export const Header = () => {
  const { dispatchMenuActive } = useContext(Store)

  return (
    <div className={styles.header}>
      <i onClick={() => dispatchMenuActive(true)}>
        <FontAwesomeIcon icon={faGear} />
      </i>
    </div>
  )
}
