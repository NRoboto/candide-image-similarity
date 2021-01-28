import { Col } from "reactstrap";
import { Display } from "../components/display";
import { TwoCol } from "../components/twoCol";
import fileDescriptions from "../data/fileDescriptions.json";
import type { FileName } from "../utils/types";

export const HomePage = () => {
  const fileNames = Object.keys(fileDescriptions) as FileName[];

  return (
    <>
      <h1 className="text-center mt-2">Images</h1>
      <hr />
      <TwoCol elements={fileNames}>
        {({ value, key }) => <Display imgName={value} key={key} />}
      </TwoCol>
    </>
  );
};
