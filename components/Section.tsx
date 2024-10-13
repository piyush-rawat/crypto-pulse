import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="p-10">{children}</section>;
};

export default Section;
