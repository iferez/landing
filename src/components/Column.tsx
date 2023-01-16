import React from "react";
import {ColumProps} from "./types"

const Column: React.FC<ColumProps> = ({ children, widthMobile, widthDestok,styles }) => {
  return (
    <div  className={`col-${widthMobile} col-md-${widthDestok} ${styles}`}>
      {children}
    </div>
  );
};

export default Column;
