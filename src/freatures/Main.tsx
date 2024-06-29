import { ReactNode } from "react";

const Main = (props: { children: ReactNode }) => (
  <main className="main">{props.children}</main>
);

export default Main;
