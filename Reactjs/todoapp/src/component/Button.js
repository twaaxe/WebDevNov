import { Button } from "react-bootstrap";

const MyCustomBtn = (props) => {
  return <Button variant={props.color}>{props.value}</Button>;
};

export default Button;
