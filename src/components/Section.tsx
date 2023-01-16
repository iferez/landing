import React from "react";
import {SectionProps} from "./types"


const Section: React.FC<SectionProps> = ({ children, styles, name }) => {
  return (
    <section className={name}>
      <div className="container">
        <article className={ `row ${styles}` }>{children}</article>
      </div>
    </section>
  );
};

export default Section;
