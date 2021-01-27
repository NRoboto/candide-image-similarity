import React from "react";
import { Link } from "react-router-dom";
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
  to?: string;
};

export const Display = ({ imgName, expanded, to }: DisplayProps) => {
  const description = fileDescriptions[imgName];
  const linkTo = to ?? `/image/${imgName}`;

  return (
    <Card className={`hover-card p-1 ${expanded ? "" : "mb-2"}`}>
      <Link to={linkTo}>
        <CardImg
          top
          width="100%"
          src={`/images/${imgName}`}
          alt=""
          className={expanded ? "" : "display-small-img"}
        />
      </Link>
      <CardBody>
        <Link to={linkTo}>
          <CardTitle tag="h3">{description.title}</CardTitle>
        </Link>
        {expanded ? (
          <>
            <hr />
            <CardText>
              {description.description ?? "Description goes here"}
            </CardText>
            <hr />
            <CardSubtitle className="text-muted">
              Tags: {description.tags.join(", ")}
            </CardSubtitle>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};
