import { Link } from "react-router-dom";
import { TwoCol } from "../components/twoCol";
import tagScores from "../data/tagScores.json";
import { TagName } from "../utils/types";

export const TagListPage = () => {
  const tags = (Object.keys(tagScores) as TagName[]).sort(
    (a, b) => tagScores[b].length - tagScores[a].length
  );

  return (
    <>
      <h1 className="text-center mt-2">Tags</h1>
      <h4 className="text-center mt-2 text-muted">
        <Link to="/">Images</Link>
      </h4>
      <hr />
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
