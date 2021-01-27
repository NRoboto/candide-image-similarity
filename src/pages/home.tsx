import { Col } from "reactstrap";
import { Display } from "../components/display";
import fileDescriptions from "../data/fileDescriptions.json";
import type { FileName } from "../utils/types";

export const HomePage = () => {
  const fileNames = Object.keys(fileDescriptions) as FileName[];

  return (
    <>
      <h1 className="text-center mt-2">Images</h1>
      <hr />
      <div className="container-lg d-flex mt-4">
        <Col xs="12" md="6">
          {fileNames
            .filter((_x, i) => i % 2 === 0)
            .map((name, i) => (
              <Display imgName={name} key={i} />
            ))}
        </Col>
        <Col xs="12" md="6">
          {fileNames
            .filter((_x, i) => i % 2 !== 0)
            .map((name, i) => (
              <Display imgName={name} key={i} />
            ))}
        </Col>
      </div>
    </>
  );
};
