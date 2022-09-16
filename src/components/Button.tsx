/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";

const style = css`
  color: hotpink;
`;

export const Button = (props:any) => {
  return <button css={style}>button</button>;
};
