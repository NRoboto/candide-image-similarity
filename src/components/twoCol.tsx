import { Col } from "reactstrap";

type TwoColProps<T> = {
  elements: T[];
  children: ({
    value,
    key,
  }: {
    value: T;
    key?: string | number | null;
  }) => JSX.Element;
};

export const TwoCol = <T,>({
  elements,
  children: Component,
}: TwoColProps<T>) => (
  <>
    <Col xs="12" md="6">
      {elements
        .filter((_x, i) => i % 2 === 0)
        .map((name, i) => (
          <Component value={name} key={i} />
        ))}
    </Col>
    <Col xs="12" md="6">
      {elements
        .filter((_x, i) => i % 2 !== 0)
        .map((name, i) => (
          <Component value={name} key={i} />
        ))}
    </Col>
  </>
);
