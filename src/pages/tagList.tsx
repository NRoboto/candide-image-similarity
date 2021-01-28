import { Link } from "react-router-dom";
import { TwoCol } from "../components/twoCol";
import tagScores from "../data/tagScores.json";
import type { TagName } from "../utils/types";
import { Heading } from "../components/heading";

export const TagListPage = () => {
  const tags = (Object.keys(tagScores) as TagName[]).sort(
    (a, b) => tagScores[b].length - tagScores[a].length
  );

  return (
    <>
      <Heading title="Tags" linkText="Images" linkTo="/" />
      <TwoCol elements={tags}>
        {({ value, key }) => (
          <p className="display-4" key={key}>
            <Link to={`/tags/${value}`}>{value}</Link>
          </p>
        )}
      </TwoCol>
    </>
  );
};
