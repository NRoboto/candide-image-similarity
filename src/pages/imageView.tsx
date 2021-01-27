import { Col } from "reactstrap";
import type { FileName } from "../utils/types";
import { Display } from "../components/display";
import { getRelevantImages } from "../utils/relevantImages";
import { Redirect, useParams } from "react-router-dom";
import { isFileName } from "../utils/typeCheck";

type ImageViewPageProps = {
  fileName: FileName;
};

export const ImageViewPage = ({}: ImageViewPageProps) => {
  const { fileName } = useParams<{ fileName: string }>();

  if (!isFileName(fileName))
    return (
      <Redirect to={{ pathname: "/404", search: `?filename=${fileName}` }} />
    );

  const relevantImages = getRelevantImages(fileName);

  return (
    <div
      id="main-container"
      className="container-xl d-flex flex-column flex-lg-row h-100 pt-4 pb-4"
    >
      <Col
        xs="12"
        lg="6"
        className="order-lg-1 d-flex flex-column justify-content-around"
      >
        <Display imgName={fileName} expanded />
      </Col>
      <h4 className="mt-4 d-lg-none">Similar Images</h4>
      <Col lg="3" className="d-flex flex-column justify-content-around">
        {relevantImages.slice(1, 4).map((fileName) => (
          <Display imgName={fileName} />
        ))}
      </Col>
      <Col lg="3" className="order-2 d-flex flex-column justify-content-around">
        {relevantImages.slice(5, 8).map((fileName) => (
          <Display imgName={fileName} />
        ))}
      </Col>
    </div>
  );
};
