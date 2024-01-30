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
    "01d": <FontAwesomeIcon color={props.color} icon={faSun} />,
    "01n": <FontAwesomeIcon color={props.color} icon={faMoon} />,
    "02d": <FontAwesomeIcon color={props.color} icon={faCloudSun} />,
    "02n": <FontAwesomeIcon color={props.color} icon={faCloudMoon} />,
    "03d": <FontAwesomeIcon color={props.color} icon={faCloud} />,
    "03n": <FontAwesomeIcon color={props.color} icon={faCloud} />,
    "04d": <FontAwesomeIcon color={props.color} icon={faCloud} />,
    "04n": <FontAwesomeIcon color={props.color} icon={faCloud} />,
    "09d": <FontAwesomeIcon color={props.color} icon={faCloudShowersHeavy} />,
    "09n": <FontAwesomeIcon color={props.color} icon={faCloudShowersHeavy} />,
    "10d": <FontAwesomeIcon color={props.color} icon={faCloudSunRain} />,
    "10n": <FontAwesomeIcon color={props.color} icon={faCloudMoonRain} />,
    "11d": <FontAwesomeIcon color={props.color} icon={faCloudBolt} />,
    "11n": <FontAwesomeIcon color={props.color} icon={faCloudBolt} />,
    "13d": <FontAwesomeIcon color={props.color} icon={faSnowflake} />,
    "13n": <FontAwesomeIcon color={props.color} icon={faSnowflake} />,
    "50d": <FontAwesomeIcon color={props.color} icon={faSmog} />,
    "50n": <FontAwesomeIcon color={props.color} icon={faSmog} />,
  }

  return iconNameMap[props?.description]
}
