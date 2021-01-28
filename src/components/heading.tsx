import { Link } from "react-router-dom";

type HeadingProps = {
  title: string;
  linkText: string;
  linkTo: string;
};

export const Heading = ({ title, linkText, linkTo }: HeadingProps) => (
  <>
    <h1 className="text-center mt-2">{title}</h1>
    <h4 className="text-center mt-2 text-muted">
      <Link to={linkTo}>{linkText}</Link>
    </h4>
    <hr />
  </>
);
