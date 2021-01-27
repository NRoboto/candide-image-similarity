import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Redirect, useParams } from "react-router-dom";
import { CornerButton } from "../components/cornerButton";
import { isFileName } from "../utils/typeCheck";
import styles from "./soloImage.module.css";

export const SoloImagePage = () => {
  const { fileName } = useParams<{ fileName: string }>();

  if (!isFileName(fileName))
    return (
      <Redirect to={{ pathname: "/404", search: `?filename=${fileName}` }} />
    );

  return (
    <div className={styles.fullscreen}>
      <CornerButton icon={faTimes} to={`/image/${fileName}`} />
      <img src={`/images/${fileName}`} />
    </div>
  );
};
