import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";
import fileDescriptions from "../data/fileDescriptions.json";
import { FileName } from "../utils/types";

type DisplayProps = {
  imgName: FileName;
  expanded?: boolean;
};

export const Display = ({ imgName, expanded }: DisplayProps) => {
  const description = fileDescriptions[imgName];

  return (
    <Card className={`hover-card p-1 ${expanded ? "" : "mb-2"}`}>
      <CardImg
        top
        width="100%"
        src={`/images/${imgName}`}
        alt=""
        className={expanded ? "" : "display-small-img"}
      />
      <CardBody>
        <CardTitle tag="h3">{description.title}</CardTitle>
        {expanded ? (
          <>
            <CardText>
              {description.description ?? "Description goes here"}
            </CardText>
            <hr />
            <CardSubtitle className="text-muted">
              Tags: {description.tags.join(", ")}
            </CardSubtitle>
            <hr />
          </>
        ) : (
          ""
        )}
      </CardBody>
    </Card>
  );
};
