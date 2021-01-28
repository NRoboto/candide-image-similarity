import { Redirect, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { isTagName } from "../utils/typeCheck";
import tagScores from "../data/tagScores.json";
import { TwoCol } from "../components/twoCol";
import { Display } from "../components/display";
import { FileName } from "../utils/types";
import { CornerButton } from "../components/cornerButton";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export const TagViewPage = () => {
  const { tag } = useParams<{ tag: string }>();

  if (!isTagName(tag)) return <Redirect to="/404" />;

  const imagesWithTag = tagScores[tag].map((item) => item.name as FileName);

  return (
    <>
      <CornerButton to="/tags" icon={faTag} />
      <Container fluid>
        <TwoCol elements={imagesWithTag}>
          {({ value, key }) => <Display imgName={value} key={key} />}
        </TwoCol>
      </Container>
    </>
  );
};
