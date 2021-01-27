import { Link, useLocation } from "react-router-dom";
import { Container } from "reactstrap";

export const NotFoundPage = () => {
  const searchQuery = new URLSearchParams(useLocation().search);
  const fileName = searchQuery.get("filename");

  return (
    <Container fluid>
      <p className="display-1 text-center">:(</p>
      <p className="display-2 text-center">404</p>
      <p className="text-center">
        {fileName
          ? `The image "${fileName}" does not exist`
          : "The page you were looking for does not exist"}
      </p>
      <p className="text-center">
        <Link to="/">Click here to go back to the homepage.</Link>
      </p>
    </Container>
  );
};
