import { Display } from "../components/display";
import { Heading } from "../components/heading";
import { TwoCol } from "../components/twoCol";
import fileDescriptions from "../data/fileDescriptions.json";
import type { FileName } from "../utils/types";

export const HomePage = () => {
  const fileNames = Object.keys(fileDescriptions) as FileName[];

  return (
    <>
      <Heading title="Images" linkText="Tags" linkTo="/tags" />
      <TwoCol elements={fileNames}>
        {({ value, key }) => <Display imgName={value} key={key} />}
      </TwoCol>
    </>
  );
};
