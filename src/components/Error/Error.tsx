import React from "react";
import { IErrorProps } from "./IError";

const Error: React.FC<IErrorProps> = (props: any) => {
  return <div className="error"><p>{props.errorMsg}</p></div>;
};

export default Error;