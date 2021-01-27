import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./cornerButton.module.css";

type CornerButtonProps = {
  icon: IconProp;
  to: string;
};

export const CornerButton = ({ icon, to }: CornerButtonProps) => (
  <Link to={to} style={{ zIndex: 9999 }}>
    <FontAwesomeIcon icon={icon} className={`${styles["corner-button"]}`} />
  </Link>
);
