import { Details } from "@/components/Details/Details"
import { Day } from "@/components/Day/Day"
import styles from "./page.module.css"

export default function Forecast() {
  return (
    <div className={styles.main}>
      <Details />
      <Day />
    </div>
  )
}
