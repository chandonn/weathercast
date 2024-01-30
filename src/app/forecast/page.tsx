import { Details } from "@/components/Details/Details"
import { Day } from "@/components/Day/Day"
import styles from "./page.module.css"
import { Menu } from "@/components/Menu/Menu"
import { Header } from "@/components/Header/Header"

export default function Forecast() {
  return (
    <div className={styles.main}>
      <Header />
      <Menu />
      <Details />
      <Day />
    </div>
  )
}
