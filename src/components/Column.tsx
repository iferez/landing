import React from "react";
import {ColumProps} from "./interfaces/types"

const Column: React.FC<ColumProps> = ({ children, widthMobile, widthDestok }) => {
  return (
    <div  className={`col-${widthMobile} col-md-${widthDestok}`}>
      {children}
    </div>
  );
};

export default Column;
