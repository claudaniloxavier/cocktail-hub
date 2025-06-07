import { ShowProps as Props } from "./types";

const Show = ({ children, if: rule }: Props) => {
  return rule ? children : null;
};

export default Show;
