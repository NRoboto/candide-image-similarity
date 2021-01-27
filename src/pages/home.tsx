import { Col } from "reactstrap";
import { Display } from "../components/display";

export const HomePage = () => {
  return (
    <>
      <h1 className="text-center mt-2">Images</h1>
      <hr />
      <div className="container-lg d-flex mt-4">
        <Col xs="12" md="6">
          {[1, 3, 5, 7, 9].map((id) => (
            <Display imgName={`${id}.jpg` as any} />
          ))}
        </Col>
        <Col xs="12" md="6">
          {[2, 4, 6, 8, 10].map((id) => (
            <Display imgName={`${id}.jpg` as any} />
          ))}
        </Col>
      </div>
    </>
  );
};
