import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Weather } from "../../types/data"
import { faSun, faSnowflake } from "@fortawesome/free-regular-svg-icons"
import {
  faMoon,
  faCloudMoon,
  faCloudSun,
  faCloud,
  faCloudShowersHeavy,
  faCloudSunRain,
  faCloudMoonRain,
  faCloudBolt,
  faSmog
} from "@fortawesome/free-solid-svg-icons"

export const WeatherIcon = (props: { description: Weather["icon"]; size?: number | string, color?: string }) => {

  const iconNameMap: { [key in Weather["icon"]]: JSX.Element } = {
    "01d": <FontAwesomeIcon color={props.color || "#FB8500"} icon={faSun} />,
    "01n": <FontAwesomeIcon color={props.color || "#003566"} icon={faMoon} />,
    "02d": <FontAwesomeIcon color={props.color || "#FB8500"} icon={faCloudSun} />,
    "02n": <FontAwesomeIcon color={props.color || "#003566"} icon={faCloudMoon} />,
    "03d": <FontAwesomeIcon color={props.color || "#1282a2"} icon={faCloud} />,
    "03n": <FontAwesomeIcon color={props.color || "#1282a2"} icon={faCloud} />,
    "04d": <FontAwesomeIcon color={props.color || "#1282a2"} icon={faCloud} />,
    "04n": <FontAwesomeIcon color={props.color || "#1282a2"} icon={faCloud} />,
    "09d": <FontAwesomeIcon color={props.color || "#2364AA"} icon={faCloudShowersHeavy} />,
    "09n": <FontAwesomeIcon color={props.color || "#2364AA"} icon={faCloudShowersHeavy} />,
    "10d": <FontAwesomeIcon color={props.color || "#003566"} icon={faCloudSunRain} />,
    "10n": <FontAwesomeIcon color={props.color || "#003566"} icon={faCloudMoonRain} />,
    "11d": <FontAwesomeIcon color={props.color || "#ffd500"} icon={faCloudBolt} />,
    "11n": <FontAwesomeIcon color={props.color || "#ffd500"} icon={faCloudBolt} />,
    "13d": <FontAwesomeIcon color={props.color || "#abc4ff"} icon={faSnowflake} />,
    "13n": <FontAwesomeIcon color={props.color || "#abc4ff"} icon={faSnowflake} />,
    "50d": <FontAwesomeIcon color={props.color || "#06d6a0"} icon={faSmog} />,
    "50n": <FontAwesomeIcon color={props.color || "#06d6a0"} icon={faSmog} />,
  }

  return iconNameMap[props?.description]
}
