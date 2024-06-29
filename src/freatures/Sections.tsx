import { ReactNode } from "react";

const Sections = (props: { children: ReactNode }) => (
  <div className="sections-wrapper">{props.children}</div>
);

export default Sections;
